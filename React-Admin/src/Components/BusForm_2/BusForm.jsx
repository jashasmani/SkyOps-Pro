// import React, { useState } from 'react';
// import './BusForm.css';
// import axios from 'axios';

// function BusForm() {

//     const [busNumber, setBusNumber] = useState('');
//     const [capacity, setCapacity] = useState('');
//     // const [busData, setBusData] = useState({
//     //     busNumber: '',
//     //     capacity: ''
//     // });

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Send busData to the server (POST request)
//         const response = await axios.post("http://localhost:8080/bus/add", {
//            busNumber,
//            capacity,
//           });
//           console.log(response.data);
//         // console.log('Bus data submitted:', busData);
//     };

//     return (
//         <div className='body_bus2'>
//             {/* <h2 className='custom-bus-form'>Add New Bus</h2> */}
//             <form onSubmit={handleSubmit} className='custom-bus-form'>
//                 <label className='custom-label'>
//                     Bus Number:
//                     </label>
//                     <input className='custom-input'
//                         type="text"
//                         name="busNumber"
//                         value={busNumber}
//                         onChange={(e) => setBusNumber(e.target.value)}
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
//                 <button className='custom-button' type="submit">Add Bus</button>
//             </form>
//         </div>
//     );
// }

// export default BusForm;

import React, { useState } from "react";
import axios from "axios";
import './BusForm.css';


function BusForm() {
//   const [busData, setBusData] = useState({
//     busNumber: "",
//     capacity: "",
//     routes: [
//       { origin: "", destination: "" }, // Initial route
//     ],
//   });

  const [busNumber, setBusNumber] = useState('');
  const [capacity, setCapacity] = useState('');
  const [routes, setRoutes] = useState([{ origin: '', destination: '' }]);
//   const handleChange = (e, index) => {
//     const { name, value } = e.target;
//     if (name === "origin" || name === "destination") {
//       const routes = [...busData.routes];
//       routes[index][name] = value;
//       setBusData((prevState) => ({
//         ...prevState,
//         routes,
//       }));
//     } else {
//       setBusData((prevState) => ({
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
//     setBusData((prevState) => ({
//       ...prevState,
//       routes: [...prevState.routes, { origin: "", destination: "" }],
//     }));
//   };
const addRoute = () => {
    setRoutes([...routes, { origin: '', destination: '' }]);
};


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Bus data submitted:", busData);
//     // Send busData to the server (POST request)

//     const response = await axios.post(
//       "http://localhost:8080/bus/add",
//       { busData }
//       // busNumber,
//       // capacity,
//       // routes,
//     );
//     console.log(response.data);
//   };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:8080/bus/add", {
            busNumber,
            capacity,
            routes,
        });
        console.log(response.data);
    } catch (error) {
        console.error('Error submitting bus data:', error);
    }
};

  return (
    <div className='body_bus2'>      {/* <h2>Add New Bus</h2> */}
      <form onSubmit={handleSubmit} className='custom-bus-form'>
        <label className='custom-label'>
          Bus Number:
          <input className='custom-input'
            type="text"
            name="busNumber"
            value={busNumber}
            onChange={(e) => setBusNumber(e.target.value)}
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
        <button className='custom-button' type="submit">Add Bus</button>
      </form>
    </div>
  );
}

export default BusForm;
