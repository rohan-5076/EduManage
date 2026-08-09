import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Sidebar.css";

import {
  FaChevronLeft,
  FaChevronRight,
  FaTachometerAlt,
  FaUserCircle,
  FaBook,
  FaBookOpen,
  FaClipboardCheck,
  FaFileAlt,
  FaAward,
  FaCalendarAlt,
  FaBullhorn,
  FaCog,
} from "react-icons/fa";

function StudentSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("student");

    if (data) {
      setStudent(JSON.parse(data));
    }
  }, []);

  const menus = [
    {
      title: "OVERVIEW",
      items: [
        {
          name: "Dashboard",
          path: "/student/dashboard",
          icon: <FaTachometerAlt />,
        },
      ],
    },

    {
      title: "ACADEMICS",
      items: [
        {
          name: "My Profile",
          path: "/student/profile",
          icon: <FaUserCircle />,
        },

        {
          name: "Courses",
          path: "/student/courses",
          icon: <FaBook />,
        },

        {
          name: "Subjects",
          path: "/student/subjects",
          icon: <FaBookOpen />,
        },

        {
          name: "Attendance",
          path: "/student/attendance",
          icon: <FaClipboardCheck />,
        },

        {
          name: "Examinations",
          path: "/student/exams",
          icon: <FaFileAlt />,
        },

        {
          name: "Results",
          path: "/student/results",
          icon: <FaAward />,
        },

        {
          name: "Time Table",
          path: "/student/timetable",
          icon: <FaCalendarAlt />,
        },
      ],
    },

    {
      title: "GENERAL",
      items: [
        {
          name: "Notices",
          path: "/student/notices",
          icon: <FaBullhorn />,
          badge: 2,
        },

        {
          name: "Settings",
          path: "/student/settings",
          icon: <FaCog />,
        },
      ],
    },
  ];

  return (
    <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>

      {/* Header */}

      <div className="sidebar-header">
        {!collapsed && (
          <div className="logo">
            <div className="logo-icon">ES</div>

            <div>
              <h5>EduStudent</h5>
              <small>Student Portal</small>
            </div>
          </div>
        )}

        <button
          className="toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {/* Body */}

      <div className="sidebar-body">

        {menus.map((group, index) => (
          <div key={index}>

            {!collapsed && (
              <div className="menu-title">
                {group.title}
              </div>
            )}

            <ul className="sidebar-menu">

              {group.items.map((item, i) => (
                <li key={i}>

                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "sidebar-link active"
                        : "sidebar-link"
                    }
                  >
                    <span className="menu-icon">
                      {item.icon}
                    </span>

                    {!collapsed && (
                      <>
                        <span className="menu-name">
                          {item.name}
                        </span>

                        {item.badge && (
                          <span className="menu-badge">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}

                  </NavLink>

                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>

      {/* Footer */}

      <div className="sidebar-footer">

        {!collapsed && (
          <div className="profile-card">

            <img
              src={
                student?.profileImage ||
                "https://i.pravatar.cc/150?img=15"
              }
              alt="Student"
            />

            <div>

              <h6>
                {student?.fullName ||
                  student?.name ||
                  student?.username ||
                  "Student"}
              </h6>

              <small>
                {student?.course ||
                  student?.department ||
                  "Student"}
              </small>

            </div>

          </div>
        )}

      </div>

    </aside>
  );
}

export default StudentSidebar;