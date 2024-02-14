import React, { useState } from "react";
import "./Signup.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import ContactsIcon from "@mui/icons-material/Contacts";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const nav = useNavigate();
  const handlePasswordVisibility = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/login", {
        email,
        password,
      });
      console.log(response.data);
      // Handle successful login
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/register", {
        email,
        number,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };
  return (
    <div className="bg-img">
      <header className="header">
        <nav className="nav">
          <a href="#" className="nav_logo">
            CodingLab
          </a>
          <ul className="nav_items">
            <li className="nav_item">
              <a href="#" className="nav_link">
                Home
              </a>
              <a href="#" className="nav_link">
                Product
              </a>
              <a href="#" className="nav_link">
                Services
              </a>
              <a href="#" className="nav_link">
                Contact
              </a>
            </li>
          </ul>
          <button className="button" id="form-open">
            Login
          </button>
        </nav>
      </header>
      <div className="content">
        <header>Sign Up</header>
        <form action="#">
          <div className="field">
            <span className="small-icon">
              <EmailIcon />
            </span>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // required
            />
          </div>
          <div className="field space">
            <span className="small-icon">
              <ContactsIcon />
            </span>
            <input
              type="text"
              placeholder="Phone number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              // required
            />
          </div>
          <div className="field space">
            <span className="small-icon">
              <LockOpenIcon />
            </span>
            <input
              type="password"
              className="pass-key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              // required
            />
            <span className="show" onClick={handlePasswordVisibility}>
              {/* {passwordType === "password" ? "SHOW" : "HIDE"} */}
            </span>
          </div>
          <div className="pass">{/* <a href="#">Forgot Password?</a> */}</div>
          <div className="field">
            <button
              type="submit"
              className="login-button"
              onClick={() => nav("/login")}
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="links"></div>
        <div className="back-signup">
          <ArrowBackIcon />
          <Link to="/login">Back To Login</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
