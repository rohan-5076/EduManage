import { Link } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaWallet,
  FaUsers,
  FaExclamationCircle,
  FaPlus,
  FaSearch,
  FaRedo,
  FaEye,
  FaEdit,
  FaTrash,
  FaPrint,
} from "react-icons/fa";
import "./Fees.css";

function ListFees() {
  return (
    <div className="fees-page">
      {/* Header */}

      <div className="page-header">
        <div>
          <h2>Fee Records</h2>

          <p>
            Dashboard /<span> Fees</span>
          </p>
        </div>

        <Link to="/collect-fee" className="btn btn-primary">
          <FaPlus className="me-2" />
          Collect Fee
        </Link>
      </div>

      {/* Dashboard */}

      <div className="row g-4 mb-4">
        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-primary">
              <FaMoneyBillWave />
            </div>

            <div>
              <small>Total Collection</small>

              <h3>₹12.4L</h3>

              <span>This Year</span>
            </div>
          </div>
        </div>

        <div className="col-lg-3">
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

        <div className="col-lg-3">
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

        <div className="col-lg-3">
          <div className="dashboard-card">
            <div className="dashboard-icon bg-danger">
              <FaExclamationCircle />
            </div>

            <div>
              <small>Pending Students</small>

              <h3>42</h3>

              <span>Need Payment</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}

      <div className="filter-card">
        <div className="row g-3">
          <div className="col-lg-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search Student..."
            />
          </div>

          <div className="col-lg-2">
            <select className="form-select">
              <option>Course</option>
            </select>
          </div>

          <div className="col-lg-2">
            <select className="form-select">
              <option>Semester</option>
            </select>
          </div>

          <div className="col-lg-2">
            <select className="form-select">
              <option>Status</option>

              <option>Paid</option>

              <option>Pending</option>
            </select>
          </div>

          <div className="col-lg-3 d-flex gap-2">
            <button className="btn btn-primary flex-fill">
              <FaSearch className="me-2" />
              Search
            </button>

            <button className="btn btn-outline-secondary">
              <FaRedo />
            </button>
          </div>
        </div>
      </div>

      {/* Table */}

      <div className="card shadow-sm border-0 mt-4">
        <div className="card-header bg-white d-flex justify-content-between align-items-center">
          <div>
            <h5 className="fw-bold mb-0">Fee Records</h5>

            <small className="text-muted">Student Payment History</small>
          </div>
        </div>

        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>

                  <th>Receipt</th>

                  <th>Student</th>

                  <th>Course</th>

                  <th>Fee Type</th>

                  <th>Total</th>

                  <th>Paid</th>

                  <th>Pending</th>

                  <th>Mode</th>

                  <th>Status</th>

                  <th className="text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>

                  <td>
                    <strong>REC240001</strong>
                  </td>

                  <td>
                    <div>
                      <h6 className="mb-0">Rohan Patil</h6>

                      <small className="text-muted">PRN : CS24001</small>
                    </div>
                  </td>

                  <td>BCA</td>

                  <td>Tuition Fee</td>

                  <td>₹50,000</td>

                  <td>₹30,000</td>

                  <td>₹20,000</td>

                  <td>UPI</td>

                  <td>
                    <span className="status pending">Pending</span>
                  </td>

                  <td>
                    <div className="d-flex justify-content-center gap-2">
                      <button className="btn btn-outline-primary btn-sm">
                        <FaEye />
                      </button>

                      <button className="btn btn-outline-warning btn-sm">
                        <FaEdit />
                      </button>

                      <button className="btn btn-outline-success btn-sm">
                        <FaPrint />
                      </button>

                      <button className="btn btn-outline-danger btn-sm">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Pagination */}

      <div className="d-flex justify-content-between align-items-center mt-4">
        <small className="text-muted">Showing 1 to 10 of 250 Records</small>

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

export default ListFees;
