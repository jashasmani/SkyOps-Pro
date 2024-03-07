import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { alldata,flightdata } from "../../Store/API/action";

export const MyContext = React.createContext("default");

const Done = ({ allData ,flight}) => {
  const navigate = useNavigate();

  const dispatch=useDispatch();
  const handleButtonClick = () => {
    navigate("/ticket");
    dispatch(alldata(allData,flight))
  };
  return (
    <div>
      <Result
        status="success"
        title="Flight tickets booked successfully! Get ready to soar!"
        subTitle=" Here is your ticket number: 2017182818828182881."
        extra={[
          <Button type="primary" key="console" onClick={() => navigate("/")}>
            Go Console
          </Button>,
          <Button onClick={handleButtonClick}>Ticket PDF</Button>,
        ]}
      />
    </div>
  );
};

export default Done;
