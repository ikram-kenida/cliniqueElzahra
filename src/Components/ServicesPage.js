import React from "react";
import NavBar from "./Header";
import "./Css/ServicesPage.css";
import { faStethoscope, faTooth, faHeartbeat, faVirus, faEye, faBaby, faSyringe, faChartArea, faChartBar, faChartSimple, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import doctors from '../Images/image-1.jpg'
import medaille from '../Images/020-reward.png'
import Doctors from './Doctors'
import WhyChooseUs from './WhyChooseUs'
import Form from "./Form";
import Footer from'./Footer'
import Calls from "./Calls";
import patter from '../Images/Pattern.png'


const services = [
  { title: "Orthopedics", description: "Lorem ipsum dolor", icon: faStethoscope },
  { title: "Dental Care", description: "Lorem ipsum dolor", icon: faTooth },
  { title: "Monthly Checkup", description: "Lorem ipsum dolor", icon: faStethoscope },
  { title: "Cardiology", description: "Lorem ipsum dolor", icon: faHeartbeat },
  { title: "Covid - 19 Test", description: "Lorem ipsum dolor", icon: faVirus },
  { title: "Eye Solutions", description: "Lorem ipsum dolor", icon: faEye },
  { title: "Gynecology", description: "Lorem ipsum dolor", icon: faBaby },
  { title: "Immunology", description: "Lorem ipsum dolor", icon: faSyringe },
  { title: "Immunology", description: "Lorem ipsum dolor", icon: faSyringe }
];

function ServicesPage() {
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
              <li className="breadcrumb-item active" aria-current="page">Service</li>
            </ol>
          </nav>
          <h1 className="services-title mt-4">Service</h1>
        </div>
      </div>

<Calls></Calls>



      <div className="services_page text-center mt-5 ">
        <p className="servicesTitle mt-5">Our services</p>
        <h5 className="servicesTitle2 mb-3">Our Departments</h5>

        <div className="container"> 
          <img src={patter} className="img-fluid col-2 pattern" alt=""  />
          <div className="row mx-md-5 mt-5">
            
            {services.map((service, index) => (
              <div key={index} className="col-md-4 col-12 mb-4 service_card" style={{backgroundColor:'transparent'}}>
                <div className="card  text-start  service">
                  {/* Using d-flex to align the icon and text inline */}
                  <div className="d-flex p-2 justify-content-start align-items-center mb-3" style={{backgroundColor:'transparent'}}>
                    <FontAwesomeIcon icon={service.icon} className="fa-2x mx-3  mr-2 icon" style={{backgroundColor:'transparent'}} />
                    <div>
                      <h6 className="serviceTitle mx-3 mt-3" style={{backgroundColor:'transparent'}}>{service.title}</h6>
                      <p className="servicedesc mx-3 mb-3" style={{backgroundColor:'transparent'}}>{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       

      </div>
      <div className="needEmergency mb-5  row  m-0 align-items-center justify-content-center" style={{paddingBottom:'30vh'}}>
  <div className="col-md-6 mx-md-3 col-12 mt-5 p-md-4 justify-content-start">
    <div className="reword col-md-4 col-8 p-3 text-center">
      <img src={medaille} alt="el zahra clinique" />
      <p className="mt-3">We Have 50+ Winning Awards</p>
    </div>

    <img src={doctors} alt="el zahra clinique" className="doctorsImage img-fluid" />

    <div className="d-flex justify-content-end">
      <div className="chartdiv col-12 col-md-4 p-4 text-center d-md-block d-none">
        <FontAwesomeIcon icon={faChartSimple} className="chart" />
        <p className="mt-3">Professional Skills</p>
      </div>
    </div>
  </div>
  <div className="col-md-4 col-12 text-start">
  <p className="needTitle mt-5">Need Emergency?</p>
  <h5 className="needTitle2 mb-3">Don’t Be Hesitate To
  Contact Us</h5>
<p className="needp">There are many variations of passages the Lorem Ipsum available, but the majority have suffered.</p>
<div className="d-flex p-4 mt-5 call align-items-center">
   <FontAwesomeIcon icon={faPhone} className="calli p-3" ></FontAwesomeIcon>
   <div className="d-flex flex-column ">
     <a href="" className="mx-3 d-md-block d-none">For Any Emergency Cases
  </a>
  <p className="mx-3 mt-2"> Call Us: +039 2899 3897

</p>
   </div>
  
</div>
  </div>
</div>
<Form></Form>
<WhyChooseUs></WhyChooseUs>
<div className="mt-5 mb-5" style={{height:'20px'}}></div>
<Doctors></Doctors>
<Footer></Footer>

    </>
  );
}

export default ServicesPage;
