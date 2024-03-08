import React, { createContext, useState, useContext } from "react";
import Navbar from "./Navbar";
import Booking from "./Booking";
import Footer from "../Footer/Footer";
export const UserContext = createContext();

const Home = () => {
  return (
    <UserContext.Provider value={2}>
      <>
        <div className="d-flex flex-column">
          <Navbar />
          <div className="mt-" style={{ marginTop: "6rem" }}>
            <Booking />
          </div>

          <Footer />
        </div>
      </>
    </UserContext.Provider>
  );
};

export default Home;
