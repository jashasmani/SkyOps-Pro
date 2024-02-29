import React from "react";
import { Link } from "react-router-dom";
// import Dropdown from "./DropDown";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="white" className="py-0" variant="light" expand="lg">
      {" "}
      {/* Use Bootstrap Navbar */}
      <Navbar.Brand>
        <h5 className="text-primary mx-5 my-1 ">SkyOps Pro</h5> {/* Logo */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="text-primary  ">
        <Nav className="ml-auto">
          {" "}
          {/* Right-aligned navigation links */}
          <Nav.Link as={Link} className="text-primary" to="/">
            Air Fly
          </Nav.Link>{" "}
          {/* Use Nav.Link for each link */}
          <Nav.Link as={Link} to="/plan" className="text-primary">
            Plan Fly
          </Nav.Link>
          <Nav.Link as={Link} to="/destinations" className="text-primary">
            Destinations
          </Nav.Link>
          {/* <Dropdown /> */}
          <Nav.Link as={Link} to="/login" className="text-primary">
            LOG IN
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
