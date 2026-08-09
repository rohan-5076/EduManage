import { useEffect, useState } from "react";
import axios from "axios";
import "./Attendance.css";

import {
  FaCalendarCheck,
  FaUserGraduate,
  FaUserCheck,
  FaUserTimes,
  FaCalendarAlt,
  FaSearch,
  FaRedo,
  FaBookOpen,
} from "react-icons/fa";

function Attendance() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    course: "",
    semester: "",
    subject: "",
    date: "",
  });

  useEffect(() => {
    loadCourses();
  }, []);

  const loadStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");

      console.log(res.data);

      setStudents(res.data.data);

      // Create default attendance for each student
      const attendanceData = res.data.data.map((student) => ({
        studentId: student._id,
        status: "Present",
      }));

      setAttendance(attendanceData);
    } catch (error) {
      console.log(error);
    }
  };

  const loadCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      console.log(res.data);
      setCourses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAttendance = (index, status) => {
    const temp = [...attendance];
    temp[index].status = status;
    setAttendance(temp);
  };

  const saveAttendance = async () => {
    try {
      const payload = attendance.map((item) => ({
        studentId: item.studentId,
        status: item.status,
        course: formData.course,
        semester: formData.semester,
        subject: formData.subject,
        date: formData.date,
      }));

      await axios.post("http://localhost:5000/api/attendance/bulk", payload);

      alert("Attendance Saved Successfully");
    } catch (error) {
      console.log("Error:", error);

      if (error.response) {
        console.log("Response:", error.response.data);
        alert(error.response.data.message);
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="attendance-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <h2>Attendance</h2>

          <p>
            Dashboard /<span> Attendance</span>
          </p>
        </div>
      </div>

      {/* Dashboard Cards */}

      <div className="row g-4 mb-4">
        <div className="col-xl col-md-3">
          <div className="dashboard-card">
            <div className="dashboard-icon primary">
              <FaUserGraduate />
            </div>

            <div>
              <small>Total Students</small>

              <h3>{students.length}</h3>
            </div>
          </div>
        </div>

        <div className="col-xl col-md-3">
          <div className="dashboard-card">
            <div className="dashboard-icon success">
              <FaUserCheck />
            </div>

            <div>
              <small>Present</small>

              <h3>{attendance.filter((a) => a.status === "Present").length}</h3>
            </div>
          </div>
        </div>

        <div className="col-xl col-md-3">
          <div className="dashboard-card">
            <div className="dashboard-icon danger">
              <FaUserTimes />
            </div>

            <div>
              <small>Absent</small>

              <h3>{attendance.filter((a) => a.status === "Absent").length}</h3>
            </div>
          </div>
        </div>

        <div className="col-xl col-md-3">
          <div className="dashboard-card">
            <div className="dashboard-icon warning">
              <FaCalendarCheck />
            </div>

            <div>
              <small>Leave</small>

              <h3>{attendance.filter((a) => a.status === "Leave").length}</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Card */}

      <div className="filter-card">
        <div className="row g-3">
          {/* Course */}

          <div className="col-lg-3">
            <label className="form-label fw-semibold">Course</label>

            <select
              className="form-select"
              name="course"
              value={formData.course}
              onChange={handleForm}
            >
              <option value="">Select Course</option>

              {courses
                .filter((course) => course.status)
                .map((course) => (
                  <option key={course._id} value={course._id}>
                    {course.courseName}
                  </option>
                ))}
            </select>
          </div>

          {/* Semester */}

          <div className="col-lg-2">
            <label className="form-label fw-semibold">Semester</label>

            <select
              className="form-select"
              name="semester"
              value={formData.semester}
              onChange={handleForm}
            >
              <option value="">Select</option>

              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}

          <div className="col-lg-3">
            <label className="form-label fw-semibold">Subject</label>

            <input
              type="text"
              className="form-control"
              name="subject"
              value={formData.subject}
              onChange={handleForm}
              placeholder="Enter Subject"
            />
          </div>

          {/* Date */}

          <div className="col-lg-2">
            <label className="form-label fw-semibold">Date</label>

            <input
              type="date"
              className="form-control"
              name="date"
              value={formData.date}
              onChange={handleForm}
            />
          </div>

          {/* Buttons */}

          <div className="col-lg-2 d-grid">
            <label className="form-label">&nbsp;</label>

            <button className="btn btn-primary" onClick={loadStudents}>
              <FaSearch className="me-2" />
              Load
            </button>
          </div>
        </div>

        <div className="mt-3">
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              setFormData({
                course: "",
                semester: "",
                subject: "",
                date: "",
              });

              setStudents([]);
              setAttendance([]);
            }}
          >
            <FaRedo className="me-2" />
            Reset
          </button>
        </div>
      </div>

      {/* ==========================
      Attendance Analytics
========================== */}

      <div className="row g-3 mb-4">

  {/* Total Students */}
  <div className="col-xl-3 col-lg-6 col-md-6">
    <div className="mini-summary-card">
      <div className="mini-icon bg-primary">
        <i className="bi bi-people-fill"></i>
      </div>

      <div>
        <h3>{students.length}</h3>
        <p>Total Students</p>
      </div>
    </div>
  </div>

  {/* Present */}
  <div className="col-xl-3 col-lg-6 col-md-6">
    <div className="mini-summary-card">
      <div className="mini-icon bg-success">
        <i className="bi bi-check-circle-fill"></i>
      </div>

      <div>
        <h3>{attendance.filter(a => a.status === "Present").length}</h3>
        <p>Present</p>
      </div>
    </div>
  </div>

  {/* Absent */}
  <div className="col-xl-3 col-lg-6 col-md-6">
    <div className="mini-summary-card">
      <div className="mini-icon bg-danger">
        <i className="bi bi-x-circle-fill"></i>
      </div>

      <div>
        <h3>{attendance.filter(a => a.status === "Absent").length}</h3>
        <p>Absent</p>
      </div>
    </div>
  </div>

  {/* Attendance */}
  <div className="col-xl-3 col-lg-6 col-md-6">
    <div className="mini-summary-card">
      <div className="mini-icon bg-warning">
        <i className="bi bi-bar-chart-fill"></i>
      </div>

      <div>
        <h3>
          {students.length
            ? Math.round(
                (attendance.filter(a => a.status === "Present").length /
                  students.length) * 100
              )
            : 0}
          %
        </h3>

        <p>Attendance</p>
      </div>
    </div>
  </div>

</div>
      {/* Attendance Table Starts Here */}

      {/* ===========================
        Student Attendance
=========================== */}

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold mb-0">Student Attendance</h5>

            <small className="text-muted">
              Mark attendance for today's lecture
            </small>
          </div>

          <span className="badge bg-primary px-3 py-2">
            Total Students : {students.length}
          </span>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th width="60">#</th>

                  <th>Student</th>

                  <th>PRN</th>

                  <th>Course</th>

                  <th>Email</th>

                  <th width="320">Attendance</th>
                </tr>
              </thead>

              <tbody>
                {students.length > 0 ? (
                  students.map((student, index) => (
                    <tr key={student._id}>
                      <td>{index + 1}</td>

                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={
                              student.photo
                                ? `http://localhost:5000/uploads/${student.photo}`
                                : `http://localhost:5000/uploads/default-student.avif`
                            }
                            className="student-avatar"
                            alt={student.fullName}
                          />

                          <div className="ms-3">
                            <h6 className="mb-0 fw-bold">{student.fullName}</h6>

                            <small className="text-muted">Student</small>
                          </div>
                        </div>
                      </td>

                      <td>{student.prn}</td>

                      <td>{student.course?.courseName}</td>

                      <td>{student.email}</td>

                      <td>
                        <div className="attendance-buttons">
                          <button
                            className={`attendance-btn present ${attendance[index]?.status === "Present" ? "active-present" : ""}`}
                            onClick={() => handleAttendance(index, "Present")}
                          >
                            Present
                          </button>

                          <button
                            className={`attendance-btn absent ${attendance[index]?.status === "Absent" ? "active-absent" : ""}`}
                            onClick={() => handleAttendance(index, "Absent")}
                          >
                            Absent
                          </button>

                          <button
                            className={`attendance-btn leave ${attendance[index]?.status === "Leave" ? "active-leave" : ""}`}
                            onClick={() => handleAttendance(index, "Leave")}
                          >
                            Leave
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-5">
                      No Students Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
        <small className="text-muted">
          Showing
          <strong> {students.length} </strong>
          Students
        </small>

        <nav>
          <ul className="pagination mb-0">
            <li className="page-item disabled">
              <button className="page-link">Previous</button>
            </li>

            <li className="page-item active">
              <button className="page-link">1</button>
            </li>

            <li className="page-item disabled">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-end mt-4">
        <button
          className="btn btn-success btn-lg px-4"
          onClick={saveAttendance}
        >
          Save Attendance
        </button>
      </div>
    </div>
  );
}
export default Attendance;
