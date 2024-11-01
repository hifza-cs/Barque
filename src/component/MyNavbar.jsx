import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../style/myNavbar.css';

const MyNavbar = () => {

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    alert('You have been logged out.');
    window.location.href = '/signin';
  };

  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container fluid className="justify-content-between">
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img 
            src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01_ca621119-9615-4843-a4c7-3cbf07d1452a.png?v=1727526585&width=280"
            alt="Brand Icon" 
            width="100" 
            height="50" 
            className="me-3"
          />
          <span className="styled-text">E-commerce Website</span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/service">Services</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            {isAuthenticated ? (
              <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/signin">Sign In</Nav.Link>
                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
