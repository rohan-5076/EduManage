const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    StdGender: {
      type: String,
      required: true,
      trim: true,
      enum: ["Male", "Female", "Other"],
    },
    prn: {
      type: Number,
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    BloodGroup: {
      type: String,
      required: true,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    },
    Photo: {
      type: String,
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
       ref: "Course",
      required: true,
    },
    semester: {
      type: Number,
      required: true,
    },
    acadmicYear: {
      type: String,
      required: true,
    },
    division: {
      type: String,
      required: true,
      enum: ["A", "B", "C"],
    },
    rollNo: {
      type: Number,
      required: true,
      min: 1,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    motherName: {
      type: String,
      required: true,
    },
    fatherName: {
      type: String,
      required: true,
    },
    parentPhone: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);