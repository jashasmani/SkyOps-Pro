import React from "react";
import { Container } from "react-bootstrap";

const SearchFlights = () => {
  return (
    <div>
      <Container className="bg-white rounded-4 my-5">
        <div className="container">
          <div
            className="rounded p-4 p-md-5"
            style={{ backgroundColor: "white" }}
          >
            <h3 className="pb-4 text-center">Add Flight Data</h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SearchFlights;
