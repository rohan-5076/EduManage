const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseCode: {
      type: String,
      required: [true, "Course Code is required"],
      unique: true,
      uppercase: true,
    },
    duration: {
      type: Number,
      required: [true, "Duration is required"],
    },
    totalSemesters: {
      type: Number,
      required: [true, "Total Semesters are required"],
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Course", courseSchema);