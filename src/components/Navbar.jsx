import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import '../pages/Navbar.css';



const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark"  expand="lg">
      <BootstrapNavbar.Brand as={Link} to="/">Student Management</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/register">Register Student</Nav.Link>
          <Nav.Link as={Link} to="/students">Student List</Nav.Link>
          <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
