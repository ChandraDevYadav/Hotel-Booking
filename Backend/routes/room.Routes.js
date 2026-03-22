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

router.route("/").get(getRooms).post(protect, admin, createRoom);

router
  .route("/:id")
  .get(getRoom)
  .put(protect, admin, updateRoom)
  .delete(protect, admin, deleteRoom);

router.patch("/:id/availability", protect, admin, updateRoomAvailability);
router.get("/hotel/:hotelId", getRoomsByHotel);

export default router;
