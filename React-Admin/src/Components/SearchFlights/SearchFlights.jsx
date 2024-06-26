import React, { useState } from "react";
import { Container, Row, Button } from "react-bootstrap"; // Importing Row and Col for grid layout
import airports from "../AirportNames/AirpostName.js";
import { TimePicker } from "antd";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import axios from "axios";
import ShowSearchFlights from "./ShowSearchFlights.jsx";

dayjs.extend(customParseFormat);

const SearchFlights = () => {
  const format = "HH:mm";

  const [departureAirport, setDepatureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [dateFlight, setDateFlight] = useState(""); 
  const [permission, setPermission] = useState(false); 
  const [searchFlights, setSearchFlights] = useState([]);
  const [selectedRange, setSelectedRange] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const departureTimeString = dayjs(selectedRange[0]).format("HH:mm");
    const arrivalTimeString = dayjs(selectedRange[1]).format("HH:mm");
    const dateString = dayjs(dateFlight).format("DD-MM-YYYY");
    console.log(dateString)
    try {
      const response = await axios.get(
        `http://localhost:8080/main/flights/${departureAirport}/${arrivalAirport}/${dateString}/${departureTimeString}/${arrivalTimeString}`
      );
      console.log('123'+response.data);
      setSearchFlights(response.data);
      setPermission(true);
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
            <h1 className="pb-4 text-center">Search Flight </h1>
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

              <div className="col-md-3 mb-3 mb-md-0">
                <label className="form-label">Select Time</label>
                <TimePicker.RangePicker
                  onChange={handleRangeChange}
                  changeOnScroll
                  format={format}
                  placeholder={["Departure ", "Arrival "]}
                  needConfirm={false}
                  style={{ width: "100%" }}
                  size="large"
                />
                
              </div>
              <div className="col-md-3 mb-3 mb-md-0 d-flex justify-content-end w-100 mt-4">
                <Button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary "
                >
                  Search Flight
                </Button>
              </div>
            </Row>
          </div>
        </div>
      </Container>
      <ShowSearchFlights searchFlights={searchFlights} permission={permission}/>
    </>
  );
};

export default SearchFlights;
