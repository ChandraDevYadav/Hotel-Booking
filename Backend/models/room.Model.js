import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    hotel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
      required: true,
    },
    roomNumber: { type: String, required: true },
    type: {
      type: String,
      enum: ["single", "double", "suite", "deluxe"],
      required: true,
    },
    capacity: { type: Number, required: true },
    price: { type: Number, required: true },
    amenities: [String],
    images: [String],
    available: { type: Boolean, default: true },
    description: String,
  },
  { timestamps: true },
);

// ✅ CORRECT - Pass schema directly, not nested model call
export default mongoose.model("Room", roomSchema);
