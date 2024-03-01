import React, { useState } from "react";
import "./Signup.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EmailIcon from "@mui/icons-material/Email";
import ContactsIcon from "@mui/icons-material/Contacts";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import axios from "axios";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link, useNavigate } from "react-router-dom";

import Alert from "@mui/material/Alert";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("Login");
  const [error, setError] = useState(false);

  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/${email}/${password}`
      );
      console.log(response.data);
      nav("/");
      // Handle successful login
    } catch (error) {
      setError(true);
      console.log("Invalid email or password");
      // Handle login error
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/user", {
        email,
        number,
        password,
      });
      console.log(response.data);
      // setEmail("");
      // setPassword("");
      // setNumber("");
      setTitle("Login");
    } catch (error) {
      console.error("Registration error:", error);
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
        {/* {error && (
        <Alert variant="filled" severity="error"style={{zIndex:'999'}}>
          This is a filled error Alert.
        </Alert>
      )} */}
        <header className="errortitle">
          {title === "Login" ? "Login" : "Sign Up"}

          {error && (
            <span className="errorText">Invalid email or password</span>
          )}
        </header>
        <form action="#">
          <div
            className="field"
            style={{
              borderColor: error ? "red" : "initial",
              borderWidth: error ? "2px" : "initial",
              borderStyle: error ? "solid" : "initial",
            }}
          >
            <span className="small-icon">
              <EmailIcon
                style={{
                  color: error ? "red" : "black",
                }}
              />
              {error && (
                <span className="error" style={{ color: "red" }}>
                  !
                </span>
              )}
            </span>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {title === "Login" ? (
            ""
          ) : (
            <div className="field space">
              <span className="small-icon">
                <ContactsIcon />
              </span>
              <input
                type="number"
                placeholder="Phone number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>
          )}
          <div
            className="field space"
            style={{
              borderColor: error ? "red" : "initial",
              borderWidth: error ? "2px" : "initial",
              borderStyle: error ? "solid" : "initial",
            }}
          >
            <span className="small-icon">
              <LockOpenIcon
                style={{
                  color: error ? "red" : "black",
                }}
              />
              {error && (
                <span className="error" style={{ color: "red" }}>
                  !
                </span>
              )}
            </span>
            <input
              type="password"
              className="pass-key"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          {title === "Login" ? (
            <div className="pass">
              {" "}
              <a href="#">Forgot Password?</a>{" "}
            </div>
          ) : (
            <br></br>
          )}
          <div className="field">
            <button
              type="submit"
              className="login-button"
              onClick={title === "Login" ? handleLogin : handleRegister}
            >
              {title}
            </button>
          </div>
        </form>

        <div className="links"></div>
        {title !== "Login" ? (
          <div className="back-signup">
            <ArrowBackIcon />
            <Link onClick={() => setTitle("Login")}>Back To Login</Link>
          </div>
        ) : (
          <>
            <div className="login">Or login with</div>
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
              <Link
                onClick={() => {
                  setTitle("Sign Up");
                  setError(false);
                }}
              >
                {" "}
                Signup Now
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
