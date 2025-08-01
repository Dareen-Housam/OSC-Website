import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import ThemeToggle from "../../components/Theme/Theme-toggle";

function NavbarComponent() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="nav-links">
          <Link
            href="#home-section"
            className="nav-link active"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home-section");
            }}
          >
            Home
          </Link>
          <Link
            href="#about-us-section"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about-us-section");
            }}
          >
            About
          </Link>
          <Link
            href="#committees-section"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("committees-section");
            }}
          >
            Committees
          </Link>
        </div>

        <div className="nav-logo">
          <ThemeToggle />
          <div className="sun-icon">
            <img
              src={assets.logo}
              alt="OSC Logo"
              width={40}
              height={45}
              className="osc-logo"
            />
          </div>
          <span className="osc-text">OSC</span>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
