import express from "express";

const router = express.Router();

// @desc    Get all stays/hotels
// @route   GET /api/stays
// @access  Public
router.get("/", (req, res) => {
  res.json({ message: "Get all stays endpoint" });
});

// @desc    Get single stay
// @route   GET /api/stays/:id
// @access  Public
router.get("/:id", (req, res) => {
  res.json({ message: `Get stay ${req.params.id}` });
});

export default router;
