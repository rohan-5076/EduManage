const Attendance = require("../models/StdAttendance");

//Add
exports.addAttendance = async(req ,res)=>{
    try{
        const attendance = await Attendance.create(req.body);
        res.status(201).json({
            success:true,
            message:"Attendance Added Successfully",
            data:attendance,
        });
    }catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
        });
    }

};
// Get All Attendance
exports.getAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.find().populate("studentId");

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Get Attendance by Student
exports.getAttendanceByStudent = async (req, res) => {
  try {
    const attendance = await Attendance.find({
      studentId: req.params.studentId,
    });

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Attendance
exports.updateAttendance = async (req, res) => {
  try {
    const attendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: attendance,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Attendance
exports.deleteAttendance = async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Attendance Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Bulk Attendance
exports.bulkAttendance = async (req, res) => {
  try {

    const attendance = await Attendance.insertMany(req.body);

    res.status(201).json({
      success: true,
      message: "Attendance Saved Successfully",
      data: attendance,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};