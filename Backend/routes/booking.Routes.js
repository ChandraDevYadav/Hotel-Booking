import express from "express";
import { protect, admin } from "../middleware/auth.Middleware.js";
import {
  getBookings,
  getBooking,
  createBooking,
  updateBooking,
  cancelBooking,
  confirmBooking,
  deleteBooking,
  getUpcomingBookings,
  getBookingStats,
} from "../controllers/booking.Controller.js";

const router = express.Router();

// ⚠️  Static named routes MUST come before /:id  — otherwise Express
//     matches "upcoming" and "stats" as ID values and never reaches these handlers.

// Admin stats
router.get("/stats", protect, admin, getBookingStats);

// User upcoming bookings
router.get("/upcoming", protect, getUpcomingBookings);

// Collection routes
router.route("/").get(protect, getBookings).post(protect, createBooking);

// Document routes (dynamic segment last)
router.route("/:id").get(protect, getBooking).put(protect, updateBooking);

router.patch("/:id/cancel", protect, cancelBooking);
router.patch("/:id/confirm", protect, admin, confirmBooking);
router.delete("/:id", protect, admin, deleteBooking);

export default router;
