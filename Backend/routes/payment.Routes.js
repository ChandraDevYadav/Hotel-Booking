import express from "express";
import { protect } from "../middleware/auth.Middleware.js";
import {
  processPayment,
  getPaymentHistory,
} from "../controllers/payment.Controller.js";

const router = express.Router();

router.post("/process", protect, processPayment);
router.get("/history", protect, getPaymentHistory);

export default router;
