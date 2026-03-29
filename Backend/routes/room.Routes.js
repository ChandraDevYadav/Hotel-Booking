import express from "express";
import { protect, admin } from "../middleware/auth.Middleware.js";
import {
  getRooms,
  getRoom,
  getRoomsByHotel,
  createRoom,
  updateRoom,
  deleteRoom,
  updateRoomAvailability,
} from "../controllers/room.Controller.js";

const router = express.Router();

// ⚠️  Static named routes MUST come before /:id  — otherwise Express
//     matches "hotel" as an ID value and getRoomsByHotel is never reached.

// Static sub-resource route (before dynamic /:id)
router.get("/hotel/:hotelId", getRoomsByHotel);

// Collection
router.route("/").get(getRooms).post(protect, admin, createRoom);

// Document (dynamic segment last)
router
  .route("/:id")
  .get(getRoom)
  .put(protect, admin, updateRoom)
  .delete(protect, admin, deleteRoom);

router.patch("/:id/availability", protect, admin, updateRoomAvailability);

export default router;
