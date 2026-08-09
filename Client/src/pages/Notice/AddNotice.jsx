import { Link } from "react-router-dom";
import {
  FaBullhorn,
  FaBell,
  FaUsers,
  FaCalendarAlt,
  FaSave,
} from "react-icons/fa";
import "./Notice.css";

function AddNotice() {
  return (
    <div className="notice-page">

      {/* Header */}

      <div className="page-header">

        <div>
          <h2>Add Notice</h2>

          <p>
            Dashboard /
            <span> Notice Board</span> /
            <span> Add Notice</span>
          </p>
        </div>

        <Link
          to="/notice"
          className="btn btn-outline-primary"
        >
          View Notices
        </Link>

      </div>

      {/* Dashboard Cards */}

      <div className="row g-4 mb-4">

        <div className="col-lg-3 col-md-6">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-primary">
              <FaBullhorn />
            </div>
            <div>
              <small>Total Notices</small>
              <h3>156</h3>
              <span>All Time</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-success">
              <FaBell />
            </div>
            <div>
              <small>Published</small>
              <h3>124</h3>
              <span>Active</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
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

        <div className="col-lg-3 col-md-6">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-danger">
              <FaCalendarAlt />
            </div>
            <div>
              <small>Today's Notices</small>
              <h3>4</h3>
              <span>Published</span>
            </div>
          </div>
        </div>

      </div>

      {/* Form */}

      <div className="card notice-card shadow-sm border-0">

        <div className="card-header bg-white border-0">

          <h4 className="fw-bold mb-1">

            Notice Information

          </h4>

          <small className="text-muted">

            Publish a new announcement

          </small>

        </div>

        <div className="card-body">

          <div className="row">

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">

                Notice Title

              </label>

              <input
                type="text"
                className="form-control custom-input"
                placeholder="Enter Notice Title"
              />

            </div>

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">

                Notice Category

              </label>

              <select className="form-select custom-input">

                <option>Select Category</option>

                <option>General</option>

                <option>Examination</option>

                <option>Admission</option>

                <option>Holiday</option>

                <option>Placement</option>

                <option>Event</option>

              </select>

            </div>

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">

                Audience

              </label>

              <select className="form-select custom-input">

                <option>Select Audience</option>

                <option>All</option>

                <option>Students</option>

                <option>Teachers</option>

                <option>Staff</option>

              </select>

            </div>

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">

                Publish Date

              </label>

              <input
                type="date"
                className="form-control custom-input"
              />

            </div>

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">

                Expiry Date

              </label>

              <input
                type="date"
                className="form-control custom-input"
              />

            </div>

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">

                Attachment

              </label>

              <input
                type="file"
                className="form-control custom-input"
              />

            </div>

            <div className="col-12 mb-4">

              <label className="form-label fw-semibold">

                Notice Description

              </label>

              <textarea
                rows="6"
                className="form-control"
                placeholder="Write notice details..."
              ></textarea>

            </div>

            <div className="col-md-6">

              <label className="form-label fw-semibold">

                Status

              </label>

              <div className="form-check form-switch mt-2">

                <input
                  className="form-check-input"
                  type="checkbox"
                />

                <label className="ms-2">

                  Publish Notice

                </label>

              </div>

            </div>

          </div>

          <hr />

          <div className="d-flex justify-content-end gap-3">

            <button className="btn btn-outline-secondary">

              Reset

            </button>

            <Link
              to="/notice"
              className="btn btn-danger"
            >
              Cancel
            </Link>

            <button className="btn btn-success">

              <FaSave className="me-2" />

              Publish Notice

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddNotice;