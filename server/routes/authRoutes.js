const express = require("express");
const router = express.Router();
const { signupUser, userLogin } = require("../controllers/authController");

router.post("/signup", signupUser);
router.post("/login", userLogin);

module.exports = router;
