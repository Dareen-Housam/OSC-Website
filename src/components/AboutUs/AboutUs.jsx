import { useTheme } from "../../components/Theme/Theme-provider"; // Use named import
import { assets } from "../../assets/assets";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUs.css";

const AboutPage = () => {
  const { theme } = useTheme();
  return (
    <section className="about-section">
      <div className="container-fluid px-4">
        <div className="row">
          <div className="col-md-7">
            <div className="about-box">
              <h2 className="about-title">About US</h2>
              <p className="about-paragraph">
                We are a student activity founded on December 5th 2013 and
                located in Ain Shams University Faculty of Computer and
                Information Science. We live by our motto "Don't Reinvent The
                Wheel". We promote the philosophy of free software. We believe
                that knowledge and technology do not belong to a person or a
                group of people, and we believe that they must be open and
                available for everybody to use, study, contribute, modify and
                share. We provide a suitable environment for students to create,
                and contribute to open source projects. We also create artwork
                and animations using free software. We help students create and
                manage open source projects. We provide workshops to develop
                skills and dealing with open source software therein. Like
                creating 3D computer graphics with Blender and Linux system
                adminstration and networking. We have a place for everyone. We
                have a number of committees with a variety of ventures.
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="presentation-image">
              {theme === "light" ? (
                <img
                  src={assets.aboutUs}
                  alt="Presentation"
                  width={400}
                  height={400}
                  className="img-fluid"
                />
              ) : (
                <img
                  src={assets.aboutDark}
                  alt="Presentation"
                  width={400}
                  height={400}
                  className="img-fluid"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
