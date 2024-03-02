import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import airports from "../Airport/AirpostName.js";

const BookingForm = ({ setBooking }) => {
  
  const [departureCity, setDepartureCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [selectedAirport, setSelectedAirport] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking information:", {
      departureCity,
      departureDate,
    });
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handleAirportSelect = (event) => {
    const selectedCode = event.target.value;
    const selectedAirport = airports.find(
      (airport) => airport.code === selectedCode
    );
    setSelectedAirport(selectedAirport);
  };

  return (
    <Container className="bg-white mt-5 rounded-4 ">
      <Row >
        <Col >
          <h1 className="text-center p-2 mb-5 mt-5">Flight Booking</h1>
          <Form
            onSubmit={handleSubmit}
            className="row d-flex justify-content-around g-3 mb-5 straight"
          >
            <div
              className=" d-flex justify-content-around straight-2"
              style={{ width: "25rem" }}
            >
              <Form.Group
                className="mb-3 setWidth"
                style={{ width: "12rem" }}
                controlId="departureCity"
              >
                <Form.Select className="w-5 " onChange={handleAirportSelect}>
                  <option value="">From</option>
                  {airports.map((airport, index) => (
                    <option key={index} value={airport.code}>
                      {airport.city}, {airport.state}
                    </option>
                  ))}
                </Form.Select>
                
              </Form.Group>
              <MultipleStopIcon
                className="mx-1 mb-3"
                style={{ color: "black", fontSize: "2.5rem" }}
              />
              <Form.Group
                className="mb-3 setWidth"
                style={{ width: "12rem" }}
                controlId="destCity"
              >
                <Form.Select onChange={handleAirportSelect}>
                  <option value="">To</option>
                  {airports.map((airport, index) => (
                    <option key={index} value={airport.code}>
                      {airport.city}, {airport.state}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </div>
            <Form.Group
              className="mb-3 setWidth"
              style={{ width: "13rem" }}
              controlId="departureDate"
              label="date"
            >
             
              <Form.Control
                type="date"
                name="date"
                label="date"
                onChange={handleDepartureDateChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3 setWidth"
              style={{ width: "13rem" }}
              controlId="departureDate"
              label="date"
            >
             
              <Form.Control
                type="date"
                name="date"
                label="date"
                onChange={handleDepartureDateChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary justify-content-center"
              style={{ width: "6rem", height: "2.3rem" }}
              onClick={() => setBooking(true)}
            >
              Flights
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingForm;
