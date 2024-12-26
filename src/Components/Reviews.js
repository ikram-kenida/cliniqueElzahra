import React from "react"
import img from '../Images/reviews.png'
import './Css/Reviews.css'
import patient1 from '../Images/test3.jpg'
import patient2 from '../Images/Image.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"





function Reviews(){
    return(
        <>
        <div className=" reviews big_reviews container-fluid  text-center mb-5 ">
        <p className="servicesTitle">Testimonial</p>
        <h5 className="servicesTitle2 mb-5">
        What Our Client Say About Us</h5>
        <div class="container-fluid m-0 row justify-content-center align-items-center m-0 p-0">
   
       
        <div class="col-md-3 c-1 col-12 ">
            <div class="comment   text-start">
                <div className="row align-items-center">
                   
                     <img src={patient1} className="img-fluid col-3  patient mb-2 mt-2"></img> 
                      <div className="d-flex col-6">
                        <FontAwesomeIcon icon={faStar} className="star"> </FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar } className="star"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                     </div>
                </div>
               
                <p>“ There are many variations of passages of Lorem Ipsum available.”</p>
                <h6>Kenida Ikram</h6>
            </div>
        </div>

       
        <div class="col-md-6 col-12 text-center">
            <img src={img} class="img-fluid image" alt="centered image"></img>
        </div>

       
        <div class="col-md-3 c-2 col-12 ">
            <div class="comment  text-start">
            <div className="row align-items-center">
                   
                   <img src={patient1} className="img-fluid col-3  patient mb-2 mt-2"></img> 
                    <div className="d-flex col-6">
                      <FontAwesomeIcon icon={faStar} className="star"> </FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar } className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="starblue"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="starblue"></FontAwesomeIcon>
                   </div>
              </div>
                <p>“ There are many variations of passages of Lorem Ipsum available.”</p>
                <h6>Kenida Ikram</h6>
            </div>
        </div>
        <div class="col-md-3 c-3 col-12 mx-5 ">
            <div class="comment  text-start">
            <div className="row align-items-center">
                   
                   <img src={patient2} className="img-fluid col-3  patient mb-2 mt-2"></img> 
                    <div className="d-flex col-6">
                      <FontAwesomeIcon icon={faStar} className="star"> </FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar } className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="starblue"></FontAwesomeIcon>
                   </div>
              </div>
                <p>“ There are many variations of passages of Lorem Ipsum available.”</p>
                <h6>Kenida Ikram</h6>
            </div>
        </div>
        <div class="col-md-3 c-4 col-12 mx-5">
            <div class="comment  text-start">
            <div className="row align-items-center">
                   
                   <img src={patient1} className="img-fluid col-3  patient mb-2 mt-2"></img> 
                    <div className="d-flex col-6">
                      <FontAwesomeIcon icon={faStar} className="star"> </FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar } className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="starblue"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="starblue"></FontAwesomeIcon>
                   </div>
              </div>
                <p>“ There are many variations of passages of Lorem Ipsum available.”</p>
                <h6>Kenida Ikram</h6>
            </div>
        </div>


</div>
</div>
        
<div className=" reviews small_reviews container-fluid  mb-5">
        <p className="servicesTitle">Testimonial</p>
        <h5 className="servicesTitle2 mb-2">
        What Our Client Say About Us</h5>
        <div class="container-fluid m-0 row justify-content-center align-items-center m-0 p-0">
   
       
        <div class="col-md-6  col-12 ">
            <div class="comment   text-start">
                <div className="row align-items-center">
                   
                     <img src={patient1} className="img-fluid col-3  patient mb-3 mt-2" alt=""></img> 
                      <div className="d-flex col-6">
                        <FontAwesomeIcon icon={faStar} className="star"> </FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar } className="star"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                     </div>
                </div>
               
                <p>“ There are many variations of passages of Lorem Ipsum available.”</p>
                <h6>Kenida Ikram</h6>
            </div>
        </div>

       
      

       
        <div class="col-md-6  col-12 ">
            <div class="comment  text-start">
            <div className="row align-items-center">
                   
                   <img src={patient1} className="img-fluid col-3  patient mb-3 mt-2" alt=""></img> 
                    <div className="d-flex col-6">
                      <FontAwesomeIcon icon={faStar} className="star"> </FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar } className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="starblue"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="starblue"></FontAwesomeIcon>
                   </div>
              </div>
                <p>“ There are many variations of passages of Lorem Ipsum available.”</p>
                <h6>Kenida Ikram</h6>
            </div>
        </div>
        <div class="col-md-6  col-12  ">
            <div class="comment  text-start">
            <div className="row align-items-center">
                   
                   <img src={patient2} className="img-fluid col-3  patient mb-3 mt-2" alt=""></img> 
                    <div className="d-flex col-6">
                      <FontAwesomeIcon icon={faStar} className="star"> </FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar } className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="starblue"></FontAwesomeIcon>
                   </div>
              </div>
                <p>“ There are many variations of passages of Lorem Ipsum available.”</p>
                <h6>Kenida Ikram</h6>
            </div>
        </div>
        <div class="col-md-6 col-12 ">
            <div class="comment  text-start">
            <div className="row align-items-center">
                   
                   <img src={patient1} className="img-fluid col-3  patient mb-3 mt-2" alt=""></img> 
                    <div className="d-flex col-6">
                      <FontAwesomeIcon icon={faStar} className="star"> </FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar } className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="star"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="starblue"></FontAwesomeIcon>
                      <FontAwesomeIcon icon={faStar} className="starblue"></FontAwesomeIcon>
                   </div>
              </div>
                <p>“ There are many variations of passages of Lorem Ipsum available.”</p>
                <h6>Kenida Ikram</h6>
            </div>
        </div>


</div>
</div>
        </>
    )
}

export default Reviews