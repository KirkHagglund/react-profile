import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/nav.css';

function NavComponent({ currentPage, handlePageChange }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
      <Navbar.Brand className="">Kirk Hagglund</Navbar.Brand>
      <Nav variant="pills" defaultActiveKey="#About">
        <Nav.Link href="#About" onClick={() => handlePageChange("About")}>
          About
        </Nav.Link>
        <Nav.Link href="#Portfolio" onClick={() => handlePageChange("Portfolio")}>
          Portfolio
        </Nav.Link>
        <Nav.Link href="#Resume" onClick={() => handlePageChange("Resume")}>
          Resume
        </Nav.Link>
        <Nav.Link href="#Contact" onClick={() => handlePageChange("Contact")}>
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavComponent;
