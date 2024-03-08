import React from "react";
import { Container } from "react-bootstrap";
import DataModel from "../Model/DataModel.jsx";

const FlightTable = ({ searchdata }) => {
  if (!searchdata || searchdata.length === 0) {
    return (
      <Container className="bg-white rounded-4 my-5 d-flex align-items-center justify-content-center">
        <div
          className="d-flex justify-content-center  align-items-center"
          style={{ height: "10rem" }}
        >
          <h2 className="text-center mb-0">  Oops, No Flight Available!</h2>
        </div>
      </Container>
    );
  }

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
              {/* <th>Service Class</th> */}
              <th>Price</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {searchdata.map((flight) => (
              <tr key={flight.id_flight}>
                <td className="source-time d-flex flex-column ">
                  <span style={{ fontSize: "1.2rem " }}>
                    {flight.departure_time}
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {flight.departure_airport}
                  </span>
                </td>
                <td className="align-middle" style={{ fontSize: "1rem" }}>
                  {"---"}
                  {flight.duration}
                  {"---"}
                </td>
                <td className="source-time d-flex flex-column">
                  <span style={{ fontSize: "1.2rem" }}>
                    {flight.arrival_time}
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {flight.arrival_airport}
                  </span>
                </td>
                <td className="align-middle" style={{ fontSize: "1rem" }}>
                  {flight.flight_number}
                </td>
                <td className="align-middle">
                  <DataModel
                    flight={flight}
                    style={{ position: "absolute", zIndex: 99 }}
                  />
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
