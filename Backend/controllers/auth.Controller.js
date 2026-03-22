import jwt from "jsonwebtoken";
import User from "../models/user.Model.js";

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "30d",
  });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req, res) => {
  try {
    const { name, email, password, petName, role, phone, address } = req.body;

    // Validate required fields
    if (!name || !email || !password || !petName) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "User already exists with this email" });
    }

    // Create user (force role to 'user' unless explicitly creating admin)
    const user = await User.create({
      name,
      email,
      password,
      petName,
      role: role === "admin" ? "admin" : "user",
      phone,
      address,
    });

    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user._id),
        message: "User registered successfully",
      });
    }
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email }).select("+password");

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        address: user.address,
        token: generateToken(user._id),
        message: "Login successful",
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};

// @desc    Get user profile
// @route   GET /api/auth/me
// @access  Private
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone,
        address: user.address,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Get profile error:", error);
    res.status(500).json({ message: "Server error fetching profile" });
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/me
// @access  Private
export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.phone = req.body.phone || user.phone;
      user.address = req.body.address || user.address;
      // Note: petName should not be easily changeable for security

      const updatedUser = await user.save();

      res.json({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role,
        phone: updatedUser.phone,
        address: updatedUser.address,
        message: "Profile updated successfully",
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Update profile error:", error);
    res.status(500).json({ message: "Server error updating profile" });
  }
};

// @desc    Verify pet name for password reset
// @route   POST /api/auth/reset-verify
// @access  Public
export const verifyPetNameForReset = async (req, res) => {
  try {
    const { email, petName } = req.body;

    if (!email || !petName) {
      return res
        .status(400)
        .json({ message: "Please provide email and pet name" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "User not found with this email" });
    }

    // Case-insensitive comparison
    if (user.petName.toLowerCase() !== petName.toLowerCase().trim()) {
      return res.status(401).json({ message: "Incorrect pet name" });
    }

    // Generate short-lived reset token (15 minutes)
    const resetToken = jwt.sign(
      { id: user._id, reset: true },
      process.env.JWT_SECRET,
      { expiresIn: "15m" },
    );

    res.json({
      message: "Pet name verified. Use this token to reset your password.",
      resetToken,
      expiresIn: "15 minutes",
    });
  } catch (error) {
    console.error("Reset verify error:", error);
    res.status(500).json({ message: "Server error during verification" });
  }
};

// @desc    Reset password using token
// @route   POST /api/auth/reset-password
// @access  Public (with reset token)
export const resetPassword = async (req, res) => {
  try {
    const { resetToken, newPassword } = req.body;

    if (!resetToken || !newPassword) {
      return res
        .status(400)
        .json({ message: "Please provide reset token and new password" });
    }

    if (newPassword.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });
    }

    // Verify reset token
    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);

    if (!decoded.reset) {
      return res.status(401).json({ message: "Invalid reset token" });
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update password (will be hashed by pre-save hook)
    user.password = newPassword;
    await user.save();

    res.json({
      message:
        "Password reset successful. Please login with your new password.",
    });
  } catch (error) {
    console.error("Reset password error:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Reset token has expired. Please request a new one.",
      });
    }
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid reset token" });
    }

    res.status(500).json({ message: "Server error during password reset" });
  }
};

// @desc    Admin: Get all users
// @route   GET /api/auth/users
// @access  Private/Admin
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({ message: "Server error fetching users" });
  }
};

// @desc    Admin: Delete user
// @route   DELETE /api/auth/users/:id
// @access  Private/Admin
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Prevent self-deletion
    if (req.user._id.toString() === user._id.toString()) {
      return res
        .status(400)
        .json({ message: "Cannot delete your own account" });
    }

    await user.deleteOne();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Delete user error:", error);
    res.status(500).json({ message: "Server error deleting user" });
  }
};
