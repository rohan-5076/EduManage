import { Link } from "react-router-dom";
import {
  FaSearch,
  FaPlus,
  FaRedo,
  FaEye,
  FaEdit,
  FaTrash,
  FaClipboardList,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import "./Exam.css";

function ListExam() {
  return (
    <div className="exam-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <h2>Examinations</h2>

          <p>
            Dashboard /<span> Examination</span>
          </p>
        </div>

        <Link to="/add-exam" className="btn btn-primary">
          <FaPlus className="me-2" />
          Add Exam
        </Link>
      </div>

      {/* Dashboard */}

      <div className="row g-4 mb-4">
        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-primary">
              <FaClipboardList />
            </div>

            <div>
              <small>Total Exams</small>

              <h3>42</h3>

              <span>Academic Year</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-success">
              <FaCheckCircle />
            </div>

            <div>
              <small>Completed</small>

              <h3>18</h3>

              <span>Finished</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-warning">
              <FaClock />
            </div>

            <div>
              <small>Upcoming</small>

              <h3>20</h3>

              <span>Scheduled</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-danger">
              <FaCalendarAlt />
            </div>

            <div>
              <small>Today's Exams</small>

              <h3>4</h3>

              <span>Running</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}

      <div className="filter-card">
        <div className="row g-3">
          <div className="col-lg-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Exam..."
            />
          </div>

          <div className="col-lg-2">
            <select className="form-select">
              <option>Course</option>
            </select>
          </div>

          <div className="col-lg-2">
            <select className="form-select">
              <option>Semester</option>
            </select>
          </div>

          <div className="col-lg-2">
            <select className="form-select">
              <option>Status</option>

              <option>Upcoming</option>

              <option>Completed</option>
            </select>
          </div>

          <div className="col-lg-3 d-flex gap-2">
            <button className="btn btn-primary flex-fill">
              <FaSearch className="me-2" />
              Search
            </button>

            <button className="btn btn-outline-secondary">
              <FaRedo />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold mb-0">Exam Directory</h5>

            <small className="text-muted">Showing All Examinations</small>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>

                  <th>Exam</th>

                  <th>Course</th>

                  <th>Semester</th>

                  <th>Subject</th>

                  <th>Date</th>

                  <th>Time</th>

                  <th>Marks</th>

                  <th>Status</th>

                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>

                  <td>
                    <div>
                      <h6 className="mb-0">Mid Semester</h6>

                      <small className="text-muted">Internal</small>
                    </div>
                  </td>

                  <td>BCA</td>

                  <td>Semester 5</td>

                  <td>DBMS</td>

                  <td>20 Aug 2026</td>

                  <td>10:00 AM</td>

                  <td>50</td>

                  <td>
                    <span className="status upcoming">Upcoming</span>
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListExam;
