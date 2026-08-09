import {
  FaGraduationCap,
  FaAward,
  FaBookOpen,
  FaClipboardCheck,
} from "react-icons/fa";

import "./StdExams.css";

function StdExams() {
  return (
    <div className="exams-page">
      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Examinations</h2>

          <p className="text-muted mb-0">
            Track your academic performance, exam schedule, and results.
          </p>
        </div>

        <button className="btn btn-primary px-4">Semester 5</button>
      </div>

      {/* Statistics */}

      <div className="row g-4">
        {/* CGPA */}

        <div className="col-xl-3 col-md-6">
          <div className="exam-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Current CGPA</small>

                <h3>8.72</h3>

                <span className="text-primary">Excellent</span>
              </div>

              <div className="exam-icon bg-primary">
                <FaGraduationCap />
              </div>
            </div>
          </div>
        </div>

        {/* Current Semester */}

        <div className="col-xl-3 col-md-6">
          <div className="exam-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Current Semester</small>

                <h3>5</h3>

                <span className="text-success">Ongoing</span>
              </div>

              <div className="exam-icon bg-success">
                <FaBookOpen />
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Exams */}

        <div className="col-xl-3 col-md-6">
          <div className="exam-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Upcoming Exams</small>

                <h3>4</h3>

                <span className="text-warning">Scheduled</span>
              </div>

              <div className="exam-icon bg-warning">
                <FaClipboardCheck />
              </div>
            </div>
          </div>
        </div>

        {/* Passed Subjects */}

        <div className="col-xl-3 col-md-6">
          <div className="exam-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Passed Subjects</small>

                <h3>32</h3>

                <span className="text-success">Completed</span>
              </div>

              <div className="exam-icon bg-danger">
                <FaAward />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================
    Filters
=========================== */}

      <div className="card border-0 shadow-sm exam-filter-card my-4">
        <div className="card-body">
          <div className="row g-3 align-items-end">
            {/* Semester */}

            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-semibold">Semester</label>

              <select className="form-select">
                <option>Semester 5</option>
                <option>Semester 4</option>
                <option>Semester 3</option>
                <option>Semester 2</option>
                <option>Semester 1</option>
              </select>
            </div>

            {/* Exam Type */}

            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-semibold">Exam Type</label>

              <select className="form-select">
                <option>All Exams</option>
                <option>Internal Assessment</option>
                <option>Mid Semester</option>
                <option>Practical</option>
                <option>End Semester</option>
              </select>
            </div>

            {/* Result Status */}

            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-semibold">Result Status</label>

              <select className="form-select">
                <option>All</option>
                <option>Passed</option>
                <option>Failed</option>
                <option>Pending</option>
              </select>
            </div>

            {/* Search */}

            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-semibold">Search</label>

              <input
                type="text"
                className="form-control"
                placeholder="Search subject..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===========================
    Results Table
=========================== */}

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="fw-bold mb-1">Examination Results</h5>

              <small className="text-muted">Semester-wise Result Summary</small>
            </div>

            <button className="btn btn-primary">Download Marksheet</button>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle exam-table">
              <thead>
                <tr>
                  <th>Subject Code</th>

                  <th>Subject</th>

                  <th>Internal</th>

                  <th>External</th>

                  <th>Total</th>

                  <th>Grade</th>

                  <th>Status</th>

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>CS501</td>

                  <td>Data Structures</td>

                  <td>28 / 30</td>

                  <td>65 / 70</td>

                  <td>
                    <strong>93</strong>
                  </td>

                  <td>
                    <span className="badge bg-primary">A+</span>
                  </td>

                  <td>
                    <span className="badge bg-success">Pass</span>
                  </td>

                  <td>
                    <button className="btn btn-outline-primary btn-sm">
                      View
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>CS502</td>

                  <td>Database Management</td>

                  <td>26 / 30</td>

                  <td>60 / 70</td>

                  <td>
                    <strong>86</strong>
                  </td>

                  <td>
                    <span className="badge bg-success">A</span>
                  </td>

                  <td>
                    <span className="badge bg-success">Pass</span>
                  </td>

                  <td>
                    <button className="btn btn-outline-success btn-sm">
                      View
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>CS503</td>

                  <td>Operating System</td>

                  <td>23 / 30</td>

                  <td>54 / 70</td>

                  <td>
                    <strong>77</strong>
                  </td>

                  <td>
                    <span className="badge bg-warning text-dark">B+</span>
                  </td>

                  <td>
                    <span className="badge bg-success">Pass</span>
                  </td>

                  <td>
                    <button className="btn btn-outline-warning btn-sm">
                      View
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>CS504</td>

                  <td>Artificial Intelligence</td>

                  <td>29 / 30</td>

                  <td>67 / 70</td>

                  <td>
                    <strong>96</strong>
                  </td>

                  <td>
                    <span className="badge bg-danger">O</span>
                  </td>

                  <td>
                    <span className="badge bg-success">Pass</span>
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
      {/* ===========================
    Upcoming Exams & Performance
=========================== */}

      <div className="row g-4 mt-2">
        {/* Upcoming Exams */}

        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h5 className="fw-bold mb-1">Upcoming Exams</h5>

                  <small className="text-muted">
                    Semester Examination Schedule
                  </small>
                </div>

                <span className="badge bg-primary">4 Exams</span>
              </div>

              <div className="exam-schedule">
                <div className="exam-item">
                  <div className="exam-date">
                    <h4>12</h4>

                    <small>AUG</small>
                  </div>

                  <div className="exam-info">
                    <h6>Data Structures</h6>

                    <small>09:30 AM - 12:30 PM</small>
                  </div>

                  <span className="badge bg-primary">Room 301</span>
                </div>

                <div className="exam-item">
                  <div className="exam-date">
                    <h4>15</h4>

                    <small>AUG</small>
                  </div>

                  <div className="exam-info">
                    <h6>Database Management</h6>

                    <small>02:00 PM - 05:00 PM</small>
                  </div>

                  <span className="badge bg-success">Lab 2</span>
                </div>

                <div className="exam-item">
                  <div className="exam-date">
                    <h4>18</h4>

                    <small>AUG</small>
                  </div>

                  <div className="exam-info">
                    <h6>Operating System</h6>

                    <small>09:30 AM - 12:30 PM</small>
                  </div>

                  <span className="badge bg-warning text-dark">Room 204</span>
                </div>

                <div className="exam-item">
                  <div className="exam-date">
                    <h4>21</h4>

                    <small>AUG</small>
                  </div>

                  <div className="exam-info">
                    <h6>Artificial Intelligence</h6>

                    <small>02:00 PM - 05:00 PM</small>
                  </div>

                  <span className="badge bg-danger">Room 405</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Summary */}

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Performance Summary</h5>

              <div className="performance-item">
                <span>Highest Marks</span>

                <strong>96 / 100</strong>
              </div>

              <div className="performance-item">
                <span>Average Marks</span>

                <strong>88 / 100</strong>
              </div>

              <div className="performance-item">
                <span>Lowest Marks</span>

                <strong>77 / 100</strong>
              </div>

              <div className="performance-item">
                <span>Pass Percentage</span>

                <strong className="text-success">100%</strong>
              </div>

              <div className="my-4 d-flex justify-content-between">
                <span className="fw-semibold">Semester Performance</span>

                <strong className="text-primary">88%</strong>
              </div>

              <div className="progress exam-progress">
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "88%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================
    Grade Distribution & Notifications
=========================== */}

      <div className="row g-4 mt-2">
        {/* Grade Distribution */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h5 className="fw-bold mb-1">Grade Distribution</h5>

                  <small className="text-muted">Semester 5 Performance</small>
                </div>
              </div>

              <div className="grade-item">
                <span>O Grade</span>

                <div className="progress flex-grow-1 mx-3">
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "20%" }}
                  ></div>
                </div>

                <strong>2</strong>
              </div>

              <div className="grade-item">
                <span>A+</span>

                <div className="progress flex-grow-1 mx-3">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "30%" }}
                  ></div>
                </div>

                <strong>3</strong>
              </div>

              <div className="grade-item">
                <span>A</span>

                <div className="progress flex-grow-1 mx-3">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "40%" }}
                  ></div>
                </div>

                <strong>4</strong>
              </div>

              <div className="grade-item">
                <span>B+</span>

                <div className="progress flex-grow-1 mx-3">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "10%" }}
                  ></div>
                </div>

                <strong>1</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Recent Notifications</h5>

              <div className="notification-item">
                <div className="notification-icon bg-success">✓</div>

                <div className="notification-content">
                  <h6>Semester 5 Result Published</h6>

                  <small>Today • 09:30 AM</small>
                </div>
              </div>

              <div className="notification-item">
                <div className="notification-icon bg-primary">📘</div>

                <div className="notification-content">
                  <h6>AI Internal Marks Updated</h6>

                  <small>Yesterday • 04:45 PM</small>
                </div>
              </div>

              <div className="notification-item">
                <div className="notification-icon bg-warning">📝</div>

                <div className="notification-content">
                  <h6>Practical Exam Schedule Released</h6>

                  <small>2 Days Ago</small>
                </div>
              </div>

              <div className="notification-item">
                <div className="notification-icon bg-danger">🔔</div>

                <div className="notification-content">
                  <h6>Hall Ticket Available</h6>

                  <small>3 Days Ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StdExams;
