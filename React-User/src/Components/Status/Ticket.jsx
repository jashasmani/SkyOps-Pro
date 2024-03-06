import React, { useContext, useEffect, useState } from "react";
import SelectPerson from "../Dropdown/SelectPerson";
import SelectCategory from "../Dropdown/SelectCategory";
// import SelectAgeCategory from "../Dropdown/SelectAgeCategory";
import StatusContent1 from "./Status_Content_1";
import { UserContext } from "./ShowStatus";
import axios from "axios";

const Status1 = ({ price }) => {
  const [selectedValue, setSelectedValue] = useState(1);
  const [names, setNames] = useState([]);
  const [ages, setAges] = useState([]);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [category, setCategory] = useState("");
  const user = useContext(UserContext);

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const handleNameChange = (index, newName) => {
    setNames((prevNames) => {
      const newNames = [...prevNames];
      newNames[index] = newName;
      // console.log(names);
      return newNames;
    });
  };

  const handleAgeChange = (index, newAge) => {
    setAges((prevAges) => {
      const newAges = [...prevAges];
      newAges[index] = newAge;
      // console.log(ages);
      return newAges;
    });
  };

  const renderStatusContent = () => {
    const statusContent = [];
    for (let i = 0; i < selectedValue; i++) {
      statusContent.push(
        <StatusContent1
          keyProp={i}
          onNameChange={handleNameChange}
          onAgeChange={handleAgeChange}
        />
      );
    }
    return statusContent;
  };

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(user);
        if (user === 1) {
          console.log("12", category, ages);

          // const response = await axios.get(
          //   `http://localhost:8080/api/user/${names}/${ages}/${email}/${contact}/${category}`
          // );
          // console.log(response.data);
          // setNext1(false);
        }
      } catch (error) {
        console.log("Invalid Data");
      }
    };
    fetchData();
  }, [user]);

  return (
    <>
      <section>
        <h5 className="mb-0 flex-grow-1 d-flex justify-content-center font-weight-bold text-primary">
          Book Tickets
        </h5>
        <div className="d-flex flex-column">
          <div
            className="d-flex flex-row align-items-start justify-content-between mb-3 "
            style={{ width: "100%" }}
          >
            <SelectPerson onSelect={handleSelect} />
            <div className="mx-3">
              <h6 className="text-dark">{price}</h6>
            </div>
          </div>

          <div className="d-flex flex-column overflow-auto">
            <h5 className="d-flex text-black">Details</h5>
            <div className="d-flex flex-column mt-2">
              <div
                className="mb-2"
                style={{
                  height: selectedValue === 1 ? "5rem" : "10rem",
                  overflowY: "scroll",
                }}
              >
                {renderStatusContent()}
              </div>
              <div className="d-flex justify-content-between mt-0">
                <div className="input-group mb-3" style={{ width: "18rem" }}>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="em@il.."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="input-group-text" id="basic-addon2">
                    @google.com
                  </span>
                </div>
                <div className="input-group mb-3" style={{ width: "12rem" }}>
                  <span className="input-group-text" id="basic-addon2">
                    +91
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>
              </div>
              <div className="d-flex flex-row-reverse align-middle my-2 me-0 ">
                <SelectCategory setItem={setCategory} />

                {/* <SelectAgeCategory /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Status1;
