import { faBuilding, faEnvelope, faUser, faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import './Css/Form.css'


function Form(){
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
    return(
        <>
            <div className="formDiv2 col-md-10 col-11 container">
  <form className="appointment-form p-md-5 text-center" style={{color:'#002060' , backgroundColor:'white'}}>
    <p>Make An Appointment</p>
    <h4 >Book An Appointment</h4>

    {/* First Row: Two Inputs */}
    <div className="form-group row">
      <div className="col-md-6">
        <div className="input-group">
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="form-control"
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

      <div className="col-md-6">
        <div className="input-group">
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="form-control"
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
    </div>

    {/* Second Row: Two Inputs */}
    <div className="form-group row">
      <div className="col-md-6">
        <div className="input-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your name"
          />
          <div className="input-group-append">
            <FontAwesomeIcon icon={faUser} className="icon" />
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="input-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            placeholder="Enter your email"
          />
          <div className="input-group-append">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </div>
        </div>
      </div>
    </div>

    {/* Third Row: Three Inputs */}
    <div className="form-group row">
      <div className="col-md-4">
        <div className="input-group">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="col-md-4">
        <div className="input-group">
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </div>

      <div className="col-md-4">
        <div className="input-group">
          <input
            type="text"
            name="notes"
            value={formData.notes || ""}
            onChange={handleChange}
            className="form-control"
            placeholder="Additional Notes"
          />
        </div>
      </div>
    </div>

    {/* Submit Button */}
    <button type="submit" className="bookNow col-12">
      Book an appointment now
    </button>
  </form>
</div>

        </>
    )
}

export default Form