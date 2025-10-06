// import "./SummerTrainingForm.css";
// import React, { useState, useCallback, useMemo, useEffect } from "react";
// import { assets } from "../../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleCheck,
//   faCircleXmark,
// } from "@fortawesome/free-solid-svg-icons";

// const SummerTrainingForm = () => {
//   const navigate = useNavigate();
//   const [currentStep, setCurrentStep] = useState(1);
//   const [isClosed, setIsClosed] = useState(false);

//   const initialFormState = useMemo(
//     () => ({
//       nameArabic: "",
//       nameEnglish: "",
//       id: "",
//       university: "",
//       faculty: "",
//       phoneNo: "",
//       email: "",
//       department: "",
//       academicYear: "",
//       summerTrainingRequired: null,
//       trainingType: "",
//       question1: "",
//       question2: "",
//       question3: "",
//       question4: "",
//       question5: "",
//       question6: "",
//     }),
//     []
//   );

//   const [formData, setFormData] = useState(initialFormState);
//   const [status, setStatus] = useState({
//     loading: false,
//     success: null,
//     message: "",
//   });

//   const handleInputChange = useCallback((e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: name === "summerTrainingRequired" ? value === "Yes" : value,
//     }));

//     setStatus((prevStatus) => ({ ...prevStatus, success: null, message: "" }));
//   }, []);

//   const validateForm = useCallback(
//     (step) => {
//       const {
//         nameArabic,
//         nameEnglish,
//         id,
//         university,
//         faculty,
//         phoneNo,
//         email,
//         department,
//         academicYear,
//         summerTrainingRequired,
//         trainingType,
//         question1,
//         question2,
//         question3,
//         question4,
//         question5,
//         question6,
//       } = formData;

//       if (step === 1) {
//         if (
//           !nameArabic ||
//           !nameEnglish ||
//           !id ||
//           !university ||
//           !faculty ||
//           !phoneNo ||
//           !email ||
//           !department ||
//           !academicYear ||
//           summerTrainingRequired === null ||
//           !trainingType
//         ) {
//           setStatus({
//             loading: false,
//             success: false,
//             message: "Please fill in all required fields.",
//           });
//           return false;
//         }

//         if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//           setStatus({
//             loading: false,
//             success: false,
//             message: "Invalid email format.",
//           });
//           return false;
//         }

//         if (!/^\d{11}$/.test(phoneNo)) {
//           setStatus({
//             loading: false,
//             success: false,
//             message: "Phone number must be 11 digits.",
//           });
//           return false;
//         }
//       }

//       if (trainingType === "S&T" && step === 2) {
//         if (
//           !question1 ||
//           !question2 ||
//           !question3 ||
//           !question4 ||
//           !question5 ||
//           !question6
//         ) {
//           setStatus({
//             loading: false,
//             success: false,
//             message: "Please answer all technical questions.",
//           });
//           return false;
//         }
//       }

//       return true;
//     },
//     [formData, setStatus]
//   );

//   useEffect(() => {
//     const fetchRemainings = async () => {
//       if (!formData.trainingType) return;

//       try {
//         // const res = await fetch(
//         //   "https://oscgeeks-server-test.vercel.app/summer-training/get-remaining",
//         //   {
//         //     method: "POST",
//         //     headers: {
//         //       "Content-Type": "application/json",
//         //     },
//         //     body: JSON.stringify({ trainingType: formData.trainingType }),
//         //   }
//         // );

//         // const data = await res.json();

//         // setIsClosed(!data.isValid);
//         setIsClosed(true); //Form is Closed
//       } catch (err) {
//         console.error("Failed to check available Trainings:", err);
//         setIsClosed(true);
//       }
//     };

//     fetchRemainings();
//   }, [formData.trainingType]);

//   const handleSubmit = useCallback(
//     async (e) => {
//       if (e && e.preventDefault) e.preventDefault();

//       if (isClosed) {
//         setStatus({
//           loading: false,
//           success: false,
//           message: "The registration for summer training is now closed.",
//         });
//         return;
//       }

//       if (!validateForm(1) || !validateForm(2)) return;

//       setStatus({ loading: true, success: null, message: "" });

//       try {
//         const response = await fetch(
//           "https://oscgeeks-server-test.vercel.app/summer-training/user",
//           {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(formData),
//           }
//         );

//         if (response.ok) {
//           setStatus({
//             loading: false,
//             success: true,
//             message: "Form submitted successfully!",
//           });
//           setFormData(initialFormState);
//           setCurrentStep(1);
//           setTimeout(() => navigate("/"), 10000);
//         } else {
//           setStatus({
//             loading: false,
//             success: false,
//             message: "Submission failed. Try again later.",
//           });
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//         setStatus({
//           loading: false,
//           success: false,
//           message: "Something went wrong. Please try again.",
//         });
//       }
//     },
//     [formData, navigate, initialFormState, validateForm, isClosed]
//   );

//   const handleNextStep = useCallback(() => {
//     if (!validateForm(1)) return;

//     setStatus({ loading: false, success: null, message: "" });

//     if (formData.trainingType === "Linux") {
//       handleSubmit({ preventDefault: () => {} });
//     } else if (formData.trainingType === "S&T") {
//       setCurrentStep(2);
//     }
//   }, [formData.trainingType, handleSubmit, validateForm]);

//   const isStep1Valid = () => {
//     const requiredFields = [
//       "nameArabic",
//       "nameEnglish",
//       "id",
//       "university",
//       "faculty",
//       "phoneNo",
//       "email",
//       "department",
//       "academicYear",
//       "trainingType",
//     ];

//     const stringsValid = requiredFields.every((field) => formData[field]);

//     return stringsValid && formData.summerTrainingRequired !== null;
//   };

//   const isStep2Valid = () => {
//     return [
//       "question1",
//       "question2",
//       "question3",
//       "question4",
//       "question5",
//       "question6",
//     ].every((field) => formData[field]);
//   };

//   const buttonText = useMemo(() => {
//     if (formData.trainingType === "Linux") return "Submit";
//     return currentStep === 1 ? "Next Step" : "Submit";
//   }, [formData.trainingType, currentStep]);

//   return (
//     <div className="main-container">
//       <div className="form-wrapper">
//         <div className="logo-section">
//           <div className="logo-content">
//             <h1 className="net-title">.NET</h1>
//             <img
//               src={assets.mainLogo}
//               alt="Security Logo"
//               className="security-logo"
//             />
//             <h1 className="linux-title">LINUX</h1>
//           </div>
//         </div>

//         <div className="form-section">
//           <div className="form-content">
//             {currentStep === 1 && (
//               <>
//                 <h2 className="form-title">Training Registration</h2>

//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Name (Arabic)</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="nameArabic"
//                       placeholder="Name in Arabic"
//                       value={formData.nameArabic}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Name (English)</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="nameEnglish"
//                       placeholder="Name in English"
//                       value={formData.nameEnglish}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Student ID</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="id"
//                       placeholder="FCIS ASU ID"
//                       value={formData.id}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">University</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="university"
//                       placeholder="Ain Shams University"
//                       value={formData.university}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Faculty</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       name="faculty"
//                       placeholder="Computer and Information Science"
//                       value={formData.faculty}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Phone Number</label>
//                     <input
//                       type="tel"
//                       className="form-control"
//                       name="phoneNo"
//                       placeholder="Phone Number"
//                       value={formData.phoneNo}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Email</label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       name="email"
//                       placeholder="Email Address"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       required
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Department</label>
//                     <select
//                       className="form-select"
//                       name="department"
//                       value={formData.department}
//                       onChange={handleInputChange}
//                       required
//                     >
//                       <option value="" disabled>
//                         Select Department
//                       </option>
//                       <option value="Mainstream">Mainstream</option>
//                       <option value="CS">CS</option>
//                       <option value="SC">SC</option>
//                       <option value="IS">IS</option>
//                       <option value="CSYS">CSYS</option>
//                       <option value="AI">AI</option>
//                       <option value="Software Engineering">
//                         Software Engineering
//                       </option>
//                       <option value="Digital Engineering">
//                         Digital Engineering
//                       </option>
//                       <option value="Cyber Security">Cyber Security</option>
//                       <option value="Robotics">Robotics</option>
//                       <option value="Bioinformatics">Bioinformatics</option>
//                     </select>
//                   </div>
//                 </div>

//                 <div
//                   className="section-divider"
//                   data-title="Training Information"
//                 ></div>

//                 <div className="mb-3">
//                   <label className="form-label mb-3">Academic Year</label>
//                   <div className="row">
//                     {["1", "2", "3", "4"].map((year, index) => (
//                       <div key={year} className="col-6 col-md-3 mb-2">
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             name="academicYear"
//                             id={`year${index + 1}`}
//                             value={year}
//                             checked={formData.academicYear === year}
//                             onChange={handleInputChange}
//                             required
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor={`year${index + 1}`}
//                           >
//                             Year {year}
//                           </label>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label mb-3">
//                     Are the hours of summer training required?
//                   </label>
//                   <div className="row">
//                     <div className="col-6">
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="summerTrainingRequired"
//                           id="trainingYes"
//                           value="Yes"
//                           checked={formData.summerTrainingRequired === true}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor="trainingYes"
//                         >
//                           Yes
//                         </label>
//                       </div>
//                     </div>
//                     <div className="col-6">
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="summerTrainingRequired"
//                           id="trainingNo"
//                           value="No"
//                           checked={formData.summerTrainingRequired === false}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor="trainingNo"
//                         >
//                           No
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label mb-3">
//                     Summer Training Type
//                   </label>
//                   <div className="row">
//                     <div className="col-6">
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="trainingType"
//                           id="Linux"
//                           value="Linux"
//                           checked={formData.trainingType === "Linux"}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         <label className="form-check-label" htmlFor="Linux">
//                           Linux
//                         </label>
//                       </div>
//                     </div>
//                     <div className="col-6">
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="trainingType"
//                           id="S&T"
//                           value="S&T"
//                           checked={formData.trainingType === "S&T"}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         <label className="form-check-label" htmlFor="S&T">
//                           Backend .NET
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             )}

//             {currentStep === 2 && (
//               <>
//                 <h2 className="form-title">Technical Questions</h2>

//                 <div className="question-block">
//                   <h6 className="question-title">
//                     What is the main benefit of using interfaces in
//                     object-oriented programming?
//                   </h6>
//                   <div className="ms-3">
//                     {[
//                       "To inherit behavior from another class",
//                       "To define methods that must be implemented by derived classes",
//                       "To store state and behavior in one structure",
//                       "To allow global access to variables",
//                     ].map((option, index) => (
//                       <div key={index} className="form-check mb-2">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="question1"
//                           id={`q1_${index}`}
//                           value={option}
//                           checked={formData.question1 === option}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor={`q1_${index}`}
//                         >
//                           {option}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="question-block">
//                   <h6 className="question-title">
//                     What is the purpose of an abstract class in object-oriented
//                     programming?
//                   </h6>
//                   <div className="ms-3">
//                     {[
//                       "To create objects without constructors",
//                       "To provide complete implementation for all methods",
//                       "To define a base class with partial implementation and enforce method implementation in derived classes",
//                       "To make sure no class can inherit from it",
//                     ].map((option, index) => (
//                       <div key={index} className="form-check mb-2">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="question2"
//                           id={`q2_${index}`}
//                           value={option}
//                           checked={formData.question2 === option}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor={`q2_${index}`}
//                         >
//                           {option}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="question-block">
//                   <h6 className="question-title">
//                     What is the difference between ref and out parameters in C#?
//                   </h6>
//                   <div className="ms-3">
//                     {[
//                       "Both require the variable to be initialized before being passed",
//                       "ref allows a method to read and write the value, out only to read",
//                       "ref requires initialization before use, out does not",
//                       "out is faster than ref",
//                     ].map((option, index) => (
//                       <div key={index} className="form-check mb-2">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="question3"
//                           id={`q3_${index}`}
//                           value={option}
//                           checked={formData.question3 === option}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor={`q3_${index}`}
//                         >
//                           {option}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="question-block">
//                   <h6 className="question-title">
//                     Which of the following keywords in C# is used to prevent a
//                     class from being inherited?
//                   </h6>
//                   <div className="ms-3">
//                     {["sealed", "private", "readonly", "static"].map(
//                       (option) => (
//                         <div key={option} className="form-check mb-2">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             name="question4"
//                             id={`q4_${option}`}
//                             value={option}
//                             checked={formData.question4 === option}
//                             onChange={handleInputChange}
//                             required
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor={`q4_${option}`}
//                           >
//                             {option}
//                           </label>
//                         </div>
//                       )
//                     )}
//                   </div>
//                 </div>

//                 <div className="question-block">
//                   <h6 className="question-title">
//                     What is the purpose of the virtual keyword in a base class
//                     method in C#?
//                   </h6>
//                   <div className="ms-3">
//                     {[
//                       "It makes the method accessible only within the class",
//                       "It prevents the method from being overridden",
//                       "It allows the method to be overridden in a derived class",
//                       "It converts the method to a static method",
//                     ].map((option, index) => (
//                       <div key={index} className="form-check mb-2">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="question5"
//                           id={`q5_${index}`}
//                           value={option}
//                           checked={formData.question5 === option}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor={`q5_${index}`}
//                         >
//                           {option}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="question-block">
//                   <h6 className="question-title">
//                     Which OOP principle is being followed when a subclass
//                     modifies the behavior of a method defined in its superclass?
//                   </h6>
//                   <div className="ms-3">
//                     {[
//                       "Encapsulation",
//                       "Abstraction",
//                       "Overloading",
//                       "Polymorphism",
//                     ].map((option) => (
//                       <div key={option} className="form-check mb-2">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           name="question6"
//                           id={`q6_${option}`}
//                           value={option}
//                           checked={formData.question6 === option}
//                           onChange={handleInputChange}
//                           required
//                         />
//                         <label
//                           className="form-check-label"
//                           htmlFor={`q6_${option}`}
//                         >
//                           {option}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>

//           <div className="button-container d-flex align-items-start">
//             <div>
//               {currentStep === 2 ? (
//                 <button
//                   type="button"
//                   className="back-btn"
//                   onClick={() => setCurrentStep(1)}
//                 >
//                   Back
//                 </button>
//               ) : (
//                 <div style={{ width: "80px" }}></div>
//               )}
//             </div>

//             <div className="ms-auto d-flex flex-column align-items-end">
//               <button
//                 type="button"
//                 className="submit-button"
//                 onClick={
//                   currentStep === 1
//                     ? handleNextStep
//                     : currentStep === 2
//                     ? handleSubmit
//                     : undefined
//                 }
//                 disabled={
//                   status.loading ||
//                   isClosed ||
//                   (currentStep === 1 ? !isStep1Valid() : !isStep2Valid())
//                 }
//               >
//                 {isClosed
//                   ? "Registration Closed"
//                   : status.loading
//                   ? "Submitting..."
//                   : buttonText}
//               </button>

//               {status.message && (
//                 <div
//                   className={`alert-message ${
//                     status.success ? "success" : "error"
//                   } mt-2`}
//                 >
//                   <FontAwesomeIcon
//                     icon={status.success ? faCircleCheck : faCircleXmark}
//                   />
//                   <span>{status.message}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(SummerTrainingForm);
