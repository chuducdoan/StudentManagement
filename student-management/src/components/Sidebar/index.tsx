import { MailOutlined, PieChartOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import Logo from "assets/images/logo-white.png";
import { NavLink, useLocation } from "react-router-dom";
import * as S from "./styles";
import { END_POINT } from "common/constant/endPoint";

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
    <NavLink to={END_POINT.DASHBOARD}>Dashboard</NavLink>,
    END_POINT.DASHBOARD,
    <PieChartOutlined />
  ),
  getItem(
    <NavLink to={END_POINT.STUDENT}>Student</NavLink>,
    END_POINT.STUDENT,
    <MailOutlined />
  ),

  getItem(
    <NavLink to={END_POINT.TEACHER}>Teacher</NavLink>,
    END_POINT.TEACHER,
    <MailOutlined />
  ),
];

const Sidebar = ({ collapsed }: Props) => {
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];

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
        selectedKeys={["/" + pathName]}
      />
    </S.Container>
  );
};

export default Sidebar;
