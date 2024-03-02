import React from "react";
import data from "./data.js";
import { Container } from "react-bootstrap";
import axios from "axios";
import DataModel from "../Model/DataModel.jsx";

const FlightTable = () => {
  const flightsData = data;


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        'http://localhost:8080/main/flights'
      );
      console.log(response.data);
    } catch (error) {
      console.log("Invalid Data");
    }
  };

  return (
    <Container className="bg-white rounded-4 my-5 ">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr className="text-center" style={{ maxWidth: "auto" }}>
              <th>DTAT</th>
              <th>Duration</th>
              <th>ATDT</th>
              <th>Flight Number</th>
              <th>Stops</th>
              <th>Service Class</th>
              <th>Price (€)</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {flightsData.map((flight) => (
              <tr key={flight.flightNumber}>
                <td className="source-time d-flex flex-column ">
                  <span style={{ fontSize: "1.2rem " }}>
                    {flight.departureTime}
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {flight.sourceAirport}
                  </span>
                </td>
                <td className="align-middle" style={{ fontSize: "1rem" }}>
                  {"---"}
                  {flight.duration}
                  {"---"}
                </td>
                <td className="source-time d-flex flex-column">
                  <span style={{ fontSize: "1.2rem" }}>
                    {flight.arrivalTime}
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {flight.destinationAirport}
                  </span>
                </td>
                <td className="align-middle" style={{ fontSize: "1rem" }}>
                  {flight.flightNumber}
                </td>
                <td className="align-middle" style={{ fontSize: "1rem" }}>
                  {flight.stops}
                </td>
                <td className="align-middle" style={{ fontSize: "1rem" }}>
                  {flight.serviceClass}
                </td>
                <td className="align-middle">
                  {/* <button type="button" className="btn btn-success"> */}
                  <DataModel
                    price={flight.price}
                    style={{ position: "absolute", zIndex: 99 }}
                  />

                  {/* </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default FlightTable;
