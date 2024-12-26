import React from "react";
import './Css/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub , faFacebook , faInstagram } from '@fortawesome/free-brands-svg-icons';
function Fotter() {
  return (
    <footer className="footer p-5 text-light text-start">
      <div className="container py-5 p-md-5">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-5 logo">Clinique el Zahra</h5>
            <p>268 Elizabeth Road, Brooklyn 2390, USA</p>
            <p>+2839 (3748) 2651</p>
            <p>contactsupport@gmail.com</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-link"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a>
              <a href="#" className="social-link"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
              <a href="#" className="social-link"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
              <a href="#" className="social-link"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
            </div>
          </div>

          {/* Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-4">Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link mb-3"><FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "5px" }} />
              About Us</a></li>
              <li><a href="#" className="footer-link mb-3"><FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "5px" }} /> Our Pricing</a></li>
              <li><a href="#" className="footer-link mb-3"><FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "5px" }} /> Our Gallery</a></li>
              <li><a href="#" className="footer-link mb-3"><FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "5px" }} /> Our Gallery</a></li>
              <li><a href="#" className="footer-link mb-3"><FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "5px" }} />Appointment</a></li>
              <li><a href="#" className="footer-link mb-3"><FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "5px" }} />Privacy Policy</a></li>
            </ul>
          </div>

          {/* Department */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold mb-4">Department</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="footer-link mb-3"><FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "5px" }} /> Orthology</a></li>
              <li><a href="#" className="footer-link mb-3"><FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "5px" }} /> Neurology</a></li>
              <li><a href="#" className="footer-link mb-3"> <FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "5px" }} />Dental Care</a></li>
              <li><a href="#" className="footer-link mb-3"> <FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "5px" }} />Ophthalmology</a></li>
              <li><a href="#" className="footer-link mb-3"> <FontAwesomeIcon icon={faChevronRight} style={{ marginRight: "5px" }} />Cardiology</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-md-3">
            <h5 className="fw-bold mb-4">Opening Hours</h5>
            <ul className="list-unstyled">
              <li>Mon - Tues: 08:00 AM - 05:00 PM</li>
              <li>Tue - Tues: 08:00 AM - 05:00 PM</li>
              <li>Wed - Tues: 08:00 AM - 05:00 PM</li>
              <li>Thurs - Tues: 08:00 AM - 05:00 PM</li>
              <li>Sun - Tues: 08:00 AM - 05:00 PM</li>
            </ul>
          </div>
        </div>
<hr></hr>
<div className="row mt-5">
  <div className="col d-md-flex justify-content-between">
    <p className="mb-0">
      Copyright ©2024 clinique el zahra. All Rights Reserved
    </p>
    <p className="mb-0">
      Created by <a href="#" className="footer-link">Aurora</a>
    </p>
  </div>
</div>

      </div>
    </footer>
  );
}

export default Fotter;
