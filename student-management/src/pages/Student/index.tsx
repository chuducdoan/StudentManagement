/* eslint-disable react-hooks/exhaustive-deps */
import { EllipsisOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import NoUser from "assets/images/no-user.jpg";
import { END_POINT } from "common/constant/endPoint";
import { Search, TableStudent } from "components";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import * as S from "./styles";

const Student = () => {
  const { t } = useTranslation();
  const history = useHistory();

  const content = (
    <S.Popover>
      <S.PopoverItem className="edit">{t("EDIT")}</S.PopoverItem>
      <S.PopoverItem className="delete">{t("DELETE")}</S.PopoverItem>
    </S.Popover>
  );

  const dataSource = [
    {
      key: "1",
      id: "123456789",
      name: "Mike",
      class: "VII A",
      fees: 50036,
      rank: 1,
      img: "https://akademi.dexignlab.com/xhtml/images/trans/2.jpg",
      date: "25-03-2023",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      key: "2",
      id: "123456789",
      name: "John",
      class: "VII B",
      fees: 50036,
      rank: 2,
      img: null,
      date: "25-03-2023",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      key: "3",
      id: "123456789",
      name: "Mike",
      class: "VII A",
      fees: 50036,
      rank: 1,
      img: "https://akademi.dexignlab.com/xhtml/images/trans/2.jpg",
      date: "25-03-2023",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      key: "4",
      id: "123456789",
      name: "John",
      class: "VII B",
      fees: 50036,
      rank: 2,
      img: null,
      date: "25-03-2023",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      key: "5",
      id: "123456789",
      name: "Mike",
      class: "VII A",
      fees: 50036,
      rank: 1,
      img: "https://akademi.dexignlab.com/xhtml/images/trans/2.jpg",
      date: "25-03-2023",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      key: "6",
      id: "123456789",
      name: "John",
      class: "VII B",
      fees: 50036,
      rank: 2,
      img: null,
      date: "25-03-2023",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      key: "7",
      id: "123456789",
      name: "Mike",
      class: "VII A",
      fees: 50036,
      rank: 1,
      img: "https://akademi.dexignlab.com/xhtml/images/trans/2.jpg",
      date: "25-03-2023",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
    {
      key: "8",
      id: "123456789",
      name: "John",
      class: "VII B",
      fees: 50036,
      rank: 2,
      img: null,
      date: "25-03-2023",
      parentName: "Mana William",
      city: "Jakarta",
      grade: "VII A",
    },
  ];

  const columns = [
    {
      title: t("NAME"),
      dataIndex: "name",
      key: "name",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      render: (text: any, values: any) => (
        <S.WrapNameTable>
          <S.ImgUser>
            <img src={values.img ?? NoUser} alt="noUSer.png" />
          </S.ImgUser>
          <S.NameUser>{text}</S.NameUser>
        </S.WrapNameTable>
      ),
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text: any) => (
        <S.Id onClick={() => handleDetailStudent(text)}>{text}</S.Id>
      ),
    },
    {
      title: t("DATE"),
      dataIndex: "date",
      key: "date",
      render: (text: any) => <S.TextGray>{text}</S.TextGray>,
    },
    {
      title: t("PARENT_NAME"),
      dataIndex: "parentName",
      key: "parentName",
    },
    {
      title: t("CITY"),
      dataIndex: "city",
      key: "city",
    },
    {
      title: t("CONTACT"),
      dataIndex: "contact",
      key: "contact",
      render: () => (
        <S.Contact>
          <i>
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.4401 11C18.2201 11 17.9901 10.93 17.7701 10.88C17.3246 10.7818 16.8868 10.6515 16.4601 10.49C15.9962 10.3212 15.4862 10.33 15.0284 10.5146C14.5706 10.6992 14.1972 11.0466 13.9801 11.49L13.7601 11.94C12.7861 11.3982 11.8911 10.7252 11.1001 9.94001C10.3149 9.14902 9.64192 8.254 9.1001 7.28L9.5201 7.00001C9.96347 6.78292 10.3109 6.40954 10.4955 5.9517C10.6801 5.49386 10.6889 4.98392 10.5201 4.52001C10.3613 4.09243 10.231 3.6548 10.1301 3.21001C10.0801 2.99001 10.0401 2.76001 10.0101 2.53001C9.88867 1.82563 9.51973 1.18775 8.96972 0.731245C8.41972 0.274742 7.7248 0.0296143 7.0101 0.0400054H4.0101C3.57913 0.0359589 3.15235 0.124819 2.75881 0.300536C2.36527 0.476253 2.01421 0.734701 1.72953 1.05829C1.44485 1.38187 1.23324 1.763 1.10909 2.17572C0.984942 2.58844 0.95118 3.02306 1.0101 3.45001C1.54284 7.63939 3.45613 11.5319 6.44775 14.5126C9.43938 17.4934 13.3388 19.3925 17.5301 19.91H17.9101C18.6475 19.9111 19.3595 19.6405 19.9101 19.15C20.2265 18.867 20.4792 18.5202 20.6516 18.1323C20.8239 17.7445 20.9121 17.3244 20.9101 16.9V13.9C20.8979 13.2054 20.6449 12.5366 20.1944 12.0077C19.744 11.4788 19.1239 11.1226 18.4401 11ZM18.9401 17C18.9399 17.142 18.9095 17.2823 18.8509 17.4116C18.7923 17.5409 18.7068 17.6563 18.6001 17.75C18.4884 17.8465 18.3577 17.9185 18.2165 17.9616C18.0753 18.0047 17.9267 18.0177 17.7801 18C14.035 17.5198 10.5563 15.8065 7.89282 13.1303C5.2293 10.4541 3.53251 6.96734 3.0701 3.22001C3.05419 3.07352 3.06813 2.92534 3.1111 2.7844C3.15407 2.64346 3.22517 2.51269 3.3201 2.40001C3.41381 2.29334 3.52916 2.20785 3.65848 2.14922C3.7878 2.0906 3.92812 2.06019 4.0701 2.06001H7.0701C7.30265 2.05483 7.52972 2.13088 7.71224 2.27508C7.89476 2.41927 8.02131 2.62258 8.0701 2.85001C8.1101 3.12334 8.1601 3.39334 8.2201 3.66001C8.33562 4.18715 8.48936 4.70518 8.6801 5.21001L7.2801 5.86001C7.1604 5.91493 7.05272 5.99295 6.96326 6.0896C6.87379 6.18625 6.8043 6.29962 6.75877 6.4232C6.71324 6.54678 6.69257 6.67814 6.69795 6.80973C6.70332 6.94132 6.73464 7.07055 6.7901 7.19C8.2293 10.2728 10.7073 12.7508 13.7901 14.19C14.0336 14.29 14.3066 14.29 14.5501 14.19C14.6748 14.1454 14.7894 14.0765 14.8873 13.9872C14.9851 13.8979 15.0643 13.7901 15.1201 13.67L15.7401 12.27C16.2571 12.4549 16.7847 12.6085 17.3201 12.73C17.5868 12.79 17.8568 12.84 18.1301 12.88C18.3575 12.9288 18.5608 13.0553 18.705 13.2379C18.8492 13.4204 18.9253 13.6475 18.9201 13.88L18.9401 17Z"
                fill="#4D44B5"
              ></path>
            </svg>
          </i>
          <i>
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3V13C0 13.7956 0.31607 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H19C19.7956 16 20.5587 15.6839 21.1213 15.1213C21.6839 14.5587 22 13.7956 22 13V3C22 2.20435 21.6839 1.44129 21.1213 0.87868C20.5587 0.316071 19.7956 0 19 0ZM20 12.75L15.1 8.35L20 4.92V12.75ZM2 4.92L6.9 8.35L2 12.75V4.92ZM8.58 9.53L10.43 10.82C10.5974 10.9361 10.7963 10.9984 11 10.9984C11.2037 10.9984 11.4026 10.9361 11.57 10.82L13.42 9.53L18.42 14H3.6L8.58 9.53ZM3 2H19C19.1857 2.00149 19.3674 2.05467 19.5245 2.15358C19.6817 2.25249 19.8083 2.39322 19.89 2.56L11 8.78L2.11 2.56C2.19171 2.39322 2.31826 2.25249 2.47545 2.15358C2.63265 2.05467 2.81428 2.00149 3 2Z"
                fill="#4D44B5"
              ></path>
            </svg>
          </i>
        </S.Contact>
      ),
    },
    {
      title: t("GRADE"),
      dataIndex: "grade",
      key: "grade",
    },
    {
      title: t("ACTION"),
      dataIndex: "action",
      key: "action",
      render: () => (
        <Popover
          placement="bottomRight"
          title={""}
          content={content}
          trigger="click"
        >
          <EllipsisOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
        </Popover>
      ),
      align: "right",
    },
  ];

  const handleDetailStudent = (studentId: any) => {
    history.push(END_POINT.STUDENT_DETAIL_SHORT + "/" + studentId);
  };

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
        titleAdd={t("BUTTON_NEW_STUDENT")}
        changePageAdd={handleChangePageAdd}
        handleOnSearch={handleOnSearch}
        handleOnChange={handleOnChange}
      />
      <S.WrapTable>
        <TableStudent dataSource={dataSource} columns={columns} />
      </S.WrapTable>
    </S.Container>
  );
};

export default Student;
