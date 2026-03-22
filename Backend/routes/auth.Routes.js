import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  verifyPetNameForReset,
  resetPassword,
  getAllUsers,
  deleteUser,
} from "../controllers/auth.Controller.js";
import { protect, admin } from "../middleware/auth.Middleware.js";

const router = express.Router();

// Public routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reset-verify", verifyPetNameForReset);
router.post("/reset-password", resetPassword);

// Protected routes (User & Admin)
router.get("/me", protect, getUserProfile);
router.put("/me", protect, updateUserProfile);

// Admin only routes
router.get("/users", protect, admin, getAllUsers);
router.delete("/users/:id", protect, admin, deleteUser);

export default router;
