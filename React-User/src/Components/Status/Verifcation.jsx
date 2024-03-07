import React, { useState } from "react";
import { Container } from "react-bootstrap";

// const flightsData = [
//   {
//     name: "Jash Asmani",
//     age: 21,
//     category: "Bus",
//     price: 4500,
//   },
//   {
//     name: "Riya Jivani",
//     age: 21,
//     category: "Bus",
//     price: 4500,
//   },
//   {
//     name: "Nirj Naist",
//     age: 21,
//     category: "Bus",
//     price: 4500,
//   },
//   {
//     name: "Prit Dholariya",
//     age: 21,
//     category: "Bus",
//     price: 4500,
//   },
// ];

const Verifcation = ({ allData }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const calculateTotalPrice = () => {
    if (allData.pname4 !== null) {
      setTotalPrice(allData.totalprice * 4);
    } else if (allData.pname3 !== null) {
      setTotalPrice(allData.totalprice * 3);
    } else if (allData.pname2 !== null) {
      setTotalPrice(allData.totalprice * 2);
    } else if (allData.pname1 !== null) {
      setTotalPrice(allData.totalprice * 1);
    }
  };
  useState(() => {
    calculateTotalPrice();
  }, []);
  return (
    <Container className="bg-white " style={{ height: "330px" }}>
      <div className="table-responsive ">
        <table className="table">
          <thead>
            <tr className="text-center" style={{ maxWidth: "auto" }}>
              <th className="text-black">Name</th>
              <th className="text-black">Age</th>
              <th className="text-black">Category</th>
              <th className="text-black">Price (Rs)</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td>{allData.pname1}</td>
              <td>{allData.page1}</td>
              <td>{allData.pcategory}</td>
              <td>{allData.totalprice}</td>
            </tr>
            {allData.pname2 !== null ? (
              <tr>
                <td>{allData.pname2}</td>
                <td>{allData.page2}</td>
                <td>{allData.pcategory}</td>
                <td>{allData.totalprice}</td>
              </tr>
            ) : (
              ""
            )}
            {allData.pname3 !== null ? (
              <tr>
                <td>{allData.pname3}</td>
                <td>{allData.page3}</td>
                <td>{allData.pcategory}</td>
                <td>{allData.totalprice}</td>
              </tr>
            ) : (
              ""
            )}
            {allData.pname4 !== null ? (
              <tr>
                <td>{allData.pname4}</td>
                <td>{allData.page4}</td>
                <td>{allData.pcategory}</td>
                <td>{allData.totalprice}</td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        </table>
      </div>
      <div className="text-black d-flex  justify-content-end my-1">
        <span className="align-middle text-black" style={{ fontWeight: "500" }}>
          Total : {totalPrice} Rs
        </span>
      </div>
    </Container>
  );
};

export default Verifcation;
