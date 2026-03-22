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

// User routes
router.route("/").get(protect, getBookings).post(protect, createBooking);

router.route("/:id").get(protect, getBooking).put(protect, updateBooking);

router.patch("/:id/cancel", protect, cancelBooking);
router.get("/upcoming", protect, getUpcomingBookings);

// Admin routes
router.patch("/:id/confirm", protect, admin, confirmBooking);
router.delete("/:id", protect, admin, deleteBooking);
router.get("/stats", protect, admin, getBookingStats);

export default router;
