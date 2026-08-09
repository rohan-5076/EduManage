const express = require("express");
const router = express.Router();

const {
  addCourse,
  getCourses,
   getCourseById,
  updateCourse,
  deleteCourse,
 
} = require("../controllers/CourseController");

// Add Course
router.post("/", addCourse);

// Get All Courses
router.get("/", getCourses);

// Get Single Course
router.get("/:id", getCourseById);

// Update Course
router.put("/:id", updateCourse);

// Delete Course
router.delete("/:id", deleteCourse);

module.exports = router;