import "./App.css";
import React from "react";
import BusForm from "./Components/BusForm/BusForm";
// import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AdminBuses from "./Components/Admin/AdminBuses";
import RouteForm from "./Components/RouteForm/RouteForm";
import BusForm2 from "./Components/BusForm_2/BusForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<BusForm />} />
          <Route path="/ad" element={<AdminBuses />} />
          <Route path="/route" element={<RouteForm />} />
          <Route path="/bus" element={<BusForm2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
