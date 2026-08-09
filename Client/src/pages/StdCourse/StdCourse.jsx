import {
  FaBookOpen,
  FaClipboardCheck,
  FaSpinner,
  FaGraduationCap,
} from "react-icons/fa";
import "./StdCourse.css";

function StdCourse() {
  return (
    <div className="course-page">
      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">My Courses</h2>

          <p className="text-muted mb-0">
            View your enrolled courses and semester subjects
          </p>
        </div>

        <button className="btn btn-primary px-4">Semester 5</button>
      </div>

      {/* Statistics Cards */}

      <div className="row g-4 mb-4">
        {/* Total Subjects */}

        <div className="col-lg-3 col-md-6">
          <div className="course-card">
            <div className="d-flex justify-content-between">
              <div>
                <small>Total Subjects</small>

                <h3>8</h3>

                <span className="text-success">Current Semester</span>
              </div>

              <div className="course-icon bg-primary">
                <FaBookOpen />
              </div>
            </div>
          </div>
        </div>

        {/* Completed */}

        <div className="col-lg-3 col-md-6">
          <div className="course-card">
            <div className="d-flex justify-content-between">
              <div>
                <small>Completed</small>

                <h3>5</h3>

                <span className="text-success">Successfully Passed</span>
              </div>

              <div className="course-icon bg-success">
                <FaClipboardCheck />
              </div>
            </div>
          </div>
        </div>

        {/* In Progress */}

        <div className="col-lg-3 col-md-6">
          <div className="course-card">
            <div className="d-flex justify-content-between">
              <div>
                <small>In Progress</small>

                <h3>3</h3>

                <span className="text-warning">Ongoing Subjects</span>
              </div>

              <div className="course-icon bg-warning">
                <FaSpinner />
              </div>
            </div>
          </div>
        </div>

        {/* Credits */}

        <div className="col-lg-3 col-md-6">
          <div className="course-card">
            <div className="d-flex justify-content-between">
              <div>
                <small>Total Credits</small>

                <h3>24</h3>

                <span className="text-primary">This Semester</span>
              </div>

              <div className="course-icon bg-danger">
                <FaGraduationCap />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4">
        {/* Subject 1 */}
        <div className="col-lg-6">
          <div className="subject-item">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <div className="subject-icon bg-primary">📘</div>

                <div className="ms-3">
                  <h5 className="mb-1">Data Structures</h5>
                  <small className="text-muted">CS501</small>
                </div>
              </div>

              <span className="badge bg-primary">Core</span>
            </div>

            <div className="subject-info">
              <div>
                <small>Faculty</small>
                <h6>Prof. Sharma</h6>
              </div>

              <div>
                <small>Credits</small>
                <h6>4</h6>
              </div>

              <div>
                <small>Attendance</small>
                <h6>92%</h6>
              </div>
            </div>

            <div className="mt-3">
              <div className="progress">
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "92%" }}
                ></div>
              </div>
            </div>

            <button className="btn btn-primary w-100 mt-3">View Details</button>
          </div>
        </div>

        {/* Subject 2 */}

        <div className="col-lg-6">
          <div className="subject-item">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div className="d-flex align-items-center">
                <div className="subject-icon bg-success">💻</div>

                <div className="ms-3">
                  <h5 className="mb-1">Database Management</h5>
                  <small className="text-muted">CS502</small>
                </div>
              </div>

              <span className="badge bg-success">Lab</span>
            </div>

            <div className="subject-info">
              <div>
                <small>Faculty</small>
                <h6>Prof. Patil</h6>
              </div>

              <div>
                <small>Credits</small>
                <h6>4</h6>
              </div>

              <div>
                <small>Attendance</small>
                <h6>88%</h6>
              </div>
            </div>

            <div className="mt-3">
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  style={{ width: "88%" }}
                ></div>
              </div>
            </div>

            <button className="btn btn-success w-100 mt-3">View Details</button>
          </div>
        </div>
      </div>
      <div className="row g-4 mb-4 mt-2">
        {/* Semester Progress */}

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm progress-card h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Semester Progress</h5>

              <h2 className="fw-bold text-primary">75%</h2>

              <small className="text-muted">Overall Completion</small>

              <div className="progress mt-3 mb-4">
                <div
                  className="progress-bar bg-primary"
                  style={{ width: "75%" }}
                ></div>
              </div>

              <div className="row text-center">
                <div className="col-4">
                  <h5 className="fw-bold">6</h5>

                  <small className="text-muted">Completed</small>
                </div>

                <div className="col-4">
                  <h5 className="fw-bold">2</h5>

                  <small className="text-muted">Remaining</small>
                </div>

                <div className="col-4">
                  <h5 className="fw-bold">24</h5>

                  <small className="text-muted">Credits</small>
                </div>
              </div>

              <hr />

              <div className="d-flex justify-content-between">
                <span>Current CGPA</span>

                <strong className="text-success">8.62</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Information */}

        <div className="col-lg-7">
          <div className="card border-0 shadow-sm faculty-card h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Subject Faculty</h5>

              <div className="faculty-item">
                <div>
                  <h6 className="mb-1">Data Structures</h6>

                  <small>Prof. Sharma</small>
                </div>

                <span className="badge bg-primary">Theory</span>
              </div>

              <div className="faculty-item">
                <div>
                  <h6 className="mb-1">Database Management</h6>

                  <small>Prof. Patil</small>
                </div>

                <span className="badge bg-success">Lab</span>
              </div>

              <div className="faculty-item">
                <div>
                  <h6 className="mb-1">Operating System</h6>

                  <small>Prof. Kulkarni</small>
                </div>

                <span className="badge bg-warning text-dark">Theory</span>
              </div>

              <div className="faculty-item">
                <div>
                  <h6 className="mb-1">Artificial Intelligence</h6>

                  <small>Prof. Deshmukh</small>
                </div>

                <span className="badge bg-danger">Elective</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4">
        {/* Learning Resources */}

        <div className="col-lg-7">
          <div className="card border-0 shadow-sm course-card-section h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Learning Resources</h5>

                <button className="btn btn-sm btn-outline-primary">
                  View All
                </button>
              </div>

              <div className="resource-item">
                <div className="resource-icon bg-primary">📘</div>

                <div className="resource-content">
                  <h6>Data Structures Notes</h6>

                  <small>Uploaded by Prof. Sharma</small>
                </div>

                <button className="btn btn-primary btn-sm">Download</button>
              </div>

              <div className="resource-item">
                <div className="resource-icon bg-success">📄</div>

                <div className="resource-content">
                  <h6>DBMS Practical Manual</h6>

                  <small>Lab PDF</small>
                </div>

                <button className="btn btn-success btn-sm">Download</button>
              </div>

              <div className="resource-item">
                <div className="resource-icon bg-warning">🎥</div>

                <div className="resource-content">
                  <h6>Operating System Video</h6>

                  <small>Lecture Recording</small>
                </div>

                <button className="btn btn-warning btn-sm text-dark">
                  Watch
                </button>
              </div>

              <div className="resource-item">
                <div className="resource-icon bg-danger">📝</div>

                <div className="resource-content">
                  <h6>AI Assignment</h6>

                  <small>Submission Deadline: 30 Jul 2026</small>
                </div>

                <button className="btn btn-danger btn-sm">Open</button>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Classes */}

        <div className="col-lg-5">
          <div className="card border-0 shadow-sm course-card-section h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Today's Classes</h5>

              <div className="class-item">
                <div>
                  <h6 className="mb-1">Data Structures</h6>

                  <small>09:00 AM - 10:00 AM</small>
                </div>

                <span className="badge bg-success">Completed</span>
              </div>

              <div className="class-item">
                <div>
                  <h6 className="mb-1">Database Management</h6>

                  <small>10:15 AM - 11:15 AM</small>
                </div>

                <span className="badge bg-primary">Live</span>
              </div>

              <div className="class-item">
                <div>
                  <h6 className="mb-1">Operating System</h6>

                  <small>01:30 PM - 02:30 PM</small>
                </div>

                <span className="badge bg-secondary">Upcoming</span>
              </div>

              <div className="class-item">
                <div>
                  <h6 className="mb-1">Artificial Intelligence</h6>

                  <small>03:00 PM - 04:00 PM</small>
                </div>

                <span className="badge bg-secondary">Upcoming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StdCourse;
