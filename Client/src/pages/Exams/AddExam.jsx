import { Link } from "react-router-dom";
import "./Exam.css";

function AddExam() {
  return (
    <div className="exam-page">

      {/* Header */}

      <div className="page-header">

        <div>
          <h2>Add Examination</h2>

          <p>
            Dashboard /
            <span> Examination</span> /
            <span> Add Exam</span>
          </p>
        </div>

        <Link
          to="/exams"
          className="btn btn-outline-primary"
        >
          View Exams
        </Link>

      </div>

      {/* Dashboard Cards */}

      <div className="row g-4 mb-4">

        <div className="col-lg-3 col-md-6">

          <div className="dashboard-card">

            <div className="dashboard-icon bg-primary">
              📅
            </div>

            <div>
              <small>Total Exams</small>
              <h3>25</h3>
              <span>Academic Year</span>
            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="dashboard-card">

            <div className="dashboard-icon bg-success">
              ✅
            </div>

            <div>
              <small>Upcoming</small>
              <h3>8</h3>
              <span>Scheduled</span>
            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="dashboard-card">

            <div className="dashboard-icon bg-warning">
              📚
            </div>

            <div>
              <small>Subjects</small>
              <h3>12</h3>
              <span>Available</span>
            </div>

          </div>

        </div>

        <div className="col-lg-3 col-md-6">

          <div className="dashboard-card">

            <div className="dashboard-icon bg-danger">
              🎓
            </div>

            <div>
              <small>Active</small>
              <h3>20</h3>
              <span>Running</span>
            </div>

          </div>

        </div>

      </div>

      {/* Form */}

      <div className="card exam-card shadow-sm border-0">

        <div className="card-header bg-white border-0">

          <h4 className="fw-bold mb-1">
            Examination Information
          </h4>

          <small className="text-muted">
            Enter examination details
          </small>

        </div>

        <div className="card-body">

          <div className="row">

            {/* Course */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                Course
              </label>

              <select className="form-select custom-input">

                <option>Select Course</option>

              </select>

            </div>

            {/* Semester */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                Semester
              </label>

              <select className="form-select custom-input">

                <option>Select Semester</option>

                {[1,2,3,4,5,6,7,8].map((sem)=>(
                  <option key={sem}>
                    Semester {sem}
                  </option>
                ))}

              </select>

            </div>

            {/* Subject */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                Subject
              </label>

              <select className="form-select custom-input">

                <option>Select Subject</option>

              </select>

            </div>

            {/* Faculty */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                Faculty
              </label>

              <select className="form-select custom-input">

                <option>Select Faculty</option>

              </select>

            </div>

            {/* Exam Name */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                Exam Name
              </label>

              <input
                type="text"
                className="form-control custom-input"
                placeholder="Mid Semester Examination"
              />

            </div>

            {/* Exam Type */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                Exam Type
              </label>

              <select className="form-select custom-input">

                <option>Select Type</option>

                <option>Internal</option>
                <option>External</option>
                <option>Practical</option>
                <option>Viva</option>
                <option>Assignment</option>

              </select>

            </div>

            {/* Date */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                Exam Date
              </label>

              <input
                type="date"
                className="form-control custom-input"
              />

            </div>

            {/* Room */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                Room Number
              </label>

              <input
                type="text"
                className="form-control custom-input"
                placeholder="Room 201"
              />

            </div>

            {/* Start */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                Start Time
              </label>

              <input
                type="time"
                className="form-control custom-input"
              />

            </div>

            {/* End */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                End Time
              </label>

              <input
                type="time"
                className="form-control custom-input"
              />

            </div>

            {/* Total */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                Total Marks
              </label>

              <input
                type="number"
                className="form-control custom-input"
                placeholder="100"
              />

            </div>

            {/* Passing */}

            <div className="col-md-6 mb-4">

              <label className="form-label fw-semibold">
                Passing Marks
              </label>

              <input
                type="number"
                className="form-control custom-input"
                placeholder="40"
              />

            </div>

            {/* Instructions */}

            <div className="col-12 mb-4">

              <label className="form-label fw-semibold">
                Instructions
              </label>

              <textarea
                rows="4"
                className="form-control"
                placeholder="Enter examination instructions..."
              ></textarea>

            </div>

            {/* Status */}

            <div className="col-md-6">

              <label className="form-label fw-semibold">
                Status
              </label>

              <div className="form-check form-switch mt-2">

                <input
                  className="form-check-input"
                  type="checkbox"
                />

                <label className="ms-2">
                  Active
                </label>

              </div>

            </div>

          </div>

          <hr />

          <div className="d-flex justify-content-end gap-3">

            <button
              className="btn btn-outline-secondary"
            >
              Reset
            </button>

            <Link
              to="/exam"
              className="btn btn-danger"
            >
              Cancel
            </Link>

            <button
              className="btn btn-primary"
            >
              Save Exam
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddExam;