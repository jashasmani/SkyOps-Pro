import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home'
import FlightTable from './Components/Home-Data/FlightTable'
import Signup from './Components/Signup/Signup'
import AddFlightData from './Components/AddFlightData/AddFlightData'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/addflightdata" element={<AddFlightData />}/>
          <Route path="/data" element={<FlightTable />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
