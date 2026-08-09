import "./Teachers.css";
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaChalkboardTeacher,
  FaUserCheck,
  FaUserTimes,
  FaUniversity,
  FaBookOpen,
  FaPlus,
  FaSearch,
  FaFilter,
  FaRedo,
  FaEye,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

function Teachers() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [status, setStatus] = useState("");

  const cards = [
    {
      title: "Total Teachers",
      value: "86",
      icon: <FaChalkboardTeacher />,
      color: "primary",
      growth: "+5%",
    },
    {
      title: "Active Teachers",
      value: "78",
      icon: <FaUserCheck />,
      color: "success",
      growth: "+3%",
    },
    {
      title: "Inactive",
      value: "08",
      icon: <FaUserTimes />,
      color: "danger",
      growth: "-1%",
    },
    {
      title: "Departments",
      value: "12",
      icon: <FaUniversity />,
      color: "warning",
      growth: "0%",
    },
    {
      title: "Subjects",
      value: "28",
      icon: <FaBookOpen />,
      color: "info",
      growth: "+2%",
    },
  ];

  const teachers = [
    {
      id: 1,
      photo: "https://i.pravatar.cc/150?img=11",
      name: "Dr. Rajesh Sharma",
      email: "rajesh@college.com",
      department: "Computer Science",
      subject: "Web Development",
      phone: "9876543210",
      status: "Active",
    },
    {
      id: 2,
      photo: "https://i.pravatar.cc/150?img=12",
      name: "Prof. Priya Patil",
      email: "priya@college.com",
      department: "Computer Science",
      subject: "Java",
      phone: "9876543211",
      status: "Active",
    },
    {
      id: 3,
      photo: "https://i.pravatar.cc/150?img=13",
      name: "Dr. Amit Joshi",
      email: "amit@college.com",
      department: "Mathematics",
      subject: "Statistics",
      phone: "9876543212",
      status: "Inactive",
    },
  ];

  return (
    <div className="teachers-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <h2>Teachers</h2>

          <p>
            Dashboard /<span> Teachers</span>
          </p>
        </div>

        <Link to="/add-teacher" className="btn btn-primary add-btn">
          <FaPlus />
          Add Teacher
        </Link>
      </div>

      {/* Cards */}

      <div className="row g-4">
        {cards.map((card, index) => (
          <div className="col-xl col-lg-4 col-md-6" key={index}>
            <div className="teacher-card">
              <div className={`teacher-icon ${card.color}`}>{card.icon}</div>

              <div className="teacher-content">
                <small>{card.title}</small>

                <h3>{card.value}</h3>

                <span>{card.growth} This Month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter */}

      <div className="filter-card mt-4">
        <div className="row g-3 align-items-center">
          <div className="col-lg-4">
            <div className="search-box">
              <FaSearch />

              <input
                type="text"
                placeholder="Search Teacher..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="col-lg-2">
            <select
              className="form-select"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>Department</option>

              <option>Computer Science</option>

              <option>Commerce</option>

              <option>Mechanical</option>
            </select>
          </div>

          <div className="col-lg-2">
            <select
              className="form-select"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option>Subject</option>

              <option>Java</option>

              <option>Python</option>

              <option>Web Development</option>
            </select>
          </div>

          <div className="col-lg-2">
            <select
              className="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option>Status</option>

              <option>Active</option>

              <option>Inactive</option>
            </select>
          </div>

          <div className="col-lg-2 d-grid gap-2">
            <button className="btn btn-primary">
              <FaFilter className="me-2" />
              Filter
            </button>

            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                setSearch("");

                setDepartment("");

                setSubject("");

                setStatus("");
              }}
            >
              <FaRedo className="me-2" />
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Next Part */}

      {/* =========================
    Analytics
========================= */}

      <div className="row mt-4 g-4">
        {/* Teacher Growth */}

        <div className="col-lg-8">
          <div className="card border-0 shadow-sm dashboard-card">
            <div className="card-header bg-white border-0">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold mb-1">Teacher Performance</h5>

                  <small className="text-muted">Monthly Growth</small>
                </div>

                <select className="form-select w-auto">
                  <option>2026</option>

                  <option>2025</option>
                </select>
              </div>
            </div>

            <div className="card-body">
              <div className="chart-placeholder" style={{ height: "320px" }}>
                <div className="text-center">
                  <h1>📈</h1>

                  <h5 className="text-secondary">Recharts Graph Here</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm dashboard-card mb-4">
            <div className="card-body text-center">
              <h6 className="fw-bold">Attendance</h6>

              <h1 className="display-5 fw-bold text-success">96%</h1>

              <small className="text-muted">Teacher Attendance</small>
            </div>
          </div>

          <div className="card border-0 shadow-sm dashboard-card">
            <div className="card-body text-center">
              <h6 className="fw-bold">Average Experience</h6>

              <h1 className="display-5 fw-bold text-primary">8.6</h1>

              <small className="text-muted">Years</small>
            </div>
          </div>
        </div>
      </div>

      {/* =========================
    Quick Summary
========================= */}

      <div className="row mt-4 g-4">
        <div className="col-md-3">
          <div className="summary-card">
            <h6>Computer Science</h6>

            <h2>24</h2>

            <small>Teachers</small>
          </div>
        </div>

        <div className="col-md-3">
          <div className="summary-card">
            <h6>Commerce</h6>

            <h2>18</h2>

            <small>Teachers</small>
          </div>
        </div>

        <div className="col-md-3">
          <div className="summary-card">
            <h6>Mechanical</h6>

            <h2>14</h2>

            <small>Teachers</small>
          </div>
        </div>

        <div className="col-md-3">
          <div className="summary-card">
            <h6>Civil</h6>

            <h2>12</h2>

            <small>Teachers</small>
          </div>
        </div>
      </div>

      {/* =========================
    Recent Activities
========================= */}

      <div className="card border-0 shadow-sm dashboard-card mt-4">
        <div className="card-header bg-white border-0">
          <h5 className="fw-bold">Recent Activities</h5>
        </div>

        <div className="card-body">
          <ul className="activity-list">
            <li>
              <span className="activity-dot bg-success"></span>
              Rajesh Sharma uploaded Internal Marks
            </li>

            <li>
              <span className="activity-dot bg-primary"></span>
              Priya Patil marked Attendance
            </li>

            <li>
              <span className="activity-dot bg-warning"></span>
              Amit Joshi joined Mathematics Department
            </li>

            <li>
              <span className="activity-dot bg-danger"></span>
              New Teacher Registration Completed
            </li>
          </ul>
        </div>
      </div>

      {/* =========================
      Teacher List
========================= */}

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-header bg-white">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div>
              <h5 className="fw-bold mb-1">Teacher Directory</h5>

              <small className="text-muted">
                Showing {teachers.length} Teachers
              </small>
            </div>

            <button className="btn btn-outline-primary btn-sm">
              Export Excel
            </button>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table align-middle table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>

                  <th>Teacher</th>

                  <th>Employee ID</th>

                  <th>Department</th>

                  <th>Subject</th>

                  <th>Qualification</th>

                  <th>Experience</th>

                  <th>Phone</th>

                  <th>Status</th>

                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {teachers.map((teacher, index) => (
                  <tr key={teacher.id}>
                    <td>{index + 1}</td>

                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={teacher.photo}
                          alt={teacher.name}
                          className="teacher-avatar"
                        />

                        <div className="ms-3">
                          <h6 className="mb-0 fw-bold">{teacher.name}</h6>

                          <small className="text-muted">{teacher.email}</small>
                        </div>
                      </div>
                    </td>

                    <td>
                      EMP-
                      {String(index + 1).padStart(3, "0")}
                    </td>

                    <td>{teacher.department}</td>

                    <td>{teacher.subject}</td>

                    <td>M.Tech</td>

                    <td>8 Years</td>

                    <td>{teacher.phone}</td>

                    <td>
                      <span
                        className={
                          teacher.status === "Active"
                            ? "status active"
                            : "status inactive"
                        }
                      >
                        {teacher.status}
                      </span>
                    </td>

                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <button className="btn btn-sm btn-outline-primary">
                          <FaEye />
                        </button>

                        <button className="btn btn-sm btn-outline-warning">
                          <FaEdit />
                        </button>

                        <button className="btn btn-sm btn-outline-danger">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* =========================
      Pagination
========================= */}

      <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap">
        <small className="text-muted">
          Showing 1 to {teachers.length} of {teachers.length} entries
        </small>

        <nav>
          <ul className="pagination mb-0">
            <li className="page-item disabled">
              <button className="page-link">Previous</button>
            </li>

            <li className="page-item active">
              <button className="page-link">1</button>
            </li>

            <li className="page-item">
              <button className="page-link">2</button>
            </li>

            <li className="page-item">
              <button className="page-link">3</button>
            </li>

            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Teachers;
