const mongoose = require("mongoose");

const testingSchema = new mongoose.Schema(
  {
    StdName: {
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
    PRN: {
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
      type: String,
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
    userName: {
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
  },
);

module.exports = mongoose.model("Testing", testingSchema);
