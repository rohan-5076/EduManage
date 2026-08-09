const mongoose = require("mongoose");

const StdAttendanceSchema = new mongoose.Schema(
    {
        studentId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true,

        },
        date:{
            type:Date,
            required:true,
        },
        subject:{
            type: String,
            required: true,
        },
        faculty:{
            type: String,
            required: true,
        },
        semester:{
            type: Number,
            required: true,
        },
        status:{
            type: String,
            enum: ["Present","Absent","Leave"],
            default:"Present",
        },
    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("Attendance", StdAttendanceSchema);