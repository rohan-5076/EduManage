const Subject = require("../models/Subject");

// Add Subject
exports.addSubject = async (req, res) => {
  try {
    const subject = await Subject.create(req.body);

    res.status(201).json({
      success: true,
      message: "Subject Added Successfully",
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Subjects
exports.getSubjects = async (req, res) => {
  try {
    console.log(req.query);

    const filter = {};

    if (req.query.courseId) {
      filter.courseId = req.query.courseId;
    }

    if (req.query.semester) {
      filter.semester = Number(req.query.semester);
    }


    const subjects = await Subject.find(filter)
      .populate("courseId", "courseName courseCode")
      .sort({ createdAt: -1 });
      


    res.status(200).json({
      success: true,
      data: subjects,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get Subject By ID
exports.getSubjectById = async (req, res) => {
  try {
    const subject = await Subject.findById(req.params.id).populate(
      "courseId",
      "courseName courseCode"
    );

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Subject
exports.updateSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subject Updated Successfully",
      data: subject,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Subject
exports.deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findByIdAndDelete(req.params.id);

    if (!subject) {
      return res.status(404).json({
        success: false,
        message: "Subject Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subject Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Subjects By Course & Semester
exports.getSubjectsByCourseSemester = async (req, res) => {
  try {
    const { courseId, semester } = req.params;

    const subjects = await Subject.find({
      courseId,
      semester,
      status: true,
    }).sort({ subjectName: 1 });

    res.status(200).json({
      success: true,
      data: subjects,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};