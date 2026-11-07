import "./StudentDashboard.css";

import {
  FaClipboardCheck,
  FaBookOpen,
  FaGraduationCap,
  FaTasks,
  FaArrowUp,
  FaChartLine,
  FaCalendarCheck,
} from "react-icons/fa";

function StudentDashboard() {
  const stats = [
    {
      title: "Attendance",
      value: "92%",
      icon: <FaClipboardCheck />,
      color: "primary",
    },
    {
      title: "Subjects",
      value: "8",
      icon: <FaBookOpen />,
      color: "success",
    },
    {
      title: "Current CGPA",
      value: "8.91",
      icon: <FaGraduationCap />,
      color: "warning",
    },
    {
      title: "Assignments",
      value: "5",
      icon: <FaTasks />,
      color: "danger",
    },
  ];

  return (
    <div className="dashboard-page">
      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Dashboard</h2>

          <p className="text-muted mb-0">
            Welcome back,
            <strong className="ms-1">Rohan </strong>
          </p>
        </div>

        <button className="btn btn-primary rounded-pill px-4">
          View Profile
        </button>
      </div>

      {/* Statistics */}

      <div className="row g-4">
        {stats.map((item, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <div className="card border-0 shadow-sm dashboard-card h-100">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <small className="text-muted">{item.title}</small>

                  <h3 className="fw-bold mt-2">{item.value}</h3>

                  <span className="text-success small">
                    <FaArrowUp className="me-1" />
                    Excellent
                  </span>
                </div>

                <div className={`icon-box bg-${item.color}`}>{item.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}

      <div className="row g-4 mt-1">
        {/* Performance */}

        <div className="col-lg-8">
          <div className="bg-light rounded p-4" style={{ height: "320px" }}>
            <h5 className="fw-semibold mb-4">Student Performance</h5>

            <div
              className="d-flex align-items-end justify-content-around"
              style={{ height: "220px" }}
            >
              {/* Sem 1 */}
              <div className="text-center">
                <div
                  className="bg-primary rounded-top"
                  style={{
                    width: "45px",
                    height: "100px",
                  }}
                ></div>

                <div className="mt-2 text-muted small">Sem 1</div>

                <div className="fw-semibold">7.8</div>
              </div>

              {/* Sem 2 */}
              <div className="text-center">
                <div
                  className="bg-primary rounded-top"
                  style={{
                    width: "45px",
                    height: "130px",
                  }}
                ></div>

                <div className="mt-2 text-muted small">Sem 2</div>

                <div className="fw-semibold">8.2</div>
              </div>

              {/* Sem 3 */}
              <div className="text-center">
                <div
                  className="bg-primary rounded-top"
                  style={{
                    width: "45px",
                    height: "155px",
                  }}
                ></div>

                <div className="mt-2 text-muted small">Sem 3</div>

                <div className="fw-semibold">8.6</div>
              </div>

              {/* Sem 4 */}
              <div className="text-center">
                <div
                  className="bg-primary rounded-top"
                  style={{
                    width: "45px",
                    height: "175px",
                  }}
                ></div>

                <div className="mt-2 text-muted small">Sem 4</div>

                <div className="fw-semibold">8.9</div>
              </div>

              {/* Sem 5 */}
              <div className="text-center">
                <div
                  className="bg-primary rounded-top"
                  style={{
                    width: "45px",
                    height: "190px",
                  }}
                ></div>

                <div className="mt-2 text-muted small">Sem 5</div>

                <div className="fw-semibold">9.1</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="col-lg-4">
          {/* Attendance */}

          <div className="card border-0 shadow-sm dashboard-card mb-4">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Today's Attendance</h5>

              <div className="text-center py-4">
                <FaCalendarCheck size={60} className="text-success mb-3" />

                <h2 className="fw-bold">Present</h2>

                <p className="text-muted mb-0">
                  Attendance Recorded Successfully
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Third Row */}

      <div className="row g-4 mt-1">
        {/* Recent Activities */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm dashboard-card h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-4">Recent Activities</h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    📚 Assignment Submitted
                    <br />
                    <small className="text-muted">
                      Data Structures Assignment - 2
                    </small>
                  </div>

                  <span className="badge bg-success">Completed</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    📝 Quiz Result Published
                    <br />
                    <small className="text-muted">DBMS Quiz</small>
                  </div>

                  <span className="badge bg-primary">New</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    📖 Faculty Uploaded Notes
                    <br />
                    <small className="text-muted">Operating System</small>
                  </div>

                  <span className="badge bg-info">View</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    ✅ Attendance Updated
                    <br />
                    <small className="text-muted">
                      Today's Attendance Recorded
                    </small>
                  </div>

                  <span className="badge bg-success">Done</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Today's Classes */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm dashboard-card h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-4">Today's Classes</h5>

              <div className="class-item">
                <div>
                  <h6 className="mb-1">Data Structures</h6>

                  <small className="text-muted">09:00 AM - 10:00 AM</small>
                </div>

                <span className="badge bg-success">Ongoing</span>
              </div>

              <hr />

              <div className="class-item">
                <div>
                  <h6 className="mb-1">Database Management</h6>

                  <small className="text-muted">10:30 AM - 11:30 AM</small>
                </div>

                <span className="badge bg-warning text-dark">Upcoming</span>
              </div>

              <hr />

              <div className="class-item">
                <div>
                  <h6 className="mb-1">Operating System</h6>

                  <small className="text-muted">01:00 PM - 02:00 PM</small>
                </div>

                <span className="badge bg-secondary">Scheduled</span>
              </div>

              <hr />

              <div className="class-item">
                <div>
                  <h6 className="mb-1">Software Engineering</h6>

                  <small className="text-muted">03:00 PM - 04:00 PM</small>
                </div>

                <span className="badge bg-secondary">Scheduled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth Row */}

      <div className="row g-4 mt-1">
        {/* Latest Notices */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm dashboard-card h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-4">Latest Notices</h5>

              <div className="notice-item">
                <h6 className="mb-1">📢 Internal Examination Schedule</h6>

                <small className="text-muted">Published 2 hours ago</small>
              </div>

              <hr />

              <div className="notice-item">
                <h6 className="mb-1">🎓 Scholarship Form Available</h6>

                <small className="text-muted">Last Date : 12 August 2026</small>
              </div>

              <hr />

              <div className="notice-item">
                <h6 className="mb-1">📚 Library Books Submission</h6>

                <small className="text-muted">Submit before 20 August</small>
              </div>

              <hr />

              <div className="notice-item">
                <h6 className="mb-1">🎉 College Annual Gathering</h6>

                <small className="text-muted">25 August 2026</small>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Exams */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm dashboard-card h-100">
            <div className="card-body">
              <h5 className="fw-semibold mb-4">Upcoming Exams</h5>

              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Data Structures</td>
                    <td>05 Aug</td>

                    <td>
                      <span className="badge bg-danger">Soon</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Operating System</td>
                    <td>08 Aug</td>

                    <td>
                      <span className="badge bg-warning text-dark">
                        Upcoming
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>DBMS</td>
                    <td>11 Aug</td>

                    <td>
                      <span className="badge bg-primary">Scheduled</span>
                    </td>
                  </tr>

                  <tr>
                    <td>Java Programming</td>
                    <td>15 Aug</td>

                    <td>
                      <span className="badge bg-success">Ready</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDashboard;
