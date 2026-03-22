import Room from "../models/room.Model.js";
import Hotel from "../models/hotel.Model.js";

// @desc    Get all rooms with filtering
// @route   GET /api/rooms
// @access  Public
export const getRooms = async (req, res) => {
  try {
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields", "hotel"];
    excludedFields.forEach((el) => delete queryObj[el]);

    // Filter by hotel if provided
    if (req.query.hotel) {
      queryObj.hotel = req.query.hotel;
    }

    // Filter by availability
    if (req.query.available === "true") {
      queryObj.available = true;
    }

    let query = Room.find(queryObj).populate("hotel", "name location");

    // Sorting
    if (req.query.sort) {
      query.sort(req.query.sort.split(",").join(" "));
    } else {
      query.sort("type price");
    }

    // Field selection
    if (req.query.fields) {
      query.select(req.query.fields.split(",").join(" "));
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const skip = (page - 1) * limit;

    query.skip(skip).limit(limit);

    const rooms = await query;
    const total = await Room.countDocuments(queryObj);

    res.status(200).json({
      success: true,
      count: rooms.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: rooms,
    });
  } catch (error) {
    console.error("Get rooms error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching rooms",
      error: error.message,
    });
  }
};

// @desc    Get single room by ID
// @route   GET /api/rooms/:id
// @access  Public
export const getRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id)
      .populate("hotel", "name location contact")
      .populate("bookings", "checkIn checkOut status");

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    // Check availability for next 30 days (simplified)
    const today = new Date();
    const nextMonth = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);

    const hasBooking = room.bookings?.some((booking) => {
      if (booking.status !== "confirmed") return false;
      const checkIn = new Date(booking.checkIn);
      const checkOut = new Date(booking.checkOut);
      return checkIn <= nextMonth && checkOut >= today;
    });

    const roomData = room.toObject();
    roomData.isAvailableNext30Days = !hasBooking;

    res.status(200).json({
      success: true,
      data: roomData,
    });
  } catch (error) {
    console.error("Get room error:", error);

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid room ID",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error fetching room",
    });
  }
};

// @desc    Get rooms by hotel
// @route   GET /api/hotels/:hotelId/rooms
// @access  Public
export const getRoomsByHotel = async (req, res) => {
  try {
    const { hotelId } = req.params;

    // Verify hotel exists
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    const rooms = await Room.find({ hotel: hotelId, available: true })
      .select("type capacity price amenities images description")
      .sort("price");

    res.status(200).json({
      success: true,
      count: rooms.length,
      hotel: hotel.name,
      data: rooms,
    });
  } catch (error) {
    console.error("Get rooms by hotel error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching hotel rooms",
    });
  }
};

// @desc    Create new room (Admin only)
// @route   POST /api/rooms
// @access  Private/Admin
export const createRoom = async (req, res) => {
  try {
    const {
      hotel,
      roomNumber,
      type,
      capacity,
      price,
      amenities,
      images,
      description,
    } = req.body;

    // Validate required fields
    if (!hotel || !roomNumber || !type || !capacity || !price) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide hotel ID, room number, type, capacity, and price",
      });
    }

    // Verify hotel exists
    const hotelExists = await Hotel.findById(hotel);
    if (!hotelExists) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    // Check for duplicate room number in same hotel
    const existingRoom = await Room.findOne({ hotel, roomNumber });
    if (existingRoom) {
      return res.status(400).json({
        success: false,
        message: "Room number already exists for this hotel",
      });
    }

    const room = await Room.create({
      hotel,
      roomNumber,
      type,
      capacity,
      price,
      amenities: amenities || [],
      images: images || [],
      description: description || "",
      available: true,
      createdBy: req.user._id,
    });

    // Add room reference to hotel (optional)
    await Hotel.findByIdAndUpdate(hotel, {
      $push: { rooms: room._id },
    });

    res.status(201).json({
      success: true,
      message: "Room created successfully",
      data: room,
    });
  } catch (error) {
    console.error("Create room error:", error);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: messages,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error creating room",
      error: error.message,
    });
  }
};

// @desc    Update room (Admin only)
// @route   PUT /api/rooms/:id
// @access  Private/Admin
export const updateRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    // Fields that can be updated
    const updatableFields = [
      "roomNumber",
      "type",
      "capacity",
      "price",
      "amenities",
      "images",
      "description",
      "available",
    ];

    updatableFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        room[field] = req.body[field];
      }
    });

    const updatedRoom = await room.save();

    res.status(200).json({
      success: true,
      message: "Room updated successfully",
      data: updatedRoom,
    });
  } catch (error) {
    console.error("Update room error:", error);

    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: messages,
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error updating room",
      error: error.message,
    });
  }
};

// @desc    Delete room (Admin only)
// @route   DELETE /api/rooms/:id
// @access  Private/Admin
export const deleteRoom = async (req, res) => {
  try {
    const room = await Room.findById(req.params.id);

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    // Check if room has active bookings
    // const hasActiveBookings = await Booking.exists({
    //   room: room._id,
    //   status: { $in: ['confirmed', 'pending'] }
    // });
    // if (hasActiveBookings) {
    //   return res.status(400).json({
    //     success: false,
    //     message: 'Cannot delete room with active bookings',
    //   });
    // }

    // Remove room reference from hotel
    await Hotel.findByIdAndUpdate(room.hotel, {
      $pull: { rooms: room._id },
    });

    await room.deleteOne();

    res.status(200).json({
      success: true,
      message: "Room deleted successfully",
      data: {},
    });
  } catch (error) {
    console.error("Delete room error:", error);
    res.status(500).json({
      success: false,
      message: "Server error deleting room",
      error: error.message,
    });
  }
};

// @desc    Update room availability
// @route   PATCH /api/rooms/:id/availability
// @access  Private/Admin
export const updateRoomAvailability = async (req, res) => {
  try {
    const { available } = req.body;

    if (typeof available !== "boolean") {
      return res.status(400).json({
        success: false,
        message: "Availability must be a boolean value",
      });
    }

    const room = await Room.findByIdAndUpdate(
      req.params.id,
      { available },
      { new: true, runValidators: true },
    );

    if (!room) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `Room marked as ${available ? "available" : "unavailable"}`,
      data: room,
    });
  } catch (error) {
    console.error("Update availability error:", error);
    res.status(500).json({
      success: false,
      message: "Server error updating room availability",
    });
  }
};
