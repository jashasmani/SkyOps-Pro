import React, { useState } from "react";
import axios from "axios";
import airports from "../Airport/AirpostName.js";
import dayjs from "dayjs";
import { TimePicker } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FlightForm = ({ onAddFlight }) => {
  const [flightNumber, setFlightNumber] = useState("");
  const [departureTime, setDepatureTime] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureAirport, setDepatureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [businessClassSeat, setBusinessClassSeat] = useState("");
  const [firstClassSeat, setFirstClassSeat] = useState("");
  const [economyClassSeat, setEconomyClassSeat] = useState("");
  const [businessClassPrice, setBusinessClassPrice] = useState("");
  const [firstClassPrice, setFirstClassPrice] = useState("");
  const [economyClassPrice, setEconomyClassPrice] = useState("");
  const format = "HH:mm";

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(
    //   'from', departureAirport,
    //   'to', arrivalAirport,
    //   'flight_number', flightNumber,
    //   'departure_time',  departureTime.format("HH:mm"),
    //   'arrival_time', arrivalTime.format("HH:mm"),
    //   'business_class_seat', businessClassSeat,
    //   'economy_class_seat', economyClassSeat,
    //   'first_class_seat', firstClassSeat,
    //   'business_class_price', businessClassPrice,
    //   'economy_class_price', economyClassPrice,
    //   'first_class_price', firstClassPrice,
    // );

    const departureTimeString = departureTime.format("HH:mm");
    const arrivalTimeString = arrivalTime.format("HH:mm");
    const response = await axios.post("http://localhost:8080/main/flights", {
      departure_airport: departureAirport,
      arrival_airport: arrivalAirport,
      flight_number: flightNumber,
      departure_time: departureTimeString,
      duration: "2.3",
      arrival_time: arrivalTimeString,
      business_class_seat: businessClassSeat,
      economy_class_seat: economyClassSeat,
      first_class_seat: firstClassSeat,
      business_class_price: businessClassPrice,
      economy_class_price: economyClassPrice,
      first_class_price: firstClassPrice,
    });
    console.log(response.data);
    toast("Add Successfully!");
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

  return (
    <section
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={{ bounce: "Bounce" }}
        />
      </div>
      <div className="container">
        <div
          className="rounded p-4 p-md-5"
          style={{ backgroundColor: "white" }}
        >
          <h3 className="pb-4 text-center">Add Flight Data</h3>
          {/* --------------------------------------------------------------------------------------------- */}
          <div className="row mb-4">
            <div className="col-md-4 mb-3 mb-md-0">
              <label className="form-label">From</label>
              <select className="form-select" onChange={handleDepatureAirport}>
                <option value="">Departure</option>
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
                <option value="">Arrival</option>
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
                type="number"
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
                defaultValue={dayjs("00:00", format)}
                format={format}
                changeOnScroll
                needConfirm={false}
                onChange={(time) => setDepatureTime(time)}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <label className="form-label">Arrival Time</label>
              <TimePicker
                defaultValue={dayjs("00:00", format)}
                format={format}
                changeOnScroll
                needConfirm={false}
                onChange={(time) => setArrivalTime(time)}
                style={{ width: "100%" }}
              />
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <label className="form-label">Duration</label>
              <p className="form-control">2h 30min</p>
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
          <div className="d-flex justify-content-end mt-4">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary "
            >
              Add Flight
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlightForm;
