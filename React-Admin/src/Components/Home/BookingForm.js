import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

const BookingForm = () => {
  const [origin, setFromCity] = useState("");
  const [destination, setDepartureCity] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [noOfPassengers, setNoOfPassengers] = useState();
  const [availableBuses, setAvailableBuses] = useState([]);
  const [show, setShow] = useState(false);


  const cities = [
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Surat", label: "Surat" },
    { value: "Vadodara", label: "Vadodara" },
    { value: "Rajkot", label: "Rajkot" },
    { value: "Bhavnagar", label: "Bhavnagar" },
    { value: "Jamnagar", label: "Jamnagar" },
    { value: "Junagadh", label: "Junagadh" },
    { value: "Gandhinagar", label: "Gandhinagar" },
    { value: "Gandhidham", label: "Gandhidham" },
    { value: "Anand", label: "Anand" },
    { value: "Bharuch", label: "Bharuch" },
    { value: "Nadiad", label: "Nadiad" },
    { value: "Morbi", label: "Morbi" },
    { value: "Surendranagar", label: "Surendranagar" },
    { value: "Vapi", label: "Vapi" },
    { value: "Navsari", label: "Navsari" },
    { value: "Bhuj", label: "Bhuj" },
    { value: "Mehsana", label: "Mehsana" },
    { value: "Gandevi", label: "Gandevi" },
    { value: "Veraval", label: "Veraval" },
    { value: "Ankleshwar", label: "Ankleshwar" },
    { value: "Porbandar", label: "Porbandar" },
    { value: "Godhra", label: "Godhra" },
    { value: "Palanpur", label: "Palanpur" },
    { value: "Bhuj", label: "Bhuj" },
    { value: "Valsad", label: "Valsad" },
    { value: "Bharuch", label: "Bharuch" },
    { value: "Bhavnagar", label: "Bhavnagar" },
    { value: "Deesa", label: "Deesa" },
    { value: "Palanpur", label: "Palanpur" },
    { value: "Anand", label: "Anand" },
    { value: "Patan", label: "Patan" },
    { value: "Dahod", label: "Dahod" },
  ];
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // console.log("Booking information:", {
  //   //   departureCity,
  //   //   departureDate,
  //   //   noOfPassengers,
  //   // });

  //   try {
  //     // const response = await axios.get("http://localhost:8080/admin/getAll");
  //     const response = await axios.get("http://localhost:8080/bus/buses", {
  //       params: { origin, destination } 
  //     });
  //     setAvailableBuses(response.data);
  //     setShow(true)
  //     console.log(response.data);
  //     // Handle successful login
  //   } catch (error) {
  //     console.error("Login error:", error);
  //     // Handle login error
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   if (e) {
  //     e.preventDefault();
  //   }
  
  //   try {
  //     const response = await axios.get("http://localhost:8080/bus/buses", {
  //      params: { origin: origin.value,
  //       destination: destination.value}
  //     });
  //     setAvailableBuses(response.data);
  //     setShow(true);
  //   } catch (error) {
  //     console.error("Error fetching available buses:", error);
  //   }
  // };
  const handleSubmit = useCallback(async (e) => {
    if (e) {
      e.preventDefault(); 
    }  
    try {
      const response = await axios.get("http://localhost:8080/bus/buses", {
        params: {
          origin: origin.value,
          destination: destination.value
        }
      });
  
      setAvailableBuses(response.data);
      setShow(true);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching buses:", error);
    }
  }, [origin.value, destination.value]); // Include dependencies in the array
  
  useEffect(() => {
    handleSubmit();
  }, [handleSubmit]);
  

 
  // const handleFromCityChange = (e) => {
  //   setFromCity(e.target.value);
  // };
  // const handleDepartureCityChange = (e) => {
  //   setDepartureCity(e.target.value);
  // };
  const handleFromCityChange = (selectedOption) => {
    setFromCity(selectedOption);
  };

  const handleDepartureCityChange = (selectedOption) => {
    setDepartureCity(selectedOption);
  };

  const handleDepartureDateChange = (e) => {
    setDepartureDate(e.target.value);
  };

  const handlePassengersChange = (e) => {
    setNoOfPassengers(parseInt(e.target.value));
  };

  // useEffect(()=>{
  //   fetch("http://localhost:8080/admin/getAll")
  //   .then(res=>res.json())
  //   .then((result_bus)=>{
  //     setAvailableBuses(result_bus);
  //   }
  //   )
  // },[])
  return (
    <div className="form-container_bus">
      <h1>Bus Booking</h1>
      <form onSubmit={handleSubmit}>
        {/* <div className="colom">
          <input
            type="text"
            id="fromCity"
            value={fromCity}
            onChange={handleFromCityChange}
            placeholder="From"
            className="input-form"
            />

          <input
            type="text"
            id="departureCity"
            value={departureCity}
            onChange={handleDepartureCityChange}
            placeholder="To"
            className="input-form"
            />
        </div> */}
        <div className="colom">
          <Select
            className="selectcity"
            options={cities}
            value={origin}
            onChange={handleFromCityChange}
            placeholder="From"
          />

          <Select
            className="selectcity"
            options={cities}
            value={destination}
            onChange={handleDepartureCityChange}
            placeholder="To"
          />
        </div>
        <div className="colom">
          <input
            type="date"
            placeholder="MM/DD/YYYY"
            id="departureDate"
            value={departureDate}
            onChange={handleDepartureDateChange}
            className="input-form"
          />
          {/* 
          <input
            type="date"
            id="departureDate"
            value={departureDate}
            onChange={handleDepartureDateChange}
            placeholder="Depart Date"
            className="input-form"
            /> */}
        </div>

        <div className="colom">
          <input
            type="number"
            id="noOfPassengers"
            value={noOfPassengers}
            min="1"
            onChange={handlePassengersChange}
            placeholder="Panssenger"
            className="input-form"
          />
          <button className="submitbutton" type="submit">
            Show Buses
          </button>
        </div>
       {show && <div className="AvailableBuses">
          <h2>Available Buses:</h2>
          <ul>
            {availableBuses.map((bus) => (
              <li key={bus.id}>
                {bus.busname} - {bus.busregistrationnumber} - {bus.description}
                {bus.busNumber}
              </li>
            ))}
          </ul>
        </div>
}
      </form>
      {/* <div className="AvailableBuses">
        <h2>Available Buses:</h2>
        <ul>
          {availableBuses.map((bus) => (
            <li key={bus.id}>
              {bus.busname} - {bus.busregistrationnumber} - {bus.description} 
            </li>
          ))}
        </ul>
      </div>  */}
    </div>
  );
};

export default BookingForm;
