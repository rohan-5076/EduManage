import {
  FaGraduationCap,
  FaChartLine,
  FaAward,
  FaBookOpen,
} from "react-icons/fa";

import "./StdResults.css";

function StdResults() {
  return (
    <div className="results-page">
      {/* Header */}

      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Results</h2>

          <p className="text-muted mb-0">
            View your semester-wise academic results and marksheets.
          </p>
        </div>

        <button className="btn btn-primary px-4">Semester 5</button>
      </div>

      {/* Statistics Cards */}

      <div className="row g-4">
        {/* CGPA */}

        <div className="col-xl-3 col-md-6">
          <div className="result-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Current CGPA</small>

                <h3>8.72</h3>

                <span className="text-primary">Overall Performance</span>
              </div>

              <div className="result-icon bg-primary">
                <FaGraduationCap />
              </div>
            </div>
          </div>
        </div>

        {/* SGPA */}

        <div className="col-xl-3 col-md-6">
          <div className="result-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Current SGPA</small>

                <h3>8.91</h3>

                <span className="text-success">Semester 5</span>
              </div>

              <div className="result-icon bg-success">
                <FaChartLine />
              </div>
            </div>
          </div>
        </div>

        {/* Credits */}

        <div className="col-xl-3 col-md-6">
          <div className="result-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Credits Earned</small>

                <h3>156</h3>

                <span className="text-warning">Out of 160</span>
              </div>

              <div className="result-icon bg-warning">
                <FaAward />
              </div>
            </div>
          </div>
        </div>

        {/* Semester */}

        <div className="col-xl-3 col-md-6">
          <div className="result-card">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <small>Current Semester</small>

                <h3>5</h3>

                <span className="text-info">Ongoing</span>
              </div>

              <div className="result-icon bg-info">
                <FaBookOpen />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ===========================
    Filters
=========================== */}

      <div className="card border-0 shadow-sm result-filter-card my-4">
        <div className="card-body">
          <div className="row g-3 align-items-end">
            {/* Semester */}

            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-semibold">Semester</label>

              <select className="form-select">
                <option>Semester 5</option>
                <option>Semester 4</option>
                <option>Semester 3</option>
                <option>Semester 2</option>
                <option>Semester 1</option>
              </select>
            </div>

            {/* Academic Year */}

            <div className="col-lg-3 col-md-6">
              <label className="form-label fw-semibold">Academic Year</label>

              <select className="form-select">
                <option>2026 - 2027</option>
                <option>2025 - 2026</option>
                <option>2024 - 2025</option>
              </select>
            </div>

            {/* Search */}

            <div className="col-lg-4 col-md-6">
              <label className="form-label fw-semibold">Search Subject</label>

              <input
                type="text"
                className="form-control"
                placeholder="Search subject..."
              />
            </div>

            {/* Download */}

            <div className="col-lg-2 col-md-6">
              <button className="btn btn-primary w-100">Download</button>
            </div>
          </div>
        </div>
      </div>

      {/* ===========================
    Result Table
=========================== */}

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h5 className="fw-bold mb-1">Semester 5 Results</h5>

              <small className="text-muted">Academic Performance Summary</small>
            </div>

            <span className="badge bg-success px-3 py-2">PASS</span>
          </div>

          <div className="table-responsive">
            <table className="table table-hover align-middle result-table">
              <thead>
                <tr>
                  <th>Code</th>

                  <th>Subject</th>

                  <th>Credits</th>

                  <th>Internal</th>

                  <th>External</th>

                  <th>Total</th>

                  <th>Grade</th>

                  <th>Result</th>

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>CS501</td>

                  <td>Data Structures</td>

                  <td>4</td>

                  <td>28/30</td>

                  <td>65/70</td>

                  <td>
                    <strong>93</strong>
                  </td>

                  <td>
                    <span className="badge bg-primary">A+</span>
                  </td>

                  <td>
                    <span className="badge bg-success">Pass</span>
                  </td>

                  <td>
                    <button className="btn btn-outline-primary btn-sm">
                      View
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>CS502</td>

                  <td>Database Management</td>

                  <td>4</td>

                  <td>26/30</td>

                  <td>60/70</td>

                  <td>
                    <strong>86</strong>
                  </td>

                  <td>
                    <span className="badge bg-success">A</span>
                  </td>

                  <td>
                    <span className="badge bg-success">Pass</span>
                  </td>

                  <td>
                    <button className="btn btn-outline-success btn-sm">
                      View
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>CS503</td>

                  <td>Operating System</td>

                  <td>3</td>

                  <td>23/30</td>

                  <td>54/70</td>

                  <td>
                    <strong>77</strong>
                  </td>

                  <td>
                    <span className="badge bg-warning text-dark">B+</span>
                  </td>

                  <td>
                    <span className="badge bg-success">Pass</span>
                  </td>

                  <td>
                    <button className="btn btn-outline-warning btn-sm">
                      View
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>CS504</td>

                  <td>Artificial Intelligence</td>

                  <td>4</td>

                  <td>29/30</td>

                  <td>67/70</td>

                  <td>
                    <strong>96</strong>
                  </td>

                  <td>
                    <span className="badge bg-danger">O</span>
                  </td>

                  <td>
                    <span className="badge bg-success">Pass</span>
                  </td>

                  <td>
                    <button className="btn btn-outline-danger btn-sm">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StdResults;
