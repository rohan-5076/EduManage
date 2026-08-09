import { useEffect, useState } from "react";
import axios from "axios";
import "./Teachers.css";

import {
  FaChalkboardTeacher,
  FaUserTie,
  FaIdBadge,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function AddTeacher() {
  const [departments, setDepartments] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const [formData, setFormData] = useState({
    teacherId: "",
    fullName: "",
    email: "",
    phone: "",
    department: "",

    gender: "",
    dob: "",
    bloodGroup: "",

    qualification: "",
    designation: "",

    experience: "",
    employmentType: "",

    joiningDate: "",

    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",

    aadhaar: "",
    pan: "",
    emergencyContact: "",

    salary: "",
    bankName: "",
    accountNumber: "",
    photo: null,

    username: "",
    password: "",
    confirmPassword: "",

    subject: "",

    remarks: "",

    status: true,
  });

  useEffect(() => {
  loadDepartments();
  loadSubjects();
}, []);

const loadSubjects = async () => {
  try {

    const res = await axios.get(
      "http://localhost:5000/api/subjects"
    );

    setSubjects(res.data.data);

  } catch (err) {

    console.log(err);

  }
};



  const loadDepartments = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/departments");

      setDepartments(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-fluid py-4">
      {/* ===========================
            Page Header
      =========================== */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Add Teacher</h2>

          <p className="text-muted mb-0">
            Register a new faculty member into the system.
          </p>
        </div>
      </div>

      {/* ===========================
            Summary Cards
      =========================== */}

      <div className="row g-3 mb-4">
        <div className="col-xl-3 col-md-6">
          <div className="dashboard-card">
            <div className="card-icon bg-primary">
              <FaChalkboardTeacher />
            </div>

            <div>
              <h3>128</h3>

              <span>Total Teachers</span>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="dashboard-card">
            <div className="card-icon bg-success">
              <FaUserTie />
            </div>

            <div>
              <h3>118</h3>

              <span>Active Teachers</span>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="dashboard-card">
            <div className="card-icon bg-warning">
              <FaIdBadge />
            </div>

            <div>
              <h3>8</h3>

              <span>Departments</span>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6">
          <div className="dashboard-card">
            <div className="card-icon bg-info">
              <FaChalkboardTeacher />
            </div>

            <div>
              <h3>24</h3>

              <span>New This Month</span>
            </div>
          </div>
        </div>
      </div>

      {/* ===========================
            Teacher Information
      =========================== */}

      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white">
          <h5 className="fw-bold mb-0">Teacher Information</h5>
        </div>

        <div className="card-body">
          <div className="row g-4">
            {/* Teacher ID */}

            <div className="col-lg-4">
              <label className="form-label">Teacher ID</label>

              <input
                type="text"
                className="form-control"
                name="teacherId"
                placeholder="EMP0001"
                value={formData.teacherId}
                onChange={handleChange}
              />
            </div>

            {/* Full Name */}

            <div className="col-lg-4">
              <label className="form-label">Full Name</label>

              <input
                type="text"
                className="form-control"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            {/* Department */}

            <div className="col-lg-4">
              <label className="form-label">Department</label>

              <select
                className="form-select"
                name="department"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="">Select Department</option>

                {departments.map((dept) => (
                  <option key={dept._id} value={dept._id}>
                    {dept.departmentName}
                  </option>
                ))}
              </select>
            </div>

            {/* Email */}

            <div className="col-lg-6">
              <label className="form-label">Email Address</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="teacher@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Phone */}

            <div className="col-lg-6">
              <label className="form-label">Mobile Number</label>

              <div className="input-group">
                <span className="input-group-text">
                  <FaPhone />
                </span>

                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gender */}

      <div className="col-lg-4">
        <label className="form-label">Gender</label>

        <select
          className="form-select"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>

          <option value="Male">Male</option>

          <option value="Female">Female</option>

          <option value="Other">Other</option>
        </select>
      </div>

      {/* Date of Birth */}

      <div className="col-lg-4">
        <label className="form-label">Date of Birth</label>

        <input
          type="date"
          className="form-control"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>

      {/* Blood Group */}

      <div className="col-lg-4">
        <label className="form-label">Blood Group</label>

        <select
          className="form-select"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
        >
          <option value="">Select Blood Group</option>

          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>AB+</option>
          <option>AB-</option>
          <option>O+</option>
          <option>O-</option>
        </select>
      </div>

      {/* Qualification */}

      <div className="col-lg-6">
        <label className="form-label">Highest Qualification</label>

        <input
          type="text"
          className="form-control"
          name="qualification"
          placeholder="M.Tech / PhD / MBA"
          value={formData.qualification}
          onChange={handleChange}
        />
      </div>

      {/* Designation */}

      <div className="col-lg-6">
        <label className="form-label">Designation</label>

        <select
          className="form-select"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        >
          <option value="">Select Designation</option>

          <option>Assistant Professor</option>

          <option>Associate Professor</option>

          <option>Professor</option>

          <option>Head of Department</option>

          <option>Lecturer</option>

          <option>Lab Instructor</option>
        </select>
      </div>

      {/* Experience */}

      <div className="col-lg-4">
        <label className="form-label">Experience (Years)</label>

        <input
          type="number"
          className="form-control"
          name="experience"
          placeholder="5"
          value={formData.experience}
          onChange={handleChange}
        />
      </div>

      {/* Employment Type */}

      <div className="col-lg-4">
        <label className="form-label">Employment Type</label>

        <select
          className="form-select"
          name="employmentType"
          value={formData.employmentType}
          onChange={handleChange}
        >
          <option value="">Select Type</option>

          <option>Full Time</option>

          <option>Part Time</option>

          <option>Visiting Faculty</option>

          <option>Contract</option>
        </select>
      </div>

      {/* Joining Date */}

      <div className="col-lg-4">
        <label className="form-label">Joining Date</label>

        <input
          type="date"
          className="form-control"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
        />
      </div>
      {/* =====================================
      Address Information
===================================== */}

      <div className="col-12 mt-4">
        <h5 className="fw-bold text-primary border-bottom pb-2">
          Address Information
        </h5>
      </div>

      {/* Address */}

      <div className="col-lg-12">
        <label className="form-label">Address</label>

        <textarea
          className="form-control"
          rows="3"
          name="address"
          placeholder="Enter Complete Address"
          value={formData.address}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* City */}

      <div className="col-lg-3">
        <label className="form-label">City</label>

        <input
          type="text"
          className="form-control"
          name="city"
          placeholder="Kolhapur"
          value={formData.city}
          onChange={handleChange}
        />
      </div>

      {/* State */}

      <div className="col-lg-3">
        <label className="form-label">State</label>

        <input
          type="text"
          className="form-control"
          name="state"
          placeholder="Maharashtra"
          value={formData.state}
          onChange={handleChange}
        />
      </div>

      {/* Country */}

      <div className="col-lg-3">
        <label className="form-label">Country</label>

        <input
          type="text"
          className="form-control"
          name="country"
          placeholder="India"
          value={formData.country}
          onChange={handleChange}
        />
      </div>

      {/* PIN */}

      <div className="col-lg-3">
        <label className="form-label">PIN Code</label>

        <input
          type="text"
          className="form-control"
          name="pinCode"
          placeholder="416001"
          value={formData.pinCode}
          onChange={handleChange}
        />
      </div>

      {/* =====================================
      Personal Details
===================================== */}

      <div className="col-12 mt-4">
        <h5 className="fw-bold text-primary border-bottom pb-2">
          Personal Details
        </h5>
      </div>

      {/* Aadhaar */}

      <div className="col-lg-4">
        <label className="form-label">Aadhaar Number</label>

        <input
          type="text"
          className="form-control"
          name="aadhaar"
          placeholder="1234 5678 9012"
          value={formData.aadhaar}
          onChange={handleChange}
        />
      </div>

      {/* PAN */}

      <div className="col-lg-4">
        <label className="form-label">PAN Number</label>

        <input
          type="text"
          className="form-control"
          name="pan"
          placeholder="ABCDE1234F"
          value={formData.pan}
          onChange={handleChange}
        />
      </div>

      {/* Emergency */}

      <div className="col-lg-4">
        <label className="form-label">Emergency Contact</label>

        <input
          type="text"
          className="form-control"
          name="emergencyContact"
          placeholder="+91 9876543210"
          value={formData.emergencyContact}
          onChange={handleChange}
        />
      </div>

      {/* =====================================
      Salary Details
===================================== */}

      <div className="col-12 mt-4">
        <h5 className="fw-bold text-primary border-bottom pb-2">
          Salary Information
        </h5>
      </div>

      {/* Salary */}

      <div className="col-lg-4">
        <label className="form-label">Monthly Salary</label>

        <input
          type="number"
          className="form-control"
          name="salary"
          placeholder="50000"
          value={formData.salary}
          onChange={handleChange}
        />
      </div>

      {/* Bank */}

      <div className="col-lg-4">
        <label className="form-label">Bank Name</label>

        <input
          type="text"
          className="form-control"
          name="bankName"
          placeholder="State Bank of India"
          value={formData.bankName}
          onChange={handleChange}
        />
      </div>

      {/* Account */}

      <div className="col-lg-4">
        <label className="form-label">Account Number</label>

        <input
          type="text"
          className="form-control"
          name="accountNumber"
          placeholder="XXXXXXXXXXXX"
          value={formData.accountNumber}
          onChange={handleChange}
        />
      </div>
      {/* =====================================
      Profile & Account
===================================== */}

<div className="col-12 mt-4">
  <h5 className="fw-bold text-primary border-bottom pb-2">
    Profile & Account Information
  </h5>
</div>

{/* Profile Photo */}

<div className="col-lg-4">

  <label className="form-label">
    Profile Photo
  </label>

  <input
    type="file"
    className="form-control"
    name="photo"
    accept="image/*"
    onChange={(e)=>
      setFormData({
        ...formData,
        photo:e.target.files[0]
      })
    }
  />

</div>

{/* Username */}

<div className="col-lg-4">

  <label className="form-label">
    Username
  </label>

  <input
    type="text"
    className="form-control"
    name="username"
    placeholder="Username"
    value={formData.username}
    onChange={handleChange}
  />

</div>

{/* Password */}

<div className="col-lg-4">

  <label className="form-label">
    Password
  </label>

  <input
    type="password"
    className="form-control"
    name="password"
    placeholder="Password"
    value={formData.password}
    onChange={handleChange}
  />

</div>

{/* Confirm Password */}

<div className="col-lg-4">

  <label className="form-label">
    Confirm Password
  </label>

  <input
    type="password"
    className="form-control"
    name="confirmPassword"
    placeholder="Confirm Password"
    value={formData.confirmPassword}
    onChange={handleChange}
  />

</div>

{/* Status */}

<div className="col-lg-4">

  <label className="form-label">
    Status
  </label>

  <select
    className="form-select"
    name="status"
    value={formData.status}
    onChange={handleChange}
  >

    <option value={true}>Active</option>

    <option value={false}>Inactive</option>

  </select>

</div>

{/* Subjects */}

<div className="col-lg-4">

  <label className="form-label">
    Assigned Subject
  </label>

  <select
    className="form-select"
    name="subject"
    value={formData.subject}
    onChange={handleChange}
  >

    <option value="">
      Select Subject
    </option>

    {subjects?.map((sub)=>(

      <option
        key={sub._id}
        value={sub._id}
      >

        {sub.subjectName}

      </option>

    ))}

  </select>

</div>

{/* Notes */}

<div className="col-lg-12">

  <label className="form-label">
    Remarks
  </label>

  <textarea
    rows="4"
    className="form-control"
    placeholder="Additional Information..."
    name="remarks"
    value={formData.remarks}
    onChange={handleChange}
  ></textarea>

</div>

{/* Buttons */}

<div className="col-12 mt-4">

  <div className="d-flex justify-content-end gap-3">

    <button
      type="reset"
      className="btn btn-outline-secondary px-4"
    >
      Reset
    </button>

    <button
      type="submit"
      className="btn btn-primary px-5"
    >
      Save Teacher
    </button>

  </div>

</div>
    </div>
  );
}

export default AddTeacher;
