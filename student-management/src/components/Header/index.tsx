import {
  LogoutOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MessageOutlined,
  ToolOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Dropdown, MenuProps } from "antd";
import { useAppDispatch, useAppSelector } from "app/hooks";
import UK from "assets/images/icon/uk.png";
import VN from "assets/images/icon/vietnam.png";
import USer from "assets/images/user.jpg";
import ButtonComponent from "components/ButtonComponent";
import { selectTheme, setTheme } from "features/theme/themeSlice";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

const Header = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();
  const { t, i18n } = useTranslation("translation");
  const items1: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <S.ItemLanguage
          onClick={() => handleChangeLanguage("eng")}
          style={{ marginTop: "8px" }}
        >
          <img src={UK} alt="uk.png" className="language" />
          English
        </S.ItemLanguage>
      ),
    },
    {
      key: "2",
      label: (
        <S.ItemLanguage
          onClick={() => handleChangeLanguage("vie")}
          style={{ marginBottom: "8px" }}
        >
          <img src={VN} alt="vn.png" className="language" />
          Vietnamese
        </S.ItemLanguage>
      ),
    },
  ];

  const items2: MenuProps["items"] = [
    {
      key: "11",
      label: (
        <S.InforUser>
          <img src={USer} alt="user.png" />
          <S.Infor>
            <S.Username>DoanCD</S.Username>
            <S.Role>Admin</S.Role>
          </S.Infor>
        </S.InforUser>
      ),
    },
    {
      key: "12",
      label: (
        <S.ItemMenuUser>
          <UserOutlined className="icon" />
          Profile
        </S.ItemMenuUser>
      ),
    },
    {
      key: "13",
      label: (
        <S.ItemMenuUser>
          <MessageOutlined className="icon" />
          Message
        </S.ItemMenuUser>
      ),
    },
    {
      key: "14",
      label: (
        <S.ItemMenuUser>
          <MailOutlined className="icon" />
          Notification
        </S.ItemMenuUser>
      ),
    },
    {
      key: "15",
      label: (
        <S.ItemMenuUser>
          <ToolOutlined className="icon" />
          Settings
        </S.ItemMenuUser>
      ),
    },
    {
      key: "16",
      label: (
        <S.ButtonLogout>
          <ButtonComponent
            fullwidth
            color="#4D44B5"
            background="rgba(77, 68, 181, 0.1)"
            bordercolor="rgba(77, 68, 181, 0.1)"
            height={40}
            colorhover="#fff"
          >
            <LogoutOutlined />
            Logout
          </ButtonComponent>
        </S.ButtonLogout>
      ),
    },
  ];

  const handleChangeTheme = () => {
    dispatch(
      setTheme({
        selectTheme: theme === "light" ? "dark" : "light",
      })
    );
  };

  const handleChangeLanguage = (language: string) => {
    i18next.changeLanguage(language);
  };

  return (
    <S.Container>
      <S.Left>
        <MenuFoldOutlined className="icon-bar" />
        <S.TitlePage>{t("ADD_NEW_STUDENT")}</S.TitlePage>
      </S.Left>
      <S.Right>
        <S.Box onClick={handleChangeTheme}>
          {theme === "light" ? (
            <i id="icon-light-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-sun"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            </i>
          ) : (
            <i id="icon-dark-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-moon"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </i>
          )}
        </S.Box>
        <Dropdown
          menu={{ items: items1 }}
          placement="bottomRight"
          arrow
          trigger={["click"]}
        >
          <S.Box onClick={() => handleChangeLanguage}>
            {i18n.language === "vie" ? (
              <img src={VN} alt="vn.png" className="language" />
            ) : (
              <img src={UK} alt="uk.png" className="language" />
            )}
          </S.Box>
        </Dropdown>
        <Dropdown
          menu={{ items: items2 }}
          placement="bottomRight"
          arrow
          trigger={["click"]}
          className="user-dropdown"
        >
          <S.Box>
            <img src={USer} alt="user.png" />
          </S.Box>
        </Dropdown>
      </S.Right>
    </S.Container>
  );
};

export default Header;
