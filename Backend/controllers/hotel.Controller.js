import Hotel from "../models/hotel.Model.js";

// @desc    Get all hotels with filtering, sorting, pagination
// @route   GET /api/hotels
// @access  Public
export const getHotels = async (req, res) => {
  try {
    // Build query object for filtering
    const queryObj = { ...req.query };
    const excludedFields = ["page", "sort", "limit", "fields", "search"];
    excludedFields.forEach((el) => delete queryObj[el]);

    // Advanced filtering (gte, lte, etc.)
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    const query = Hotel.find(JSON.parse(queryStr));

    // Search functionality
    if (req.query.search) {
      query.or([
        { name: { $regex: req.query.search, $options: "i" } },
        { "location.city": { $regex: req.query.search, $options: "i" } },
        { "location.country": { $regex: req.query.search, $options: "i" } },
      ]);
    }

    // Sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      query.sort(sortBy);
    } else {
      query.sort("-createdAt"); // Default sort by newest
    }

    // Field limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      query.select(fields);
    } else {
      query.select("-__v"); // Exclude version key by default
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    query.skip(skip).limit(limit);

    // Execute query
    const hotels = await query;
    const total = await Hotel.countDocuments(JSON.parse(queryStr));

    res.status(200).json({
      success: true,
      count: hotels.length,
      total,
      page,
      pages: Math.ceil(total / limit),
      data: hotels,
    });
  } catch (error) {
    console.error("Get hotels error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching hotels",
      error: error.message,
    });
  }
};

// @desc    Get single hotel by ID
// @route   GET /api/hotels/:id
// @access  Public
export const getHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id).populate("rooms");

    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    res.status(200).json({
      success: true,
      data: hotel,
    });
  } catch (error) {
    console.error("Get hotel error:", error);

    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid hotel ID",
      });
    }

    res.status(500).json({
      success: false,
      message: "Server error fetching hotel",
      error: error.message,
    });
  }
};

// @desc    Create new hotel (Admin only)
// @route   POST /api/hotels
// @access  Private/Admin
export const createHotel = async (req, res) => {
  try {
    const {
      name,
      description,
      location,
      amenities,
      images,
      priceRange,
      contact,
      rating,
    } = req.body;

    // Validate required fields
    if (!name || !location?.city || !location?.country) {
      return res.status(400).json({
        success: false,
        message: "Please provide hotel name, city, and country",
      });
    }

    // Check for duplicate hotel name in same city
    const existingHotel = await Hotel.findOne({
      name,
      "location.city": location.city,
    });

    if (existingHotel) {
      return res.status(400).json({
        success: false,
        message: "A hotel with this name already exists in this city",
      });
    }

    const hotel = await Hotel.create({
      name,
      description: description || "",
      location,
      amenities: amenities || [],
      images: images || [],
      priceRange: priceRange || {},
      contact: contact || {},
      rating: rating || 0,
      createdBy: req.user._id,
    });

    res.status(201).json({
      success: true,
      message: "Hotel created successfully",
      data: hotel,
    });
  } catch (error) {
    console.error("Create hotel error:", error);

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
      message: "Server error creating hotel",
      error: error.message,
    });
  }
};

// @desc    Update hotel (Admin only)
// @route   PUT /api/hotels/:id
// @access  Private/Admin
export const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    // Update fields
    const updatableFields = [
      "name",
      "description",
      "location",
      "amenities",
      "images",
      "priceRange",
      "contact",
      "rating",
      "isActive",
    ];

    updatableFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        hotel[field] = req.body[field];
      }
    });

    const updatedHotel = await hotel.save();

    res.status(200).json({
      success: true,
      message: "Hotel updated successfully",
      data: updatedHotel,
    });
  } catch (error) {
    console.error("Update hotel error:", error);

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
      message: "Server error updating hotel",
      error: error.message,
    });
  }
};

// @desc    Delete hotel (Admin only)
// @route   DELETE /api/hotels/:id
// @access  Private/Admin
export const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    // Optional: Check if hotel has bookings before deletion
    // const hasBookings = await Booking.exists({ hotel: hotel._id });
    // if (hasBookings) {
    //   return res.status(400).json({
    //     success: false,
    //     message: 'Cannot delete hotel with existing bookings',
    //   });
    // }

    await hotel.deleteOne();

    res.status(200).json({
      success: true,
      message: "Hotel deleted successfully",
      data: {},
    });
  } catch (error) {
    console.error("Delete hotel error:", error);
    res.status(500).json({
      success: false,
      message: "Server error deleting hotel",
      error: error.message,
    });
  }
};

// @desc    Get hotels by location
// @route   GET /api/hotels/location/:city
// @access  Public
export const getHotelsByLocation = async (req, res) => {
  try {
    const { city, country } = req.params;

    const query = { isActive: true };
    if (city) query["location.city"] = { $regex: city, $options: "i" };
    if (country) query["location.country"] = { $regex: country, $options: "i" };

    const hotels = await Hotel.find(query)
      .select("name images rating priceRange location")
      .limit(20);

    res.status(200).json({
      success: true,
      count: hotels.length,
      data: hotels,
    });
  } catch (error) {
    console.error("Get hotels by location error:", error);
    res.status(500).json({
      success: false,
      message: "Server error fetching hotels by location",
    });
  }
};
