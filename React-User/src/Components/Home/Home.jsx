import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Booking from "./Booking";
import Footer from "../Footer/Footer";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
//   useEffect(() => {
//     toast.warn("🦄 Wow so easy!", {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//     });
//   },[]);
  return (
    <>
      <div className="d-flex flex-column">
        <Navbar />
        <ToastContainer /> 
        <div className="mt-" style={{ marginTop: "6rem" }}>
          <Booking />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
