

function StdGrades() {
  const student = JSON.parse(localStorage.getItem("student"));
  const Total_Sgpa = student?.results?.reduce((sum,result)=> sum + result.sgpa ,0) || 0;
  const cgpa = student?.results?.length > 0
  ? (Total_Sgpa / student?.results?.length).toFixed(2)
  :0;
  return (
    <div>
      <h3>Semester Results</h3>

<div className="card shadow-sm border-0 bg-primary text-white mb-4">
  <div className="card-body d-flex justify-content-between align-items-center">
    <div>
      <h5 className="mb-0">
        <i className="bi bi-award-fill me-2"></i>
        Total CGPA
      </h5>
    </div>

    <span className="badge bg-light text-primary fs-5 px-4 py-2">
      {cgpa}
    </span>
  </div>
</div>

<div className="row g-4">
  {student?.results?.map((result, index) => (
    <div className="col-md-6" key={index}>
      <div className="card shadow-sm border-0 h-100">
        <div className="card-header bg-info text-white">
          <h5 className="mb-0">
            Semester {result.semester}
          </h5>
        </div>

        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
            <span className="fw-semibold">SGPA</span>
            <span className="badge bg-success fs-6">
              {result.sgpa}
            </span>
          </div>

          <div className="d-flex justify-content-between">
            <span className="fw-semibold">Grade</span>
            <span className="badge bg-warning text-dark fs-6">
              {result.grade}
            </span>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}
export default StdGrades;
