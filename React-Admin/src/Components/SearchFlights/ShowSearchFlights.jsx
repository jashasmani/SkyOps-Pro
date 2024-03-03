import React  from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import Modal from "../Model/DataModel";

const ShowSearchFlights = ({ searchFlights }) => {

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
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {searchFlights.map((searchFlights) => (
              <tr key={searchFlights.id_flights}>
                <td className="source-time d-flex flex-column">
                  <span style={{ fontSize: "1.2rem" }}>
                    {searchFlights.departure_time}
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {searchFlights.departure_airport}
                  </span>
                </td>
                <td className="align-middle">{searchFlights.duration}</td>
                <td className="source-time d-flex flex-column">
                  <span style={{ fontSize: "1.2rem" }}>
                    {searchFlights.arrival_time}
                  </span>
                  <span style={{ fontSize: "1rem" }}>
                    {searchFlights.arrival_airport}
                  </span>
                </td>
                <td className="align-middle">{searchFlights.flight_number}</td>
                <td className="align-middle">{searchFlights.business_class_seat}</td>
                <td className="align-middle">{searchFlights.economy_class_seat}</td>
                <td className="align-middle">{searchFlights.first_class_seat}</td>
                <td className="align-middle">{searchFlights.business_class_price}</td>
                <td className="align-middle">{searchFlights.economy_class_price}</td>
                <td className="align-middle">{searchFlights.first_class_price}</td>
                <td className="align-middle">
                  <Modal
                    flight={searchFlights}
                    style={{ position: "absolute", zIndex: 999 }}
                  />
                </td>
                <td className="align-middle">
                  <button
                    type="button"
                    onClick={() => handleDelete(searchFlights.id_flights)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ShowSearchFlights;
