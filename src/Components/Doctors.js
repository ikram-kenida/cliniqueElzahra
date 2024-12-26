import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from '../Images/general-practitioner-standing-arms-folded-medical-office-1-306x340.png';
import img2 from '../Images/dentist-nurse-treat-patient-dental-office-1.png'
import './Css/Doctors.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";

// Array of doctor details
const doctors = [
  {
    id: 1,
    name: "Dr. Ahmad Stevens",
    specialty: "Neurologist",
    img: img,
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    img: img2,
  },
  {
    id: 3,
    name: "Dr. Emily Brown",
    specialty: "Dermatologist",
    img: img,
  },
  {
    id: 4,
    name: "Dr. John Smith",
    specialty: "Orthopedist",
    img: img,
  },
  {
    id: 5,
    name: "Dr. Karen White",
    specialty: "Pediatrician",
    img: img,
  },
];

// Next Arrow
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#002060",
        borderRadius: "50%",
        padding: "30px",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} style={{ color: "#ffffff", fontSize: "20px" }} />
    </div>
  );
}

// Prev Arrow
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        background: "#002060",
        borderRadius: "50%",
        padding: "30px",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} style={{ color: "#ffffff", fontSize: "20px" }} />
    </div>
  );
}

// Slider Component
function CustomArrows() {
  const settings = {
    dots: false, // Enable indicators
    infinite: true, // Allow infinite sliding
    slidesToShow: 3, // Number of cards visible at a time
    slidesToScroll: 1, // Scroll one card at a time
    nextArrow: <SampleNextArrow />, // Custom next arrow
    prevArrow: <SamplePrevArrow />, // Custom previous arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: "-60px" }}>
        <ul style={{ display: "flex", justifyContent: "center", gap: "10px"  , marginLeft:'-5vw' }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "20px",
          height: "20px",
          background: "#002060",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            background: "#ffffff",
            borderRadius: "50%",
          }}
        ></div>
      </div>
    ),
  };

  return (
    <div className="Doctors container-fluid p-0 m-0 text-center">
      <p className="servicesTitle">Team Member</p>
      <h5 className="servicesTitle2 mb-3">Meet Our Experts</h5>
      <div
        className="slider-container p-5    "
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        <Slider {...settings}>
          {doctors.map((doctor) => (
            <div key={doctor.id}>
            <Card className="border-0 text-start doctor mx-3 ">
  {/* Doctor Image */}
  <Card.Img
    variant="top"
    src={doctor.img}
    className="doctorImg"
  />

  {/* Plus Icon Below the Image */}
  {/* <div className="text-end p-2">
    <FontAwesomeIcon icon={faPlus} className="plusIcon" />
  </div> */}

  {/* Doctor Details */}
  <Card.Body>
    <Card.Title className="drName mx-2 mb-2 mt-2">
      {doctor.name}
    </Card.Title>
    <Card.Title className="drSpecialicity mx-2">
      {doctor.specialty}
    </Card.Title>
  </Card.Body>
</Card>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomArrows;
