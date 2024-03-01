import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg" collapseOnSelect={false}>
      <Navbar.Brand>
        <h5 className="text-primary mx-5 my-2">SkyOps Pro</h5>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-black text-white" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
          <Nav.Link as={Link} className="text-primary" to="/">
            Air Fly
          </Nav.Link>
          <Nav.Link as={Link} to="/plan" className="text-primary">
            Plan Fly
          </Nav.Link>
          <Nav.Link as={Link} to="/destinations" className="text-primary">
            Destinations
          </Nav.Link>
          <Nav.Link as={Link} to="/login" className="text-primary">
            LOG IN
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
