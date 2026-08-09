const Teacher = require("../models/Teacher");

const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find();

        res.status(200).json({
            status: true,
            data: teachers
        });

    } catch (error) {

        res.status(500).json({
            status: false,
            message: error.message
        });

    }
};

// Add Student
const add = async (req, res) => {
  try {
    const data = await Teacher.create(req.body);

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
    getTeachers,
    add
};