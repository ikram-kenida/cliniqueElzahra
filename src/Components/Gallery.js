import React from "react"
import './Css/Gallery.css'
import img1 from '../Images/AdobeStock_258542223-2-430x300.png'
import img2 from '../Images/dentist-nurse-treat-patient-dental-office-1.png'
import img3 from '../Images/Image-7-430x300.png'
import img4 from '../Images/a.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye } from "@fortawesome/free-solid-svg-icons"



function Gallery(){
    return <>
    <div className="mt-5 gallery m-O text-center ">
      <p className="servicesTitle">Image Gallery</p>
      <h5 className="servicesTitle2 mb-5">Some Recent Shots By Experts</h5>
      <div className="container mt-5">
      <div className="container mt-5 ">
  <div className="row g-4 justify-content-center"> 
  <div className="row g-4">
        <div className="col-md-4 position-relative gallery_img">
          <div className="img-overlay-container">
            <img src={img1} className="img-fluid rounded shadow-sm" alt="Service 1" />
            <div className="overlay">
            <FontAwesomeIcon icon={faEye} className="icon"></FontAwesomeIcon>
              <p className="col-12">Covid – 19 Vaccinations</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 position-relative gallery_img">
          <div className="img-overlay-container">
            <img src={img2} className="img-fluid rounded shadow-sm" alt="Service 2" />
            <div className="overlay">
            <FontAwesomeIcon icon={faEye} className="icon"></FontAwesomeIcon>
              <p className="col-12">Dental Checkup</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 position-relative gallery_img">
          <div className="img-overlay-container">
            <img src={img3} className="img-fluid rounded shadow-sm" alt="Service 3" />
            <div className="overlay">
            <FontAwesomeIcon icon={faEye} className="icon"></FontAwesomeIcon>
              <p className="col-12 ">General Consultation</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 position-relative gallery_img">
          <div className="img-overlay-container">
            <img src={img4} className="img-fluid rounded shadow-sm" alt="Service 4" />
            <div className="overlay">
            <FontAwesomeIcon icon={faEye} className="icon"></FontAwesomeIcon>
              <p className="col-12">Laboratory Tests</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 position-relative gallery_img_last">
          <div className="img-overlay-container">
            <img src={img4} className="img-fluid rounded shadow-sm" alt="Service 5" />
            <div className="overlay">
             <FontAwesomeIcon icon={faEye} className="icon"></FontAwesomeIcon>
              <p className="col-12">Specialist Consultation</p>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>

</div>

      </div>
    </>
}
export default Gallery