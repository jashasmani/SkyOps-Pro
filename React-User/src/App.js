import "./App.css";
import React from "react";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";
import TicketDownload from "./Components/Ticket/TicketDownload";
import AirportData from "./Components/Airport/AirpostName";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FinalData from "./Components/FinalData/FinalData";
import { Provider } from "react-redux";
import store  from "./Store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/data" element={<AirportData />} />
            <Route path="/ticket" element={<TicketDownload />} />
            <Route path="/finaldata" element={<FinalData />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
