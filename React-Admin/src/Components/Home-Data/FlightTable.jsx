import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Modal from "../Model/DataModel";

const FlightTable = () => {
  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    const handleFlightData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/main/flights");
        setFlightData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Invalid Data");
      }
    };

    handleFlightData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/main/flights/${id}`
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container className="bg-white rounded-4 my-5">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>DTAT</th>
              <th>Duration</th>
              <th>ATDT</th>
              <th>Flight Number</th>
              <th colSpan="3">Seats</th>
              <th colSpan="3">Prices</th>
             
            </tr>
          </thead>
          <tbody className="text-center">
            {flightData.map((flight) => (
              <tr key={flight.id_flights}>
                <td className="source-time d-flex flex-column">
                  <span style={{ fontSize: "1.2rem" }}>
                    {flight.departure_time}
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {flight.departure_airport}
                  </span>
                </td>
                <td className="align-middle">{flight.duration}</td>
                <td className="source-time d-flex flex-column">
                  <span style={{ fontSize: "1.2rem" }}>
                    {flight.arrival_time}
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {flight.arrival_airport}
                  </span>
                </td>
                <td className="align-middle">{flight.flight_number}</td>
                <td className="align-middle">{flight.business_class_seat}</td>
                <td className="align-middle">{flight.economy_class_seat}</td>
                <td className="align-middle">{flight.first_class_seat}</td>
                <td className="align-middle">{flight.business_class_price}</td>
                <td className="align-middle">{flight.economy_class_price}</td>
                <td className="align-middle">{flight.first_class_price}</td>
                {/* <td className="align-middle">
                  <Modal
                    flight={flight}
                    style={{ position: "absolute", zIndex: 999 }}
                  />
                </td>
                <td className="align-middle">
                  <button
                    type="button"
                    onClick={() => handleDelete(flight.id_flights)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default FlightTable;
