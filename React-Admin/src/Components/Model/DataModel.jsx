import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EditFlightData from "../EditFlightData/EditFlightData";
import './C1.css'

const DataModel = ({ flight,style }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const defaultStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40rem",
    bgcolor: "white",
    borderRadius: "0.5rem",
    boxShadow: 24,
    zIndex: 999999,
  };

  const mergedStyle = { ...defaultStyle, ...style };

  return (
    <React.Fragment>
      <button type="button" onClick={handleOpen} className="btn btn-secondary">
        Update
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        className="custom-modal" 
      >
        <Box sx={mergedStyle}>
          <EditFlightData flight={flight} close={setOpen}/>
          
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default DataModel;
