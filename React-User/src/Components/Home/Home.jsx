import React, { useState } from "react";
import Navbar from "./Navbar";
import Booking from "./Booking";
import Result from "./FlightData";
import Footer from "../Footer/Footer";
import "./Booking.css";
import "./Home.css";

const Home = () => {
  const [booking, setBooking] = useState(false);
  return (
    <>
      <section>
        <div className="main-div">
          <header>
            <Navbar />
          </header>
          <div className="side-gap">
            <Booking setBooking={setBooking} />
            {booking ? <Result /> : ""}
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};

export default Home;
