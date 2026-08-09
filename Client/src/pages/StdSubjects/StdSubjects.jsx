import { FaBookOpen, FaBook, FaFlask, FaGraduationCap } from "react-icons/fa";

import "./StdSubjects.css";

function StdSubjects() {
  return (
    <div className="subjects-page">
      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">My Subjects</h2>

          <p className="text-muted mb-0">
            View all enrolled subjects for the current semester
          </p>
        </div>

        <button className="btn btn-primary px-4">Semester 5</button>
      </div>

      {/* Statistics */}

      <div className="row g-4 mb-4">
        {/* Total Subjects */}

        <div className="col-xl-3 col-md-6">
          <div className="subject-stat-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Total Subjects</small>

                <h3>8</h3>

                <span className="text-primary">Current Semester</span>
              </div>

              <div className="subject-stat-icon bg-primary">
                <FaBookOpen />
              </div>
            </div>
          </div>
        </div>

        {/* Theory */}

        <div className="col-xl-3 col-md-6">
          <div className="subject-stat-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Theory Subjects</small>

                <h3>5</h3>

                <span className="text-success">Classroom</span>
              </div>

              <div className="subject-stat-icon bg-success">
                <FaBook />
              </div>
            </div>
          </div>
        </div>

        {/* Practical */}

        <div className="col-xl-3 col-md-6">
          <div className="subject-stat-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Practical Labs</small>

                <h3>3</h3>

                <span className="text-warning">Hands-on</span>
              </div>

              <div className="subject-stat-icon bg-warning">
                <FaFlask />
              </div>
            </div>
          </div>
        </div>

        {/* Credits */}

        <div className="col-xl-3 col-md-6">
          <div className="subject-stat-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Total Credits</small>

                <h3>24</h3>

                <span className="text-danger">Semester Credits</span>
              </div>

              <div className="subject-stat-icon bg-danger">
                <FaGraduationCap />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================
    Subject Filters
=========================== */}

<div className="card border-0 shadow-sm filter-card mb-4">

  <div className="card-body">

    <div className="row g-3 align-items-end">

      {/* Semester */}

      <div className="col-lg-3 col-md-6">

        <label className="form-label fw-semibold">
          Semester
        </label>

        <select className="form-select">

          <option>Semester 1</option>
          <option>Semester 2</option>
          <option>Semester 3</option>
          <option>Semester 4</option>
          <option selected>Semester 5</option>
          <option>Semester 6</option>

        </select>

      </div>

      {/* Subject Type */}

      <div className="col-lg-3 col-md-6">

        <label className="form-label fw-semibold">
          Subject Type
        </label>

        <select className="form-select">

          <option>All Subjects</option>
          <option>Theory</option>
          <option>Practical</option>
          <option>Elective</option>

        </select>

      </div>

      {/* Faculty */}

      <div className="col-lg-3 col-md-6">

        <label className="form-label fw-semibold">
          Faculty
        </label>

        <select className="form-select">

          <option>All Faculty</option>
          <option>Prof. Sharma</option>
          <option>Prof. Patil</option>
          <option>Prof. Kulkarni</option>

        </select>

      </div>

      {/* Search */}

      <div className="col-lg-3 col-md-6">

        <label className="form-label fw-semibold">
          Search Subject
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Search by subject..."
        />

      </div>

    </div>

  </div>

</div>
{/* Subjects Table */}

<div className="card border-0 shadow-sm">

    <div className="card-body">

        <div className="d-flex justify-content-between align-items-center mb-4">

            <div>

                <h4 className="fw-bold mb-1">
                    Subject List
                </h4>

                <small className="text-muted">
                    Current Semester Subjects
                </small>

            </div>

            <button className="btn btn-primary">
                Download Syllabus
            </button>

        </div>

        <div className="table-responsive">

            <table className="table table-hover align-middle subject-table">

                <thead>

                    <tr>

                        <th>Code</th>

                        <th>Subject Name</th>

                        <th>Type</th>

                        <th>Faculty</th>

                        <th>Credits</th>

                        <th>Hours/Week</th>

                        <th>Status</th>

                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    <tr>

                        <td>CS501</td>

                        <td>
                            <strong>Data Structures</strong>
                        </td>

                        <td>
                            <span className="badge bg-primary">
                                Core
                            </span>
                        </td>

                        <td>Prof. Sharma</td>

                        <td>4</td>

                        <td>5 hrs</td>

                        <td>
                            <span className="badge bg-success">
                                Active
                            </span>
                        </td>

                        <td>

                            <button className="btn btn-outline-primary btn-sm">
                                View
                            </button>

                        </td>

                    </tr>

                    <tr>

                        <td>CS502</td>

                        <td>
                            <strong>Database Management</strong>
                        </td>

                        <td>
                            <span className="badge bg-success">
                                Practical
                            </span>
                        </td>

                        <td>Prof. Patil</td>

                        <td>4</td>

                        <td>6 hrs</td>

                        <td>
                            <span className="badge bg-success">
                                Active
                            </span>
                        </td>

                        <td>

                            <button className="btn btn-outline-success btn-sm">
                                View
                            </button>

                        </td>

                    </tr>

                    <tr>

                        <td>CS503</td>

                        <td>
                            <strong>Operating System</strong>
                        </td>

                        <td>
                            <span className="badge bg-warning text-dark">
                                Theory
                            </span>
                        </td>

                        <td>Prof. Kulkarni</td>

                        <td>3</td>

                        <td>4 hrs</td>

                        <td>
                            <span className="badge bg-success">
                                Active
                            </span>
                        </td>

                        <td>

                            <button className="btn btn-outline-warning btn-sm">
                                View
                            </button>

                        </td>

                    </tr>

                    <tr>

                        <td>CS504</td>

                        <td>
                            <strong>Artificial Intelligence</strong>
                        </td>

                        <td>
                            <span className="badge bg-danger">
                                Elective
                            </span>
                        </td>

                        <td>Prof. Deshmukh</td>

                        <td>4</td>

                        <td>5 hrs</td>

                        <td>
                            <span className="badge bg-success">
                                Active
                            </span>
                        </td>

                        <td>

                            <button className="btn btn-outline-danger btn-sm">
                                View
                            </button>

                        </td>

                    </tr>

                </tbody>

            </table>

        </div>

    </div>

</div>
<div className="row g-4 mt-1">

  {/* Subject Overview */}

  <div className="col-lg-7">

    <div className="card border-0 shadow-sm h-100">

      <div className="card-body">

        <h5 className="fw-bold mb-4">
          Subject Overview
        </h5>

        <div className="row g-4">

          <div className="col-md-6">
            <div className="overview-box">
              <small>Total Theory Subjects</small>
              <h4>5</h4>
            </div>
          </div>

          <div className="col-md-6">
            <div className="overview-box">
              <small>Total Practical Subjects</small>
              <h4>3</h4>
            </div>
          </div>

          <div className="col-md-6">
            <div className="overview-box">
              <small>Total Credits</small>
              <h4>24</h4>
            </div>
          </div>

          <div className="col-md-6">
            <div className="overview-box">
              <small>Weekly Hours</small>
              <h4>36 hrs</h4>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>

  {/* Faculty Information */}

  <div className="col-lg-5">

    <div className="card border-0 shadow-sm h-100">

      <div className="card-body">

        <h5 className="fw-bold mb-4">
          Subject Faculty
        </h5>

        <div className="faculty-item">

          <div>

            <h6 className="mb-1">
              Data Structures
            </h6>

            <small>Prof. Sharma</small>

          </div>

          <span className="badge bg-primary">
            Core
          </span>

        </div>

        <div className="faculty-item">

          <div>

            <h6 className="mb-1">
              DBMS
            </h6>

            <small>Prof. Patil</small>

          </div>

          <span className="badge bg-success">
            Lab
          </span>

        </div>

        <div className="faculty-item">

          <div>

            <h6 className="mb-1">
              Operating System
            </h6>

            <small>Prof. Kulkarni</small>

          </div>

          <span className="badge bg-warning text-dark">
            Theory
          </span>

        </div>

        <div className="faculty-item">

          <div>

            <h6 className="mb-1">
              Artificial Intelligence
            </h6>

            <small>Prof. Deshmukh</small>

          </div>

          <span className="badge bg-danger">
            Elective
          </span>

        </div>

      </div>

    </div>

  </div>

</div>
    </div>
  );
}

export default StdSubjects;
