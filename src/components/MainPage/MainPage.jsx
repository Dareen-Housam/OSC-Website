import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../shares/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainPage.css";
import { assets } from "../../assets/assets";
const HomePage = () => {
  return (
    <>
      <main className="main-content">
        <div className="social-sidebar">
          <div className="social-text">Follow us on Social media</div>
          <div>
            <div className="social-icons">
              <a
                href="https://bit.ly/3nz3xVL"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="icon" />
              </a>
              <a
                href="https://bit.ly/37zl9eE"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
              <a
                href="https://bit.ly/3p7RNK1"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="icon" />
              </a>
              <a
                href="https://bit.ly/3reqLT1"
                className="social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} className="icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="center-logo">
          <img
            src={assets.mainLogo}
            alt="OSC Logo"
            className="footer-logo"
            width={300}
            height={350}
          />
        </div>

        <div className="right-text">
          <div className="circular-border">
            <div className="main-title">
              OPEN
              <br />
              SOURCE
              <br />
              COMMUNITY
            </div>
            <div className="tagline">
              DON'T REINVENT
              <br />
              THE WHEEL
            </div>
          </div>
        </div>
      </main>
      <main className="main-content-mobile">
        <div className="mobile-layout">
          <div className="mobile-circular-text">
            <div className="main-title">
              OPEN
              <br />
              SOURCE
              <br />
              COMMUNITY
            </div>
            <div className="tagline">
              DON'T REINVENT
              <br />
              THE WHEEL
            </div>
          </div>

          <div className="mobile-follow-text">Follow us on Social media</div>
          <div className="mobile-social-icons-logo">
            <div className="mobile-social-icons1">
              <a
                href="https://bit.ly/3nz3xVL"
                className="mobile-social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="icon" />
              </a>
              <a
                href="https://bit.ly/37zl9eE"
                className="mobile-social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="icon" />
              </a>
            </div>
            <div className="mobile-logo">
              <img
                src={assets.mainLogo}
                alt="OSC Logo"
                className="footer-logo"
                width={150}
                height={200}
              />
            </div>

            <div className="mobile-social-icons2">
              <a
                href="https://bit.ly/3p7RNK1"
                className="mobile-social-icon"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="icon" />
              </a>
              <a
                href="https://bit.ly/3reqLT1"
                className="mobile-social-icon mobile-social-icon-x"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
