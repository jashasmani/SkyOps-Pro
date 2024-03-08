import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
import { useDispatch } from "react-redux";
import { Alldata } from "../../Store/API/action";
import {connect} from 'react-redux';

export const MyContext = React.createContext("default");

const mapStateToProps = (state) => ({
  state: state.alldata,  // Assuming 'user' is a top-level property in your state
});

const mapDispatchToProps = (dispatch) => ({
  Alldata: (personinfo) => dispatch(Alldata(personinfo)),
});


const Done = ({ state,Alldata}) => {
  const navigate = useNavigate();

  // const dispatch=useDispatch();
  const handleButtonClick = () => {
    // navigate("/ticket");
    console.log(state)
    Alldata(state)
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

export default connect(mapStateToProps,mapDispatchToProps)(Done);
