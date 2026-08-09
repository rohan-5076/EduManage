import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddStudent() {
  const [courses, setCourses] = useState([]);
  const [studentData, setStudentData] = useState({
    fullName: "",
    StdGender: "",
    prn: "",
    DOB: "",
    BloodGroup: "",
    Photo: "",
    course: "",
    semester: "",
    acadmicYear: "",
    division: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    Address: "",
    pinCode: "",
    motherName: "",
    fatherName: "",
    parentPhone: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { value, name, type, files } = e.target;
    setStudentData({
      ...studentData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/students",
        studentData,
      );
      alert(res.data.message);
      setStudentData({
        fullName: "",
        StdGender: "",
        prn: "",
        DOB: "",
        BloodGroup: "",
        Photo: "",
        course: "",
        semester: "",
        acadmicYear: "",
        division: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        Address: "",
        pinCode: "",
        motherName: "",
        fatherName: "",
        parentPhone: "",
        username: "",
        password: "",
      });
    } catch (error) {
      console.log(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Server Error");
      }
    }
  };

  const LoadCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    LoadCourses();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="card shadow">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Add Student</h4>
          </div>

          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <h5 className="text-secondary mt-5">Personal Information</h5>
                <hr className="border-secondary" />
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Full Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="fullName"
                    onChange={handleChange}
                    value={studentData.fullName}
                    placeholder="Enter Course Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Gender</label>

                  <select
                    onChange={handleChange}
                    className="form-select"
                    name="StdGender"
                    value={studentData.StdGender}
                    id=""
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                    <option value={"Other"}>Other</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">prn Number </label>

                  <input
                    type="number"
                    className="form-control"
                    name="prn"
                    value={studentData.prn}
                    onChange={handleChange}
                    placeholder="prn Number"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Date Of Birth
                  </label>

                  <input
                    type="date"
                    className="form-control"
                    name="DOB"
                    value={studentData.DOB}
                    onChange={handleChange}
                    placeholder="8"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Blood Group</label>

                  <select
                    className="form-select"
                    name="BloodGroup"
                    value={studentData.BloodGroup}
                    onChange={handleChange}
                    id=""
                  >
                    <option value="" disabled>Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Upload Photo</label>

                  <input
                    type="text"
                    className="form-control"
                    name="Photo"
                    onChange={handleChange}
                    placeholder=""
                  />
                </div>
                <h5 className="text-secondary mt-5">Academic Information</h5>
                <hr className="border-secondary" />
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Select Course
                  </label>

                  <select
                    className="form-select"
                    name="course"
                    value={studentData.course}
                    onChange={handleChange}
                    id=""
                  >
                    <option value="" disabled>
                      Select Course
                    </option>
                    {courses
                      .filter((course) => course.status)
                      .map((course, index) => (
                        <option key={course._id} value={course._id}>
                          {course.courseName}
                        </option>
                      ))}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Select Semester
                  </label>

                  <select
                    className="form-select"
                    name="semester"
                    value={studentData.semester}
                    onChange={handleChange}
                    id=""
                  >
                    <option value="" disabled>
                      Select Semester
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                      <option key={sem} value={sem}>
                        {sem}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Select Acadmic Year
                  </label>

                  <select
                    className="form-select"
                    name="acadmicYear"
                    value={studentData.acadmicYear}
                    onChange={handleChange}
                    id=""
                  >
                    <option value="" disabled>
                      Select Year
                    </option>
                    <option value="2024-25">2024-25</option>
                    <option value="2025-26">2025-26</option>
                    <option value="2026-27">2026-27</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Select Division
                  </label>

                  <select
                    className="form-select"
                    name="division"
                    value={studentData.division}
                    onChange={handleChange}
                    id=""
                  >
                    <option value="" disabled>
                      Select Division
                    </option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Roll Number </label>

                  <input
                    type="number"
                    className="form-control"
                    name="rollNo"
                    value={studentData.rollNo}
                    onChange={handleChange}
                    placeholder="Roll Number"
                    min="1"
                  />
                </div>
                <h5 className="text-secondary mt-5">Contact Information</h5>
                <hr className="border-secondary" />
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Email</label>

                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={studentData.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Phone</label>

                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={studentData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Address</label>

                  <input
                    type="text"
                    className="form-control"
                    name="Address"
                    value={studentData.Address}
                    onChange={handleChange}
                    placeholder="Address"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">City</label>

                  <input
                    type="text"
                    className="form-control"
                    name="city"
                    value={studentData.city}
                    onChange={handleChange}
                    placeholder="City"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">State</label>

                  <input
                    type="text"
                    className="form-control"
                    name="state"
                    value={studentData.state}
                    onChange={handleChange}
                    placeholder="State"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Pin Code</label>

                  <input
                    type="number"
                    className="form-control"
                    name="pinCode"
                    value={studentData.pinCode}
                    onChange={handleChange}
                    placeholder="Pin Code"
                  />
                </div>

                <h5 className="text-secondary mt-5">Parent Information</h5>
                <hr className="border-secondary" />
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Father Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="fatherName"
                    value={studentData.fatherName}
                    onChange={handleChange}
                    placeholder="Father Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Mother Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="motherName"
                    value={studentData.motherName}
                    onChange={handleChange}
                    placeholder="Mother Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">
                    Parent Contact
                  </label>

                  <input
                    type="number"
                    className="form-control"
                    name="parentPhone"
                    value={studentData.parentPhone}
                    onChange={handleChange}
                    placeholder="Parent Contact"
                  />
                </div>
                <h5 className="text-secondary mt-5">Login Information</h5>
                <hr className="border-secondary" />
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">User Name</label>

                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={studentData.username}
                    onChange={handleChange}
                    placeholder="User Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Password</label>

                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={studentData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div>
                <div className="col-md-6 mb-5">
                  <label className="form-label fw-semibold">
                    Confirm Password
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name=""
                    placeholder=" Confirm Password"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-success me-2">
                Save Student
              </button>

              <Link to="/students" className="btn btn-danger">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddStudent;
