const express = require("express");
const router = express.Router();

// Import your admin controller here
const { getAllOrders, deleteCourse } = require("../controllers/adminController");

// Define your admin routes
router.get("/orders", getAllOrders);
router.delete("/courses/:id", deleteCourse);

module.exports = router;
