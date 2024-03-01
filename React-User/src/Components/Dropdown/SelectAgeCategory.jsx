import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Dropdown, Space, Typography } from "antd";

const SelectAgeCategory = () => {
  const [adultCount, setAdultCount] = useState(0);
  const [seniorCitizenCount, setSeniorCitizenCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  const handleIncrement = (setter) => {
    setter((prevCount) => prevCount + 1);
  };

  const handleDecrement = (setter) => {
    setter((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const items = [
    {
      key: "1",
      label: (
        <div
          className="d-flex flex-row justify-content-between"
          style={{ width: "17rem" }}
        >
          <span className="d-flex align-middel ">
            {"Adult(s)"}
            <span className="text-muted  fw-light">{"(>12 years)"}</span>
          </span>
          <div className="d-flex flex-row ">
            <RemoveCircleOutlineIcon
              onClick={(e) => {
                handleDecrement(setAdultCount);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="text-primary  btn-sm"
            />
            <h6 className="d-flex align-middel mx-2 text-black mb-0">
              {adultCount}
            </h6>
            <ControlPointIcon
              onClick={(e) => {
                handleIncrement(setAdultCount);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="text-primary btn-sm"
            />
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="d-flex flex-row justify-content-between"
          style={{ width: "17rem" }}
        >
          <span className="d-flex align-middel ">
            {"Senior Citizen(s)"}
            <span className="text-muted  fw-light">{"(>60 years)"}</span>
          </span>
          <div className="d-flex flex-row ">
            <RemoveCircleOutlineIcon
              onClick={(e) => {
                handleDecrement(setSeniorCitizenCount);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="text-primary  btn-sm"
            />
            <h6 className="d-flex align-middel mx-2 text-black mb-0">
              {seniorCitizenCount}
            </h6>
            <ControlPointIcon
              onClick={(e) => {
                handleIncrement(setSeniorCitizenCount);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="text-primary btn-sm"
            />
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          className="d-flex flex-row justify-content-between"
          style={{ width: "17rem" }}
        >
          <span className="d-flex align-middel ">
            {"Children"}
            <span className="text-muted  fw-light">{"(2 to 12 years)"}</span>
          </span>
          <div className="d-flex flex-row ">
            <RemoveCircleOutlineIcon
              onClick={(e) => {
                handleDecrement(setChildrenCount);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="text-primary  btn-sm"
            />
            <h6 className="d-flex align-middel mx-2 text-black mb-0">
              {childrenCount}
            </h6>
            <ControlPointIcon
              onClick={(e) => {
                handleIncrement(setChildrenCount);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="text-primary btn-sm"
            />
          </div>
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div
          className="d-flex flex-row justify-content-between"
          style={{ width: "17rem" }}
        >
          <span className="d-flex align-middel ">
            {"Infant(s)"}
            <span className="text-muted  fw-light">{"(3 days to 2 years)"}</span>
          </span>
          <div className="d-flex flex-row ">
            <RemoveCircleOutlineIcon
              onClick={(e) => {
                handleDecrement(setInfantCount);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="text-primary  btn-sm"
            />
            <h6 className="d-flex align-middel mx-2 text-black mb-0">
              {infantCount}
            </h6>
            <ControlPointIcon
              onClick={(e) => {
                handleIncrement(setInfantCount);
                e.stopPropagation();
                e.preventDefault();
              }}
              className="text-primary btn-sm"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
        overlayStyle={{ zIndex: 9999 }}
        trigger={["click"]}
      >
        <Typography.Link onClick={(e) => e.preventDefault()}>
          <Space>
            <h6 className=" mb-0 ">{"Passenger(s)"}</h6>
            <DownOutlined />
          </Space>
        </Typography.Link>
      </Dropdown>
    </>
  );
};
export default SelectAgeCategory;
