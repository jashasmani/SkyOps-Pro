import React, { useState } from "react";
import { Container } from "react-bootstrap";


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
              <th className="text-black p-2">Name</th>
              <th className="text-black p-2">Age</th>
              <th className="text-black p-2">Category</th>
              <th className="text-black p-2">Price (Rs)</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td className="p-2">{allData.pname1}</td>
              <td className="p-2">{allData.page1}</td>
              <td className="p-2">{allData.pcategory}</td>
              <td className="p-2">
                {allData.totalprice}
                {" Rs"}
              </td>
            </tr>
            {allData.pname2 !== null ? (
              <tr>
                <td className="p-2">{allData.pname2}</td>
                <td className="p-2">{allData.page2}</td>
                <td className="p-2">{allData.pcategory}</td>
                <td className="p-2">
                  {allData.totalprice}
                  {" Rs"}
                </td>
              </tr>
            ) : (
              ""
            )}
            {allData.pname3 !== null ? (
              <tr>
                <td className="p-2">{allData.pname3}</td>
                <td className="p-2">{allData.page3}</td>
                <td className="p-2">{allData.pcategory}</td>
                <td className="p-2">
                  {allData.totalprice}
                  {" Rs"}
                </td>
              </tr>
            ) : (
              ""
            )}
            {allData.pname4 !== null ? (
              <tr>
                <td className="p-2">{allData.pname4}</td>
                <td className="p-2">{allData.page4}</td>
                <td className="p-2">{allData.pcategory}</td>
                <td className="p-2">
                  {allData.totalprice}
                  {" Rs"}
                </td>
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
