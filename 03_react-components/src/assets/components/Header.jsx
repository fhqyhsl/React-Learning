// Header.js
import "./navbar/Header.css";
import { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

const Header = () => {
  const [current, setCurrent] = useState("home");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="custom-header">
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        theme="dark"
        className="custom-menu"
      />
    </div>
  );
};

const items = [
  {
    label: "首页",
    key: "home",
    icon: <MailOutlined className="menu-icon" />,
  },
  {
    label: "邮件",
    key: "email",
    icon: <AppstoreOutlined className="menu-icon" />,
  },
  {
    label: "设置",
    key: "setting",
    icon: <SettingOutlined className="menu-icon" />,
    children: [
      {
        label: "个人设置",
        key: "personal",
      },
      {
        label: "系统设置",
        key: "system",
      },
    ],
  },
];

export default Header;
