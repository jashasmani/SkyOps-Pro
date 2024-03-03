import React, { useState } from "react";
import AddFlightData from "../AddFlightData/AddFlightData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import FlightData from "./FlightData";
import SearchFlights from "../SearchFlights/SearchFlights";

const Home = () => {
  const [showAddFlight, setShowAddFlight] = useState(false);
  return (
    <div className="d-flex flex-column">
      <Navbar setShowAddFlight={setShowAddFlight} />
      <SearchFlights />
      {showAddFlight && <AddFlightData />}
      {showAddFlight && <FlightData />}
      {/* <FlightData /> */}
      <Footer />
    </div>
  );
};

export default Home;
