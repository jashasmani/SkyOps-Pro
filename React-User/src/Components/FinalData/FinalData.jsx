import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Navbar from "../Home/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FlightTable = () => {
  const [id] = useState(localStorage.getItem("id"));
  const [person, setPerson] = useState([]);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/ticket/passengers/${id}`
        );
        console.log(response.data);
        setPerson(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        // toast.error("Invalid user", { autoClose: 2000 }); // Show toast for 2 seconds
      }
    };

    if (id !== "") {
      fetchData();
    } else if (id === "") {
      toast.error("Sign Up First", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }); // Show toast for 2 seconds
    }
  }, [id]);

  return (
    <div style={{ height: "100vh" }}>
      <Navbar />
      
      <ToastContainer style={{marginTop:'4.2rem'}} />

      <div
        style={{ marginTop: "10rem", height: "80vh", overflowY: "scroll" }}
        className="card text-bg-secondary mb-3 mx-5"
      >
        {person.map((person, index) => (
          <Container className="bg-white rounded-4  mt-5">
            <div className="table-responsive ">
              <React.Fragment key={index}>
                <table className="table ">
                  <thead>
                    <tr className="text-center" style={{ maxWidth: "auto" }}>
                      <th className="text-black p-2">No</th>
                      <th className="text-black p-2">Name</th>
                      <th className="text-black p-2">Age</th>
                      <th className="text-black p-2">Category</th>
                      <th className="text-black p-2">Flight Number</th>
                      <th className="text-black p-2">Price (Rs)</th>
                    </tr>
                  </thead>
                  {/* ))} */}
                  <tbody className="text-center">
                    {/* {person.map((person, index) => ( */}
                    <tr>
                      <td className="p-2">1</td>
                      <td className="p-2">{person.pname1}</td>
                      <td className="p-2">{person.page1}</td>
                      <td className="p-2">{person.pcategory}</td>
                      <td className="p-2">{person.flights.flight_number}</td>
                      <td className="p-2">{person.totalprice} Rs</td>
                    </tr>
                    {person.pname2 !== null && (
                      <tr key={index + "_2"}>
                        <td className="p-2">2</td>
                        <td className="p-2">{person.pname2}</td>
                        <td className="p-2">{person.page2}</td>
                        <td className="p-2">{person.pcategory}</td>
                        <td className="p-2">{person.totalprice} Rs</td>
                      </tr>
                    )}
                    {person.pname3 !== null && (
                      <tr key={index + "_3"}>
                        <td className="p-2">3</td>
                        <td className="p-2">{person.pname3}</td>
                        <td className="p-2">{person.page3}</td>
                        <td className="p-2">{person.pcategory}</td>
                        <td className="p-2">{person.totalprice} Rs</td>
                      </tr>
                    )}
                    {person.pname4 !== null && (
                      <tr key={index + "_4"}>
                        <td className="p-2">4</td>
                        <td className="p-2">{person.pname4}</td>
                        <td className="p-2">{person.page4}</td>
                        <td className="p-2">{person.pcategory}</td>
                        <td className="p-2">{person.totalprice} Rs</td>
                      </tr>
                    )}
                    <tr className="text-center">
                      <th className="text-black p-2" colSpan={2}>
                        Email : {person.pemail}
                      </th>
                      <th className="text-black p-2"></th>
                      <th className="text-black p-2" colSpan={2}>
                        Contact : {person.pcontact}
                      </th>
                    </tr>
                  </tbody>
                </table>
              </React.Fragment>
            </div>
          </Container>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default FlightTable;
