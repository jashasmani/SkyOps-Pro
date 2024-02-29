import React from "react";
import data from "./data.js";
import { Container } from "react-bootstrap";

import DataModel from "../Model/DataModel.jsx";

const FlightTable = () => {
  const flightsData = data;
  return (
    <Container className="bg-white rounded-4 my-5">
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
                <td className="source-time">
                  <span style={{ fontSize: "1.2rem" }}>
                    {flight.departureTime}
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {flight.sourceAirport}
                  </span>
                </td>
                <td>
                  {"-----"}
                  {flight.duration}
                  {"-----"}
                </td>
                <td className="source-time">
                  <span style={{ fontSize: "1.2rem" }}>
                    {flight.arrivalTime}
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {flight.destinationAirport}
                  </span>
                </td>
                <td>{flight.flightNumber}</td>
                <td>{flight.stops}</td>
                <td>{flight.serviceClass}</td>
                <td>
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
