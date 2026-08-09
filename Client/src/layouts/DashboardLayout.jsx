import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

function DashboardLayout() {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Navbar */}
      <Navbar />

      {/* Sidebar + Content */}
      <div className="d-flex flex-grow-1 overflow-hidden">
        <Sidebar />

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

export default DashboardLayout;