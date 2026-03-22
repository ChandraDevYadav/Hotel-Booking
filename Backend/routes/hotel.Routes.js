import express from "express";
import { protect, admin } from "../middleware/auth.Middleware.js";
import {
  getHotels,
  getHotel,
  createHotel,
  updateHotel,
  deleteHotel,
  getHotelsByLocation,
} from "../controllers/hotel.Controller.js";

const router = express.Router();

router.route("/").get(getHotels).post(protect, admin, createHotel);

router
  .route("/:id")
  .get(getHotel)
  .put(protect, admin, updateHotel)
  .delete(protect, admin, deleteHotel);

router.get("/location/:city", getHotelsByLocation);

export default router;
