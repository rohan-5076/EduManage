import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Subject.css";

import {
  FaBook,
  FaBookOpen,
  FaLayerGroup,
  FaPlus,
  FaSearch,
  FaFilter,
  FaRedo,
    FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function ListSubject() {
  const [courses, SetCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [subjects, SetSubjects] = useState([]);
  const [Filters, SetFilters] = useState({
    course: "",
    semester: "",
  });

  const LoadCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      SetCourses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    LoadCourses();
  }, []);

  const SearchSubjects = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/subjects", {
        params: {
          courseId: Filters.course,
          semester: Filters.semester,
        },
      });
      SetSubjects(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    SearchSubjects();
  }, []);

  const filteredSubjects = subjects.filter((subject) => {
    const matchSearch =
      subject.subjectName?.toLowerCase().includes(search.toLowerCase()) ||
      subject.subjectCode?.toLowerCase().includes(search.toLowerCase());

    return matchSearch;
  });
  return (
    <div>
      <div className="subject-page">
        {/* Header */}

        <div className="page-header">
          <div>
            <h2>Subjects</h2>

            <p>
              Dashboard /<span> Subjects</span>
            </p>
          </div>

          <Link to="/add-subject" className="btn btn-primary add-btn">
            <FaPlus className="me-2" />
            Add Subject
          </Link>
        </div>

        {/* Dashboard Cards */}

        <div className="row g-4">
          <div className="col-xl col-md-4">
            <div className="subject-card">
              <div className="subject-icon primary">
                <FaBook />
              </div>

              <div className="subject-content">
                <small>Total Subjects</small>

                <h3>{subjects.length}</h3>

                <span>Available Subjects</span>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4">
            <div className="subject-card">
              <div className="subject-icon success">
                <FaBookOpen />
              </div>

              <div className="subject-content">
                <small>Active Subjects</small>

                <h3>{subjects.filter((s) => s.status).length}</h3>

                <span>Currently Active</span>
              </div>
            </div>
          </div>

          <div className="col-xl col-md-4">
            <div className="subject-card">
              <div className="subject-icon warning">
                <FaLayerGroup />
              </div>

              <div className="subject-content">
                <small>Filtered Results</small>

                <h3>{filteredSubjects.length}</h3>

                <span>Search Results</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Section */}

        <div className="filter-card mt-4">
          <div className="row g-3 align-items-center">
            {/* Search */}

            <div className="col-lg-4">
              <div className="search-box">
                <FaSearch />

                <input
                  type="text"
                  placeholder="Search Subject..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            {/* Course */}

            <div className="col-lg-3">
              <select
                className="form-select"
                value={Filters.course}
                onChange={(e) =>
                  SetFilters({
                    ...Filters,
                    course: e.target.value,
                  })
                }
              >
                <option value="">All Courses</option>

                {courses
                  .filter((c) => c.status)
                  .map((course) => (
                    <option key={course._id} value={course._id}>
                      {course.courseName}
                    </option>
                  ))}
              </select>
            </div>

            {/* Semester */}

            <div className="col-lg-2">
              <select
                className="form-select"
                value={Filters.semester}
                onChange={(e) =>
                  SetFilters({
                    ...Filters,
                    semester: e.target.value,
                  })
                }
              >
                <option value="">Semester</option>

                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                  <option key={sem} value={sem}>
                    Semester {sem}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}

            <div className="col-lg-3 d-grid gap-2">
              <button onClick={SearchSubjects} className="btn btn-primary">
                <FaFilter className="me-2" />
                Search
              </button>

              <button
                className="btn btn-outline-secondary"
                onClick={() => {
                  setSearch("");

                  SetFilters({
                    course: "",
                    semester: "",
                  });

                  SearchSubjects();
                }}
              >
                <FaRedo className="me-2" />
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Subject Table Starts Here */}
        {/* =========================
      Subject List
========================= */}

        <div className="card shadow-sm border-0 mt-4">
          {/* Header */}

          <div className="card-header bg-white border-0 py-3 d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div>
              <h5 className="fw-bold mb-0">Subject Directory</h5>

              <small className="text-muted">
                Showing {filteredSubjects.length} Subjects
              </small>
            </div>

            <div className="d-flex gap-2 flex-wrap">
              <span className="badge rounded-pill bg-primary px-3 py-2">
                Total : {subjects.length}
              </span>

              <span className="badge rounded-pill bg-success px-3 py-2">
                Active : {subjects.filter((s) => s.status).length}
              </span>

              <span className="badge rounded-pill bg-danger px-3 py-2">
                Inactive : {subjects.filter((s) => !s.status).length}
              </span>
            </div>
          </div>

          {/* Table */}

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th width="60">#</th>

                    <th>Subject</th>

                    <th>Code</th>

                    <th>Course</th>

                    <th>Semester</th>

                    <th>Credits</th>

                    <th>Status</th>

                    <th width="180" className="text-center">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredSubjects.length > 0 ? (
                    filteredSubjects.map((subject, index) => (
                      <tr key={subject._id}>
                        <td>{index + 1}</td>

                        {/* Subject */}

                        <td>
                          <div className="d-flex align-items-center">
                            <div className="subject-avatar">
                              {subject.subjectName.charAt(0)}
                            </div>

                            <div className="ms-3">
                              <h6 className="mb-0 fw-bold">
                                {subject.subjectName}
                              </h6>

                              <small className="text-muted">
                                Academic Subject
                              </small>
                            </div>
                          </div>
                        </td>

                        {/* Code */}

                        <td>
                          <span className="fw-semibold">
                            {subject.subjectCode}
                          </span>
                        </td>

                        {/* Course */}

                        <td>{subject.courseId?.courseName || "-"}</td>

                        {/* Semester */}

                        <td>Semester {subject.semester}</td>

                        {/* Credits */}

                        <td>{subject.credits}</td>

                        {/* Status */}

                        <td>
                          <span
                            className={`status ${
                              subject.status ? "active" : "inactive"
                            }`}
                          >
                            {subject.status ? "Active" : "Inactive"}
                          </span>
                        </td>

                        {/* Actions */}

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
                        No Subjects Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListSubject;
