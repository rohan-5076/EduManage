import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import StudentSidebar from "../components/Sidebar/StudentSidebar";
// import Footer from "../components/Footer/Footer";

function StdDashboardLayout() {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="d-flex flex-grow-1 overflow-hidden">
        <StudentSidebar />

        <main
          className="flex-grow-1 bg-light p-4 hide-scrollbar"
          style={{ overflowY: "auto" }}
        >
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default StdDashboardLayout;