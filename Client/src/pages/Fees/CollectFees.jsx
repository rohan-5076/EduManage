import { Link } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaUsers,
  FaWallet,
  FaExclamationTriangle,
  FaSave,
} from "react-icons/fa";
import "./Fees.css";

function CollectFees() {
  return (
    <div className="fees-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <h2>Collect Fees</h2>

          <p>
            Dashboard /<span> Fees</span> /<span> Collect Fees</span>
          </p>
        </div>

        <Link to="/fees" className="btn btn-outline-primary">
          Fee Records
        </Link>
      </div>

      {/* Dashboard Cards */}

      <div className="row g-4 mb-4">
        <div className="col-lg-3 col-md-6">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-primary">
              <FaMoneyBillWave />
            </div>

            <div>
              <small>Total Collection</small>

              <h3>₹12.4L</h3>

              <span>This Month</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-success">
              <FaUsers />
            </div>

            <div>
              <small>Paid Students</small>

              <h3>245</h3>

              <span>Completed</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-warning">
              <FaWallet />
            </div>

            <div>
              <small>Pending Fees</small>

              <h3>₹2.1L</h3>

              <span>Outstanding</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-md-6">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-danger">
              <FaExclamationTriangle />
            </div>

            <div>
              <small>Pending Students</small>

              <h3>42</h3>

              <span>Need Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}

      <div className="card border-0 shadow-sm fee-card">
        <div className="card-header bg-white border-0">
          <h4 className="fw-bold mb-1">Fee Collection</h4>

          <small className="text-muted">Collect student fee payment</small>
        </div>

        <div className="card-body">
          <div className="row">
            {/* Student */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">Student</label>

              <select className="form-select custom-input">
                <option>Select Student</option>
              </select>
            </div>

            {/* Course */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">Course</label>

              <select className="form-select custom-input">
                <option>Select Course</option>
              </select>
            </div>

            {/* Semester */}

            <div className="col-md-4 mb-4">
              <label className="form-label fw-semibold">Semester</label>

              <select className="form-select custom-input">
                <option>Select Semester</option>
              </select>
            </div>

            {/* Academic Year */}

            <div className="col-md-4 mb-4">
              <label className="form-label fw-semibold">Academic Year</label>

              <select className="form-select custom-input">
                <option>2026-2027</option>
              </select>
            </div>

            {/* Fee Type */}

            <div className="col-md-4 mb-4">
              <label className="form-label fw-semibold">Fee Type</label>

              <select className="form-select custom-input">
                <option>Select Fee Type</option>

                <option>Admission Fee</option>

                <option>Tuition Fee</option>

                <option>Exam Fee</option>

                <option>Library Fee</option>

                <option>Hostel Fee</option>
              </select>
            </div>

            {/* Total Fee */}

            <div className="col-md-4 mb-4">
              <label className="form-label fw-semibold">Total Fee</label>

              <input
                type="number"
                className="form-control custom-input"
                placeholder="50000"
              />
            </div>

            {/* Paid */}

            <div className="col-md-4 mb-4">
              <label className="form-label fw-semibold">Paid Amount</label>

              <input
                type="number"
                className="form-control custom-input"
                placeholder="25000"
              />
            </div>

            {/* Discount */}

            <div className="col-md-4 mb-4">
              <label className="form-label fw-semibold">Discount</label>

              <input
                type="number"
                className="form-control custom-input"
                placeholder="0"
              />
            </div>

            {/* Fine */}

            <div className="col-md-4 mb-4">
              <label className="form-label fw-semibold">Fine</label>

              <input
                type="number"
                className="form-control custom-input"
                placeholder="0"
              />
            </div>

            {/* Payment Date */}

            <div className="col-md-4 mb-4">
              <label className="form-label fw-semibold">Payment Date</label>

              <input type="date" className="form-control custom-input" />
            </div>

            {/* Payment Mode */}

            <div className="col-md-4 mb-4">
              <label className="form-label fw-semibold">Payment Mode</label>

              <select className="form-select custom-input">
                <option>Select Mode</option>

                <option>Cash</option>

                <option>UPI</option>

                <option>Card</option>

                <option>Net Banking</option>

                <option>Cheque</option>
              </select>
            </div>

            {/* Transaction */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">
                Transaction / Reference No.
              </label>

              <input
                type="text"
                className="form-control custom-input"
                placeholder="Enter Transaction ID"
              />
            </div>

            {/* Receipt */}

            <div className="col-md-6 mb-4">
              <label className="form-label fw-semibold">Receipt Number</label>

              <input
                type="text"
                className="form-control custom-input"
                placeholder="Auto / Manual"
              />
            </div>

            {/* Remarks */}

            <div className="col-12 mb-4">
              <label className="form-label fw-semibold">Remarks</label>

              <textarea
                rows="4"
                className="form-control"
                placeholder="Additional notes..."
              ></textarea>
            </div>

            {/* Status */}

            <div className="col-md-6">
              <label className="form-label fw-semibold">Status</label>

              <div className="form-check form-switch mt-2">
                <input className="form-check-input" type="checkbox" />

                <label className="ms-2">Payment Completed</label>
              </div>
            </div>
          </div>

          <hr />

          <div className="d-flex justify-content-end gap-3">
            <button className="btn btn-outline-secondary">Reset</button>

            <Link to="/fees" className="btn btn-danger">
              Cancel
            </Link>

            <button className="btn btn-success">
              <FaSave className="me-2" />
              Collect Fee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectFees;
