import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EditFlightData from "../EditFlightData/EditFlightData";

const DataModel = ({ flight }) => {
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
    zIndex: 1,
  };


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
      >
        <Box sx={defaultStyle}>
          <EditFlightData flight={flight} close={setOpen}/>
          
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default DataModel;
