const express = require('express');
const router = express.Router();
const { addCourse, getCourses, deleteCourse } = require('../controllers/courseController');
const upload = require('../upload'); // use require (not import) for CommonJS

// 👇 Add course with image upload
router.post('/courses', upload.single('image'), addCourse); // ✅ Final route

// Other routes
router.get('/courses', getCourses); // ✅ Get all courses
router.delete('/courses/:id', deleteCourse); // ✅ Delete course

module.exports = router;
