const Student = require("../models/Student");
const jwt = require("jsonwebtoken");

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
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      status: true,
      message: "Login Successful",
      token,
      student,
    });

  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// Get All Students
const getStudents = async (req, res) => {
  try {
    const students = await Student.find().populate("course");;

    res.status(200).json({
      status: true,
      data: students,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// Add Student
const add = async (req, res) => {
  try {
    const data = await Student.create(req.body);

    res.status(201).json({
      success: true,
      message: "Student Added Successfully",
      data,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
    studentLogin,
    getStudents,
    add,
};