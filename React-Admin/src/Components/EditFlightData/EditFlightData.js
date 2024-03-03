import React, { useState, useEffect } from "react";
import axios from "axios";
import airports from "../AirportNames/AirpostName.js";
import dayjs from "dayjs";
import { TimePicker } from "antd";
// import Alert from "@mui/material/Alert";
// import Stack from "@mui/material/Stack";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const EditFlightData = ({ flight, close }) => {
  const format = "HH:mm";

  const [flightNumber, setFlightNumber] = useState(flight.flight_number);
  const [departureTime, setDepatureTime] = useState(flight.departure_time);
  const [arrivalTime, setArrivalTime] = useState(flight.arrival_time);
  const [departureAirport, setDepatureAirport] = useState(
    flight.departure_airport
  );
  const [arrivalAirport, setArrivalAirport] = useState(flight.arrival_airport);
  const [businessClassSeat, setBusinessClassSeat] = useState(
    flight.business_class_seat
  );
  const [firstClassSeat, setFirstClassSeat] = useState(flight.first_class_seat);
  const [economyClassSeat, setEconomyClassSeat] = useState(
    flight.economy_class_seat
  );
  const [businessClassPrice, setBusinessClassPrice] = useState(
    flight.business_class_price
  );
  const [firstClassPrice, setFirstClassPrice] = useState(
    flight.first_class_price
  );
  const [economyClassPrice, setEconomyClassPrice] = useState(
    flight.economy_class_price
  );
  const [duration, setDuration] = useState("0h 0min");

  const handleUpadate = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:8080/main/flights/${flight.id_flights}`,
        {
          departure_airport: departureAirport,
          arrival_airport: arrivalAirport,
          flight_number: flightNumber,
          departure_time: departureTime,
          arrival_time: arrivalTime,
          duration: duration,
          business_class_seat: businessClassSeat,
          economy_class_seat: economyClassSeat,
          first_class_seat: firstClassSeat,
          business_class_price: businessClassPrice,
          economy_class_price: economyClassPrice,
          first_class_price: firstClassPrice,
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleCancel = () => {
    close(false);
  };
  const handleDepatureAirport = (event) => {
    const selectedCode = event.target.value;
    const selectedAirport = airports.find(
      (airport) => airport.code === selectedCode
    );
    setDepatureAirport(selectedAirport.code);
    // console.log(selectedAirport.code);
    // console.log(selectedAirport);
  };

  const handleArrivalAirport = (event) => {
    const selectedCode = event.target.value;
    const selectedAirport = airports.find(
      (airport) => airport.code === selectedCode
    );
    setArrivalAirport(selectedAirport.code);
    // console.log(selectedAirport.code);
    // console.log(selectedAirport);
  };

  const onChange1 = (time, timeString) => {
    console.log(timeString);
    setDepatureTime(timeString);
  };
  const onChange2 = (time, timeString) => {
    console.log(timeString);
    setArrivalTime(timeString);
  };

  useEffect(() => {
    const calculateDuration = () => {
      if (
        departureTime &&
        arrivalTime &&
        dayjs(departureTime).isValid() &&
        dayjs(arrivalTime).isValid()
      ) {
        const departure = dayjs(departureTime, format);
        const arrival = dayjs(arrivalTime, format);
        const durationHours = arrival.diff(departure, "hour");
        const durationMinutes = arrival.diff(departure, "minute") % 60;
        const durationString =
          durationHours +
          "h" +
          (durationMinutes ? " " + durationMinutes + "min" : "");
        setDuration(durationString);
      }
    };
    calculateDuration();
  }, [departureTime, arrivalTime]);

  return (
    <>
      <Container className="bg-white rounded-4">
        <div className="container">
          <div
            className="rounded p-4 p-md-5"
            style={{ backgroundColor: "white" }}
          >
            <h3 className="pb-4 text-center">Update Flight Data</h3>
            {/* --------------------------------------------------------------------------------------------- */}
            <div className="row mb-4">
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">From</label>
                <select
                  className="form-select"
                  onChange={handleDepatureAirport}
                >
                  <option value="">{departureAirport}</option>
                  {airports.map((airport, index) => (
                    <option key={index} value={airport.code}>
                      {airport.city}, {airport.state} - {airport.code} (
                      {airport.airport_name})
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">To</label>
                <select className="form-select" onChange={handleArrivalAirport}>
                  <option value={arrivalAirport}>
                    {flight.arrival_airport}
                  </option>
                  {airports.map((airport, index) => (
                    <option key={index} value={airport.code}>
                      {airport.city}, {airport.state} - {airport.code} (
                      {airport.airport_name})
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">Flight Number</label>
                <input
                  type="text"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>
            {/* --------------------------------------------------------------------------------------------- */}
            <div className="row mb-4">
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">Departure Time</label>

                <TimePicker
                  onChange={onChange1}
                  changeOnScroll
                  defaultValue={dayjs(departureTime, format)}
                  format={format}
                  needConfirm={false}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">Arrival Time</label>
                <TimePicker
                  onChange={onChange2}
                  changeOnScroll
                  defaultValue={dayjs(arrivalTime, format)}
                  format={format}
                  needConfirm={false}
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">Duration</label>
                <p className="form-control">{flight.duration}</p>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">Business Class Seats</label>
                <input
                  type="number"
                  onChange={(e) => setBusinessClassSeat(e.target.value)}
                  value={businessClassSeat}
                  className="form-control"
                />
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">Economy Class Seats</label>
                <input
                  type="number"
                  onChange={(e) => setEconomyClassSeat(e.target.value)}
                  value={economyClassSeat}
                  className="form-control"
                />
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">First Class Seats</label>
                <input
                  type="number"
                  onChange={(e) => setFirstClassSeat(e.target.value)}
                  className="form-control"
                  value={firstClassSeat}
                />
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">Business Class Price</label>
                <input
                  type="number"
                  onChange={(e) => setBusinessClassPrice(e.target.value)}
                  value={businessClassPrice}
                  className="form-control"
                />
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">Economy Class Price</label>
                <input
                  type="number"
                  onChange={(e) => setEconomyClassPrice(e.target.value)}
                  className="form-control"
                  value={economyClassPrice}
                />
              </div>
              <div className="col-md-4 mb-3 mb-md-0">
                <label className="form-label">First Class Price</label>
                <input
                  type="number"
                  onChange={(e) => setFirstClassPrice(e.target.value)}
                  className="form-control"
                  value={firstClassPrice}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button
                type="button"
                className="btn btn-secondary mx-2"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <button
                onClick={handleUpadate}
                type="submit"
                className="btn btn-success "
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default EditFlightData;
