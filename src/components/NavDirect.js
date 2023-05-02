import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const NavDirect = () => {
  return (
    
    <div>
      <Navbar id="nav-menu" sticky="top">
        <Container>
          <Navbar.Brand id="nav-brand" href="#home">
            TF
          </Navbar.Brand>
          <Nav className="ml-auto" />
          <a href="anchor-name">Home</a>
          <a href="project-section">My Work</a>
          <a id="anchor-name">About</a>
          <Nav.Link href="link">
            <Button id="contact-btn">CONTACT ME</Button>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavDirect;