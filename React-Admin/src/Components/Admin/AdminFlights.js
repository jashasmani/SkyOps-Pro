import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminFlights.css';

const AdminFlightes = () => {
  const [flightes, setFlightes] = useState([]);

  useEffect(() => {
    fetchFlightes();
  }, []);

  const fetchFlightes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admin/getAll');
      setFlightes(response.data);
    } catch (error) {
      console.error('Error fetching flightes:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/admin/delete/${id}`);
      // Remove the deleted flight from the state
      setFlightes(flightes.filter(flight => flight.id !== id));
    } catch (error) {
      console.error('Error deleting flight:', error);
    }
  };

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Flight Name</th>
            <th>Capacity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {flightes.map(flight => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.flightname}</td>
              <td>{flight.totalseats}</td>
              <td>
                <button onClick={() => handleDelete(flight.id)}>Delete</button>
                {/* Add update button with onClick handler */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminFlightes;