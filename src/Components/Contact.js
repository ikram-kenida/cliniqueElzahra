import React from "react";
import './Css/Contact.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
function Contact(){
    return (
        <>
          <div className="contact text-center p-4 p-md-5  m-0 mt-2  ">
            <div className="content mt-5 m-0">

           
              <h1 className="mt-5 m-0">
              Leading The Way   In
            <span> Medical</span>   Excellence
              </h1>
              <div className=" d-flex justify-content-center">
                <p className="col-md-7 mt-3">

                
              Not just better healthcare, but a better healthcare experience. Passionate About Medicine.
               Compassionate About People. Serving all people through exemplary health care, education, research, and community outreach.
             </p>
              </div>
              <div className="row  mb-5 mt-3 justify-content-center m-0">
                 <button className="mx-2  p-4 mb-2 first">Get Free Consultation</button>
                 <button className="mx-2 p-4 mb-2"><FontAwesomeIcon className="mx-2" icon={faPhone}></FontAwesomeIcon>  +2819 (4631) 2930</button>
              </div>
              </div>
          </div>
        </>
    )
}

export default Contact