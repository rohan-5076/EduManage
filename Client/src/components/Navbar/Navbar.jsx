import "./Navbar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBell,
  FaSearch,
  FaBars,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

function Navbar({ toggleSidebar }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");

  useEffect(() => {
    const teacher = localStorage.getItem("teacher");
    const student = localStorage.getItem("student");

    if (teacher) {
      setUser(JSON.parse(teacher));
      setRole("Administrator");
    } else if (student) {
      setUser(JSON.parse(student));
      setRole("Student");
    }
  }, []);

  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const handleLogout = () => {
    localStorage.clear();

    navigate("/");

    window.location.reload();
  };
console.log("showProfile:", showProfile);
  return (
    <nav className="navbar navbar-expand-lg dashboard-navbar shadow-sm px-4">
      {/* Left */}

      <div className="d-flex align-items-center">
        <button
          className="btn sidebar-toggle me-3 d-lg-none"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>

        <div>
          <h5 className="mb-0 fw-bold">Student Management System</h5>

          <small className="text-muted">Admin Dashboard</small>
        </div>
      </div>

      {/* Right */}

      <div className="d-flex align-items-center ms-auto">
        {/* Search */}

        <div className="search-box me-4 d-none d-md-flex">
          <FaSearch className="search-icon" />

          <input
            type="text"
            className="form-control border-0"
            placeholder="Search..."
          />
        </div>

        {/* Email */}

        <button className="icon-btn me-3">
          <MdEmail />
          <span className="badge-count">2</span>
        </button>

        {/* Notification */}

        <button className="icon-btn me-4">
          <FaBell />
          <span className="badge-count">5</span>
        </button>

        {/* Profile */}

<div className="profile-wrapper">

<div className="profile-box">

  <button
    type="button"
    className="profile-btn"
    onClick={() => setShowProfile(prev => !prev)}
  >
    <FaUserCircle className="profile-icon" />
  </button>

  <div className="d-none d-md-block">
    <h6 className="mb-0">
      {user?.fullName || user?.name || user?.username || "Guest"}
    </h6>

    <small className="text-muted">
      {role}
    </small>
  </div>

</div>

  {showProfile && (

    <div className="profile-card">

      <FaUserCircle className="profile-card-icon" />

      <h5>
        {user?.fullName ||
          user?.name ||
          user?.username}
      </h5>

      <p>{role}</p>

      <button
        className="btn btn-danger w-100"
        onClick={handleLogout}
      >
        <FaSignOutAlt className="me-2" />
        Logout
      </button>

    </div>

  )}

</div>
      </div>
    </nav>
  );
}

export default Navbar;
