import React, { useState, useEffect, useContext, useRef } from "react";
import { message, Steps, theme } from "antd";
import Ticket from "./Ticket";
import Verifcation from "./Verifcation";
import Payment from "./Payment";
import Done from "./Done";
import "./Status.css";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import {
  SmileOutlined,
  SolutionOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import { UserContext } from "../Home/Home";
import { Person } from "@mui/icons-material";

const ShowStatus = ({ setOpen, flight }) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [nameProps, setNameProps] = useState();
  const [ageProps, setAgeProps] = useState();
  const [categoryprops, setCategoryprops] = useState();
  const [emailProps, setEmailProps] = useState();
  const [contactProps, setContactProps] = useState();
  const [priceProps, setPriceProps] = useState();
  const [allData, setAllData] = useState([]);
  const [count, setCount] = useState(0);
  const [businessClassSeat, setBusinessClassSeat] = useState(
    flight.business_class_seat
  );
  const [firstClassSeat, setFirstClassSeat] = useState(flight.first_class_seat);
  const [economyClassSeat, setEconomyClassSeat] = useState(
    flight.economy_class_seat
  );
  const [id] = useState(localStorage.getItem("id"));

  const fetchData = async () => {
    console.log(id);
    try {
      const postData = {
        user_fk: id,
        pname1: nameProps[0],
        pname2: nameProps[1],
        pname3: nameProps[2],
        pname4: nameProps[3],
        page1: ageProps[0],
        page2: ageProps[1],
        page3: ageProps[2],
        page4: ageProps[3],
        pemail: emailProps,
        pcontact: contactProps,
        pcategory: categoryprops,
        totalprice: priceProps,
      };

      axios
        .post(`http://localhost:8080/ticket/passenger/${id}/${flight.id_flights}`, postData)
        .then((response) => {
          console.log(response.data);
          setAllData(response.data);
        });
      setCount(1);
    } catch (error) {
      console.log("Invalid Data");
    }
  };

  const next = () => {
    setCurrent(current + 1);

    if (current === 0 && count === 0) {
      fetchData();
      decrementSeats(categoryprops, nameProps);
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const decrementSeats = (seatType, nameProps) => {
    console.log("seat", seatType, "props", nameProps);
    if (
      seatType === "First Economy" ||
      seatType === "Business Class" ||
      seatType === "Economy Class"
    ) {
      let seats = 0;
      if (nameProps[3]) {
        seats = 4;
      } else if (nameProps[2]) {
        seats = 3;
      } else if (nameProps[1]) {
        seats = 2;
      } else if (nameProps[0]) {
        seats = 1;
      }
      console.log(seats);
      console.log(nameProps[0]);
      switch (seatType) {
        case "First Economy":
          console.log(firstClassSeat);
          setFirstClassSeat((prevState) => prevState - seats);
          break;
        case "Business Class":
          setBusinessClassSeat((prevState) => prevState - seats);
          break;
        case "Economy Class":
          setEconomyClassSeat((prevState) => prevState - seats);
          break;
        default:
          break;
      }
    }
  };
  useEffect(() => {
    const handleUpadate = async (e) => {
      try {
        const response = await axios.put(
          `http://localhost:8080/main/upadteseatflights/${flight.id_flights}`,
          {
            business_class_seat: businessClassSeat,
            economy_class_seat: economyClassSeat,
            first_class_seat: firstClassSeat,
          }
        );
        console.log(response.data);
        console.info("Sucees");
      } catch (e) {
        console.log(e);
      }
    };
    handleUpadate();
  }, [businessClassSeat, economyClassSeat, firstClassSeat, flight.id_flights]);

  const steps = [
    {
      title: (
        <span style={{ display: "flex", alignItems: "center" }}>
          Ticket
          <hr
            style={{
              marginLeft: "5px",
              width: "5rem",
              borderWidth: "2px",
            }}
          />
        </span>
      ),
      status: "finish",
      icon: <AirlineSeatReclineNormalIcon />,
      content: (
        <Ticket
          flight={flight}
          setNameProps={setNameProps}
          setAgeProps={setAgeProps}
          setEmailProps={setEmailProps}
          setContactProps={setContactProps}
          setCategoryprops={setCategoryprops}
          setPriceProps={setPriceProps}
        />
      ),
    },
    {
      title: (
        <span style={{ display: "flex", alignItems: "center" }}>
          Verification
          <hr
            style={{
              marginLeft: "5px",
              width: "5rem",
              borderWidth: "2px",
            }}
          />
        </span>
      ),
      status: current <= 0 ? "wait" : "finish",
      icon: <SolutionOutlined />,
      content: <Verifcation allData={allData} />,
    },
    {
      title: (
        <span style={{ display: "flex", alignItems: "center" }}>
          Pay
          <hr
            style={{
              marginLeft: "5px",
              width: "5rem",
              borderWidth: "2px",
            }}
          />
        </span>
      ),
      icon: current <= 1 ? <LoadingOutlined /> : "",
      status: current <= 1 ? "wait" : "finish",
      //   status: "process",
      content: <Payment />,
    },
    {
      title: "Done",
      status: current <= 2 ? "wait" : "finish",
      icon: <SmileOutlined />,
      content: <Done allData={allData} flight={flight} />,
    },
  ];

  const contentStyle = {
    maxHeight: "400px",
    textAlign: "center",
    color: token.colorTextTertiary,
    marginTop: 16,
  };

  return (
    <>
      <Steps current={current} items={steps} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div className="d-flex justify-content-between">
        <div className="mt-2">
          {current < steps.length - 1 && (
            <button
              type="button"
              className="btn btn-primary me-2"
              onClick={() => {
                next();
              }}
            >
              Next
            </button>
          )}
          {current === steps.length - 1 && (
            <button
              type="button"
              className="btn btn-success me-2"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </button>
          )}
          {current > 0 && (
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={() => prev()}
            >
              Previous
            </button>
          )}
        </div>
        <div className="mt-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={setOpen}
            //   disabled
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ShowStatus;
