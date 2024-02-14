import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="Start-logo">
        <h2 style={{color:'white'}}>SkyOps Pro</h2>
      </div>
      <div className="right-nav">
        <Link to="/">Air Fly</Link>

        <Link to="/plan">Plan Fly</Link>

        <Link to="/destinations">Destinations</Link>

        <Link to="/about-us">About Us</Link>

        <Link to="/login">LOG IN</Link>
      </div>
    </nav>
  );
};

export default NavBar;
