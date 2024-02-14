import "./FlightData.css";
import React from "react";
import data from "./data.js";
// import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
// import FlightLandIcon from '@mui/icons-material/FlightLand';
// import FlightClassIcon from '@mui/icons-material/FlightClass';

const flightsData = data;

const FlightTable = () => (
  <div className="flightdata-background">
    <table>
      <thead>
        <tr>
          {/* <th>Departure Time & Source Airport</th> */}
          <th>DTAT</th>
          <th>Duration</th>
          <th>ATDT</th>
          {/* <th>Arrival Time & Destination Airport</th> */}
          <th>Flight Number</th>
          <th>Stops</th>
          <th>Service Class</th>
          <th>Price (€)</th>
        </tr>
      </thead>
      <tbody>
        {flightsData.map((flight) => (
          <tr key={flight.flightNumber}>
            <td className="source-time">
              <span style={{fontSize:'1.2rem'}}>{flight.departureTime}</span>
              <span style={{fontSize:'1rem'}}>{flight.sourceAirport}</span>
            </td>
            <td >{'-----'}{flight.duration}{'-----'}</td>
            <td className="source-time">
              <span style={{fontSize:'1.2rem'}}>{flight.arrivalTime}</span>
              <span style={{fontSize:'1rem'}}>{flight.destinationAirport}</span>
            </td>

            <td>{flight.flightNumber}</td>
            <td>{flight.stops}</td>
            <td>{flight.serviceClass}</td>
            <td>{flight.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default FlightTable;
