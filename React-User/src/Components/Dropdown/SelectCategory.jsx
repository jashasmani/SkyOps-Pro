import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Typography } from "antd";
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
const SelectCategory = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ["3"],
    }}
    overlayStyle={{ zIndex: 9999 }}
  >
    <Typography.Link className="d-flex align-middle ms-3" style={{ width: "6rem" }}>
      <Space>
        <h6 className=" mb-0 ">Category</h6>
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);
export default SelectCategory;
