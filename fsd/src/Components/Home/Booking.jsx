import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import imgplane from "./plane.png";
import airports from "../Airport/AirpostName.js";

const BookingForm = ({ setBooking }) => {
  const [departureCity, setDepartureCity] = useState("");
  const [destCity, setDestCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [selectedAirport, setSelectedAirport] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking information:", {
      departureCity,
      departureDate,
    });
  };

  const handleDepartureCityChange = (e) => {
    setDepartureCity(e.target.value);
  };

  const handleDestCityChange = (e) => {
    setDestCity(e.target.value);
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
    <Container className="bg-white mt-5 rounded-4  ">
      <Row>
        <Col>
          <h1 className="text-center p-2 mb-5 mt-5">Flight Booking</h1>
          <Form
            onSubmit={handleSubmit}
            className="row d-flex justify-content-around g-3 mb-5 "
          >
            <div className=" g-2  row col-md-5 d-flex justify-content-between ">
              <Form.Group
                className="mb-3 "
                style={{ width: "12rem" }}
                controlId="departureCity"
              >
                {/* <Form.Label>From</Form.Label> */}
                <Form.Select className="w-5" onChange={handleAirportSelect}>
                  <option value="">From</option>
                  {airports.map((airport, index) => (
                    <option key={index} value={airport.code}>
                      {airport.city}, {airport.state}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <MultipleStopIcon style={{ color: "black", fontSize: "3rem" }} />
              <Form.Group
                className="mb-3"
                style={{ width: "12rem" }}
                controlId="destCity"
              >
                {/* <Form.Label>To</Form.Label> */}
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
              className="mb-3"
              style={{ width: "12rem" }}
              controlId="departureDate"
              label="date"
            >
              {/* <Form.Label>Departure Date</Form.Label> */}
              <Form.Control
                type="date"
                name="date"
                label="date"
                onChange={handleDepartureDateChange}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              style={{ width: "12rem" }}
              controlId="departureDate"
              label="date"
            >
              {/* <Form.Label>Departure Date</Form.Label> */}
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
