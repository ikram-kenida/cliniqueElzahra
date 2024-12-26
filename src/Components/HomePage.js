import React from "react";
import HomeImg from '../Images/17818.jpg';
import NavBar from "./Header";
import './Css/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faBuilding, faUserDoctor, faUser, faEnvelope, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Services from "./Services";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import Doctors from "./Doctors";
import WhyChooseUs from "./WhyChooseUs";
import Contact from "./Contact";
import Fotter from "./Footer";
function HomePage() {




    const [formData, setFormData] = useState({
      department: '',
      doctor: '',
      name: '',
      email: '',
      date: '',
      time: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  return (

    <>
      <NavBar />
      <div className="position-relative m-0">
       
      <div className="photo_accueil_container">
    <img src={HomeImg} className="w-100 photo_accueil" alt="Home" />
</div>


     
       <div className="position-absolute overlay-content col-md-7  mx-5 p-md-5 text-start">
         <h1 className="text-light display-4 mx-md-5">Healthcare That Is Convenient and Affordable</h1>
         <p className="text-light fs-5  mx-md-5">There are many variations of passages of Lorem Ipsum available ,  but the majority have suffered.</p>
         <button className="btn btn-primary mt-3 mx-md-5">Meet our team</button>
       </div>
     </div> 
      <div className="aboutUs  row p-md-5  mx-0 b-0 justify-content-center" id="aboutUs"> 
          <div className="col-md-5  text-start  mt-5 p-md-0 p-4 mx-md-5">
             <h6 className="aboutus mb-4">About Us</h6>
             <h2 className="aboutustext">
             We’re Always Ensure Medical Treatment
             </h2>
             <p className="aboutusp mt-3 mb-4 mx-2">
             There are many variations of passages of Ipsum available, but the majority have suffered.
             </p>
             <div className="d-flex align-items-center">
  <p className="mb-0 ms-2">
    {/* <FontAwesomeIcon icon={faCheck} className="icon mx-3" /> */}
    Lorem ipsum dolor sit amet, consecte adipiscing elit.
  </p>
</div>

<div className="d-flex align-items-center mt-4">
  <p className="mb-0 ms-2">
    {/* <FontAwesomeIcon icon={faCheck} className="icon mx-3" /> */}
    Sed facilisis felis sed tempor tempor.
  </p>
</div>


<a href="#" className="all_services_link d-flex align-items-center mt-5 mx-md-2">
  Explore All Services <FontAwesomeIcon icon={faAnglesRight} className="ms-2" />
</a>




          </div>
          <div className="col-md-5  formDiv mx-md-5 col-12">
          <form className="appointment-form p-md-5 ">
  <h4>Book An Appointment</h4>
  
  <div className="form-group">
    <div className="input-group">
      <select 
        name="department" 
        value={formData.department} 
        onChange={handleChange} 
        className="form-control col-12"
      >
        <option value="">Select Department</option>
        <option value="Cardiology">Cardiology</option>
        <option value="Neurology">Neurology</option>
        <option value="Orthopedics">Orthopedics</option>
      </select>
      <div className="input-group-append">
        <FontAwesomeIcon icon={faBuilding} className="icon" />
      </div>
    </div>
  </div>

  <div className="form-group">
    <div className="input-group">
      <select 
        name="doctor" 
        value={formData.doctor} 
        onChange={handleChange} 
        className="form-control col-12"
      >
        <option value="">Select Doctor</option>
        <option value="Dr. Smith">Dr. Smith</option>
        <option value="Dr. Johnson">Dr. Johnson</option>
        <option value="Dr. Lee">Dr. Lee</option>
      </select>
      <div className="input-group-append">
        <FontAwesomeIcon icon={faUserDoctor} className="icon" />
      </div>
    </div>
  </div>

  <div className="form-group">
    <div className="input-group">
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleChange} 
        className="form-control col-12" 
        placeholder="Enter your name"
      />
      <div className="input-group-append">
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
    </div>
  </div>

  <div className="form-group">
    <div className="input-group">
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        className="form-control col-12" 
        placeholder="Enter your email"
      />
      <div className="input-group-append">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
      </div>
    </div>
  </div>
<div className="row">
<div className="form-group col-md-6">
      <div className="input-group">
        <input 
          type="date" 
          name="date" 
          value={formData.date} 
          onChange={handleChange} 
          className="form-control col-12"
        />
      </div>
    </div>

    <div className="form-group col-md-6">
      <div className="input-group">
        <input 
          type="time" 
          name="time" 
          value={formData.time} 
          onChange={handleChange} 
          className="form-control col-12"
        />
      </div>
    </div>
</div>
  

  <button type="submit" className="bookNow col-12">Book an appointment now</button>
</form>



          </div>
      </div>

<Services></Services>
<Gallery></Gallery>
<Reviews></Reviews>
<Doctors></Doctors>  
<Contact></Contact>
<WhyChooseUs></WhyChooseUs>
<Fotter></Fotter>

    </>
  );
}

export default HomePage;
