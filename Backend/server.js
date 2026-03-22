import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import xss from "xss-clean";
import path from "path";
import { fileURLToPath } from "url";

// Import database connection
import connectDB from "./config/db.js";

// Import routes
import authRoutes from "./routes/auth.Routes.js";
import stayRoutes from "./routes/stay.Routes.js";
import hotelRoutes from "./routes/hotel.Routes.js";
import roomRoutes from "./routes/room.Routes.js";
import bookingRoutes from "./routes/booking.Routes.js";
import paymentRoutes from "./routes/payment.Routes.js";

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

// ES Module fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ================= SECURITY MIDDLEWARE =================

// Set security headers
app.use(helmet());

// Prevent NoSQL injection
app.use(mongoSanitize());

// Prevent XSS attacks
app.use(xss());

// Prevent HTTP parameter pollution
app.use(hpp());

// Rate limiting (prevent brute force)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.NODE_ENV === "production" ? 100 : 1000, // Limit requests per IP
  message: {
    message: "Too many requests from this IP, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api", limiter);

// ================= CORS CONFIGURATION =================

const corsOptions = {
  origin: process.env.FRONTEND_URL?.split(",") || [
    "http://localhost:3000",
    "http://localhost:5173",
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};
app.use(cors(corsOptions));

// ================= BODY PARSING MIDDLEWARE =================

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ================= REQUEST LOGGING (Dev Only) =================

if (NODE_ENV === "development") {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
  });
}

// ================= HEALTH CHECK ENDPOINT =================

app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Hotel Booking API is running",
    environment: NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// ================= ROOT ENDPOINT =================

app.get("/", (req, res) => {
  res.json({
    message: "🏨 Hotel Booking API",
    version: "1.0.0",
    documentation: "/api/docs", // Future: Add Swagger
    endpoints: {
      auth: "/api/auth",
      stays: "/api/stays",
      hotels: "/api/hotels",
      rooms: "/api/rooms",
      bookings: "/api/bookings",
      payments: "/api/payments",
    },
  });
});

// ================= API ROUTES =================

app.use("/api/auth", authRoutes);
app.use("/api/stays", stayRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);

// ================= SERVE STATIC FILES (Production) =================

if (NODE_ENV === "production") {
  // Serve frontend static files if built
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // Handle React Router - serve index.html for all non-API routes
  app.get("*", (req, res) => {
    if (!req.url.startsWith("/api")) {
      res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
    }
  });
}

// ================= 404 HANDLER =================

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
    error: "NOT_FOUND",
  });
});

// ================= GLOBAL ERROR HANDLER =================

app.use((err, req, res, next) => {
  console.error("❌ Error:", {
    name: err.name,
    message: err.message,
    stack: NODE_ENV === "development" ? err.stack : undefined,
    path: req.path,
    method: req.method,
  });

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid resource ID",
      error: "BAD_REQUEST",
    });
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({
      success: false,
      message: `Duplicate value: ${field} already exists`,
      error: "DUPLICATE_ENTRY",
    });
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: messages,
      error: "VALIDATION_ERROR",
    });
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
      error: "INVALID_TOKEN",
    });
  }

  if (err.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      message: "Token expired",
      error: "TOKEN_EXPIRED",
    });
  }

  // Default error
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal server error",
    error: err.statusCode ? "APPLICATION_ERROR" : "SERVER_ERROR",
    ...(NODE_ENV === "development" && { stack: err.stack }),
  });
});

// ================= GRACEFUL SHUTDOWN =================

const server = app.listen(PORT, () => {
  console.log(
    `
🚀 Server running in ${NODE_ENV} mode
📍 Port: ${PORT}
🔗 API Base: http://localhost:${PORT}/api
🏨 Hotel Booking API v1.0.0
  `.trim(),
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err);
  server.close(() => {
    process.exit(1);
  });
});

// Handle SIGTERM for graceful shutdown (e.g., from Docker/Kubernetes)
process.on("SIGTERM", () => {
  console.log("🔄 SIGTERM received. Shutting down gracefully...");
  server.close(() => {
    console.log("✅ Process terminated");
    process.exit(0);
  });
});

// Handle SIGINT (Ctrl+C)
process.on("SIGINT", () => {
  console.log("🔄 SIGINT received. Shutting down gracefully...");
  server.close(() => {
    console.log("✅ Process terminated");
    process.exit(0);
  });
});

export default app;
