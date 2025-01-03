import React, { useState } from "react";
import "./Css/FAQ.css";
import IMG from "../Images/Image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const FAQ = () => {
  // State to track which FAQ item is active
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for showing/hiding answers
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: "Will I always see my own doctor?", answer: "You may not always see your own doctor due to availability, but our system ensures continuity of care." },
    { question: "What is One Medical's care?", answer: "One Medical's care is focused on providing patient-centered, convenient, and tech-integrated healthcare." },
    { question: "What is evidence-based medicine?", answer: "Evidence-based medicine involves making clinical decisions based on the best available scientific evidence." },
    { question: "What is an academic medical center?", answer: "An academic medical center is a healthcare facility that integrates clinical care with teaching and research." },
  ];

  return (
    <div className="faq-section container mt-5 m-0 p-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 text-center faq-left">
          <div className="position-relative">
            <div className="card solutions shadow position-absolute border-0 p-3 text-center">
              <span className="icon">
                <FontAwesomeIcon icon={faLightbulb} className="lamp"></FontAwesomeIcon>
              </span>
              <p className="mb-0">Get Solutions From Our Experts</p>
            </div>
            <img src={IMG} alt="Doctor" className="img-fluid doctor-image" />
          </div>
        </div>

        {/* Right Side with FAQ */}
        <div className="col-lg-6 faq-right">
          <h2 className="mb-4">FAQ Questions</h2>
          <h3 className="mb-5 mt-3">Get Your General Answer</h3>
          <ul className="faq-list list-unstyled">
            {faqData.map((item, index) => (
              <li key={index} className="faq-item ">
                <div
                  className="d-flex justify-content-between align-items-center question"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{item.question}</span>
                  <span className="plus-icon">{activeIndex === index ? "-" : "+"}</span>
                </div>
                <div
                  className={`answer ${activeIndex === index ? "show" : ""}`}
                  style={{
                    maxHeight: activeIndex === index ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                    color:'#00a8e8',
                    fontSize:'1rem',
                    fontWeight:'200' , 
                    borderRadius:'10px',
                   
                   
                  }}
                >
                  <p className="mt-2">{item.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
