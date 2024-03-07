import React, { useState, useEffect } from "react";
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

export const UserContext = React.createContext();

const ShowStatus = ({ setOpen, flight }) => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [nameProps, setNameProps] = useState();
  const [ageProps, setAgeProps] = useState();
  const [categoryprops, setCategoryprops] = useState();
  const [emailProps, setEmailProps] = useState();
  const [contactProps, setContactProps] = useState();
  const [allData, setAllData] = useState([]);

  const next = () => {
    setCurrent(current + 1);

    const fetchData = async () => {
      try {
        const postData = {
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
          totalprice: flight.price,
        };

        axios
          .post("http://localhost:8080/ticket/passenger", postData)
          .then((response) => {
            console.log(response.data);
            setAllData(response.data)
          });
      } catch (error) {
        console.log("Invalid Data");
      }
    };
    if (current === 0) {
      fetchData();
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

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
          price={flight.price}
          setNameProps={setNameProps}
          setAgeProps={setAgeProps}
          setEmailProps={setEmailProps}
          setContactProps={setContactProps}
          setCategoryprops={setCategoryprops}
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
      content: <Verifcation allData={allData}/>,
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
      content: <Done  allData={allData} flight={flight} />,
    },
  ];

  const contentStyle = {
    maxHeight: "400px",
    textAlign: "center",
    color: token.colorTextTertiary,
    marginTop: 16,
  };

  // useEffect(() => {

  //   fetchData();
  // }, [next]);

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
