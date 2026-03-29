import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import hpp from "hpp";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.Routes.js";
import stayRoutes from "./routes/stay.Routes.js";
import hotelRoutes from "./routes/hotel.Routes.js";
import roomRoutes from "./routes/room.Routes.js";
import bookingRoutes from "./routes/booking.Routes.js";
import paymentRoutes from "./routes/payment.Routes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV || "development";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Security headers ──────────────────────────────────────────────────────
app.use(helmet());

// ── Body parsing (must come before sanitizers that read req.body) ─────────
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// ── Sanitization ──────────────────────────────────────────────────────────
// express-mongo-sanitize and xss-clean both try to *reassign* req.query /
// req.params, which Express 5 made read-only (they are now getters only).
// Solution: mutate the *contents* of each object in-place instead.

function mongoSanitizeValue(value) {
  if (value !== null && typeof value === "object" && !Array.isArray(value)) {
    for (const key of Object.keys(value)) {
      if (key.startsWith("$") || key.includes(".")) {
        delete value[key];
      } else {
        mongoSanitizeValue(value[key]);
      }
    }
  } else if (Array.isArray(value)) {
    value.forEach(mongoSanitizeValue);
  }
  return value;
}

function xssSanitizeValue(value) {
  if (typeof value === "string") {
    return value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;");
  }
  if (Array.isArray(value)) return value.map(xssSanitizeValue);
  if (value !== null && typeof value === "object") {
    for (const key of Object.keys(value)) {
      value[key] = xssSanitizeValue(value[key]);
    }
    return value;
  }
  return value;
}

app.use((req, _res, next) => {
  if (req.body && typeof req.body === "object") {
    mongoSanitizeValue(req.body);
    xssSanitizeValue(req.body);
  }
  for (const key of Object.keys(req.query)) {
    const clean = xssSanitizeValue(
      mongoSanitizeValue({ [key]: req.query[key] }),
    );
    req.query[key] = clean[key];
  }
  for (const key of Object.keys(req.params)) {
    if (typeof req.params[key] === "string") {
      req.params[key] = xssSanitizeValue(req.params[key]);
    }
  }
  next();
});

// ── HTTP parameter pollution ──────────────────────────────────────────────
app.use(hpp());

// ── Rate limiting ─────────────────────────────────────────────────────────
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: NODE_ENV === "production" ? 100 : 1000,
  message: {
    message: "Too many requests from this IP, please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api", limiter);

// ── CORS ──────────────────────────────────────────────────────────────────
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

// ── Dev request logging ───────────────────────────────────────────────────
if (NODE_ENV === "development") {
  app.use((req, _res, next) => {
    console.log(`${req.method} ${req.url} — ${new Date().toISOString()}`);
    next();
  });
}

// ── Health check ──────────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Hotel Booking API is running",
    environment: NODE_ENV,
    timestamp: new Date().toISOString(),
  });
});

// ── Root ──────────────────────────────────────────────────────────────────
app.get("/", (_req, res) => {
  res.json({
    message: "Hotel Booking API",
    version: "1.0.0",
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

// ── Routes ────────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/stays", stayRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/payments", paymentRoutes);

// ── Static (production) ───────────────────────────────────────────────────
if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("*", (req, res) => {
    if (!req.url.startsWith("/api")) {
      res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
    }
  });
}

// ── 404 ───────────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
    error: "NOT_FOUND",
  });
});

// ── Global error handler ──────────────────────────────────────────────────
app.use((err, req, res, _next) => {
  console.error("Error:", {
    name: err.name,
    message: err.message,
    path: req.path,
  });
  if (err.name === "CastError")
    return res
      .status(400)
      .json({ success: false, message: "Invalid resource ID" });
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(400).json({
      success: false,
      message: `Duplicate value: ${field} already exists`,
    });
  }
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res
      .status(400)
      .json({ success: false, message: "Validation failed", errors: messages });
  }
  if (err.name === "JsonWebTokenError")
    return res.status(401).json({ success: false, message: "Invalid token" });
  if (err.name === "TokenExpiredError")
    return res.status(401).json({ success: false, message: "Token expired" });
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal server error",
    ...(NODE_ENV === "development" && { stack: err.stack }),
  });
});

// ── Start ─────────────────────────────────────────────────────────────────
const server = app.listen(PORT, () => {
  console.log(
    `
Server running in ${NODE_ENV} mode
Port: ${PORT}
API Base: http://localhost:${PORT}/api
  `.trim(),
  );
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  server.close(() => process.exit(1));
});
process.on("SIGTERM", () => {
  server.close(() => process.exit(0));
});
process.on("SIGINT", () => {
  server.close(() => process.exit(0));
});

export default app;
