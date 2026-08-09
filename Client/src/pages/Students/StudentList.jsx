import "./Students.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {
  FaUserGraduate,
  FaUserCheck,
  FaUserTimes,
  FaUniversity,
  FaBookOpen,
  FaPlus,
  FaSearch,
  FaFilter,
  FaRedo,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function StudentList() {
  const [students, setStudents] = useState([]);

  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState("");
  const [status, setStatus] = useState("");

  const loadStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");

      setStudents(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  
const loadCourses = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/courses");
    setCourses(res.data.data);
  } catch (error) {
    console.log(error);
  }
};

  useEffect(() => {
    loadStudents();
    loadCourses();
  }, []);

  const cards = [
    {
      title: "Total Students",
      value: students.length,
      icon: <FaUserGraduate />,
      color: "primary",
      growth: "+12%",
    },
    {
      title: "Active Students",
      value: students.length,
      icon: <FaUserCheck />,
      color: "success",
      growth: "+5%",
    },
    {
      title: "Inactive",
      value: students.filter((student) => student.status === true).length,
      icon: <FaUserTimes />,
      color: "danger",
      growth: "-2%",
    },
    {
      title: "Departments",
      value: 8,
      icon: <FaUniversity />,
      color: "warning",
      growth: "0%",
    },
    {
      title: "Courses",
      value: courses.length,
      icon: <FaBookOpen />,
      color: "info",
      growth: "+3%",
    },
  ];

  const filteredStudents = students.filter((student)=>{
    const matchesSearch = search.trim() === "" || student.fullName.toLowerCase().includes(search.toLocaleLowerCase());
    const matchesCourse = course === "" || student.course?._id === course;
    const matchesStatus = status === "" || 
                          (status === "Active" && student.status === true) ||
                          (status === "Inactive" && student.status === false);

    return matchesSearch && matchesCourse && matchesStatus;
  });

  return (
    <div className="students-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <h2>Students</h2>

          <p>
            Dashboard /<span> Students</span>
          </p>
        </div>

        <Link to="/add-student" className="btn btn-primary add-btn">
          <FaPlus />
          Add Student
        </Link>
      </div>

      {/* Dashboard Cards */}

      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-4">
        {cards.map((card, index) => (
          <div className="col" key={index}>
            <div className="student-card h-100">
              <div className={`student-icon ${card.color}`}>{card.icon}</div>

              <div className="student-content">
                <small>{card.title}</small>
                <h3>{card.value}</h3>
                <small>
                  <span>{card.growth} This Month</span>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter */}

      <div className="filter-card mt-4">
        <div className="row g-3 align-items-center">
          <div className="col-lg-4">
            <div className="search-box">
              <FaSearch />

              <input
                type="text"
                placeholder="Search Student..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="col-lg-2">
            <select
              className="form-select"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>Department</option>

              <option>Computer Science</option>

              <option>Commerce</option>

              <option>Mechanical</option>
            </select>
          </div>

          <div className="col-lg-2">
            <select
              className="form-select"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="" disabled>Select Course</option>

              {courses.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.courseName}
                </option>
              ))}
            </select>
          </div>

          <div className="col-lg-2">
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Status</option>

              <option>Active</option>

              <option>Inactive</option>
            </select>
          </div>

          <div className="col-lg-2 d-grid gap-2">
            <button className="btn btn-primary">
              <FaFilter className="me-2" />
              Filter
            </button>

            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setSearch("");

                setDepartment("");

                setCourse("");

                setStatus("");
              }}
            >
              <FaRedo className="me-2" />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Part 2 starts here */}

      {/* =========================
      Student List
========================= */}

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-header bg-white d-flex justify-content-between align-items-center flex-wrap">
          <div>
            <h5 className="fw-bold mb-1">Student Directory</h5>

            <small className="text-muted">
              Showing {students.length} Students
            </small>
          </div>

          <button className="btn btn-outline-primary">Export Excel</button>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>

                  <th>Student</th>

                  <th>PRN</th>

                  <th>Course</th>

                  <th>Semester</th>

                  <th>Phone</th>

                  <th>Status</th>

                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student, index) => (
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
                            alt={student.fullName}
                            className="student-avatar"
                          />

                          <div className="ms-3">
                            <h6 className="mb-0 fw-bold">{student.fullName}</h6>

                            <small className="text-muted">
                              {student.email}
                            </small>
                          </div>
                        </div>
                      </td>

                      <td>{student.prn}</td>

                      <td>{student.course?.courseName}</td>

                      <td>{student.semester || "-"}</td>

                      <td>{student.phone}</td>

                      <td>
                        <span className="status active">Active</span>
                      </td>

                      <td>
                        <div className="d-flex justify-content-center gap-2">
                          <button className="btn btn-outline-primary btn-sm">
                            <FaEye />
                          </button>

                          <button className="btn btn-outline-warning btn-sm">
                            <FaEdit />
                          </button>

                          <button className="btn btn-outline-danger btn-sm">
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center py-5 text-muted">
                      No Students Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =========================
      Student Analytics
========================= */}

      <div className="row mt-4 g-4">
        {/* Student Growth */}

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm dashboard-card">
            <div className="card-header bg-white border-0 d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold mb-1">Student Growth</h5>

                <small className="text-muted">Monthly Admissions</small>
              </div>

              <select className="form-select w-auto">
                <option>2026</option>

                <option>2025</option>
              </select>
            </div>

            <div className="card-body">
              <div className="chart-placeholder" style={{ height: "320px" }}>
                <div className="text-center">
                  <h1>📈</h1>

                  <h5 className="text-secondary">Recharts Chart Here</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="col-lg-4">
          <div className="card dashboard-card border-0 shadow-sm mb-4">
            <div className="card-body text-center">
              <h6 className="fw-bold">Attendance</h6>

              <h1 className="display-5 fw-bold text-success">92%</h1>

              <small className="text-muted">Average Attendance</small>
            </div>
          </div>

          <div className="card dashboard-card border-0 shadow-sm">
            <div className="card-body text-center">
              <h6 className="fw-bold">Placement</h6>

              <h1 className="display-5 fw-bold text-primary">84%</h1>

              <small className="text-muted">Placement Ratio</small>
            </div>
          </div>
        </div>
      </div>

      {/* ===========================
    Bottom Section
=========================== */}

      <div className="row mt-4">
        {/* Department Summary */}

        <div className="col-lg-4 mb-4">
          <div className="card border-0 shadow-sm dashboard-card">
            <div className="card-header bg-white border-0">
              <h5 className="fw-bold mb-0">Department Summary</h5>
            </div>

            <div className="card-body">
              <div className="summary-card">
                <div>
                  <h6>Computer Science</h6>
                  <small className="text-muted">Students</small>
                </div>

                <span className="badge bg-primary">340</span>
              </div>

              <div className="summary-card">
                <div>
                  <h6>Commerce</h6>
                  <small className="text-muted">Students</small>
                </div>

                <span className="badge bg-success">220</span>
              </div>

              <div className="summary-card">
                <div>
                  <h6>Mechanical</h6>
                  <small className="text-muted">Students</small>
                </div>

                <span className="badge bg-warning">180</span>
              </div>

              <div className="summary-card">
                <div>
                  <h6>Civil</h6>
                  <small className="text-muted">Students</small>
                </div>

                <span className="badge bg-danger">160</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}

        <div className="col-lg-4 mb-4">
          <div className="card border-0 shadow-sm dashboard-card">
            <div className="card-header bg-white border-0">
              <h5 className="fw-bold mb-0">Recent Activities</h5>
            </div>

            <div className="card-body">
              <ul className="activity-list">
                <li>
                  <span className="activity-dot bg-success"></span>
                  New student admitted
                </li>

                <li>
                  <span className="activity-dot bg-primary"></span>
                  Semester results updated
                </li>

                <li>
                  <span className="activity-dot bg-warning"></span>
                  Attendance uploaded
                </li>

                <li>
                  <span className="activity-dot bg-danger"></span>
                  Student profile edited
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Stats */}

        <div className="col-lg-4 mb-4">
          <div className="card border-0 shadow-sm dashboard-card">
            <div className="card-header bg-white border-0">
              <h5 className="fw-bold mb-0">Quick Statistics</h5>
            </div>

            <div className="card-body">
              <div className="d-flex justify-content-between mb-3">
                <span>Total Students</span>
                <strong>{students.length}</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Active</span>
                <strong className="text-success">{students.length}</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span>Departments</span>
                <strong>8</strong>
              </div>

              <div className="d-flex justify-content-between">
                <span>Courses</span>
                <strong>12</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}

      <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">
        <div className="text-muted">
          Showing 1 to {students.length} of {students.length} Students
        </div>

        <nav>
          <ul className="pagination mb-0">
            <li className="page-item disabled">
              <button className="page-link">Previous</button>
            </li>

            <li className="page-item active">
              <button className="page-link">1</button>
            </li>

            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default StudentList;
