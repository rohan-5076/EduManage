import { Link } from "react-router-dom";
import {
  FaBullhorn,
  FaBell,
  FaCalendarAlt,
  FaUsers,
  FaPlus,
  FaSearch,
  FaRedo,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import "./Notice.css";

function ListNotice() {
  return (
    <div className="notice-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <h2>Notice Board</h2>

          <p>
            Dashboard /<span> Notice Board</span>
          </p>
        </div>

        <Link to="/add-notice" className="btn btn-primary">
          <FaPlus className="me-2" />
          Add Notice
        </Link>
      </div>

      {/* Dashboard Cards */}

      <div className="row g-4 mb-4">
        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-primary">
              <FaBullhorn />
            </div>

            <div>
              <small>Total Notices</small>

              <h3>156</h3>

              <span>Published</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-success">
              <FaBell />
            </div>

            <div>
              <small>Active</small>

              <h3>124</h3>

              <span>Live Notices</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-warning">
              <FaUsers />
            </div>

            <div>
              <small>Students</small>

              <h3>850</h3>

              <span>Recipients</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-danger">
              <FaCalendarAlt />
            </div>

            <div>
              <small>Today's</small>

              <h3>4</h3>

              <span>New Notices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}

      <div className="filter-card">
        <div className="row g-3">
          <div className="col-lg-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Notice..."
            />
          </div>

          <div className="col-lg-2">
            <select className="form-select">
              <option>Category</option>

              <option>General</option>

              <option>Exam</option>

              <option>Placement</option>

              <option>Holiday</option>
            </select>
          </div>

          <div className="col-lg-2">
            <select className="form-select">
              <option>Audience</option>

              <option>Students</option>

              <option>Teachers</option>

              <option>Staff</option>
            </select>
          </div>

          <div className="col-lg-2">
            <select className="form-select">
              <option>Status</option>

              <option>Published</option>

              <option>Draft</option>

              <option>Expired</option>
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

      <div className="card border-0 shadow-sm mt-4">
        <div className="card-header bg-white">
          <h5 className="fw-bold mb-0">Notice Directory</h5>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>

                  <th>Title</th>

                  <th>Category</th>

                  <th>Audience</th>

                  <th>Publish Date</th>

                  <th>Expiry</th>

                  <th>Priority</th>

                  <th>Status</th>

                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>

                  <td>
                    <div>
                      <h6 className="mb-0">Mid Semester Examination</h6>

                      <small className="text-muted">Examination Notice</small>
                    </div>
                  </td>

                  <td>Examination</td>

                  <td>Students</td>

                  <td>15 Jul 2026</td>

                  <td>30 Jul 2026</td>

                  <td>
                    <span className="priority high">High</span>
                  </td>

                  <td>
                    <span className="status active">Published</span>
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

export default ListNotice;
