import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Login() {
  const navigate = useNavigate();

  // ===========================
  // Active Tab
  // ===========================
  const [activeTab, setActiveTab] = useState("teacher");

  // ===========================
  // Teacher States
  // ===========================
  const [teacherUsername, setTeacherUsername] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherLoading, setTeacherLoading] = useState(false);
  const [showTeacherPassword, setShowTeacherPassword] = useState(false);
  const [rememberTeacher, setRememberTeacher] = useState(false);

  // ===========================
  // Student States
  // ===========================
  const [studentUsername, setStudentUsername] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentLoading, setStudentLoading] = useState(false);
  const [showStudentPassword, setShowStudentPassword] = useState(false);
  const [rememberStudent, setRememberStudent] = useState(false);

  // ===========================
  // Auto Redirect
  // ===========================
  useEffect(() => {
    const teacherToken = localStorage.getItem("teacherToken");
    const studentToken = localStorage.getItem("studentToken");

    if (teacherToken) {
      navigate("/dashboard");
      return;
    }

    if (studentToken) {
      navigate("/student/dashboard");
      return;
    }
  }, [navigate]);

  // ===========================
  // Teacher Login
  // ===========================
  const handleTeacherLogin = async (e) => {
    e.preventDefault();

    setTeacherLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/teacher-login",
        {
          username: teacherUsername.trim(),
          password: teacherPassword,
        },
      );

      if (response.data.status) {
        localStorage.setItem("teacherToken", response.data.token);

        localStorage.setItem("teacher", JSON.stringify(response.data.teacher));

        if (rememberTeacher) {
          localStorage.setItem("rememberTeacher", "true");
        }

        setTeacherUsername("");
        setTeacherPassword("");

        navigate("/dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Teacher Login Failed");
    } finally {
      setTeacherLoading(false);
    }
  };

  // ===========================
  // Student Login
  // ===========================
  const handleStudentLogin = async (e) => {
    e.preventDefault();

    setStudentLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/student-login",
        {
          username: studentUsername.trim(),
          password: studentPassword,
        },
      );

      if (response.data.status) {
        localStorage.setItem("studentToken", response.data.token);

        localStorage.setItem("student", JSON.stringify(response.data.student));

        if (rememberStudent) {
          localStorage.setItem("rememberStudent", "true");
        }

        setStudentUsername("");
        setStudentPassword("");

        navigate("/student/dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error(error);

      alert(error.response?.data?.message || "Student Login Failed");
    } finally {
      setStudentLoading(false);
    }
  };

  // ===========================
  // PART 2 STARTS HERE
  // return (
  return (
    <div className="login-page ">
      <div className="login-overlay">
        <div className="container">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-lg-10">
              <div className="login-card">
                {/* Left Side */}
                <div className="login-left">
                  {/* Logo */}

                  {/* <div className="brand-logo text-center">
    🎓
  </div> */}

                  <span className="brand-subtitle">
                    Smart Education Platform
                  </span>

                  <h1>
                    EduManage
                  </h1>

                  <div className="developer-card">
                    <div className="developer-info">
                      <h6>Developed by Rohan Jadhav</h6>

                      <p>Full Stack Developer</p>

                      <div className="developer-links">
                        <a
                          className="text-white"
                          href="https://www.linkedin.com/in/rohankjadhav/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-linkedin text-white"></i>
                          LinkedIn Profile
                        </a>

                        <a
                          className="text-white"
                          href="mailto:rohanjadhav6113@gmail.com"
                        >
                          <i className="bi bi-envelope-fill text-white"></i>
                          Contact
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Full Stack Developer • React.js • Node.js • Express.js • MongoDB */}
                </div>

                {/* Right Side */}

                <div className="login-right">
                  <h3 className="text-center fw-bold mb-4">Welcome Back</h3>

                  {/* Tabs */}

                  <div className="login-tabs">
                    <button
                      type="button"
                      className={`tab-btn ${
                        activeTab === "teacher" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("teacher")}
                    >
                      <FaChalkboardTeacher className="me-2" />
                      Teacher
                    </button>

                    <button
                      type="button"
                      className={`tab-btn ${
                        activeTab === "student" ? "active" : ""
                      }`}
                      onClick={() => setActiveTab("student")}
                    >
                      <FaUserGraduate className="me-2" />
                      Student
                    </button>
                  </div>

                  {/* Teacher Login */}

                  {activeTab === "teacher" && (
                    <form onSubmit={handleTeacherLogin}>
                      <div className="mb-3">
                        <label className="form-label">Username</label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Username"
                          value={teacherUsername}
                          onChange={(e) => setTeacherUsername(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Password</label>

                        <div className="password-box">
                          <input
                            type={showTeacherPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="Enter Password"
                            value={teacherPassword}
                            onChange={(e) => setTeacherPassword(e.target.value)}
                            required
                          />

                          <span
                            className="eye-btn"
                            onClick={() =>
                              setShowTeacherPassword(!showTeacherPassword)
                            }
                          >
                            {showTeacherPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        </div>
                      </div>

                      <div className="login-options">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={rememberTeacher}
                            onChange={(e) =>
                              setRememberTeacher(e.target.checked)
                            }
                          />

                          <label className="form-check-label">
                            Remember Me
                          </label>
                        </div>

                        <a href="#">Forgot Password?</a>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary login-btn"
                        disabled={teacherLoading}
                      >
                        {teacherLoading ? "Logging in..." : "Teacher Login"}
                      </button>
                    </form>
                  )}

                  {/* Student Login */}

                  {activeTab === "student" && (
                    <form onSubmit={handleStudentLogin}>
                      <div className="mb-3">
                        <label className="form-label">Username</label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Username"
                          value={studentUsername}
                          onChange={(e) => setStudentUsername(e.target.value)}
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Password</label>

                        <div className="password-box">
                          <input
                            type={showStudentPassword ? "text" : "password"}
                            className="form-control"
                            placeholder="Enter Password"
                            value={studentPassword}
                            onChange={(e) => setStudentPassword(e.target.value)}
                            required
                          />

                          <span
                            className="eye-btn"
                            onClick={() =>
                              setShowStudentPassword(!showStudentPassword)
                            }
                          >
                            {showStudentPassword ? <FaEyeSlash /> : <FaEye />}
                          </span>
                        </div>
                      </div>

                      <div className="login-options">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={rememberStudent}
                            onChange={(e) =>
                              setRememberStudent(e.target.checked)
                            }
                          />

                          <label className="form-check-label">
                            Remember Me
                          </label>
                        </div>

                        <a href="#">Forgot Password?</a>
                      </div>

                      <button
                        type="submit"
                        className="btn btn-success login-btn"
                        disabled={studentLoading}
                      >
                        {studentLoading ? "Logging in..." : "Student Login"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
