const express = require("express");
const router = express.Router();

const {
  addAttendance,
  bulkAttendance,
  getAttendance,
  getAttendanceByStudent,
  updateAttendance,
  deleteAttendance,
} = require("../controllers/StdAttendanceController");

router.post("/", addAttendance);
router.post("/bulk", bulkAttendance);
router.get("/", getAttendance);

router.get("/:studentId", getAttendanceByStudent);

router.put("/:id", updateAttendance);

router.delete("/:id", deleteAttendance);

module.exports = router;