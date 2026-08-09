import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function AddSubject() {
  const [courses, SetCourses] = useState([]);
  const [subjects, SetSubjects] = useState([]);
  const [subjectData, setSubjectData] = useState({
    courseId: "",
    semester: "",
    subjectName: "",
    subjectCode: "",
    credits: 4,
    status: true,
  });

  const LoadCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      SetCourses(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    LoadCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setSubjectData({
      ...subjectData,
      [name]: type === "radio" ? value === "true" : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(subjectData);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/subjects",
        subjectData,
      );

      alert(res.data.message);
    } catch (error) {
      console.log(error);
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server Error");
      }
    }
  };

  return (
    <div className="subject-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <h2>Add Subject</h2>

          <p>
            Dashboard /<span> Subjects</span> /<span> Add Subject</span>
          </p>
        </div>

        <Link to="/subject" className="btn btn-outline-primary">
          View Subjects
        </Link>
      </div>

      {/* Form Card */}

      <div className="card subject-card shadow-sm border-0">
        <div className="card-header bg-white border-0">
          <h4 className="fw-bold mb-1">Subject Information</h4>

          <small className="text-muted">
            Fill all required subject details.
          </small>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="dashboard-card h-100 w-100 d-flex align-items-center p-3">
              <div className="dashboard-icon bg-primary me-3">📘</div>

              <div>
                <small className="text-muted">Available Courses</small>
                <h3>{courses.length}</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="dashboard-card h-100 w-100 d-flex align-items-center p-3">
              <div className="dashboard-icon bg-success me-3">🎓</div>

              <div>
                <small className="text-muted">Default Credits</small>
                <h3>{subjectData.credits}</h3>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex">
            <div className="dashboard-card h-100 w-100 d-flex align-items-center p-3">
              <div className="dashboard-icon bg-warning me-3">📖</div>

              <div>
                <small className="text-muted">Selected Semester</small>
                <h3>{subjectData.semester || "--"}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* Course */}

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">Course</label>

                <select
                  className="form-select custom-input"
                  name="courseId"
                  value={subjectData.courseId}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Course</option>

                  {courses
                    .filter((course) => course.status)
                    .map((course) => (
                      <option key={course._id} value={course._id}>
                        {course.courseName}
                      </option>
                    ))}
                </select>
              </div>

              {/* Semester */}

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">Semester</label>

                <select
                  className="form-select custom-input"
                  name="semester"
                  value={subjectData.semester}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Semester</option>

                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    <option key={sem} value={sem}>
                      Semester {sem}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject Name */}

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">Subject Name</label>

                <input
                  type="text"
                  className="form-control custom-input"
                  name="subjectName"
                  value={subjectData.subjectName}
                  onChange={handleChange}
                  placeholder="Database Management System"
                  required
                />
              </div>

              {/* Subject Code */}

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">Subject Code</label>

                <input
                  type="text"
                  className="form-control custom-input"
                  name="subjectCode"
                  value={subjectData.subjectCode}
                  onChange={handleChange}
                  placeholder="DBMS301"
                  required
                />
              </div>

              {/* Credits */}

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">Credits</label>

                <input
                  type="number"
                  className="form-control custom-input"
                  name="credits"
                  value={subjectData.credits}
                  onChange={handleChange}
                  min="1"
                  max="10"
                />
              </div>
              {/* Status */}

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">Status</label>

                <div className="form-check form-switch mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={subjectData.status}
                    onChange={(e) =>
                      setSubjectData({
                        ...subjectData,
                        status: e.target.checked,
                      })
                    }
                  />

                  <label className="ms-2 fw-semibold">
                    {subjectData.status ? "Active" : "Inactive"}
                  </label>
                </div>
              </div>
            </div>

            <hr />

            <div className="d-flex justify-content-end gap-3 mt-4">
              <button
                type="button"
                className="btn btn-light border"
                onClick={() =>
                  setSubjectData({
                    courseId: "",
                    semester: "",
                    subjectName: "",
                    subjectCode: "",
                    credits: 4,
                    status: true,
                  })
                }
              >
                Reset
              </button>

              <Link to="/subject" className="btn btn-outline-danger">
                Cancel
              </Link>

              <button type="submit" className="btn btn-primary px-4">
                Save Subject
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddSubject;
