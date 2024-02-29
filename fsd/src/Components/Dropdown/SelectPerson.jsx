import React, { useState } from "react";
import { MenuItem, Menu, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";


const SelectPerson = ({ onSelect}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedValue, setSelectedValue] = useState(1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (value) => {
    setSelectedValue(value);
    onSelect(value);
    handleClose();
  };

  const Person = [1, 2, 3, 4];

  return (
    <>
      <Button onClick={handleClick} sx={{ textTransform: "none" }}>
        <PersonIcon /> <h6 className="mx-1 mb-0">{selectedValue}</h6>
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {Person.map((value) => (
          <MenuItem key={value} onClick={() => handleMenuItemClick(value)}>
            {value}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default SelectPerson;
