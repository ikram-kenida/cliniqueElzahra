import React, { useState } from "react";
import './Css/AboutPage.css';
import NavBar from "./Header";
import Img from '../Images/Image-1-pyd5wp3patlawu5kazrzn7a4l0a6awczrgpy49clgu.png';
import pattern from '../Images/Pattern.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngellist } from "@fortawesome/free-brands-svg-icons";
import { faLightbulb, faPlay, faPlayCircle, faUserMd } from "@fortawesome/free-solid-svg-icons";
import FAQ from "./FAQ";
import Reviews from './Reviews';
import Footer from './Footer';
import FunFact from "./FunFact";
import Gallery from './Gallery';

function AboutPage() {
  const [showVideoModal, setShowVideoModal] = useState(false);
  return (
    <>
      <NavBar />
      <div className="services-banner mb-5">
        <div className="container text-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center">
              <li className="breadcrumb-item">
                <a href="/" className="breadcrumb-link">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">About us</li>
            </ol>
          </nav>
          <h1 className="services-title mt-4">About</h1>
        </div>
      </div>

      <div className="row m-0 justify-content-center p-md-5 aboutusPage">
        <img src={pattern} className="patternimg d-md-block d-none" alt="Decorative pattern" />
        <div className="col-md-6 position-relative">
          {/* Image */}
          <img src={Img} alt="El Zahra Clinique" className="img-fluid aboutimg" />
          {/* Play Icon */}
          <div 
            className="position-absolute top-50 start-50 translate-middle playdiv"
            onClick={() => setShowVideoModal(true)}
            style={{ cursor: "pointer" }}
          >
            {/* <FontAwesomeIcon icon={faPlay} className="playIcon" style={{ fontSize: "4rem " ,  }}></FontAwesomeIcon> */}
          </div>
        </div>
        <div className="col-md-5 aboutusContent p-5">
          <h6 className="years">25+ Years Of Experiences</h6>
          <h5 className="text">We’re Always Ensure Medical Treatment</h5>
          <p>If you are going to use a passage of Ipsum, you need to ensure there isn't anything embarrassing hidden.</p>
          <div className="d-flex">
            <div>
              <FontAwesomeIcon className="icon" icon={faUserMd} />
            </div>
            <div className="mt-1 mx-3">
              <h5>Our Mission</h5>
              <p>If you are going to use a passage Ipsum, you need to ensure there isn't anything hidden.</p>
            </div>
          </div>
          <div className="d-flex mb-5">
            <div>
              <FontAwesomeIcon className="icon" icon={faLightbulb} />
            </div>
            <div className="mt-1 mx-3">
              <h5>Our Vision</h5>
              <p>If you are going to use a passage Ipsum, you need to ensure there isn't anything hidden.</p>
            </div>
          </div>
          <a href="/services" className="">Our services</a>
        </div>
      </div>

      <Gallery />
      <FAQ />
      <div className="mapCart w-100 m-0">
  <div className="map-responsive">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3214.939523651704!2d6.624316175864019!3d36.313773372389754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f171006a7f7dcf%3A0xfd88a35da582f0b9!2zQ2xpbmlxdWUgZXp6YWhyYSDZhdi12K3YqSDYp9mE2LLZh9ix2KfYoQ!5e0!3m2!1sfr!2sdz!4v1735860121696!5m2!1sfr!2sdz"
      width="100%"
      height="450"
      style={{ border: 0, borderRadius: "10px" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Location"
    ></iframe>
  </div>
</div>

      <Footer />
    </>
  );
}

export default AboutPage;
