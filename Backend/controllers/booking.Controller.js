import Booking from "../models/booking.Model.js";
import Room from "../models/room.Model.js";
import Hotel from "../models/hotel.Model.js";
import User from "../models/user.Model.js";

// @desc    Get bookings for authenticated user or all (admin)
// @route   GET /api/bookings
// @access  Private
export const getBookings = async (req, res) => {
  try {
    let query = {};

    // Regular users can only see their own bookings
    if (req.user.role === "user") {
      query.user = req.user._id;
    }
    // Admins can filter by user if provided
    else if (req.query.userId) {
      query.user = req.query.userId;
    }

    // Additional filters
    if (req.query.status) {
      query.status = req.query.status;
    }
    if (req.query.hotel) {
      query.hotel = req.query.hotel;
    }

    const bookings = await Booking.find(query)
      .populate("user", "name email phone")
      .populate("room", "roomNumber type")
      .populate("hotel", "name location")
      .sort("-createdAt");

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    console.error("Get bookings error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching bookings",
      error: error.message,
    });
  }
};

// @desc    Get single booking by ID
// @route   GET /api/bookings/:id
// @access  Private
export const getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("user", "name email phone address")
      .populate("room", "roomNumber type capacity price amenities images")
      .populate("hotel", "name location contact amenities");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Authorization: Users can only view their own bookings
    if (
      req.user.role === "user" &&
      booking.user._id.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to view this booking",
      });
    }

    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    console.error("Get booking error:", error);

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid booking ID",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error fetching booking",
    });
  }
};

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private/User
export const createBooking = async (req, res) => {
  try {
    const { room, checkIn, checkOut, guests, specialRequests } = req.body;

    // Validate required fields
    if (!room || !checkIn || !checkOut || !guests) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide room ID, check-in date, check-out date, and number of guests",
      });
    }

    // Parse dates
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Validate dates
    if (checkInDate < today) {
      return res.status(400).json({
        success: false,
        message: "Check-in date cannot be in the past",
      });
    }
    if (checkOutDate <= checkInDate) {
      return res.status(400).json({
        success: false,
        message: "Check-out date must be after check-in date",
      });
    }

    // Get room and hotel details
    const roomData = await Room.findById(room).populate("hotel");
    if (!roomData) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    if (!roomData.available) {
      return res.status(400).json({
        success: false,
        message: "This room is currently unavailable",
      });
    }

    if (guests > roomData.capacity) {
      return res.status(400).json({
        success: false,
        message: `Room capacity is ${roomData.capacity}. Cannot accommodate ${guests} guests.`,
      });
    }

    // Check for overlapping bookings
    const overlappingBooking = await Booking.findOne({
      room,
      status: { $in: ["confirmed", "pending"] },
      $or: [
        {
          checkIn: { $lt: checkOutDate },
          checkOut: { $gt: checkInDate },
        },
      ],
    });

    if (overlappingBooking) {
      return res.status(400).json({
        success: false,
        message: "Room is not available for selected dates",
      });
    }

    // Calculate total price
    const nights = Math.ceil(
      (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24),
    );
    const totalPrice = roomData.price * nights;

    // Create booking
    const booking = await Booking.create({
      user: req.user._id,
      room,
      hotel: roomData.hotel._id,
      checkIn: checkInDate,
      checkOut: checkOutDate,
      guests,
      totalPrice,
      specialRequests: specialRequests || "",
      status: "pending",
      paymentStatus: "pending",
    });

    // Populate response
    const populatedBooking = await Booking.findById(booking._id)
      .populate("room", "roomNumber type")
      .populate("hotel", "name location");

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: populatedBooking,
      summary: {
        nights,
        pricePerNight: roomData.price,
        totalPrice,
      },
    });
  } catch (error) {
    console.error("Create booking error:", error);

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
      message: "Server error creating booking",
      error: error.message,
    });
  }
};

// @desc    Update booking (User: own bookings, Admin: any)
// @route   PUT /api/bookings/:id
// @access  Private
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Authorization check
    if (
      req.user.role === "user" &&
      booking.user.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to update this booking",
      });
    }

    // Users can only update certain fields
    if (req.user.role === "user") {
      const userUpdatableFields = ["specialRequests", "guests"];
      userUpdatableFields.forEach((field) => {
        if (req.body[field] !== undefined) {
          booking[field] = req.body[field];
        }
      });
    }
    // Admins can update more fields
    else {
      const adminUpdatableFields = [
        "checkIn",
        "checkOut",
        "guests",
        "totalPrice",
        "status",
        "paymentStatus",
        "specialRequests",
      ];
      adminUpdatableFields.forEach((field) => {
        if (req.body[field] !== undefined) {
          booking[field] = req.body[field];
        }
      });
    }

    const updatedBooking = await booking.save();
    const populated = await Booking.findById(updatedBooking._id)
      .populate("user", "name email")
      .populate("room", "roomNumber type")
      .populate("hotel", "name");

    res.status(200).json({
      success: true,
      message: "Booking updated successfully",
      data: populated,
    });
  } catch (error) {
    console.error("Update booking error:", error);

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
      message: "Server error updating booking",
      error: error.message,
    });
  }
};

// @desc    Cancel booking
// @route   PATCH /api/bookings/:id/cancel
// @access  Private
export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Authorization check
    if (
      req.user.role === "user" &&
      booking.user.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "Not authorized to cancel this booking",
      });
    }

    // Cannot cancel already cancelled or completed bookings
    if (["cancelled", "completed"].includes(booking.status)) {
      return res.status(400).json({
        success: false,
        message: `Cannot cancel a ${booking.status} booking`,
      });
    }

    // Check cancellation policy (e.g., 24 hours before check-in)
    const checkInDate = new Date(booking.checkIn);
    const now = new Date();
    const hoursUntilCheckIn = (checkInDate - now) / (1000 * 60 * 60);

    // Optional: Add cancellation fee logic here
    // if (hoursUntilCheckIn < 24 && booking.paymentStatus === 'paid') {
    //   // Apply cancellation fee
    // }

    booking.status = "cancelled";
    await booking.save();

    // Optional: Trigger refund process if payment was made
    // if (booking.paymentStatus === 'paid') {
    //   await processRefund(booking);
    // }

    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
      data: {
        bookingId: booking._id,
        status: booking.status,
        refundEligible:
          booking.paymentStatus === "paid" && hoursUntilCheckIn >= 24,
      },
    });
  } catch (error) {
    console.error("Cancel booking error:", error);
    res.status(500).json({
      success: false,
      message: "Server error cancelling booking",
      error: error.message,
    });
  }
};

// @desc    Confirm booking (Admin only)
// @route   PATCH /api/bookings/:id/confirm
// @access  Private/Admin
export const confirmBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate("room")
      .populate("hotel");

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    if (booking.status !== "pending") {
      return res.status(400).json({
        success: false,
        message: `Cannot confirm a ${booking.status} booking`,
      });
    }

    // Final availability check
    const hasConflict = await Booking.findOne({
      _id: { $ne: booking._id },
      room: booking.room,
      status: { $in: ["confirmed", "pending"] },
      $or: [
        {
          checkIn: { $lt: booking.checkOut },
          checkOut: { $gt: booking.checkIn },
        },
      ],
    });

    if (hasConflict) {
      return res.status(400).json({
        success: false,
        message: "Room no longer available for these dates",
      });
    }

    booking.status = "confirmed";
    await booking.save();

    // Optional: Send confirmation email
    // await sendBookingConfirmationEmail(booking);

    res.status(200).json({
      success: true,
      message: "Booking confirmed successfully",
      data: booking,
    });
  } catch (error) {
    console.error("Confirm booking error:", error);
    res.status(500).json({
      success: false,
      message: "Server error confirming booking",
      error: error.message,
    });
  }
};

// @desc    Delete booking (Admin only)
// @route   DELETE /api/bookings/:id
// @access  Private/Admin
export const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    // Optional: Prevent deletion of confirmed/paid bookings
    // if (['confirmed', 'completed'].includes(booking.status)) {
    //   return res.status(400).json({
    //     success: false,
    //     message: 'Cannot delete confirmed or completed bookings',
    //   });
    // }

    await booking.deleteOne();

    res.status(200).json({
      success: true,
      message: "Booking deleted successfully",
      data: {},
    });
  } catch (error) {
    console.error("Delete booking error:", error);
    res.status(500).json({
      success: false,
      message: "Server error deleting booking",
      error: error.message,
    });
  }
};

// @desc    Get user's upcoming bookings
// @route   GET /api/bookings/upcoming
// @access  Private
export const getUpcomingBookings = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const query = {
      user: req.user._id,
      checkIn: { $gte: today },
      status: { $in: ["pending", "confirmed"] },
    };

    const bookings = await Booking.find(query)
      .populate("room", "roomNumber type images")
      .populate("hotel", "name location")
      .sort("checkIn");

    res.status(200).json({
      success: true,
      count: bookings.length,
      data: bookings,
    });
  } catch (error) {
    console.error("Get upcoming bookings error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching upcoming bookings",
    });
  }
};

// @desc    Get booking statistics (Admin only)
// @route   GET /api/bookings/stats
// @access  Private/Admin
export const getBookingStats = async (req, res) => {
  try {
    const stats = await Booking.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
          totalRevenue: { $sum: "$totalPrice" },
        },
      },
    ]);

    const overallStats = await Booking.aggregate([
      {
        $group: {
          _id: null,
          totalBookings: { $sum: 1 },
          totalRevenue: { $sum: "$totalPrice" },
          avgBookingValue: { $avg: "$totalPrice" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      byStatus: stats,
      overall: overallStats[0] || {
        totalBookings: 0,
        totalRevenue: 0,
        avgBookingValue: 0,
      },
    });
  } catch (error) {
    console.error("Get booking stats error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching booking statistics",
    });
  }
};
