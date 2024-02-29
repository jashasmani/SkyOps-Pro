import './App.css';
import React from 'react';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import AirportData from './Components/Airport/AirpostName';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/data" element={<AirportData />} />
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
