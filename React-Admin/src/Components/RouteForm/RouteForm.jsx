// RouteForm.js
import React, { useState } from 'react';
import "./RouteForm.css";
import axios from "axios";


function RouteForm() {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setRouteData(prevState => ({
    //         ...prevState,
    //         [name]: value
    //     }));
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send routeData to the server (POST request)
        const response = await axios.post("http://localhost:8080/route/add", {
            origin,
            destination
          });
          console.log(response.data);
        // console.log('Route data submitted:', routeData);
    };

    return (
        <div className='route-container'>
        <div className="custom-route-form">
            <h2>Add New Route</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Origin:
                    <input
                        type="text"
                        name="origin"
                        value={origin.origin}
                        onChange={(e) => setOrigin(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Destination:
                    <input
                        type="text"
                        name="destination"
                        value={destination.destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Add Route</button>
            </form>
        </div>
        </div>
    );
}

export default RouteForm;
