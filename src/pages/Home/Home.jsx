import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import MainPage from "../../components/MainPage/MainPage";
import AboutUs from "../../components/AboutUs/AboutUs";
import Footer from "../../components/Footer/Footer";
import Committees from "../../components/Committees/Committees";
import "../../shares/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useTheme } from "../../components/Theme/Theme-provider";

const Home = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const homeLink = document.querySelector('a[href="#home-section"]');
    if (homeLink) {
      homeLink.classList.add("active");
    }

    return () => {
      if (homeLink) {
        homeLink.classList.remove("active");
      }
    };
  }, []);

  return (
    <div
      className={`d-flex flex-column min-vh-100 smooth-scroll home-container ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      <Navbar />
      <section id="home-section">
        <MainPage />
      </section>
      <section id="about-us-section">
        <AboutUs />
      </section>
      <section id="committees-section">
        <Committees />
      </section>
      <Footer />
      <RegisterForm theme={theme} />
    </div>
  );
};

function RegisterForm({ theme }) {
  return (
    <div className="icons">
      <Link to="/registration">
        {theme === "light" ? (
          <img
            src={assets.registerIcon}
            draggable="false"
            alt="Register Icon"
          />
        ) : (
          <img
            src={assets.registerIconDark}
            draggable="false"
            alt="Register Icon"
          />
        )}
      </Link>
      <div className="tooltip">Register Now</div>
    </div>
  );
}

export default Home;
