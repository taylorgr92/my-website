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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">My Work</Nav.Link>
          <Nav.Link href="#link">
            <Button variant="info">Contact Me</Button>
          </Nav.Link>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavDirect;
