const express = require("express");
const router = express.Router();

const {
  addSubject,
  getSubjects,
  getSubjectById,
  updateSubject,
  deleteSubject,
  getSubjectsByCourseSemester,
} = require("../controllers/SubjectController");

// Add Subject
router.post("/", addSubject);

// Get All Subjects
router.get("/", getSubjects);

// Get Subjects by Course & Semester
router.get("/course/:courseId/:semester", getSubjectsByCourseSemester);

// Get Subject By ID
router.get("/:id", getSubjectById);

// Update Subject
router.put("/:id", updateSubject);

// Delete Subject
router.delete("/:id", deleteSubject);

module.exports = router;