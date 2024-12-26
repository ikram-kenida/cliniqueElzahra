import { faHeadphones, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './Css/Calls.css'

function Calls() {
  return (
    <>
      <div className="row p-md-5 p-4 justify-content-center m-0">
        {/* Consultation Box */}
        <div className="Consultation col-md-5 mx-md-2 p-5 mx-2 text-start position-relative mt-3">
          {/* Floating Spiral Icon */}
          <div className="icon-floating spiral-icon"></div>
          <h6 className="text-primary">Get Free Consultation</h6>
          <h2>From Our Top Doctors 24x7</h2>
          <a href="#" className="btn btn1 mt-3 p-3">
            <FontAwesomeIcon icon={faHeadphones} className="mr-2 icon" />
            +213 0666666666
          </a>
        </div>

        {/* Emergency Box */}
        <div className="Emergency col-md-5 mx-md-2 p-5 mx-2 text-start position-relative mt-3">
          {/* Floating Heart Icon */}
          <div className="icon-floating heart-icon"></div>
          <h6 className="text-danger">Emergency?</h6>
          <h2>Don’t Be Late! Call Us Now</h2>
          <a href="#" className="btn btn2 mt-3 p-3">
            <FontAwesomeIcon icon={faPhone} className="mr-2 icon" />
            +213 06 66 66 66 66
          </a>
        </div>
      </div>
    </>
  );
}

export default Calls;
