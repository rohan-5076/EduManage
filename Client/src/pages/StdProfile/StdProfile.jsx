import "./StudentProfile.css";

import {
  FaUserEdit,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaTint,
  FaVenusMars,
  FaUserGraduate,
} from "react-icons/fa";

function StdProfile() {
  return (
    <div className="student-profile-page">
      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Student Profile</h2>

          <p className="text-muted mb-0">View your personal information</p>
        </div>

        <button className="btn btn-primary rounded-pill px-4">
          <FaUserEdit className="me-2" />
          Edit Profile
        </button>
      </div>

      <div className="row g-4">
        {/* Left Card */}

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm profile-card">
            <div className="card-body text-center">
              <img
                src="https://i.pravatar.cc/200?img=15"
                alt=""
                className="profile-image"
              />

              <h4 className="fw-bold mt-3">Rohan Patil</h4>

              <p className="text-muted">Computer Science</p>

              <span className="badge bg-primary px-3 py-2">Semester 5</span>

              <div className="mt-3">
                <span className="badge bg-success px-3 py-2">
                  Active Student
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card */}

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm profile-card">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Personal Information</h5>

              <div className="row">
                <div className="col-md-6 mb-4">
                  <small className="text-muted">Full Name</small>

                  <h6>
                    <FaUserGraduate className="me-2 text-primary" />
                    Rohan Patil
                  </h6>
                </div>

                <div className="col-md-6 mb-4">
                  <small className="text-muted">Email</small>

                  <h6>
                    <FaEnvelope className="me-2 text-danger" />
                    rohan@gmail.com
                  </h6>
                </div>

                <div className="col-md-6 mb-4">
                  <small className="text-muted">Mobile Number</small>

                  <h6>
                    <FaPhone className="me-2 text-success" />
                    +91 9876543210
                  </h6>
                </div>

                <div className="col-md-6 mb-4">
                  <small className="text-muted">Date of Birth</small>

                  <h6>
                    <FaBirthdayCake className="me-2 text-warning" />
                    20 June 2004
                  </h6>
                </div>

                <div className="col-md-6">
                  <small className="text-muted">Gender</small>

                  <h6>
                    <FaVenusMars className="me-2 text-info" />
                    Male
                  </h6>
                </div>

                <div className="col-md-6">
                  <small className="text-muted">Blood Group</small>

                  <h6>
                    <FaTint className="me-2 text-danger" />
                    B+
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Academic Information */}

      <div className="row mt-2">
        <div className="col-12">
          <div className="card border-0 shadow-sm profile-card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Academic Information</h5>

                <span className="badge bg-primary px-3 py-2">
                  Current Semester
                </span>
              </div>

              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="info-box">
                    <small>Enrollment No.</small>

                    <h6>CS230145</h6>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="info-box">
                    <small>Roll Number</small>

                    <h6>45</h6>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="info-box">
                    <small>Course</small>

                    <h6>B.Tech CSE</h6>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="info-box">
                    <small>Department</small>

                    <h6>Computer Engineering</h6>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 mb-4">
                  <div className="info-box">
                    <small>Batch</small>

                    <h6>2023 - 2027</h6>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 mb-4">
                  <div className="info-box">
                    <small>Semester</small>

                    <h6>Semester 5</h6>
                  </div>
                </div>

                <div className="col-lg-3 col-md-4 mb-4">
                  <div className="info-box">
                    <small>Admission Date</small>

                    <h6>10 Aug 2023</h6>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-4">
                  <div className="info-box cgpa-box">
                    <small>Current CGPA</small>

                    <h4 className="text-primary fw-bold mb-0">8.91</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Parent Information & Address */}

      <div className="row g-4 mt-2">
        {/* Parent Information */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm profile-card h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Parent Information</h5>

              <div className="row">
                <div className="col-12 mb-4">
                  <div className="info-box">
                    <small>Father's Name</small>

                    <h6>Mr. Sunil Patil</h6>
                  </div>
                </div>

                <div className="col-12 mb-4">
                  <div className="info-box">
                    <small>Mother's Name</small>

                    <h6>Mrs. Anita Patil</h6>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-box">
                    <small>Mobile Number</small>

                    <h6>+91 9876543210</h6>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-box">
                    <small>Email Address</small>

                    <h6>parent@gmail.com</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Address */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm profile-card h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Address Information</h5>

              <div className="row">
                <div className="col-12 mb-4">
                  <div className="info-box">
                    <small>Permanent Address</small>

                    <h6>Plot No. 25, Shivaji Nagar, Aurangabad, Maharashtra</h6>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="info-box">
                    <small>City</small>

                    <h6>Aurangabad</h6>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="info-box">
                    <small>State</small>

                    <h6>Maharashtra</h6>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-box">
                    <small>Country</small>

                    <h6>India</h6>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="info-box">
                    <small>PIN Code</small>

                    <h6>431001</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Documents & Account */}

      <div className="row g-4 mt-2">
        {/* Documents */}

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm profile-card h-100">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0">Documents</h5>

                <button className="btn btn-primary btn-sm">
                  Upload Document
                </button>
              </div>

              <div className="row g-3">
                {/* Aadhaar */}

                <div className="col-md-6">
                  <div className="document-card">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="document-icon bg-primary">📄</div>

                        <h6 className="mt-3 mb-1">Aadhaar Card</h6>

                        <small className="text-muted">Government ID</small>
                      </div>

                      <span className="badge bg-success">Verified</span>
                    </div>

                    <button className="btn btn-outline-primary btn-sm w-100 mt-3">
                      View Document
                    </button>
                  </div>
                </div>

                {/* SSC */}

                <div className="col-md-6">
                  <div className="document-card">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="document-icon bg-success">📑</div>

                        <h6 className="mt-3 mb-1">SSC Marksheet</h6>

                        <small className="text-muted">
                          Class 10 Certificate
                        </small>
                      </div>

                      <span className="badge bg-success">Uploaded</span>
                    </div>

                    <button className="btn btn-outline-primary btn-sm w-100 mt-3">
                      View Document
                    </button>
                  </div>
                </div>

                {/* HSC */}

                <div className="col-md-6">
                  <div className="document-card">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="document-icon bg-warning">📚</div>

                        <h6 className="mt-3 mb-1">HSC Marksheet</h6>

                        <small className="text-muted">
                          Class 12 Certificate
                        </small>
                      </div>

                      <span className="badge bg-success">Uploaded</span>
                    </div>

                    <button className="btn btn-outline-primary btn-sm w-100 mt-3">
                      View Document
                    </button>
                  </div>
                </div>

                {/* Bonafide */}

                <div className="col-md-6">
                  <div className="document-card">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <div className="document-icon bg-danger">📋</div>

                        <h6 className="mt-3 mb-1">Bonafide Certificate</h6>

                        <small className="text-muted">
                          Student Certificate
                        </small>
                      </div>

                      <span className="badge bg-warning text-dark">
                        Pending
                      </span>
                    </div>

                    <button className="btn btn-outline-secondary btn-sm w-100 mt-3">
                      Request
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Account Information */}

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm profile-card h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Account Information</h5>

              <div className="info-box mb-3">
                <small>Username</small>

                <h6>rohan123</h6>
              </div>

              <div className="info-box mb-3">
                <small>Student ID</small>

                <h6>STD2026001</h6>
              </div>

              <div className="info-box mb-3">
                <small>Account Status</small>

                <h6>
                  <span className="badge bg-success">Active</span>
                </h6>
              </div>

              <div className="info-box">
                <small>Last Login</small>

                <h6>27 Jul 2026, 10:15 AM</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Actions & Account */}

      <div className="row g-4 mt-2">
        {/* Quick Actions */}

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm profile-card">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Quick Actions</h5>

              <div className="row g-3">
                <div className="col-md-6">
                  <button className="btn btn-light action-btn w-100">
                    <div className="action-icon bg-primary">🎓</div>

                    <div>
                      <h6 className="mb-1">Download ID Card</h6>

                      <small>Student Identity Card</small>
                    </div>
                  </button>
                </div>

                <div className="col-md-6">
                  <button className="btn btn-light action-btn w-100">
                    <div className="action-icon bg-success">📄</div>

                    <div>
                      <h6 className="mb-1">Bonafide Certificate</h6>

                      <small>Download PDF</small>
                    </div>
                  </button>
                </div>

                <div className="col-md-6">
                  <button className="btn btn-light action-btn w-100">
                    <div className="action-icon bg-warning">💰</div>

                    <div>
                      <h6 className="mb-1">Fee Receipt</h6>

                      <small>Latest Payment</small>
                    </div>
                  </button>
                </div>

                <div className="col-md-6">
                  <button className="btn btn-light action-btn w-100">
                    <div className="action-icon bg-danger">📊</div>

                    <div>
                      <h6 className="mb-1">Semester Result</h6>

                      <small>Download Marksheet</small>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Account Security */}

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm profile-card h-100">
            <div className="card-body">
              <h5 className="fw-bold mb-4">Account Security</h5>

              <div className="security-item">
                <small>Password</small>

                <h6>••••••••••</h6>
              </div>

              <hr />

              <div className="security-item">
                <small>Last Login</small>

                <h6>Today, 10:15 AM</h6>
              </div>

              <hr />

              <div className="security-item">
                <small>Registered Device</small>

                <h6>Windows PC</h6>
              </div>

              <hr />

              <button className="btn btn-outline-primary w-100">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StdProfile;
