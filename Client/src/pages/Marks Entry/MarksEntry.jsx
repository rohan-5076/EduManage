import { Link } from "react-router-dom";
import {
  FaPlus,
  FaSearch,
  FaRedo,
  FaSave,
  FaClipboardCheck,
  FaUserGraduate,
  FaBookOpen,
  FaChartBar,
} from "react-icons/fa";
import "./Marks.css";

function MarksEntry() {
  return (
    <div className="marks-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <h2>Marks Entry</h2>

          <p>
            Dashboard /<span> Examination</span> /<span> Marks Entry</span>
          </p>
        </div>

        <Link to="/results" className="btn btn-primary">
          <FaChartBar className="me-2" />
          View Results
        </Link>
      </div>

      {/* Dashboard */}

      <div className="row g-4 mb-4">
        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-primary">
              <FaUserGraduate />
            </div>

            <div>
              <small>Students</small>

              <h3>120</h3>

              <span>Appearing</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-success">
              <FaClipboardCheck />
            </div>

            <div>
              <small>Marks Entered</small>

              <h3>85</h3>

              <span>Completed</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-warning">
              <FaBookOpen />
            </div>

            <div>
              <small>Subjects</small>

              <h3>12</h3>

              <span>Current Semester</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-danger">
              <FaChartBar />
            </div>

            <div>
              <small>Pending</small>

              <h3>35</h3>

              <span>Remaining</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter */}

      <div className="filter-card">
        <div className="row g-3">
          <div className="col-lg-3">
            <select className="form-select">
              <option>Select Course</option>
            </select>
          </div>

          <div className="col-lg-2">
            <select className="form-select">
              <option>Semester</option>
            </select>
          </div>

          <div className="col-lg-3">
            <select className="form-select">
              <option>Select Subject</option>
            </select>
          </div>

          <div className="col-lg-2">
            <select className="form-select">
              <option>Select Exam</option>
            </select>
          </div>

          <div className="col-lg-2 d-flex gap-2">
            <button className="btn btn-primary flex-fill">
              <FaSearch />
            </button>

            <button className="btn btn-outline-secondary">
              <FaRedo />
            </button>
          </div>
        </div>
      </div>

      {/* Student Marks */}

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-header bg-white">
          <h5 className="fw-bold mb-0">Student Marks Entry</h5>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>

                  <th>PRN</th>

                  <th>Student</th>

                  <th>Internal</th>

                  <th>External</th>

                  <th>Total</th>

                  <th>Grade</th>

                  <th>Result</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>

                  <td>CS24001</td>

                  <td>Rohan Patil</td>

                  <td>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="30"
                    />
                  </td>

                  <td>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="70"
                    />
                  </td>

                  <td>
                    <strong>100</strong>
                  </td>

                  <td>
                    <span className="badge bg-success">A+</span>
                  </td>

                  <td>
                    <span className="badge bg-primary">Pass</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="text-end mt-4">
        <button className="btn btn-success btn-lg">
          <FaSave className="me-2" />
          Save Marks
        </button>
      </div>
    </div>
  );
}

export default MarksEntry;
