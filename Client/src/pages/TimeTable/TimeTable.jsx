import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

import "./TimeTable.css";

function TimeTable() {
  return (
    <div className="timetable-page">
      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Timetable</h2>

          <p className="text-muted mb-0">
            Weekly class schedule and today's lectures.
          </p>
        </div>

        <button className="btn btn-primary px-4">Semester 5</button>
      </div>

      {/* Today's Schedule */}

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="fw-bold mb-1">Today's Schedule</h5>

              <small className="text-muted">Monday • 27 July 2026</small>
            </div>

            <span className="badge bg-success px-3 py-2">4 Classes</span>
          </div>

          {/* Class */}

          <div className="schedule-item active">
            <div className="schedule-time">
              <FaClock />

              <span>09:00 - 10:00</span>
            </div>

            <div className="schedule-content">
              <h6>Data Structures</h6>

              <div className="schedule-meta">
                <span>
                  <FaUserTie />
                  Prof. Sharma
                </span>

                <span>
                  <FaMapMarkerAlt />
                  Room 301
                </span>
              </div>
            </div>

            <span className="badge bg-primary">Live</span>
          </div>

          <div className="schedule-item">
            <div className="schedule-time">
              <FaClock />

              <span>10:15 - 11:15</span>
            </div>

            <div className="schedule-content">
              <h6>Database Management</h6>

              <div className="schedule-meta">
                <span>
                  <FaUserTie />
                  Prof. Patil
                </span>

                <span>
                  <FaMapMarkerAlt />
                  Lab 2
                </span>
              </div>
            </div>

            <span className="badge bg-warning text-dark">Next</span>
          </div>

          <div className="schedule-item break">
            <div className="schedule-time">
              <FaClock />

              <span>11:15 - 12:00</span>
            </div>

            <div className="schedule-content">
              <h6>Lunch Break</h6>

              <small className="text-muted">No Scheduled Class</small>
            </div>
          </div>

          <div className="schedule-item">
            <div className="schedule-time">
              <FaClock />

              <span>01:00 - 02:00</span>
            </div>

            <div className="schedule-content">
              <h6>Operating System</h6>

              <div className="schedule-meta">
                <span>
                  <FaUserTie />
                  Prof. Kulkarni
                </span>

                <span>
                  <FaMapMarkerAlt />
                  Room 205
                </span>
              </div>
            </div>

            <span className="badge bg-secondary">Upcoming</span>
          </div>
        </div>
      </div>
      {/* ===========================
    Weekly Timetable
=========================== */}

      <div className="card border-0 shadow-sm mt-4">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="fw-bold mb-1">Weekly Timetable</h5>

              <small className="text-muted">
                Semester 5 • Computer Science
              </small>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table timetable-table align-middle">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Monday</th>
                  <th>Tuesday</th>
                  <th>Wednesday</th>
                  <th>Thursday</th>
                  <th>Friday</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="time-slot">
                    09:00
                    <br />
                    10:00
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>DS</h6>

                      <small>R-301</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>DBMS</h6>

                      <small>R-205</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>AI</h6>

                      <small>Lab-2</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>DS</h6>

                      <small>R-301</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>DBMS</h6>

                      <small>R-205</small>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="time-slot">
                    10:15
                    <br />
                    11:15
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>OS</h6>

                      <small>R-108</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>AI</h6>

                      <small>Lab-2</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>OS</h6>

                      <small>R-108</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>LAB</h6>

                      <small>Lab-1</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>AI</h6>

                      <small>Lab-2</small>
                    </div>
                  </td>
                </tr>

                <tr className="break-row">
                  <td className="time-slot">
                    11:15
                    <br />
                    12:00
                  </td>

                  <td colSpan="5">
                    <strong>Lunch Break</strong>
                  </td>
                </tr>

                <tr>
                  <td className="time-slot">
                    01:00
                    <br />
                    02:00
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>LAB</h6>

                      <small>Lab-3</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>DS</h6>

                      <small>R-301</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>DBMS</h6>

                      <small>R-205</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>AI</h6>

                      <small>Lab-2</small>
                    </div>
                  </td>

                  <td>
                    <div className="subject-box">
                      <h6>OS</h6>

                      <small>R-108</small>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeTable;
