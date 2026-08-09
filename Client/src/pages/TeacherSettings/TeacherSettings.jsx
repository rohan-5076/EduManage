
import {
      FaLock,
  FaShieldAlt,
  FaLaptop,
  FaSignOutAlt,
  FaChevronRight,
  FaUserTie,
  FaEnvelope,
  FaIdCard,
  FaChalkboardTeacher,
  FaUniversity,
  FaPen,
} from "react-icons/fa";

import "./TeacherSettings.css";

function TeacherSettings() {
  return (
    <div className="settings-page">

      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <div>

          <h2 className="fw-bold mb-1">
            Settings
          </h2>

          <p className="text-muted mb-0">
            Manage your profile information and account preferences.
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

                <FaUserTie />

              </div>

              <h4 className="fw-bold mt-3 mb-1">
                Dr. Amit Sharma
              </h4>

              <p className="text-muted mb-3">
                Assistant Professor
              </p>

              <button className="btn btn-primary">

                <FaPen className="me-2" />

                Edit Profile

              </button>

            </div>

            {/* Information */}

            <div className="col-lg-8">

              <div className="row g-4">

                {/* Email */}

                <div className="col-md-6">

                  <div className="info-box">

                    <FaEnvelope className="info-icon text-primary" />

                    <div>

                      <small>Email</small>

                      <h6>amit.sharma@college.edu</h6>

                    </div>

                  </div>

                </div>

                {/* Employee ID */}

                <div className="col-md-6">

                  <div className="info-box">

                    <FaIdCard className="info-icon text-success" />

                    <div>

                      <small>Employee ID</small>

                      <h6>EMP1024</h6>

                    </div>

                  </div>

                </div>

                {/* Department */}

                <div className="col-md-6">

                  <div className="info-box">

                    <FaUniversity className="info-icon text-warning" />

                    <div>

                      <small>Department</small>

                      <h6>Computer Science</h6>

                    </div>

                  </div>

                </div>

                {/* Designation */}

                <div className="col-md-6">

                  <div className="info-box">

                    <FaChalkboardTeacher className="info-icon text-danger" />

                    <div>

                      <small>Designation</small>

                      <h6>Assistant Professor</h6>

                    </div>

                  </div>

                </div>

                {/* Qualification */}

                <div className="col-md-6">

                  <div className="info-box">

                    <FaChalkboardTeacher className="info-icon text-info" />

                    <div>

                      <small>Qualification</small>

                      <h6>M.Tech, Ph.D.</h6>

                    </div>

                  </div>

                </div>

                {/* Experience */}

                <div className="col-md-6">

                  <div className="info-box">

                    <FaUserTie className="info-icon text-secondary" />

                    <div>

                      <small>Experience</small>

                      <h6>8 Years</h6>

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

            <h5 className="fw-bold mb-1">
                Preferences
            </h5>

            <small className="text-muted">
                Customize your teaching experience and notification preferences.
            </small>

        </div>

        <div className="row g-4">

            {/* Dark Mode */}

            <div className="col-lg-6">

                <div className="setting-item">

                    <div>

                        <h6 className="mb-1">
                            Dark Mode
                        </h6>

                        <small className="text-muted">
                            Switch between light and dark appearance.
                        </small>

                    </div>

                    <div className="form-check form-switch">

                        <input
                            className="form-check-input"
                            type="checkbox"
                        />

                    </div>

                </div>

            </div>

            {/* Email Notifications */}

            <div className="col-lg-6">

                <div className="setting-item">

                    <div>

                        <h6 className="mb-1">
                            Email Notifications
                        </h6>

                        <small className="text-muted">
                            Receive academic updates and announcements.
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

            {/* Lecture Reminders */}

            <div className="col-lg-6">

                <div className="setting-item">

                    <div>

                        <h6 className="mb-1">
                            Lecture Reminders
                        </h6>

                        <small className="text-muted">
                            Get reminders before your scheduled lectures.
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

            {/* Attendance Alerts */}

            <div className="col-lg-6">

                <div className="setting-item">

                    <div>

                        <h6 className="mb-1">
                            Attendance Alerts
                        </h6>

                        <small className="text-muted">
                            Receive reminders to submit attendance records.
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

            {/* Language */}

            <div className="col-lg-6">

                <div className="setting-item">

                    <div>

                        <h6 className="mb-1">
                            Language
                        </h6>

                        <small className="text-muted">
                            Select your preferred language.
                        </small>

                    </div>

                    <select className="form-select setting-select">

                        <option>English</option>
                        <option>मराठी</option>
                        <option>Hindi</option>

                    </select>

                </div>

            </div>

            {/* Time Zone */}

            <div className="col-lg-6">

                <div className="setting-item">

                    <div>

                        <h6 className="mb-1">
                            Time Zone
                        </h6>

                        <small className="text-muted">
                            Configure your local time zone.
                        </small>

                    </div>

                    <select className="form-select setting-select">

                        <option>Asia/Kolkata (IST)</option>
                        <option>UTC</option>

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
                Keep your faculty account secure and manage your login settings.
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
                            Update your password to protect your faculty account.
                        </small>

                    </div>

                </div>

                <button className="btn btn-light">

                    <FaChevronRight />

                </button>

            </div>

            {/* Two Factor Authentication */}

            <div className="security-item">

                <div className="security-left">

                    <div className="security-icon bg-success">

                        <FaShieldAlt />

                    </div>

                    <div>

                        <h6>Two-Factor Authentication</h6>

                        <small className="text-muted">
                            Enable two-factor authentication for enhanced security.
                        </small>

                    </div>

                </div>

                <button className="btn btn-light">

                    <FaChevronRight />

                </button>

            </div>

            {/* Active Sessions */}

            <div className="security-item">

                <div className="security-left">

                    <div className="security-icon bg-warning">

                        <FaLaptop />

                    </div>

                    <div>

                        <h6>Active Sessions</h6>

                        <small className="text-muted">
                            Review devices currently signed in to your account.
                        </small>

                    </div>

                </div>

                <button className="btn btn-light">

                    <FaChevronRight />

                </button>

            </div>

            {/* Logout All Devices */}

            <div className="security-item">

                <div className="security-left">

                    <div className="security-icon bg-danger">

                        <FaSignOutAlt />

                    </div>

                    <div>

                        <h6>Logout from All Devices</h6>

                        <small className="text-muted">
                            Sign out of your faculty account on every device except this one.
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

export default TeacherSettings;