import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Css/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import logo from '../Images/EZZAHRA_LOGO-01.png'
function NavBar() {
  return (
    <>
    
    <div className="d-flex justify-content-between align-items-center top_div_nav ">
  <p className="mb-0 text-start mx-5">Free shipping on orders over $25</p>
  <p className="mb-0 text-end mx-5 d-none d-md-block">Need Help? Call Us: +8880 2395 1928</p>
</div>

<Navbar expand="lg" className="navigation_bar m-0 ">
  <Container>
    <Navbar.Brand href="#home" className="d-flex align-items-center">
      <img src={logo} alt="el zahra clinique" className=" logo-image mx-5" height={100} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
      <Nav className="mx-auto">
        <Nav.Link href="#home" className="navLink">Home</Nav.Link>
        <Nav.Link href="#home" className="navLink">Home</Nav.Link>
        <Nav.Link href="#home" className="navLink">Home</Nav.Link>
        <Nav.Link href="#home" className="navLink">Home</Nav.Link>
        <NavDropdown className="navLink" title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <button className="navbtn p-3 d-flex align-items-center">Consultation gratuite</button>
    </Navbar.Collapse>
  </Container>
</Navbar>

   
    </>
  );
}

export default NavBar;
