import {
  FaBullhorn,
  FaCalendarAlt,
  FaArrowRight,
  FaUniversity,
} from "react-icons/fa";

import "./StdNotice.css";

function StdNotice() {
  return (
    <div className="notice-page">
      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Notices</h2>

          <p className="text-muted mb-0">
            Stay updated with the latest announcements and academic notices.
          </p>
        </div>

        <button className="btn btn-primary px-4">Semester 5</button>
      </div>

      {/* Featured Notices */}

      <div className="row g-4">
        {/* Notice */}

        <div className="col-lg-6">
          <div className="featured-notice important">
            <div className="notice-icon bg-danger">
              <FaBullhorn />
            </div>

            <div className="notice-content">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <span className="badge bg-danger mb-2">Important</span>

                  <h5 className="fw-bold">Mid Semester Examination Schedule</h5>
                </div>
              </div>

              <p className="text-muted mb-3">
                The examination timetable for Semester 5 has been published.
                Students are advised to download the schedule.
              </p>

              <div className="notice-footer">
                <span>
                  <FaUniversity />
                  Examination Cell
                </span>

                <span>
                  <FaCalendarAlt />
                  Today
                </span>
              </div>

              <button className="btn btn-outline-danger btn-sm mt-3">
                View Notice
                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Notice */}

        <div className="col-lg-6">
          <div className="featured-notice">
            <div className="notice-icon bg-success">
              <FaBullhorn />
            </div>

            <div className="notice-content">
              <span className="badge bg-success mb-2">New</span>

              <h5 className="fw-bold">College Holiday Notice</h5>

              <p className="text-muted mb-3">
                The college will remain closed this Friday on account of a
                public holiday. Regular classes will resume on Monday.
              </p>

              <div className="notice-footer">
                <span>
                  <FaUniversity />
                  Administration
                </span>

                <span>
                  <FaCalendarAlt />
                  Yesterday
                </span>
              </div>

              <button className="btn btn-outline-success btn-sm mt-3">
                View Notice
                <FaArrowRight className="ms-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StdNotice;
