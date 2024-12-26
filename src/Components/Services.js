import React from "react"
import './Css/Services.css'
import {faStethoscope , faTooth , faVirusCovid , faAnglesRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Services(){
    const services = [
        {
          title: "Monthly Check Up",
          description: "Healthcare that is convenient and affordable your good health!",
          icon: faStethoscope, 
        },
        {
          title: "Dental Care",
          description: "Healthcare that is convenient and affordable your good health!",
          icon: faTooth, 
        },
        {
          title: "Covid-19 Test",
          description: "Healthcare that is convenient and affordable your good health!",
          icon: faVirusCovid, 
        },
      ];
  return (
    <>
   <div className="services mt-5 text-center ">
  <p className="servicesTitle">Popular Services</p>
  <h5 className="servicesTitle2 mb-3">Which Services We provide</h5>
  <div className="row mb-5 justify-content-center m-0">
    {services.map((service, index) => (
      <div className="col-md-3 mx-4 mb-4 mt-5 service col-10" key={index}>
        <div className="d-flex">
          <div className="icondiv mx-5 p-3">
            <FontAwesomeIcon icon={service.icon} className="icon mt-4" />
          </div>
          <FontAwesomeIcon icon={faAnglesRight} className="icon mt-3 ms-auto mx-4 mt-4 angleRight p-3" />
        </div>
        <div className="p-3 text-start">
          <h5 className="title">{service.title}</h5>
          <p className="description mb-3">{service.description}</p>
        </div>
      </div>
    ))}
  </div>
  <a href="/services" >Explore all services</a>
</div>

     </>
  )
}

export default Services