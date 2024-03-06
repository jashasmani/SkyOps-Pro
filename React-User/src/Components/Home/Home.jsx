import React, { useState } from "react";
import Navbar from "./Navbar";
import Booking from "./Booking";
import FlightData from "./FlightData";
import Footer from "../Footer/Footer";

const Home = () => {
  const [booking, setBooking] = useState(false);
  return (
    <>
      <div className="d-flex flex-column">
        <Navbar />
        <Booking setBooking={setBooking} />
        {booking && <FlightData />}
        <Footer />
      </div>
    </>
  );
};

export default Home;
