import React, { useState, useEffect } from "react";
import MultipleStopIcon from "@mui/icons-material/MultipleStop";

const BookingForm = ({setBooking}) => {
  const [departureCity, setDepartureCity] = useState("");
  const [destCity, setDestCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");

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

  return (
    <div className="form-container">
      <h1>Flight Booking</h1>
      <form onSubmit={handleSubmit}>
        <div className="colom">
          <div className="resp-100">
            <input
              type="text"
              id="departureCity"
              value={departureCity}
              onChange={handleDepartureCityChange}
              placeholder="From"
              className="input-form"
            />
            <MultipleStopIcon style={{ color: "black", fontSize: "2rem" }} />
            <input
              type="text"
              id="departureCity"
              value={destCity}
              onChange={handleDestCityChange}
              placeholder="To"
              className="input-form"
            />
          </div>

          <div className="resp-100">
            <input
              type="date"
              name="date"
              onChange={handleDepartureDateChange}
              className="input-form"
            />

            <button type="submit" onClick={()=>setBooking(true)}>Show Flights</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
