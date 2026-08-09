const express = require("express");
const router = express.Router();

const { getStudents } = require("../controllers/StudentAuthController");
const {add} = require("../controllers/StudentAuthController");

router.get("/", getStudents);
router.post("/", add);

module.exports = router;