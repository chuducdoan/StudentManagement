import { Menu, MenuProps } from "antd";
import * as S from "./styles";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Logo from "assets/images/logo-white.png";

interface Props {
  collapsed?: boolean;
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <NavLink to={"/dashboard"}>Dashboard</NavLink>,
    "/dashboard",
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to={"/student"}>Student</NavLink>,
    "/student",
    <MailOutlined />
  ),

  getItem(
    <NavLink to={"/teacher"}>Teacher</NavLink>,
    "/teacher",
    <MailOutlined />
  ),
  // [
  //   getItem(
  //     <NavLink to={"/student/list"}>Student List</NavLink>,
  //     "/student/list"
  //   ),
  //   getItem(
  //     <NavLink to={"/student/detail"}>Student Detail</NavLink>,
  //     "/student/detail"
  //   ),
  // ]),
];

const Sidebar = ({ collapsed }: Props) => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <S.Container>
      <S.Logo>
        <img src={Logo} alt="logo.png" />
      </S.Logo>
      <Menu
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        selectedKeys={[pathName]}
      />
    </S.Container>
  );
};

export default Sidebar;
