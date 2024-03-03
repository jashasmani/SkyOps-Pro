import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavBar = ({setShowAddFlight}) => {
  return (
    <Navbar bg="white" variant="light" expand="lg" collapseOnSelect={false}>
      <Navbar.Brand>
        <h5 className="text-primary d-flex mx-5 my-2">
          SkyOps Pro <span className="text-black"> ADMIN</span>
        </h5>
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className="bg-black text-white"
      />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto mx-2">
          <Link to="/home" className="text-primary mx-2"  onClick={()=>{setShowAddFlight(false)}}>
            Home
          </Link>
          <Link className="text-primary mx-2"  onClick={()=>{setShowAddFlight(true)}}>
            Add Flight
          </Link>
          <Link to="/destinations" className="text-primary mx-2">
            Destinations
          </Link>
          <Link to="/signup" className="text-primary mx-2">
            Log out
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
