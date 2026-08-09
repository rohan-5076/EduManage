import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./course.css";

import {
  FaBookOpen,
  FaCheckCircle,
  FaTimesCircle,
  FaPlus,
  FaSearch,
  FaFilter,
  FaRedo,
    FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";


function ListCourse() {
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const loadCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchSearch =
      course.courseName?.toLowerCase().includes(search.toLowerCase()) ||
      course.courseCode?.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      status === "" ||
      status === "Status" ||
      (status === "Active" && course.status) ||
      (status === "Inactive" && !course.status);

    return matchSearch && matchStatus;
  });
  return (
    <div className="course-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <h2>Courses</h2>

          <p>
            Dashboard /<span> Courses</span>
          </p>
        </div>

        <Link to="/add-course" className="btn btn-primary add-btn">
          <FaPlus className="me-2" />
          Add Course
        </Link>
      </div>

      {/* Dashboard Cards */}

      <div className="row g-4">
        <div className="col-xl col-md-4">
          <div className="course-card">
            <div className="course-icon primary">
              <FaBookOpen />
            </div>

            <div className="course-content">
              <small>Total Courses</small>

              <h3>{courses.length}</h3>

              <span>All Courses</span>
            </div>
          </div>
        </div>

        <div className="col-xl col-md-4">
          <div className="course-card">
            <div className="course-icon success">
              <FaCheckCircle />
            </div>

            <div className="course-content">
              <small>Active Courses</small>

              <h3>{courses.filter((c) => c.status).length}</h3>

              <span>Currently Running</span>
            </div>
          </div>
        </div>

        <div className="col-xl col-md-4">
          <div className="course-card">
            <div className="course-icon danger">
              <FaTimesCircle />
            </div>

            <div className="course-content">
              <small>Inactive Courses</small>

              <h3>{courses.filter((c) => !c.status).length}</h3>

              <span>Archived</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Filter */}

      <div className="filter-card mt-4">
        <div className="row g-3">
          <div className="col-lg-8">
            <div className="search-box">
              <FaSearch />

              <input
                type="text"
                placeholder="Search course..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="col-lg-2">
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="">Status</option>

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
                setStatus("");
              }}
            >
              <FaRedo className="me-2" />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Table Starts Here */}
      {/* =========================
      Course List
========================= */}

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h5 className="fw-bold mb-0">Course Directory</h5>

            <small className="text-muted">
              Showing {filteredCourses.length} Courses
            </small>
          </div>

          <div className="d-flex gap-2 flex-wrap">
            <span className="badge rounded-pill bg-primary px-3 py-2">
              Total : {courses.length}
            </span>

            <span className="badge rounded-pill bg-success px-3 py-2">
              Active : {courses.filter((c) => c.status).length}
            </span>

            <span className="badge rounded-pill bg-danger px-3 py-2">
              Inactive : {courses.filter((c) => !c.status).length}
            </span>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th width="60">#</th>

                  <th>Course</th>

                  <th>Code</th>

                  <th>Duration</th>

                  <th>Semesters</th>

                  <th>Status</th>

                  <th width="170" className="text-center">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course, index) => (
                    <tr key={course._id}>
                      <td>{index + 1}</td>

                      <td>
                        <div className="d-flex align-items-center">
                          <div className="course-avatar">
                            {course.courseName.charAt(0)}
                          </div>

                          <div className="ms-3">
                            <h6 className="mb-0 fw-bold">
                              {course.courseName}
                            </h6>

                            <small className="text-muted">
                              Academic Course
                            </small>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className="fw-semibold">{course.courseCode}</span>
                      </td>

                      <td>{course.duration} Years</td>

                      <td>{course.totalSemesters}</td>

                      <td>
                        <span
                          className={`status ${
                            course.status ? "active" : "inactive"
                          }`}
                        >
                          {course.status ? "Active" : "Inactive"}
                        </span>
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
                    <td colSpan="7" className="text-center py-5 text-muted">
                      No Courses Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListCourse;
