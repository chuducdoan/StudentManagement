/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/exhaustive-deps */
import { END_POINT } from "common/constant/endPoint";
import { ButtonComponent, PaginationComponent, Search } from "components";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import {
  EllipsisOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Popover } from "antd";

const dataList = [
  {
    id: 1,
    name: "Dimitres Viga",
    subject: [
      { name: "Mathematics", status: "main" },
      { name: "Science", status: "sub" },
      { name: "Art", status: "sub" },
    ],
    img: "https://akademi.dexignlab.com/xhtml/images/contacts/1.jpg",
  },
  {
    id: 2,
    name: "Dimitres Viga",
    subject: [
      { name: "Mathematics", status: "main" },
      { name: "Science", status: "sub" },
      { name: "Art", status: "sub" },
    ],
    img: "https://akademi.dexignlab.com/xhtml/images/contacts/3.jpg",
  },
  {
    id: 3,
    name: "Dimitres Viga",
    subject: [
      { name: "Mathematics", status: "main" },
      { name: "Science", status: "sub" },
      { name: "Art", status: "sub" },
    ],
    img: "https://akademi.dexignlab.com/xhtml/images/contacts/4.jpg",
  },
  {
    id: 4,
    name: "Dimitres Viga",
    subject: [
      { name: "Mathematics", status: "main" },
      { name: "Science", status: "sub" },
      { name: "Art", status: "sub" },
    ],
    img: "https://akademi.dexignlab.com/xhtml/images/contacts/5.jpg",
  },
  {
    id: 5,
    name: "Dimitres Viga",
    subject: [
      { name: "Mathematics", status: "main" },
      { name: "Science", status: "sub" },
      { name: "Art", status: "sub" },
    ],
    img: "https://akademi.dexignlab.com/xhtml/images/contacts/6.jpg",
  },
  {
    id: 6,
    name: "Dimitres Viga",
    subject: [
      { name: "Mathematics", status: "main" },
      { name: "Science", status: "sub" },
      { name: "Art", status: "sub" },
    ],
    img: "https://akademi.dexignlab.com/xhtml/images/contacts/7.jpg",
  },
  {
    id: 7,
    name: "Dimitres Viga",
    subject: [
      { name: "Mathematics", status: "main" },
      { name: "Science", status: "sub" },
      { name: "Art", status: "sub" },
    ],
    img: "https://akademi.dexignlab.com/xhtml/images/contacts/8.jpg",
  },
  {
    id: 8,
    name: "Dimitres Viga",
    subject: [
      { name: "Mathematics", status: "main" },
      { name: "Science", status: "sub" },
      { name: "Art", status: "sub" },
    ],
    img: "https://akademi.dexignlab.com/xhtml/images/contacts/9.jpg",
  },
];

const Teacher = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const content = (
    <S.Popover>
      <S.PopoverItem className="edit">{t("EDIT")}</S.PopoverItem>
      <S.PopoverItem className="delete">{t("DELETE")}</S.PopoverItem>
    </S.Popover>
  );

  const handleChangePageAdd = () => {
    history.push(END_POINT.STUDENT_ADD);
  };

  const handleOnSearch = () => {
    console.log("Search");
  };

  const handleOnChange = (val: any) => {
    console.log(val.target.value);
  };

  return (
    <S.Container>
      <Search
        titleAdd={t("BUTTON_NEW_TEACHER")}
        changePageAdd={handleChangePageAdd}
        handleOnSearch={handleOnSearch}
        handleOnChange={handleOnChange}
      />
      <S.WrapCard>
        {dataList.map((item: any, index: number) => (
          <S.Card key={index}>
            <Popover
              placement="bottomRight"
              title={""}
              content={content}
              trigger="click"
            >
              <S.ActionCard>
                <ButtonComponent
                  height={40}
                  minWidth={40}
                  color="#4d44b5"
                  background="inherit"
                  isBorder={false}
                  colorhover="#fff"
                  bghover="inherit"
                >
                  <EllipsisOutlined className="icon-action" />
                </ButtonComponent>
              </S.ActionCard>
            </Popover>
            <S.ImageCard>
              <img src={item.img} alt="image.png" />
            </S.ImageCard>
            <S.TeacherName>{item.name}</S.TeacherName>
            <S.TextGray>Teacher</S.TextGray>
            <S.Subject>
              {item.subject &&
                item.subject.map((val: any, index: number) => (
                  <span
                    className={val.status === "main" ? "green" : "red"}
                    key={index}
                  >
                    {val.name}
                  </span>
                ))}
            </S.Subject>
            <S.WrapBtn>
              <ButtonComponent
                fullwidth
                color="#fff"
                colorhover="#fff"
                bghover="#3d3690"
                height={40}
                borderRadius="8px"
              >
                <UserOutlined />
                Profile
              </ButtonComponent>
              <ButtonComponent
                fullwidth
                color="#303972"
                colorhover="#303972"
                background="#ebebf9"
                bghover="#d7d7db"
                height={40}
                borderRadius="8px"
              >
                <MailOutlined />
                Chat
              </ButtonComponent>
            </S.WrapBtn>
          </S.Card>
        ))}
      </S.WrapCard>
      <S.Pagination>
        <PaginationComponent pagination={{ total: 30 }} />
      </S.Pagination>
    </S.Container>
  );
};

export default Teacher;
