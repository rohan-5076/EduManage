import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTachometerAlt,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaBookOpen,
  FaClipboardCheck,
  FaFileAlt,
  FaMoneyBillWave,
  FaBullhorn,
  FaRobot,
  FaChartLine,
  FaExclamationTriangle,
  FaCog,
  FaSignOutAlt,
  FaAngleDown,
  FaAngleRight,
} from "react-icons/fa";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [showAI, setShowAI] = useState(false);

  const menus = [
    {
      title: "OVERVIEW",
      items: [
        {
          name: "Dashboard",
          path: "/dashboard",
          icon: <FaTachometerAlt />,
        },
      ],
    },

    {
      title: "ACADEMICS",
      items: [
        {
          name: "Students",
          path: "/students",
          icon: <FaUserGraduate />,
          badge: 1250,
        },

        {
          name: "Teachers",
          path: "/teachers",
          icon: <FaChalkboardTeacher />,
        },

        {
          name: "Courses",
          path: "/course",
          icon: <FaBook />,
        },

        {
          name: "Subjects",
          path: "/list-subject",
          icon: <FaBookOpen />,
        },
      ],
    },

    {
      title: "MANAGEMENT",
      items: [
        {
          name: "Attendance",
          path: "/attendance",
          icon: <FaClipboardCheck />,
        },

        {
          name: "Exams",
          path: "/exams",
          icon: <FaFileAlt />,
        },
        {
          name: "Marks Entry",
          path: "/marks-entry",
          icon: <FaFileAlt />,
        },

        {
          name: "Fees",
          path: "/fees",
          icon: <FaMoneyBillWave />,
        },

        {
          name: "Notice Board",
          path: "/notice",
          icon: <FaBullhorn />,
          badge: 4,
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

              <small>Management System</small>
            </div>
          </div>
        )}

        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {/* Body */}

      <div className="sidebar-body">
        {menus.map((group, index) => (
          <div key={index}>
            {!collapsed && <div className="menu-title">{group.title}</div>}

            <ul className="sidebar-menu">
              {group.items.map((item, i) => (
                <li key={i}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "sidebar-link active" : "sidebar-link"
                    }
                  >
                    <span className="menu-icon">{item.icon}</span>

                    {!collapsed && (
                      <>
                        <span className="menu-name">{item.name}</span>

                        {item.badge && (
                          <span className="menu-badge">{item.badge}</span>
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* AI */}

        {!collapsed && <div className="menu-title">AI MODULES</div>}

        <button className="ai-btn my-2" onClick={() => setShowAI(!showAI)}>
          <div>
            <FaRobot />

            {!collapsed && <span>AI Assistant</span>}
          </div>

          {!collapsed && (showAI ? <FaAngleDown /> : <FaAngleRight />)}
        </button>

        {showAI && (
          <ul className="sidebar-menu ai-menu">
            
            <li>
              <NavLink to="/ai/chat" className="sidebar-link">
                <FaRobot />

                {!collapsed && <span>Chat</span>}
              </NavLink> 
            </li>
            <li>
              <NavLink to="/ai/analytics" className="sidebar-link">
                <FaChartLine />

                {!collapsed && <span>Analytics</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/ai/risk" className="sidebar-link">
                <FaExclamationTriangle />

                {!collapsed && <span>Student Risk</span>}
              </NavLink>
            </li>
          </ul>
        )}

        {!collapsed && <div className="menu-title">GENERALS</div>}

        <li>
          <NavLink
            to="/teacher/settings"
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
          >
            <FaCog className="sidebar-icon" />
            {!collapsed && <span>Settings</span>}
          </NavLink>
        </li>
      </div>

      {/* Footer */}

      <div className="sidebar-footer">
        {!collapsed && (
          <div className="profile-card">
            <img src="https://i.pravatar.cc/150?img=12" alt="" />

            <div>
              <h6>Admin</h6>

              <small>Super Administrator</small>
            </div>
          </div>
        )}

        {/* <button className="logout-btn">
          <FaSignOutAlt />

          {!collapsed && <span>Logout</span>}
        </button> */}
      </div>
    </aside>
  );
}

export default Sidebar;
