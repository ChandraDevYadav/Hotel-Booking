import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    location: {
      address: String,
      city: String,
      state: String,
      country: String,
      zipCode: String,
    },
    amenities: [String],
    images: [String],
    rating: { type: Number, default: 0, min: 0, max: 5 },
    priceRange: {
      min: Number,
      max: Number,
      currency: { type: String, default: "USD" },
    },
    contact: {
      phone: String,
      email: String,
      website: String,
    },
    isActive: { type: Boolean, default: true },
    // ✅ Added: room.Controller.js uses $push / $pull on this array
    rooms: [{ type: mongoose.Schema.Types.ObjectId, ref: "Room" }],
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

export default mongoose.model("Hotel", hotelSchema);
