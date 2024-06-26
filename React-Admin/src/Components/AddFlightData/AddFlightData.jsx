import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import airports from "../AirportNames/AirpostName.js";
import dayjs from "dayjs";
import { TimePicker, DatePicker } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { Container } from "react-bootstrap";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

const AddFlightData = ({ showAddFlight }) => {
  const [flightNumber, setFlightNumber] = useState("");
  const [departureTime, setDepatureTime] = useState();
  const [arrivalTime, setArrivalTime] = useState();
  const [dateFlight, setDateFlight] = useState("");
  const [departureAirport, setDepatureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [businessClassSeat, setBusinessClassSeat] = useState("");
  const [firstClassSeat, setFirstClassSeat] = useState("");
  const [economyClassSeat, setEconomyClassSeat] = useState("");
  const [businessClassPrice, setBusinessClassPrice] = useState("");
  const [firstClassPrice, setFirstClassPrice] = useState("");
  const [economyClassPrice, setEconomyClassPrice] = useState("");
  const [duration, setDuration] = useState("0h 0min");
  const format = "HH:mm";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const departureTimeString = departureTime.format("HH:mm");
    // const arrivalTimeString = arrivalTime.format("HH:mm");
    const departureTimeString = dayjs(departureTime).format("HH:mm");
    const arrivalTimeString = dayjs(arrivalTime).format("HH:mm");
    const dateString = dayjs(dateFlight).format("DD-MM-YYYY");
    try {
      const response = await axios.post("http://localhost:8080/main/flights", {
        departure_airport: departureAirport,
        arrival_airport: arrivalAirport,
        flight_number: flightNumber,
        date: dateString,
        departure_time: departureTimeString,
        arrival_time: arrivalTimeString,
        duration: duration,
        business_class_seat: businessClassSeat,
        economy_class_seat: economyClassSeat,
        first_class_seat: firstClassSeat,
        business_class_price: businessClassPrice,
        economy_class_price: economyClassPrice,
        first_class_price: firstClassPrice,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDepatureAirport = (event) => {
    const selectedCode = event.target.value;
    const selectedAirport = airports.find(
      (airport) => airport.code === selectedCode
    );
    setDepatureAirport(selectedAirport.code);
    console.log(selectedAirport.code);
    // console.log(selectedAirport);
  };

  const handleArrivalAirport = (event) => {
    const selectedCode = event.target.value;
    const selectedAirport = airports.find(
      (airport) => airport.code === selectedCode
    );
    setArrivalAirport(selectedAirport.code);
    console.log(selectedAirport.code);
    // console.log(selectedAirport);
  };

  const onChange1 = (time, timeString) => {
    console.log(time, timeString);
    setDepatureTime(time);
  };
  const onChange2 = (time, timeString) => {
    console.log(time, timeString);
    setArrivalTime(time);
  };

  useEffect(() => {
    const calculateDuration = () => {
      if (
        departureTime &&
        arrivalTime &&
        dayjs(departureTime, format).isValid() &&
        dayjs(arrivalTime, format).isValid()
      ) {
        const departure = dayjs(departureTime, format);
        const arrival = dayjs(arrivalTime, format);
        const durationMinutes = arrival.diff(departure, "minute");
        const durationHours = Math.floor(durationMinutes / 60);
        const remainingMinutes = durationMinutes % 60;
        const durationString = `${durationHours}h ${remainingMinutes}min`;
        setDuration(durationString);
      }
    };
    calculateDuration();
  }, [departureTime, arrivalTime]);

  const handleDate = (dates) => {
    setDateFlight(dates);
    // console.log(dayjs(dateFlight).format("DD-MM-YYYY"))
  };
  return (
    <>
      {!showAddFlight && <Navbar />}
      {/* <div className="my-3 d-flex justify-content-center">
        <Stack sx={{ width: "25%" }} spacing={2}>
          <Alert variant="filled" severity="success">
            This is a filled success Alert.
          </Alert>
        </Stack>
      </div> */}
      <Container className="bg-white rounded-4 my-5">
        <div className="container">
          <div
            className="rounded p-4 p-md-5"
            style={{ backgroundColor: "white" }}
          >
            <h3 className="pb-4 text-center">Add Flight Data</h3>
            {/* --------------------------------------------------------------------------------------------- */}
            <form onSubmit={handleSubmit}>
              <div className="row mb-4">
                <div className="col-md-4 mb-3 mb-md-0">
                  <label className="form-label">From</label>
                  <select
                    className="form-select"
                    onChange={handleDepatureAirport}
                  >
                    <option value={departureAirport}>Departure</option>
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
                  <select
                    className="form-select"
                    onChange={handleArrivalAirport}
                  >
                    <option value={arrivalAirport}>Arrival</option>
                    {airports.map((airport, index) => (
                      <option key={index} value={airport.code}>
                        {airport.city}, {airport.state} - {airport.code} (
                        {airport.airport_name})
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <label className="form-label">Select Date</label>
                  <DatePicker
                    onChange={handleDate}
                    style={{ width: "100%" }}
                    size="large"
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
                    defaultValue={dayjs("12:00", format)}
                    format={format}
                    needConfirm={false}
                    style={{ width: "100%" }}
                    size="large"
                  />
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <label className="form-label">Arrival Time</label>
                  <TimePicker
                    onChange={onChange2}
                    changeOnScroll
                    defaultValue={dayjs("12:00", format)}
                    format={format}
                    needConfirm={false}
                    style={{ width: "100%" }}
                    size="large"
                  />
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <label className="form-label">Duration</label>
                  <p className="form-control">{duration}</p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-4 mb-3 mb-md-0">
                  <label className="form-label">Business Class Seats</label>
                  <input
                    type="number"
                    onChange={(e) => setBusinessClassSeat(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <label className="form-label">Economy Class Seats</label>
                  <input
                    type="number"
                    onChange={(e) => setEconomyClassSeat(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <label className="form-label">First Class Seats</label>
                  <input
                    type="number"
                    onChange={(e) => setFirstClassSeat(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-4 mb-3 mb-md-0">
                  <label className="form-label">Business Class Price</label>
                  <input
                    type="number"
                    onChange={(e) => setBusinessClassPrice(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <label className="form-label">Economy Class Price</label>
                  <input
                    type="number"
                    onChange={(e) => setEconomyClassPrice(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                  <label className="form-label">First Class Price</label>
                  <input
                    type="number"
                    onChange={(e) => setFirstClassPrice(e.target.value)}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-md-4 mb-3 mb-md-0">
                  <label className="form-label">Flight Number</label>
                  <input
                    type="text"
                    onChange={(e) => setFlightNumber(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="d-flex justify-content-end mt-4">
                  <button type="submit" className="btn btn-primary ">
                    Add Flight
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AddFlightData;
