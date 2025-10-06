import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  //   faCalendarDays,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../../components/Theme/Theme-provider";
const Form = () => {
  const { theme } = useTheme();

  const navigate = useNavigate();
  const [availableCommittees, setAvailableCommittees] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    academic_year: "",
    college: "",
    committee_1: "",
    committee_2: "",
    attendance_date: "",
    attendance_date_2: "",
  });

  useEffect(() => {
    const fetchCommittees = async () => {
      try {
        const res = await fetch(
          "https://oscgeeks-server-test.vercel.app/remainings"
        );
        const data = await res.json();

        const filteredCommittees = Object.entries(data.remainings)
          .filter(([_, count]) => count > 0)
          .map(([value]) => ({
            value,
          }));

        setAvailableCommittees(filteredCommittees);
      } catch (err) {
        console.error("Failed to load available committees:", err);
      }
    };

    fetchCommittees();
  }, []);

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  });
  const [confirmEmail, setConfirmEmail] = useState("");
  const validateForm = () => {
    const {
      id,
      name,
      email,
      phone,
      academic_year,
      college,
      committee_1,
      committee_2,
      attendance_date,
      attendance_date_2,
    } = formData;
    if (committee_1 && !attendance_date) {
      setStatus({
        loading: false,
        success: false,
        message: "Please select a time slot for the Basic committee.",
      });
      return false;
    }
    if (
      !id ||
      !name ||
      !email ||
      !confirmEmail ||
      !phone ||
      !academic_year ||
      !college ||
      !committee_1 ||
      !attendance_date
    ) {
      setStatus({
        loading: false,
        success: false,
        message: "Please fill in all required fields.",
      });
      return false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus({
        loading: false,
        success: false,
        message: "Invalid email format.",
      });
      return false;
    }
    if (email !== confirmEmail) {
      setStatus({
        loading: false,
        success: false,
        message: "Email and confirmation email must match.",
      });
      return false;
    }
    if (!/^\d{11}$/.test(phone)) {
      setStatus({
        loading: false,
        success: false,
        message: "Phone number must be 11 digits.",
      });
      return false;
    }

    if (committee_2 && committee_1 === committee_2) {
      setStatus({
        loading: false,
        success: false,
        message: "Optional committee must be different from basic committee.",
      });
      return false;
    }

    if (committee_2 && !attendance_date_2) {
      setStatus({
        loading: false,
        success: false,
        message: "Please select a time slot for the optional committee.",
      });
      return false;
    }

    return true;
  };

  //   const [showTimeSlots, setShowTimeSlots] = useState({
  //     basic: false,
  //     optional: false,
  //   });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setStatus({ loading: true, success: null, message: "" });

    try {
      //   const transformedData = {
      //     ...formData,
      //     committee_1:
      //       formData.committee_1 === "PR" ? "PR&LR" : formData.committee_1,
      //     committee_2:
      //       formData.committee_2 === "PR" ? "PR&LR" : formData.committee_2,
      //   };
      const transformedData = {
        ...formData,
        committee_1:
          formData.committee_1 === "PR" ? "PR&LR" : formData.committee_1,
        committee_2: "",
        attendance_date: "",
        attendance_date_2: "",
      };

      const response = await fetch(
        "https://oscgeeks-server-test.vercel.app/add-user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transformedData),
        }
      );

      if (response.ok) {
        setStatus({
          loading: false,
          success: true,
          message: "Form submitted successfully!",
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setStatus({
          loading: false,
          success: false,
          message: "Submission failed. Try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        loading: false,
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  };
  //   const toggleTimeSlots = (type) => {
  //     setShowTimeSlots((prev) => ({
  //       ...prev,
  //       [type]: !prev[type],
  //     }));
  //   };
  //   const selectTimeSlot = (type, slot) => {
  //     setFormData((prev) => ({
  //       ...prev,
  //       [type === "basic" ? "attendance_date" : "attendance_date_2"]: slot,
  //     }));
  //     setShowTimeSlots((prev) => ({
  //       ...prev,
  //       [type]: false,
  //     }));
  //   };
  const collegeOptions = ["Computer Science", "Other"];
  //   const timeSlots = [
  //     "TUE,9:00",
  //     "TUE,10:00",
  //     "TUE,11:00",
  //     "TUE,12:00",
  //     "TUE,1:00",
  //     "TUE,2:00",
  //     "TUE,3:00",
  //     "TUE,4:00",
  //     "WED,9:00",
  //     "WED,10:00",
  //     "WED,11:00",
  //     "WED,12:00",
  //     "WED,1:00",
  //     "WED,2:00",
  //     "WED,3:00",
  //     "WED,4:00",
  //   ];

  return (
    <div
      className={`register-container ${
        theme === "dark" ? "dark-theme" : "light-theme"
      }`}
    >
      <div className="mobile-logos-section">
        <div className="fcis-asu-logo">
          <img
            src={assets.fcisAsu}
            alt="FCIS ASU Logo"
            width={60}
            height={60}
          />
        </div>
        <div className="sun-logo-mobile">
          <img src={assets.logo} alt="Sun Logo" width={60} height={60} />
        </div>
        <div className="fcis-logo">
          {theme === "light" ? (
            <img src={assets.fcis} alt="FCIS Logo" width={60} height={60} />
          ) : (
            <img src={assets.fcisDark} alt="FCIS Logo" width={60} height={60} />
          )}
        </div>
      </div>

      <div className="form-section">
        <h1 className="form-title">OSC Recruitment</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="fullName"
              name="name"
              className="form-control"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="confirmEmail"
              className="form-control"
              placeholder="Confirm Email"
              value={confirmEmail}
              onChange={handleConfirmEmailChange}
              required
            />
          </div>
          {/* <div className="form-row committee-row">
            <div className="form-group half">
              <div className="select-with-icon">
                <select
                  id="basicCommittee"
                  name="committee_1"
                  className="form-control"
                  value={formData.committee_1}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Basic Committee
                  </option>
                  {availableCommittees.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
                <div
                  className="select-icon"
                  onClick={() => toggleTimeSlots("basic")}
                >
                  <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                {showTimeSlots.basic && (
                  <div className="time-slots-dropdown">
                    <div className="time-slots-header">
                      <h4>Select Time Slot</h4>
                      <button
                        type="button"
                        onClick={() => toggleTimeSlots("basic")}
                        className="close-btn"
                      >
                        <FontAwesomeIcon icon={faCalendarDays} />
                      </button>
                    </div>
                    <div className="time-slots-list">
                      {timeSlots.map((slot) => (
                        <div
                          key={slot}
                          className={`time-slot ${
                            formData.attendance_date === slot ? "selected" : ""
                          }`}
                          onClick={() => selectTimeSlot("basic", slot)}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {formData.attendance_date && (
                <div className="selected-time-slot">
                  <span>Time: {formData.attendance_date}</span>
                </div>
              )}
            </div>

            <div className="form-group half">
              <div className="form-group half">
                <select
                  id="optionalCommittee"
                  name="committee_2"
                  className="form-control"
                  value={formData.committee_2}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Optional Committee
                  </option>
                  {availableCommittees.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </select>
                <div
                  className="select-icon"
                  onClick={() => toggleTimeSlots("optional")}
                >
                  <FontAwesomeIcon icon={faCalendarDays} />
                </div>
                {showTimeSlots.optional && (
                  <div className="time-slots-dropdown">
                    <div className="time-slots-header">
                      <h4>Select Time Slot</h4>
                      <button
                        type="button"
                        onClick={() => toggleTimeSlots("optional")}
                        className="close-btn"
                      >
                        <FontAwesomeIcon icon={faCalendarDays} />
                      </button>
                    </div>
                    <div className="time-slots-list">
                      {timeSlots.map((slot) => (
                        <div
                          key={slot}
                          className={`time-slot ${
                            formData.attendance_date_2 === slot
                              ? "selected"
                              : ""
                          }`}
                          onClick={() => selectTimeSlot("optional", slot)}
                        >
                          {slot}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {formData.attendance_date_2 && (
                <div className="selected-time-slot">
                  <span>Time: {formData.attendance_date_2}</span>
                </div>
              )}
            </div>
          </div> */}

          <div className="form-group">
            <select
              name="committee_1"
              className="form-control"
              value={formData.committee_1}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Committee
              </option>
              {availableCommittees.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.value}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Academic Year:</label>
            <div className="radio-group styled-radio-group">
              {["1", "2", "3", "4"].map((year) => (
                <label key={year} className="radio-option styled-radio-option">
                  <input
                    type="radio"
                    name="academic_year"
                    value={year}
                    checked={formData.academic_year === year}
                    onChange={handleChange}
                    required
                  />
                  <span className="radio-label">Year {year}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <input
              type="tel"
              id="phoneNumber"
              name="phone"
              className="form-control"
              placeholder="Phone Number (what's app if possible)"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group mobile-only">
            <select
              id="college-mobile"
              name="college"
              className="form-control"
              value={formData.college}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                College
              </option>
              {collegeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="form-row desktop-row">
            <div className="form-group half">
              <select
                id="college"
                name="college"
                className="form-control"
                value={formData.college}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  College
                </option>
                {collegeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group half">
              <input
                type="number"
                id="collegeId"
                name="id"
                className="form-control"
                placeholder="College ID"
                value={formData.id}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group mobile-only">
            <input
              type="text"
              id="collegeId-mobile"
              name="id"
              className="form-control"
              placeholder="College ID"
              value={formData.id}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="submit-button"
            disabled={status.loading}
          >
            {status.loading ? "Submitting..." : "Submit"}
          </button>

          {status.message && (
            <div
              className={`alert-message ${
                status.success ? "success" : "error"
              }`}
            >
              <FontAwesomeIcon
                icon={status.success ? faCircleCheck : faCircleXmark}
              />
              <span>{status.message}</span>
            </div>
          )}
        </form>
      </div>
      <div className="desktop-sun-logo">
        <img src={assets.logo} alt="Sun Logo" />
      </div>

      <div className="desktop-logos-section">
        <div className="fcis-logo">
          {theme === "light" ? (
            <img src={assets.fcis} alt="FCIS Logo" width={80} height={80} />
          ) : (
            <img src={assets.fcisDark} alt="FCIS Logo" width={80} height={80} />
          )}
        </div>
        <div className="fcis-asu-logo">
          <img
            src={assets.fcisAsu}
            alt="FCIS ASU Logo"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
