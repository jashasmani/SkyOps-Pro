import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Email,
  Person,
  Lock,
  ArrowBack,
  Google,
  GitHub,
} from "@mui/icons-material";

const DesignBlock = () => {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("Sign In");
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
      localStorage.setItem("id", response.data.id);
      nav("/");
    } catch (error) {
      // setError(true);
      console.log("Invalid email or password");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/user", {
        email,
        contactme:contact,
        password,
      });
      setTitle('Sign In')
      toast.warn("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }); 
      console.log(response.data);
      // setTitle("Login");
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <section className="background-radial-gradient overflow-hidden vh-100">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
            <h1
              className="my-5 display-5 fw-bold ls-tight"
              style={{ color: "hsl(218, 81%, 95%)" }}
            >
              The best offer <br />
              <span style={{ color: "hsl(218, 81%, 75%)" }}>
                for your business
              </span>
            </h1>
            <p
              className="mb-4 opacity-70"
              style={{ color: "hsl(218, 81%, 85%)" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Temporibus, expedita iusto veniam atque, magni tempora mollitia
              dolorum consequatur nulla, neque debitis eos reprehenderit quasi
              ab ipsum nisi dolorem modi. Quos?
            </p>
          </div>

          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className="card bg-glass">
              <h3 className="d-flex justify-content-center  pt-5">
                {title === "Sign up" ? "Sign up" : "Sign In"}{" "}
              </h3>

              <div className="card-body px-4 pb-5 px-md-5">
                <form
                  onSubmit={title === "Sign up" ? handleRegister : handleLogin}
                >
                  {title === "Sign up" ? (
                    <div className="form-outline mb-3">
                      <label
                        className="form-label mb-0"
                        htmlFor="form3Example4"
                      >
                        Phone No
                      </label>
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control border-bottom  border-primary"
                        value={contact}
                        // placeholder="Phone No"
                        onChange={(e) => setContact(e.target.value)}
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  <div className="form-outline mb-3">
                    <label className="form-label mb-0" htmlFor="form3Example4">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control border-bottom  border-primary "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    
                  </div>

                  <div className="form-outline mb-3">
                    <label className="form-label mb-0" htmlFor="form3Example4">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control border-bottom  border-primary py-0"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-block my-4 "
                  >
                    {title === "Sign up" ? "Sign up" : "Sign In"}
                  </button>

                  {title === "Sign up" ? (
                    ""
                  ) : (
                    <div className="form-check d-flex justify-content-center mb-4">
                      <label
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        <span>Don't have an account? </span>
                        <Link
                          onClick={() => {
                            setTitle("Sign up");
                            setError(false);
                          }}
                        >
                          Signup Now
                        </Link>
                      </label>
                    </div>
                  )}

                  {/* <div className="text-center">
                    <p>{title === "Sign up" ? "Sign up" : "Sign In"} with:</p>
                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      className="btn btn-link btn-floating mx-1"
                    >
                      <i className="fab fa-google"></i>
                    </button>
                  </div> */}

                  {title === "Sign up" ? (
                    <div className="text-center">
                      <Link onClick={() => setTitle("Login")}>
                        Back To Login
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignBlock;
