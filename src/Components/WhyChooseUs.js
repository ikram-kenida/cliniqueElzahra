import React from "react";
import './Css/WhyChooseUs.css'
import img from '../Images/image-6.png'
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDroplet, faHeart, faHeartCircleBolt, faMicrochip, faPlay, faQuoteRight, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
function WhyChooseUs(){
    return(
        <>
      <div className="container-fluid whyChooseUs ">
<div className="content">


   
  <div className=" row mt-5 p-md-5  justify-content-center align-items-center mx-md-5  m-0 ">

  

        <Col xs={{ order: 'first' }}  className="col-md-6 col-12 firstDiv">
        <p className="servicesTitle text-start">Some great features</p>
        <h5 className="servicesTitle2 mb-3 text-start">Why choose us</h5>

        <p className="prgrph text-start col-md-9 ">There are many variations of passages of Lorem Ipsum available,
             but the majority have suffered alteration in some form, by injected humour or randomised words.</p>
        <div className="row whys m-0">
             <div className="why  align-items-center text-center col-md-5 col-12 p-4 mx-md-2">
                  <FontAwesomeIcon icon={faUserDoctor} className="icon mx-3"></FontAwesomeIcon>
                  <h6 >Professional Doctors</h6>
             </div>
             <div className="why  align-items-center text-center  col-md-5 col-12 p-4 mx-md-2">
                  <FontAwesomeIcon icon={faHandHoldingDroplet} className="icon mx-3"></FontAwesomeIcon>
                  <h6 >24/7 Strong Support</h6>
             </div>
             <div className="why  align-items-center text-center  col-md-5 col-12 p-4 mx-md-2">
                  <FontAwesomeIcon icon={faHeartCircleBolt} className="icon mx-3"></FontAwesomeIcon>
                  <h6 >Friendly Environment
                  </h6>
             </div>
             <div className="why  align-items-center text-center  col-md-5 col-12 p-4 mx-md-2">
                  <FontAwesomeIcon icon={faMicrochip} className="icon mx-3"></FontAwesomeIcon>
                  <h6 >High Medical Technology</h6>
             </div>
        </div>
        </Col>
        <Col
  xs={{ order: 'last' }}
  className="col-md-6 col-12 m-0 text-center mt-5 position-relative secondDiv"
>
 
  <img src={img} alt="" className="img-fluid text-center" />

 
  <div
    className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle d-flex justify-content-center align-items-center shadow"
    style={{ width: "80px", height: "80px" }}
  >
    <FontAwesomeIcon icon={faPlay} className="text-primary fs-3" />
  </div>
  <div className="textimg text-start p-4 col-md-7">
  Better Health & A Better Way
  <FontAwesomeIcon icon={faQuoteRight} className="text-end mx-2"></FontAwesomeIcon>
  </div>
</Col>

 
   
  </div>
  </div>
  </div>

    </>
    )
     

}

export default WhyChooseUs