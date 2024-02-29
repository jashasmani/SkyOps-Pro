import React, { useState } from "react";
import "./Login.css";
import EmailIcon from "@mui/icons-material/Email";
import LockOpenIcon from "@mui/icons-material/LockOpen";
// import GoogleIcon from "@mui/icons-material/Google";
// import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, useNavigate } from "react-router-dom";


const LoginForm = () => {
  const [passwordType, setPasswordType] = useState("password");

  const nav = useNavigate();
  const handlePasswordVisibility = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <div className="bg-img">
      {/* <header className="header">
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
      </header> */}
      <div className="content">
        <header>Login </header>
        <form action="#">
          <div className="field">
            <span className="small-icon">
              <EmailIcon />
            </span>
            <input
              type="text"
              // required
              placeholder="Email or Phone"
            />
          </div>
          <div className="field space">
            <span className="small-icon">
              <LockOpenIcon />
            </span>
            <input
              type={passwordType}
              className="pass-key"
              // required
              placeholder="Password"
            />
            <span className="show" onClick={handlePasswordVisibility}></span>
          </div>
          <div className="pass">
            <a href="#">Forgot Password?</a>
          </div>
          <div className="field">
            <button
              type="submit"
              className="login-button"
              onClick={() => nav("/")}
            >
              LOGIN
            </button>
          </div>
        </form>
        {/* <div className="login">Or login with</div>
        <div className="links">
          <div className="google">
            <span>
              <GoogleIcon />
            </span>
          </div>
          <span className="google-text" style={{ fontSize: "2rem" }}>
            or
          </span>
          <div className="google">
            <span>
              <GitHubIcon />
            </span>
          </div>
        </div>
        <div className="signup">
          Don't have account?
          <Link to="/signup"> Signup Now</Link>
        </div> */}
      </div>
    </div>
  );
};

export default LoginForm;
