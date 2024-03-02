import "./App.css";
import React from "react";
import AddFlightData from "./Components/AddFlightData/AddFlightData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminFlights from "./Components/Admin/AdminFlights";
import RouteForm from "./Components/RouteForm/RouteForm";
import FlightForm2 from "./Components/FlightForm_2/FlightForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/addflightdata" element={<AddFlightData />} />
          <Route path="/ad" element={<AdminFlights />} />
          <Route path="/route" element={<RouteForm />} />
          <Route path="/flight" element={<FlightForm2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
