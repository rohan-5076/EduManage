import {
  FaClipboardCheck,
  FaCalendarCheck,
  FaCalendarTimes,
  FaChartPie,
} from "react-icons/fa";

import "./StdAttendance.css";

function StdAttendance() {
  return (
    <div className="attendance-page">
      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Attendance</h2>

          <p className="text-muted mb-0">
            Monitor your attendance records and overall performance
          </p>
        </div>

        <button className="btn btn-primary px-4">Semester 5</button>
      </div>

      {/* Statistics */}

      <div className="row g-4">
        {/* Overall Classes */}

        <div className="col-xl-3 col-md-6">
          <div className="attendance-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Total Classes</small>

                <h3>120</h3>

                <span className="text-primary">Conducted</span>
              </div>

              <div className="attendance-icon bg-primary">
                <FaClipboardCheck />
              </div>
            </div>
          </div>
        </div>

        {/* Present */}

        <div className="col-xl-3 col-md-6">
          <div className="attendance-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Present</small>

                <h3>108</h3>

                <span className="text-success">Attended</span>
              </div>

              <div className="attendance-icon bg-success">
                <FaCalendarCheck />
              </div>
            </div>
          </div>
        </div>

        {/* Absent */}

        <div className="col-xl-3 col-md-6">
          <div className="attendance-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Absent</small>

                <h3>12</h3>

                <span className="text-danger">Missed</span>
              </div>

              <div className="attendance-icon bg-danger">
                <FaCalendarTimes />
              </div>
            </div>
          </div>
        </div>

        {/* Attendance % */}

        <div className="col-xl-3 col-md-6">
          <div className="attendance-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Attendance %</small>

                <h3>90%</h3>

                <span className="text-success">Excellent</span>
              </div>

              <div className="attendance-icon bg-warning">
                <FaChartPie />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================
    Attendance Filters
=========================== */}

      <div className="card border-0 shadow-sm filter-card my-4">
        <div className="card-body">
          <div className="row g-3 align-items-end">
            {/* Month */}

            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-semibold">Month</label>

              <select className="form-select">
                <option>July 2026</option>
                <option>June 2026</option>
                <option>May 2026</option>
              </select>
            </div>

            {/* Subject */}

            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-semibold">Subject</label>

              <select className="form-select">
                <option>All Subjects</option>
                <option>Data Structures</option>
                <option>DBMS</option>
                <option>Operating System</option>
                <option>Artificial Intelligence</option>
              </select>
            </div>

            {/* Status */}

            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-semibold">Status</label>

              <select className="form-select">
                <option>All</option>
                <option>Present</option>
                <option>Absent</option>
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
    Attendance Table
=========================== */}

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="fw-bold mb-1">Attendance Records</h5>

              <small className="text-muted">Current Semester Attendance</small>
            </div>

            <button className="btn btn-primary">Download Report</button>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle attendance-table">
              <thead>
                <tr>
                  <th>Date</th>

                  <th>Subject</th>

                  <th>Faculty</th>

                  <th>Time</th>

                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>27 Jul 2026</td>

                  <td>Data Structures</td>

                  <td>Prof. Sharma</td>

                  <td>09:00 AM</td>

                  <td>
                    <span className="badge bg-success">Present</span>
                  </td>
                </tr>

                <tr>
                  <td>27 Jul 2026</td>

                  <td>Database Management</td>

                  <td>Prof. Patil</td>

                  <td>10:15 AM</td>

                  <td>
                    <span className="badge bg-success">Present</span>
                  </td>
                </tr>

                <tr>
                  <td>26 Jul 2026</td>

                  <td>Operating System</td>

                  <td>Prof. Kulkarni</td>

                  <td>01:30 PM</td>

                  <td>
                    <span className="badge bg-danger">Absent</span>
                  </td>
                </tr>

                <tr>
                  <td>26 Jul 2026</td>

                  <td>Artificial Intelligence</td>

                  <td>Prof. Deshmukh</td>

                  <td>03:00 PM</td>

                  <td>
                    <span className="badge bg-success">Present</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ===========================
    Attendance Analytics
=========================== */}

      <div className="row g-4 mt-2">
        {/* Attendance Summary */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Attendance Summary</h5>

              <div className="summary-item">
                <span>Total Classes</span>

                <strong>120</strong>
              </div>

              <div className="summary-item">
                <span>Present</span>

                <strong className="text-success">108</strong>
              </div>

              <div className="summary-item">
                <span>Absent</span>

                <strong className="text-danger">12</strong>
              </div>

              <div className="summary-item">
                <span>Attendance Percentage</span>

                <strong className="text-primary">90%</strong>
              </div>

              <div className="d-flex justify-content-between mb-3">
                <span className="fw-semibold">Overall Progress</span>

                <span className="fw-bold text-success">90%</span>
              </div>

              <div className="progress attendance-progress mb-2">
                <div
                  className="progress-bar bg-success"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Subject-wise Attendance */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Subject-wise Attendance</h5>

              {/* Subject */}

              <div className="subject-progress">
                <div className="d-flex justify-content-between">
                  <span>Data Structures</span>

                  <strong>95%</strong>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div className="subject-progress">
                <div className="d-flex justify-content-between">
                  <span>Database Management</span>

                  <strong>88%</strong>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "88%" }}
                  ></div>
                </div>
              </div>

              <div className="subject-progress">
                <div className="d-flex justify-content-between">
                  <span>Operating System</span>

                  <strong>82%</strong>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "82%" }}
                  ></div>
                </div>
              </div>

              <div className="subject-progress">
                <div className="d-flex justify-content-between">
                  <span>Artificial Intelligence</span>

                  <strong>91%</strong>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "91%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4 mt-2">
        {/* Upcoming Classes */}

        <div className="col-lg-7">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h5 className="fw-bold mb-1">Upcoming Classes</h5>

                  <small className="text-muted">
                    Today's Remaining Schedule
                  </small>
                </div>

                <span className="badge bg-primary">3 Classes Left</span>
              </div>

              <div className="class-item">
                <div className="class-time">11:00 AM</div>

                <div className="class-info">
                  <h6>Database Management</h6>

                  <small>Prof. Patil • Room 302</small>
                </div>

                <span className="badge bg-success">Upcoming</span>
              </div>

              <div className="class-item">
                <div className="class-time">01:30 PM</div>

                <div className="class-info">
                  <h6>Operating System</h6>

                  <small>Prof. Kulkarni • Lab 2</small>
                </div>

                <span className="badge bg-warning text-dark">Practical</span>
              </div>

              <div className="class-item">
                <div className="class-time">03:00 PM</div>

                <div className="class-info">
                  <h6>Artificial Intelligence</h6>

                  <small>Prof. Deshmukh • Room 405</small>
                </div>

                <span className="badge bg-info">Lecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility */}

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Attendance Eligibility</h5>

              <div className="eligibility-item">
                <span>Required Attendance</span>

                <strong>75%</strong>
              </div>

              <div className="eligibility-item">
                <span>Current Attendance</span>

                <strong className="text-success">90%</strong>
              </div>

              <div className="eligibility-item">
                <span>Exam Status</span>

                <span className="badge bg-success">Eligible</span>
              </div>

              <hr />

              <div className="alert alert-success mb-0">
                <strong>Great Work! 🎉</strong>
                <br />
                Your attendance is above the required limit. Keep maintaining at
                least 75% attendance to remain eligible for examinations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StdAttendance;
