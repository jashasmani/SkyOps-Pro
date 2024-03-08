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
import ShowStatus from "../Status/ShowStatus";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState();
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("Login");
  const [error, setError] = useState(false);
  const [userId, setUserId] = useState(0);

  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:8080/api/user/${email}/${password}`
      );
      console.log(response.data.id);
      setUserId(response.data.id);
      localStorage.setItem('id',response.data.id);
      nav("/");
    } catch (error) {
      setError(true);
      console.log("Invalid email or password");
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
      setTitle("Login");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      {/*  */}
      <div className="bg-img">
        <div className="content">
          <header className="errortitle">
            {title === "Login" ? "Login" : "Sign Up"}
            {error && (
              <span className="errorText">Invalid email or password</span>
            )}
          </header>
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
                required
              />
            </div>
            {title === "Login" ? (
              <div className="pass">
                <a href="#">Forgot Password?</a>
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
                Don't have an account?
                <Link
                  onClick={() => {
                    setTitle("Sign Up");
                    setError(false);
                  }}
                >
                  Signup Now
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
      {/* <ShowStatus/> */}
    </>
  );
};

export default LoginForm;
