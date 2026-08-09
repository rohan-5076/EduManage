const express = require("express");
const router = express.Router();

const { getTeachers } = require("../controllers/teacherController");
const {add} = require("../controllers/teacherController");
router.get("/", getTeachers);
router.post("/", add);

module.exports = router;