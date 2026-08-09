import dotenv from "dotenv";
dotenv.config();
console.log("GROQ_API_KEY:", process.env.GROQ_API_KEY);

import express from "express";
import cors from "cors";
import path from "path";


import connectDB from "./config/db.js";
import AIRoutes from "./routes/AIRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import teacherRoutes from "./routes/teacherRoutes.js";
import StdAttendanceRoutes from "./routes/StdAttendanceRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import courseRoutes from "./routes/CourseRoutes.js";
import SubjectRoutes from "./routes/SubjectRoutes.js";
import TestingRoute from "./routes/TestingRoute.js";

const app = express();

// Connect Database
connectDB();


import { askAI } from "./services/GroqService.js";
app.get("/test-groq", async (req, res) => {
  try {
    const reply = await askAI("Say Hello");

    res.json({
      success: true,
      reply,
    });
  } catch (err) {
    console.error("Groq Error:", err);

    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));




console.log("Environment Variables:");
console.log(process.env);
console.log("Gemini Key:", process.env.GEMINI_API_KEY);





// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/attendance", StdAttendanceRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/courses", courseRoutes);
app.use("/api/subjects", SubjectRoutes);
app.use("/api/ai", AIRoutes);
app.use("/api/testing", TestingRoute);

// Test Route
app.get("/", (req, res) => {
  res.send("Server is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});