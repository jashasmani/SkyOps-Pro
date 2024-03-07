import React, { useState } from "react";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";
import { Container, Row, Button } from "react-bootstrap"; // Importing Row and Col for grid layout
import { TimePicker } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import axios from "axios";
import airports from "../Airport/AirpostName.js";
dayjs.extend(customParseFormat);

const BookingForm = ({ setBooking }) => {
  const format = "HH:mm";

  const [departureAirport, setDepatureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [dateFlight, setDateFlight] = useState("");
  const [selectedRange, setSelectedRange] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const departureTimeString = dayjs(selectedRange[0]).format("HH:mm");
    const arrivalTimeString = dayjs(selectedRange[1]).format("HH:mm");
    const dateString = dayjs(dateFlight).format("YYYY-MM-DD");
    console.log(dateString);
    try {
      const response = await axios.get(
        `http://localhost:8080/main/flights/${departureAirport}/${arrivalAirport}/${dateString}`
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }

    setBooking(true);
  };

  const handleDepatureAirport = (event) => {
    const selectedCode = event.target.value;
    const selectedAirport = airports.find(
      (airport) => airport.code === selectedCode
    );
    setDepatureAirport(selectedAirport.code);
  };

  const handleArrivalAirport = (event) => {
    const selectedCode = event.target.value;
    const selectedAirport = airports.find(
      (airport) => airport.code === selectedCode
    );
    setArrivalAirport(selectedAirport.code);
  };

  const handleDate = (dates) => {
    setDateFlight(dates);
    // console.log(dayjs(dateFlight).format("DD-MM-YYYY"))
  };

  const handleRangeChange = (dates) => {
    setSelectedRange(dates);
  };

  return (
    <>
      <Container className="bg-white rounded-4 my-5">
        <div>
          <div
            className="rounded p-4 p-md-5"
            style={{ backgroundColor: "white" }}
          >
            <h1 className="pb-4 text-center"> Flight Booking </h1>
            <Row className="justify-content-center">
              <div className="col-md-3 mb-3 mb-md-0">
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
              <div className="col-md-3 mb-3 mb-md-0">
                <label className="form-label">To</label>
                <select className="form-select" onChange={handleArrivalAirport}>
                  <option value={arrivalAirport}>Arrival</option>
                  {airports.map((airport, index) => (
                    <option key={index} value={airport.code}>
                      {airport.city}, {airport.state} - {airport.code} (
                      {airport.airport_name})
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-3 mb-3 mb-md-0">
                <label className="form-label">Select Date </label>
                <DatePicker
                  onChange={handleDate}
                  style={{ width: "100%" }}
                  size="large"
                />
              </div>

              <div className="col-md-3 mb-3 mb-md-0 d-flex justify-content-center align-items-end pb-1" >
                {/* <label className="form-label">Select Time</label>
                <TimePicker.RangePicker
                  onChange={handleRangeChange}
                  changeOnScroll
                  format={format}
                  placeholder={["Departure ", "Arrival "]}
                  needConfirm={false}
                  style={{ width: "100%" }}
                  size="large"
                /> */}
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary "
                >
                  Flight
                </Button>
              </div>
              {/* <div className="col-md-3 mb-3 mb-md-0 d-flex justify-content-end w-100 mt-4">
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary "
                >
                  Flight
                </Button>
              </div> */}
            </Row>
          </div>
        </div>
      </Container>
      {/* <ShowSearchFlights searchFlights={searchFlights} permission={permission}/> */}
    </>
  );
};

export default BookingForm;
