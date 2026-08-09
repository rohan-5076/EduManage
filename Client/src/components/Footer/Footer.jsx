import "./Footer.css";

import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dashboard-footer">

      <div className="container-fluid">

        <div className="row align-items-center">

          {/* Left */}

          <div className="col-lg-6 text-center text-lg-start mb-2 mb-lg-0">
            <p className="mb-0">
              © {year} <strong>Student Management System</strong>. All Rights
              Reserved.
            </p>
          </div>

          {/* Center */}

          <div className="col-lg-3 text-center mb-2 mb-lg-0">
            <span className="version-badge">
              Version 1.0.0
            </span>
          </div>

          {/* Right */}

          <div className="col-lg-3">

            <div className="footer-icons">

              <a href="#" aria-label="Website">
                <FaGlobe />
              </a>

              <a href="#" aria-label="GitHub">
                <FaGithub />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedin />
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;