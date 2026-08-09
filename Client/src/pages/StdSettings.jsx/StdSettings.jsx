import {
  FaUserGraduate,
  FaEnvelope,
  FaIdCard,
  FaGraduationCap,
  FaUniversity,
  FaPen,
} from "react-icons/fa";
      import {
    FaLock,
    FaShieldAlt,
    FaLaptop,
    FaSignOutAlt,
    FaChevronRight,
} from "react-icons/fa";

import "./StdSettings.css";

function StdSettings() {
  return (
    <div className="settings-page">
      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Settings</h2>

          <p className="text-muted mb-0">
            Manage your account information and preferences.
          </p>
        </div>
      </div>

      {/* Account Card */}

      <div className="card border-0 shadow-sm account-card">
        <div className="card-body">
          <div className="row align-items-center">
            {/* Profile */}

            <div className="col-lg-4 text-center border-end">
              <div className="profile-avatar">
                <FaUserGraduate />
              </div>

              <h4 className="fw-bold mt-3 mb-1">Rohan Patil</h4>

              <p className="text-muted mb-3">Computer Science Student</p>

              <button className="btn btn-primary">
                <FaPen className="me-2" />
                Edit Profile
              </button>
            </div>

            {/* Details */}

            <div className="col-lg-8">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="info-box">
                    <FaEnvelope className="info-icon text-primary" />

                    <div>
                      <small>Email</small>

                      <h6>rohan@gmail.com</h6>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-box">
                    <FaIdCard className="info-icon text-success" />

                    <div>
                      <small>Student ID</small>

                      <h6>STU24001</h6>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-box">
                    <FaGraduationCap className="info-icon text-warning" />

                    <div>
                      <small>Course</small>

                      <h6>B.Tech Computer Science</h6>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-box">
                    <FaUniversity className="info-icon text-danger" />

                    <div>
                      <small>Department</small>

                      <h6>Engineering</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================
    Preferences
=========================== */}

      <div className="card border-0 shadow-sm preference-card mt-4">
        <div className="card-body">
          <div className="mb-4">
            <h5 className="fw-bold mb-1">Preferences</h5>

            <small className="text-muted">
              Customize your account experience.
            </small>
          </div>

          <div className="row g-4">
            {/* Dark Mode */}

            <div className="col-lg-6">
              <div className="setting-item">
                <div>
                  <h6 className="mb-1">Dark Mode</h6>

                  <small className="text-muted">
                    Enable dark theme for the student portal.
                  </small>
                </div>

                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </div>
            </div>

            {/* Email Notifications */}

            <div className="col-lg-6">
              <div className="setting-item">
                <div>
                  <h6 className="mb-1">Email Notifications</h6>

                  <small className="text-muted">
                    Receive important updates via email.
                  </small>
                </div>

                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked
                  />
                </div>
              </div>
            </div>

            {/* SMS Notifications */}

            <div className="col-lg-6">
              <div className="setting-item">
                <div>
                  <h6 className="mb-1">SMS Notifications</h6>

                  <small className="text-muted">
                    Get SMS alerts for urgent announcements.
                  </small>
                </div>

                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" />
                </div>
              </div>
            </div>

            {/* Language */}

            <div className="col-lg-6">
              <div className="setting-item">
                <div>
                  <h6 className="mb-1">Language</h6>

                  <small className="text-muted">
                    Choose your preferred language.
                  </small>
                </div>

                <select className="form-select setting-select">
                  <option>English</option>
                  <option>मराठी</option>
                  <option>Hindi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* ===========================
    Security
=========================== */}

<div className="card border-0 shadow-sm security-card mt-4">

    <div className="card-body">

        <div className="mb-4">

            <h5 className="fw-bold mb-1">
                Security
            </h5>

            <small className="text-muted">
                Manage your account security and login settings.
            </small>

        </div>

        <div className="security-list">

            {/* Change Password */}

            <div className="security-item">

                <div className="security-left">

                    <div className="security-icon bg-primary">

                        <FaLock />

                    </div>

                    <div>

                        <h6>Change Password</h6>

                        <small className="text-muted">
                            Update your account password regularly.
                        </small>

                    </div>

                </div>

                <button className="btn btn-light">

                    <FaChevronRight />

                </button>

            </div>

            {/* Two Factor */}

            <div className="security-item">

                <div className="security-left">

                    <div className="security-icon bg-success">

                        <FaShieldAlt />

                    </div>

                    <div>

                        <h6>Two-Factor Authentication</h6>

                        <small className="text-muted">
                            Add an extra layer of account protection.
                        </small>

                    </div>

                </div>

                <button className="btn btn-light">

                    <FaChevronRight />

                </button>

            </div>

            {/* Sessions */}

            <div className="security-item">

                <div className="security-left">

                    <div className="security-icon bg-warning">

                        <FaLaptop />

                    </div>

                    <div>

                        <h6>Active Sessions</h6>

                        <small className="text-muted">
                            View and manage devices currently signed in.
                        </small>

                    </div>

                </div>

                <button className="btn btn-light">

                    <FaChevronRight />

                </button>

            </div>

            {/* Logout */}

            <div className="security-item">

                <div className="security-left">

                    <div className="security-icon bg-danger">

                        <FaSignOutAlt />

                    </div>

                    <div>

                        <h6>Logout from All Devices</h6>

                        <small className="text-muted">
                            Sign out from every device except this one.
                        </small>

                    </div>

                </div>

                <button className="btn btn-outline-danger">

                    Logout

                </button>

            </div>

        </div>

    </div>

</div>
    </div>
  );
}

export default StdSettings;
