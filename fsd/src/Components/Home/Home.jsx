import React, { useState } from "react";
import Navbar from "./Navbar";
import Booking from "./Booking";
import Result from './FlightData';
import Footer from '../Footer/Footer'

import "./Home.css";


const Home = () => {
  const [booking,setBooking]=useState(false);
  return (
    <>
      <section>
        <div className="main-div">
          <header>
            <Navbar />
          </header>
          <div className="filed-background">
            <Booking setBooking={setBooking} />
          </div>
         
            {booking?<Result/>:""}
          {/* </div> */}
        <Footer/>
        </div>
      </section>
    </>
  );
};

export default Home;
