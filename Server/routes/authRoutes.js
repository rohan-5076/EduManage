const express = require("express");
const router = express.Router();

const { teacherLogin } = require("../controllers/authController");
const { studentLogin } = require("../controllers/studentAuthController");

const verifyToken = require("../middleware/authMiddleware");

router.post("/teacher-login", teacherLogin);
router.post("/student-login", studentLogin);

router.get("/dashboard", verifyToken, (req, res) => {
  res.status(200).json({
    status: true,
    message: "Welcome to Dashboard",
    user: req.user,
  });
});

module.exports = router;