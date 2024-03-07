import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ShowStatus from "../Status/ShowStatus";

const DataModel = ({ flight, style }) => {
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
    width: "35rem",
    bgcolor: "white",
    borderRadius: "0.5rem",
    boxShadow: 24,  
    pt: 2,
    px: 4,
    pb: 3,
    zIndex: 1,
  };

  const mergedStyle = { ...defaultStyle, ...style };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} className="bg-success text-white">
        {flight.price}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={mergedStyle}>
          <ShowStatus setOpen={() => setOpen(false)} flight={flight}/>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default DataModel;
