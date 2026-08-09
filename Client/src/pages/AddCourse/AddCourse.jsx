import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddCourse() {
  

  const [courseData, setCourseData] = useState({
    courseName: "",
    courseCode: "",
    duration: "",
    totalSemesters: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setCourseData({
      ...courseData,
      [name]: type === "radio" ? value === "true" : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/courses",
        courseData,
      );

      alert(res.data.message);

      // Reset form
      setCourseData({
        courseName: "",
        courseCode: "",
        duration: "",
        totalSemesters: "",
        status: true,
      });

      // If you're showing a course list, reload it here
      // loadCourses();
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server Error");
      }
    }
  };
  const handleReset = () => {
    setCourseData({
      courseName: "",
      courseCode: "",
      duration: "",
      totalSemesters: "",
      status: true,
    });
  };

  return (
  <div className="course-page">

    {/* Header */}

    <div className="page-header">

      <div>
        <h2>Add Course</h2>

        <p>
          Dashboard /
          <span> Courses</span> /
          <span> Add Course</span>
        </p>
      </div>

      <Link
        to="/course"
        className="btn btn-outline-primary"
      >
        View Courses
      </Link>

    </div>

    {/* Card */}

    <div className="card course-card shadow-sm border-0">

      <div className="card-header bg-white border-0">

        <h4 className="fw-bold mb-1">
          Course Information
        </h4>

        <small className="text-muted">
          Fill all required course details.
        </small>

      </div>

      <div className="card-body">

        <form onSubmit={handleSubmit}>

          <div className="row">

            {/* Course Name */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">

                Course Name

              </label>

              <input
                type="text"
                className="form-control custom-input"
                name="courseName"
                value={courseData.courseName}
                onChange={handleChange}
                placeholder="Bachelor of Computer Applications"
                required
              />

            </div>

            {/* Course Code */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">

                Course Code

              </label>

              <input
                type="text"
                className="form-control custom-input"
                name="courseCode"
                value={courseData.courseCode}
                onChange={handleChange}
                placeholder="BCA"
                required
              />

            </div>

            {/* Duration */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">

                Duration (Years)

              </label>

              <input
                type="number"
                className="form-control custom-input"
                name="duration"
                value={courseData.duration}
                onChange={handleChange}
                placeholder="3"
                required
              />

            </div>

            {/* Semesters */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">

                Total Semesters

              </label>

              <input
                type="number"
                className="form-control custom-input"
                name="totalSemesters"
                value={courseData.totalSemesters}
                onChange={handleChange}
                placeholder="6"
                required
              />

            </div>
                        {/* Status */}

            <div className="col-md-12 mb-4">

              <label className="form-label fw-semibold d-block">

                Status

              </label>

              <div className="d-flex gap-4">

                <div className="form-check">

                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    value="true"
                    checked={courseData.status === true}
                    onChange={handleChange}
                  />

                  <label className="form-check-label">

                    Active

                  </label>

                </div>

                <div className="form-check">

                  <input
                    className="form-check-input"
                    type="radio"
                    name="status"
                    value="false"
                    checked={courseData.status === false}
                    onChange={handleChange}
                  />

                  <label className="form-check-label">

                    Inactive

                  </label>

                </div>

              </div>

            </div>

          </div>

          <hr />

          <div className="d-flex justify-content-end gap-3">

            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={handleReset}
            >
              Reset
            </button>

            <Link
              to="/course"
              className="btn btn-danger"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="btn btn-primary"
            >
              Save Course
            </button>

          </div>

        </form>

      </div>

    </div>

  </div>
);
}

export default AddCourse;
