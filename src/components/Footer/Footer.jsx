import React from "react";
import "../../shares/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { assets } from "../../assets/assets";

function FooterComponent() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="me-3">
            <img
              src={assets.logo}
              alt="OSC Logo"
              className="footer-logo"
              width={70}
              height={70}
            />
          </div>
          <div>
            <p className="footer-text footer-text-community mb-0">
              Open Source Community
            </p>
            <p className="footer-text footer-text-activity mb-0">
              FCIS Student Activity
            </p>
            <p className="footer-text footer-text-copyright mb-0">
              Copyright OSC © 2024 All rights are reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
