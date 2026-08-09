const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const jwt = require("jsonwebtoken");

// Teacher Login
const teacherLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const teacher = await Teacher.findOne({ username });

    if (!teacher) {
      return res.status(401).json({
        status: false,
        message: "Invalid Username",
      });
    }

    if (teacher.password !== password) {
      return res.status(401).json({
        status: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: teacher._id,
        username: teacher.username,
        role: "teacher",
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      status: true,
      message: "Login Successful",
      token,
      teacher: {
        id: teacher._id,
        username: teacher.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// Student Login
const studentLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const student = await Student.findOne({ username });

    if (!student) {
      return res.status(401).json({
        status: false,
        message: "Invalid Username",
      });
    }

    if (student.password !== password) {
      return res.status(401).json({
        status: false,
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: student._id,
        username: student.username,
        role: "student",
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      status: true,
      message: "Login Successful",
      token,
      student: {
        id: student._id,
        username: student.username,
        fullName: student.fullName,
        email: student.email,
        course: student.course,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  teacherLogin,
  studentLogin,
};