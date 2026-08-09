import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import Course from "../models/Course.js";
import Subject from "../models/Subject.js";

import { askAI } from "../services/GroqService.js";

export const chat = async (req, res) => {
  console.log("========== CHAT API ==========");
  console.log("Request Body:", req.body);

  try {
    const { message } = req.body;

    const question = message.toLowerCase();

    let prompt = "";

    // ======================
    // GREETINGS
    // ======================

    const greetings = [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
    ];

    if (greetings.some((greeting) => question.includes(greeting))) {
      return res.json({
        reply:
          "Hello! 👋 I'm your Student Management System AI Assistant. How can I help you today?\n\nYou can ask me about:\n• Students\n• Teachers\n• Courses\n• Subjects\n• Attendance\n• Results",
      });
    }

    // ======================
    // STUDENT
    // ======================

    if (
      question.includes("student") ||
      question.includes("students")
    ) {
      const students = await Student.find()
        .select("-password")
        .populate("course", "courseName courseCode");

      prompt = `You are an AI Assistant for Student Management System.
        Student Data: ${JSON.stringify(students)}
        Answer the following question:
        ${message} `;
    }

    // ======================
    // TEACHER
    // ======================

    else if (
      question.includes("teacher") ||
      question.includes("teachers")
    ) {
      const teachers = await Teacher.find().select("-password");

      prompt = `You are an AI Assistant for Student Management System.
         Teacher Data:${JSON.stringify(teachers)}
         Answer the following question: ${message} `;
    }

    // ======================
    // SUBJECT
    // ======================

    else if (
      question.includes("subject") ||
      question.includes("subjects")
    ) {
      const subjects = await Subject.find().populate(
        "courseId",
        "courseName courseCode"
      );

      prompt = `You are an AI Assistant for Student Management System.
        Student Data: ${JSON.stringify(subjects)}
        Answer the following question: ${message} `;
    }

    // ======================
    // COURSE
    // ======================

    else if (
      question.includes("course") ||
      question.includes("courses")
    ) {
      const courses = await Course.find();

      prompt = `
You are an AI Assistant for the Student Management System.

Course Data:

${JSON.stringify(courses)}

Answer the following question based only on the course data above.

User Question:
${message}
`;
    }

    // ======================
    // GENERAL
    // ======================

    else {
      return res.json({
        reply:
          "I can only answer questions related to the Student Management System ",
      });
    }

    console.log("Generated Prompt:");
    console.log(prompt);

    const reply = await askAI(prompt);

    console.log("AI Reply:");
    console.log(reply);

    res.json({
      reply,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      reply: error.message,
    });
  }
};