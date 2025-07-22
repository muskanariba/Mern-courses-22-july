const express = require('express');
const router = express.Router();
const { addCourse, getCourses } = require('../controllers/courseController');

router.post('/courses', addCourse); // admin use
router.get('/courses', getCourses); // user frontend use

module.exports = router;
