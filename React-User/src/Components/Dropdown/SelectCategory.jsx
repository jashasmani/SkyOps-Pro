import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";

const items = [
  {
    key: "1",
    label: "Business Class",
  },
  {
    key: "2",
    label: "Premium Economy",
  },
  {
    key: "3",
    label: "Economy Class",
  },
];

const SelectCategory = ({setItem}) => {

  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem) {
      setItem(selectedItem.label)
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} overlayStyle={{ zIndex: 9999 }}>
      <Typography.Link
        className="d-flex align-middle ms-3"
        style={{ width: "6rem" }}
      >
        <Space>
          <h6 className="mb-0">Category</h6>
          <DownOutlined />
        </Space>
      </Typography.Link>
    </Dropdown>
  );
};

export default SelectCategory;
