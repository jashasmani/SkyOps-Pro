import React, { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Typography } from "antd";

const items = [
  {
    key: "1",
    label: "First Economy",
  },
  {
    key: "2",
    label: "Business Class",
  },
  {
    key: "3",
    label: "Economy Class",
  },
];


const SelectCategory = ({ setItem,setItem2 }) => {
  const [defaultItem, setDefaultItem] = useState('2');
  
  const [defaultItemKey,setDefaultItemKey]=useState('2') ; // Set the default item key here
  useEffect(() => {
    const defaultMenuItem = items.find((item) => item.key === defaultItemKey);
    if (defaultMenuItem) {
      setDefaultItem(defaultMenuItem);
      setItem(defaultMenuItem.label);
      setItem2(defaultMenuItem.label);
    }
  }, [setItem,defaultItemKey]);

  const handleMenuClick = (e) => {
    const selectedItem = items.find((item) => item.key === e.key);
    if (selectedItem) {
      setItem(selectedItem.label);
      setItem2(selectedItem.label);
      setDefaultItemKey(selectedItem.key)
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick} selectedKeys={[defaultItemKey]}>
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
        onClick={(e) => e.preventDefault()}
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
