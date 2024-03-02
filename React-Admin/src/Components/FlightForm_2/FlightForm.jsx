// import React, { useState } from 'react';
// import './FlightForm.css';
// import axios from 'axios';

// function FlightForm() {

//     const [flightNumber, setFlightNumber] = useState('');
//     const [capacity, setCapacity] = useState('');
//     // const [flightData, setFlightData] = useState({
//     //     flightNumber: '',
//     //     capacity: ''
//     // });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Send flightData to the server (POST request)
//         const response = await axios.post("http://localhost:8080/flight/add", {
//            flightNumber,
//            capacity,
//           });
//           console.log(response.data);
//         // console.log('Flight data submitted:', flightData);
//     };

//     return (
//         <div className='body_flight2'>
//             {/* <h2 className='custom-flight-form'>Add New Flight</h2> */}
//             <form onSubmit={handleSubmit} className='custom-flight-form'>
//                 <label className='custom-label'>
//                     Flight Number:
//                     </label>
//                     <input className='custom-input'
//                         type="text"
//                         name="flightNumber"
//                         value={flightNumber}
//                         onChange={(e) => setFlightNumber(e.target.value)}
//                     />
//                 <br />
//                 <label className='custom-label'>
//                     Capacity:
//                     </label>
//                     <input className='custom-input'
//                         type="number"
//                         name="capacity"
//                         value={capacity}
//                         onChange={(e) => setCapacity(e.target.value)}
//                     />
//                 <br />
//                 <button className='custom-button' type="submit">Add Flight</button>
//             </form>
//         </div>
//     );
// }

// export default FlightForm;

import React, { useState } from "react";
import axios from "axios";
import './FlightForm.css';


function FlightForm() {
//   const [flightData, setFlightData] = useState({
//     flightNumber: "",
//     capacity: "",
//     routes: [
//       { origin: "", destination: "" }, // Initial route
//     ],
//   });

  const [flightNumber, setFlightNumber] = useState('');
  const [capacity, setCapacity] = useState('');
  const [routes, setRoutes] = useState([{ origin: '', destination: '' }]);
//   const handleChange = (e, index) => {
//     const { name, value } = e.target;
//     if (name === "origin" || name === "destination") {
//       const routes = [...flightData.routes];
//       routes[index][name] = value;
//       setFlightData((prevState) => ({
//         ...prevState,
//         routes,
//       }));
//     } else {
//       setFlightData((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

const handleRouteChange = (index, field, value) => {
    const updatedRoutes = [...routes];
    updatedRoutes[index][field] = value;
    setRoutes(updatedRoutes);
};

//   const handleAddRoute = () => {
//     setFlightData((prevState) => ({
//       ...prevState,
//       routes: [...prevState.routes, { origin: "", destination: "" }],
//     }));
//   };
const addRoute = () => {
    setRoutes([...routes, { origin: '', destination: '' }]);
};


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Flight data submitted:", flightData);
//     // Send flightData to the server (POST request)

//     const response = await axios.post(
//       "http://localhost:8080/flight/add",
//       { flightData }
//       // flightNumber,
//       // capacity,
//       // routes,
//     );
//     console.log(response.data);
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:8080/flight/add", {
            flightNumber,
            capacity,
            routes,
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error submitting flight data:', error);
    }
};

  return (
    <div className='body_flight2'>      {/* <h2>Add New Flight</h2> */}
      <form onSubmit={handleSubmit} className='custom-flight-form'>
        <label className='custom-label'>
          Flight Number:
          <input className='custom-input'
            type="text"
            name="flightNumber"
            value={flightNumber}
            onChange={(e) => setFlightNumber(e.target.value)}
          />
        </label >
        <br />
        <label className='custom-label'>
          Capacity:
          <input className='custom-input'
            type="number"
            name="capacity"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </label>
        <br />
        {routes.map((route, index) => (
          <div key={index}>
            <label className='custom-label'>
              Route {index + 1} Origin:
              <input className='custom-input'
                type="text"
                name="origin"
                value={route.origin}
                onChange={(e) => handleRouteChange(index,'origin',e.target.value)}
              />
            </label>
            <br />
            <label className='custom-label'>
              Route {index + 1} Destination:
              <input className='custom-input'
                type="text"
                name="destination"
                value={route.destination}
                onChange={(e) => handleRouteChange(index,'destination',e.target.value)}
              />
            </label>
            <br />
          </div>
        ))}
        <button className='custom-button' type="button" onClick={addRoute}>
          Add Route
        </button>
        <br />
        <button className='custom-button' type="submit">Add Flight</button>
      </form>
    </div>
  );
}

export default FlightForm;
