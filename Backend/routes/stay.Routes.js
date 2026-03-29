import express from "express";
import { protect } from "../middleware/auth.Middleware.js";
import {
  createStaySearch,
  getAllStaySearches,
  getStayById,
  deleteStaySearch,
} from "../controllers/stay.Controller.js";

const router = express.Router();

// @route   GET  /api/stays        — list all searches (admin-style)
// @route   POST /api/stays        — create a new search entry
router.route("/").get(getAllStaySearches).post(protect, createStaySearch);

// @route   GET    /api/stays/:id  — single search
// @route   DELETE /api/stays/:id  — remove search
router.route("/:id").get(getStayById).delete(protect, deleteStaySearch);

export default router;
