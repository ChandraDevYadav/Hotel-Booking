import Stay from "../models/stay.Model.js";

// CREATE SEARCH ENTRY
export const createStaySearch = async (req, res) => {
  try {
    const { location, checkIn, checkOut, rooms, guests, addFlight, addCar } =
      req.body;

    const stay = await Stay.create({
      location,
      checkIn,
      checkOut,
      rooms,
      guests,
      addFlight,
      addCar,
      user: req.user?.id,
    });

    res.status(201).json({
      success: true,
      stay,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET ALL SEARCHES
export const getAllStaySearches = async (req, res) => {
  try {
    const stays = await Stay.find().populate("user", "name email");

    res.json(stays);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET SINGLE SEARCH
export const getStayById = async (req, res) => {
  try {
    const stay = await Stay.findById(req.params.id);

    if (!stay) {
      return res.status(404).json({
        message: "Stay not found",
      });
    }

    res.json(stay);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE SEARCH
export const deleteStaySearch = async (req, res) => {
  try {
    await Stay.findByIdAndDelete(req.params.id);

    res.json({
      message: "Search deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
