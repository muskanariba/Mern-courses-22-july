const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Signup
const signupUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already exists" });

    const newUser = new User({ name, email, password });
    await newUser.save();

    res.status(201).json({ message: "Signup successful", user: newUser });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Login
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email, password });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isAdmin = email === "admin@admin.com" && password === "admin123";
    const token = jwt.sign({ id: user._id, email }, "secretKey", { expiresIn: "1h" });

    res.status(200).json({ token, isAdmin });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { signupUser, userLogin };
