import mongoose from "mongoose";

const staySchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
    },

    checkIn: {
      type: Date,
      required: true,
    },

    checkOut: {
      type: Date,
      required: true,
    },

    rooms: {
      type: Number,
      default: 1,
    },

    guests: {
      type: Number,
      default: 1,
    },

    addFlight: {
      type: Boolean,
      default: false,
    },

    addCar: {
      type: Boolean,
      default: false,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Stay", staySchema);
