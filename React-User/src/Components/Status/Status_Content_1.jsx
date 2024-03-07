import React, { useState } from "react";

const Content = ({ keyProp, onNameChange, onAgeChange }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    onNameChange(keyProp, newName);
  };

  const handleAgeChange = (e) => {
    const newAge = e.target.value;
    setAge(newAge);
    onAgeChange(keyProp, newAge);
  };

 

  return (
    <>
      <div
        key={keyProp}
        className="d-flex flex-column "
        style={{ height: "5rem" }}
      >
        <h6 className="d-flex ">Person {keyProp + 1}</h6>
        <div key={keyProp} className="d-flex mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            style={{ width: "14rem" }}
            value={name}
            onChange={handleNameChange}
            required
          />
          <input
            type="number"
            className="form-control ms-4"
            placeholder="Age"
            style={{ width: "10rem" }}
            value={age}
            onChange={handleAgeChange}
            required
          />
        </div>
      </div>
    </>
  );
};

export default Content;
