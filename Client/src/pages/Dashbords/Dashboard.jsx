import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBookOpen,
  FaUniversity,
  FaMoneyBillWave,
  FaCalendarCheck,
  FaArrowUp,
} from "react-icons/fa";

import { MdAssignment, MdNotifications, MdPeople } from "react-icons/md";

function Dashboard() {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);

  const LoadCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const LoadTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/teachers");
      setTeachers(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const LoadStudents = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/students");
      setStudents(res.data.data);
      console.log(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    LoadStudents();
    LoadTeachers();
    LoadCourses();
  }, []);

  const stats = [
    {
      title: "Total Students",
      value: students.length,
      icon: <FaUserGraduate />,
      color: "primary",
    },
    {
      title: "Teachers",
      value: teachers.length,
      icon: <FaChalkboardTeacher />,
      color: "success",
    },
    {
      title: "Courses",
      value: courses.length,
      icon: <FaBookOpen />,
      color: "warning",
    },
    {
      title: "Departments",
      value: "6",
      icon: <FaUniversity />,
      color: "danger",
    },
  ];

  return (
    <div className="dashboard-page">
      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Dashboard</h2>
          <p className="text-muted mb-0">Welcome back, Admin </p>
        </div>


      </div>

      {/* Statistics */}

      <div className="row g-4">
        {stats.map((item, index) => (
          <div className="col-lg-3 col-md-6" key={index}>
            <div className="card border-0 shadow-sm dashboard-card h-100">
              <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                  <small className="text-muted">{item.title}</small>

                  <h3 className="fw-bold mt-2">{item.value}</h3>

                  <span className="text-success small">
                    <FaArrowUp /> 12% this month
                  </span>
                </div>

                <div className={`icon-box bg-${item.color}`}>{item.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Second Row */}

      <div className="row g-4 mt-1">
        <div className="col-lg-8">
          <div className="d-flex align-items-end justify-content-around h-75">
  
  {/* Students */}
  <div className="text-center">
    <div
      className="bg-primary rounded-top"
      style={{
        width: "45px",
        height: "100px",
      }}
    ></div>

    <small className="text-muted d-block mt-2">
      Students
    </small>

    <div className="fw-semibold">10</div>
  </div>

  {/* Teachers */}
  <div className="text-center">
    <div
      className="bg-success rounded-top"
      style={{
        width: "45px",
        height: "40px",
      }}
    ></div>

    <small className="text-muted d-block mt-2">
      Teachers
    </small>

    <div className="fw-semibold">4</div>
  </div>

  {/* Courses */}
  <div className="text-center">
    <div
      className="bg-warning rounded-top"
      style={{
        width: "45px",
        height: "80px",
      }}
    ></div>

    <small className="text-muted d-block mt-2">
      Courses
    </small>

    <div className="fw-semibold">8</div>
  </div>

  {/* Subjects */}
  <div className="text-center">
    <div
      className="bg-danger rounded-top"
      style={{
        width: "45px",
        height: "60px",
      }}
    ></div>

    <small className="text-muted d-block mt-2">
      Departments
    </small>

    <div className="fw-semibold">6</div>
  </div>

</div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm dashboard-card mb-4">
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Today's Attendance</h5>

              <div className="text-center py-4">
                <FaCalendarCheck size={60} className="text-success mb-3" />

                <h2 className="fw-bold">92%</h2>

                <p className="text-muted mb-0">Students Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row */}

      <div className="row g-4 mt-1">
        {/* Recent Activities */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm dashboard-card">
            <div className="card-body">
              <h5 className="fw-semibold mb-4">Recent Activities</h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <MdPeople className="me-2 text-primary" />
                  New Student Registered
                </li>

                <li className="list-group-item">
                  <FaMoneyBillWave className="me-2 text-success" />
                  Fee Payment Received
                </li>

                <li className="list-group-item">
                  <MdAssignment className="me-2 text-warning" />
                  Attendance Updated
                </li>

                <li className="list-group-item">
                  <MdNotifications className="me-2 text-danger" />
                  Examination Notice Published
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Upcoming Events */}

        <div className="col-lg-6">
          <div className="card border-0 shadow-sm dashboard-card">
            <div className="card-body">
              <h5 className="fw-semibold mb-4">Upcoming Events</h5>

              <div className="mb-3">
                <h6 className="mb-1">Internal Examination</h6>
                <small className="text-muted">10 August 2026</small>
              </div>

              <div className="mb-3">
                <h6 className="mb-1">Independence Day Celebration</h6>
                <small className="text-muted">15 August 2026</small>
              </div>

              <div>
                <h6 className="mb-1">Semester Result</h6>
                <small className="text-muted">28 August 2026</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
