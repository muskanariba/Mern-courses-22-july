const express = require('express');
const router = express.Router();
const { addCourse, getCourses, deleteCourse} = require('../controllers/courseController');

router.post('/courses', addCourse); // admin use
router.get('/courses', getCourses); // user frontend use

router.delete('/courses/:id', deleteCourse);


module.exports = router;
