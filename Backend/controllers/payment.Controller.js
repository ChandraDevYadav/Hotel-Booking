import Booking from "../models/booking.Model.js";

// ---------------------------------------------------------------------------
// Payment controller
//
// This implementation is Stripe-ready: set STRIPE_SECRET_KEY in .env and
// uncomment the Stripe lines. Without Stripe it records payment intent data
// manually so the rest of the booking flow still works end-to-end.
// ---------------------------------------------------------------------------

// import Stripe from "stripe";
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// @desc    Process payment for a booking
// @route   POST /api/payments/process
// @access  Private
export const processPayment = async (req, res) => {
  try {
    const { bookingId, paymentMethodId, currency = "usd" } = req.body;

    if (!bookingId) {
      return res
        .status(400)
        .json({ success: false, message: "bookingId is required" });
    }

    const booking = await Booking.findById(bookingId)
      .populate("user", "name email")
      .populate("hotel", "name");

    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Booking not found" });
    }

    // Authorization: users can only pay for their own bookings
    if (
      req.user.role === "user" &&
      booking.user._id.toString() !== req.user._id.toString()
    ) {
      return res
        .status(403)
        .json({ success: false, message: "Not authorized" });
    }

    if (booking.paymentStatus === "paid") {
      return res
        .status(400)
        .json({ success: false, message: "Booking is already paid" });
    }

    if (booking.status === "cancelled") {
      return res.status(400).json({
        success: false,
        message: "Cannot pay for a cancelled booking",
      });
    }

    // ── Stripe integration (uncomment when STRIPE_SECRET_KEY is set) ──
    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: Math.round(booking.totalPrice * 100), // convert to cents
    //   currency,
    //   payment_method: paymentMethodId,
    //   confirm: true,
    //   metadata: {
    //     bookingId: booking._id.toString(),
    //     userId: req.user._id.toString(),
    //   },
    // });
    // if (paymentIntent.status !== "succeeded") {
    //   return res.status(402).json({ success: false, message: "Payment failed", status: paymentIntent.status });
    // }

    // ── Manual / test mode (remove when Stripe is live) ──
    const paymentIntentId = `pi_test_${Date.now()}`;

    // Mark booking as paid
    booking.paymentStatus = "paid";
    if (booking.status === "pending") booking.status = "confirmed";
    await booking.save();

    res.status(200).json({
      success: true,
      message: "Payment processed successfully",
      data: {
        bookingId: booking._id,
        amount: booking.totalPrice,
        currency,
        paymentStatus: booking.paymentStatus,
        bookingStatus: booking.status,
        paymentIntentId,
      },
    });
  } catch (error) {
    console.error("Process payment error:", error);

    // if (error.type === "StripeCardError") {
    //   return res.status(402).json({ success: false, message: error.message });
    // }

    res.status(500).json({
      success: false,
      message: "Server error processing payment",
      error: error.message,
    });
  }
};

// @desc    Get payment history for the current user (or all, for admin)
// @route   GET /api/payments/history
// @access  Private
export const getPaymentHistory = async (req, res) => {
  try {
    const query =
      req.user.role === "admin"
        ? { paymentStatus: "paid" }
        : { user: req.user._id, paymentStatus: "paid" };

    const bookings = await Booking.find(query)
      .populate("room", "roomNumber type")
      .populate("hotel", "name location")
      .select("totalPrice paymentStatus status checkIn checkOut createdAt")
      .sort("-createdAt");

    const totalSpent = bookings.reduce((sum, b) => sum + b.totalPrice, 0);

    res.status(200).json({
      success: true,
      count: bookings.length,
      totalSpent,
      data: bookings,
    });
  } catch (error) {
    console.error("Get payment history error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching payment history",
      error: error.message,
    });
  }
};
