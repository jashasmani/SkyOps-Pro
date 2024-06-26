import React, { useState } from "react";
import AddFlightData from "../AddFlightData/AddFlightData";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SearchFlights from "../SearchFlights/SearchFlights";
import FlightTable from "../Home-Data/FlightTable";

const Home = () => {
  const [showAddFlight, setShowAddFlight] = useState(false);
  return (
    <div className="d-flex flex-column">
      <Navbar
        setShowAddFlight={setShowAddFlight}
      />

      {!showAddFlight && <SearchFlights />}
      {/* {!showAddFlight && <FlightTable showAddFlight={!showAddFlight} />} */}
      {showAddFlight && <AddFlightData showAddFlight={!showAddFlight}/>}
      <Footer />
    </div>
  );
};

export default Home;
