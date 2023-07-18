/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Row } from "antd";
import NoUser from "assets/images/no-user.jpg";
import ClassImg from "assets/images/profile.svg";
import { AreaChart, ColumnChart, SelectComponent, TableBase } from "components";
import { useTranslation } from "react-i18next";
import { MoneyConvert } from "utils";
import * as S from "./styles";

const Dashboard = () => {
  const { t } = useTranslation();

  const dataSource = [
    {
      key: "1",
      id: "123456789",
      name: "Mike",
      class: "VII A",
      fees: 50036,
      rank: 1,
      img: "https://akademi.dexignlab.com/xhtml/images/trans/2.jpg",
    },
    {
      key: "2",
      id: "123456789",
      name: "John",
      class: "VII B",
      fees: 50036,
      rank: 2,
      img: null,
    },
  ];

  const dataSource2 = [
    {
      key: "1",
      expensive: "#1234565",
      amount: 70000,
      status: "completed",
      time: "18-07-2023",
    },
    {
      key: "2",
      expensive: "#1234565",
      amount: 70000,
      status: "canceled",
      time: "18-07-2023",
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
      render: (text: any) => <S.Id>{text}</S.Id>,
    },
    {
      title: t("CLASS"),
      dataIndex: "class",
      key: "class",
      render: (text: any) => (
        <S.WrapClassTable>
          <S.ImgClass>
            <img src={ClassImg} alt="class.png" />
          </S.ImgClass>
          <div>
            <S.TextGray>Class</S.TextGray>
            <S.NameClass>{text}</S.NameClass>
          </div>
        </S.WrapClassTable>
      ),
    },
    {
      title: t("FEES"),
      dataIndex: "fees",
      key: "fees",
      render: (text: any) => <S.NameUser>$ {MoneyConvert(text)}</S.NameUser>,
    },
    {
      title: t("RANK"),
      dataIndex: "rank",
      key: "rank",
      render: (text: any) => <S.TextGray>{text}</S.TextGray>,
    },
  ];

  const columns2 = [
    {
      title: t("EXPENSIVE"),
      dataIndex: "expensive",
      key: "nexpensiveame",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      render: (text: any, value: any) => (
        <S.WrapClassTable>
          <S.ImgClass className="expensive">
            <svg
              width="26"
              height="16"
              viewBox="0 0 26 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.0004 1.33333C25.013 1.24043 25.013 1.14624 25.0004 1.05333C24.9888 0.975052 24.9664 0.898765 24.9337 0.826666C24.8985 0.761503 24.8584 0.699103 24.8137 0.64C24.763 0.555671 24.7001 0.479292 24.6271 0.413333L24.4671 0.32C24.3901 0.262609 24.3046 0.21762 24.2137 0.186666H23.9471C23.8658 0.107993 23.7709 0.0447434 23.6671 0H17.0004C16.6468 0 16.3076 0.140476 16.0576 0.390525C15.8075 0.640573 15.6671 0.979711 15.6671 1.33333C15.6671 1.68696 15.8075 2.02609 16.0576 2.27614C16.3076 2.52619 16.6468 2.66667 17.0004 2.66667H20.7737L15.4404 8.94667L9.68039 5.52C9.40757 5.35773 9.0858 5.29813 8.77296 5.3519C8.46011 5.40567 8.17671 5.56929 7.97373 5.81333L1.30706 13.8133C1.19479 13.9481 1.1102 14.1036 1.05815 14.2711C1.00609 14.4386 0.987577 14.6147 1.00368 14.7893C1.01978 14.9639 1.07017 15.1337 1.15198 15.2888C1.23378 15.4439 1.34538 15.5814 1.48039 15.6933C1.72028 15.8921 2.02219 16.0006 2.33373 16C2.52961 16.0003 2.72315 15.9575 2.9006 15.8745C3.07804 15.7915 3.23503 15.6705 3.36039 15.52L9.29373 8.4L14.9871 11.8133C15.2571 11.9735 15.575 12.0332 15.8848 11.982C16.1945 11.9308 16.4763 11.7719 16.6804 11.5333L22.3337 4.93333V8C22.3337 8.35362 22.4742 8.69276 22.7242 8.94281C22.9743 9.19286 23.3134 9.33333 23.6671 9.33333C24.0207 9.33333 24.3598 9.19286 24.6099 8.94281C24.8599 8.69276 25.0004 8.35362 25.0004 8V1.33333Z"
                fill="#FCFCFC"
              ></path>
            </svg>
          </S.ImgClass>
          <div>
            <S.NameUser className="fs16">{text}</S.NameUser>
            <S.TextGray>{value.time ?? ""}</S.TextGray>
          </div>
        </S.WrapClassTable>
      ),
    },
    {
      title: t("AMOUNT"),
      dataIndex: "amount",
      key: "amount",
      render: (text: any) => <S.NameUser>$ {MoneyConvert(text)}</S.NameUser>,
    },
    {
      title: t("STATUS"),
      dataIndex: "status",
      key: "status",
      render: (text: any) => (
        <S.Status className={text === "completed" ? "completed" : "canceled"}>
          {text === "completed" ? t("STATUS_COMPLETED") : t("STATUS_CANCELED")}
        </S.Status>
      ),
    },
  ];

  return (
    <S.Container>
      <S.WrapCard>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 30 }}>
          <Col className="gutter-row" span={8}>
            <S.Card>
              <S.InnerCard>
                <S.Round className="violet">
                  <svg
                    width="30"
                    height="38"
                    viewBox="0 0 30 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.9288 37.75H3.75C1.67875 37.75 0 36.0713 0 34V23.5863C0 21.7738 1.29625 20.2213 3.07875 19.8975C5.72125 19.4163 10.2775 18.5875 12.855 18.12C14.2737 17.8612 15.7263 17.8612 17.145 18.12C19.7225 18.5875 24.2788 19.4163 26.9213 19.8975C28.7038 20.2213 30 21.7738 30 23.5863C30 26.3125 30 31.0825 30 34C30 36.0713 28.3212 37.75 26.25 37.75H12.9288ZM24.785 22.05L24.79 22.0563C25.0088 22.3838 25.06 22.795 24.9287 23.1662L24.0462 25.6662C23.9312 25.9925 23.685 26.2575 23.3675 26.3963L21.7075 27.12L22.3675 28.4412C22.5525 28.81 22.5425 29.2462 22.3425 29.6075L19.2075 35.25H26.25C26.94 35.25 27.5 34.69 27.5 34C27.5 31.0825 27.5 26.3125 27.5 23.5863C27.5 22.9825 27.0675 22.465 26.4738 22.3562L24.785 22.05ZM21.3663 21.4275L16.6975 20.5788C15.575 20.375 14.425 20.375 13.3025 20.5788L8.63375 21.4275L7.63625 22.9238L8.13 24.3213L10.5 25.3537C10.8138 25.4912 11.0575 25.7512 11.175 26.0737C11.2925 26.3962 11.2712 26.7525 11.1175 27.0588L10.1625 28.9688L13.6525 35.25H16.3475L19.8375 28.9688L18.8825 27.0588C18.7288 26.7525 18.7075 26.3962 18.825 26.0737C18.9425 25.7512 19.1862 25.4912 19.5 25.3537L21.87 24.3213L22.3638 22.9238L21.3663 21.4275ZM5.215 22.05L3.52625 22.3562C2.9325 22.465 2.5 22.9825 2.5 23.5863V34C2.5 34.69 3.06 35.25 3.75 35.25H10.7925L7.6575 29.6075C7.4575 29.2462 7.4475 28.81 7.6325 28.4412L8.2925 27.12L6.6325 26.3963C6.315 26.2575 6.06875 25.9925 5.95375 25.6662L5.07125 23.1662C4.94 22.795 4.99125 22.3838 5.21 22.0563L5.215 22.05ZM23.75 29V31.5C23.75 32.19 24.31 32.75 25 32.75C25.69 32.75 26.25 32.19 26.25 31.5V29C26.25 28.31 25.69 27.75 25 27.75C24.31 27.75 23.75 28.31 23.75 29ZM15 0.25C10.5163 0.25 6.875 3.89125 6.875 8.375C6.875 12.8587 10.5163 16.5 15 16.5C19.4837 16.5 23.125 12.8587 23.125 8.375C23.125 3.89125 19.4837 0.25 15 0.25ZM15 2.75C18.105 2.75 20.625 5.27 20.625 8.375C20.625 11.48 18.105 14 15 14C11.895 14 9.375 11.48 9.375 8.375C9.375 5.27 11.895 2.75 15 2.75Z"
                      fill="white"
                    ></path>
                  </svg>
                </S.Round>
                <S.TextCard>
                  <S.LabelCard>{t("DASHBOARD_TOTAL_STUDENT")}</S.LabelCard>
                  <S.MainCard>932</S.MainCard>
                  <S.MoreInforCard>
                    +10% {t("DASHBOARD_THAN_LAST_MONTH")}
                  </S.MoreInforCard>
                </S.TextCard>
              </S.InnerCard>
            </S.Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <S.Card>
              <S.InnerCard>
                <S.Round className="orange">
                  <svg
                    width="30"
                    height="38"
                    viewBox="0 0 30 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 34C0 36.0713 1.67875 37.75 3.75 37.75H26.25C28.3212 37.75 30 36.0713 30 34C30 31.0825 30 26.3125 30 23.5863C30 21.7738 28.7038 20.2213 26.9213 19.8975C24.2788 19.4163 19.7225 18.5875 17.145 18.12C15.7263 17.8612 14.2737 17.8612 12.855 18.12C10.2775 18.5875 5.72125 19.4163 3.07875 19.8975C1.29625 20.2213 0 21.7738 0 23.5863V34ZM17.885 20.795L19.7612 27.9288C20.0075 28.865 19.6775 29.8588 18.92 30.4638C18.28 30.9738 17.2713 31.7788 16.5713 32.3388C15.6525 33.0713 14.3475 33.0713 13.4287 32.3388C12.7287 31.7788 11.72 30.9738 11.08 30.4638C10.3225 29.8588 9.9925 28.865 10.2388 27.9288L12.115 20.795L3.52625 22.3562C2.9325 22.465 2.5 22.9825 2.5 23.5863V34C2.5 34.69 3.06 35.25 3.75 35.25C8.98 35.25 21.02 35.25 26.25 35.25C26.94 35.25 27.5 34.69 27.5 34C27.5 31.0825 27.5 26.3125 27.5 23.5863C27.5 22.9825 27.0675 22.465 26.4738 22.3562L17.885 20.795ZM15.2038 20.4288C15.0675 20.425 14.9325 20.425 14.7962 20.4288L12.6663 28.5312L14.9887 30.3837C14.995 30.39 15.005 30.39 15.0113 30.3837L17.3337 28.5312L15.2038 20.4288ZM15 0.25C10.5163 0.25 6.875 3.89125 6.875 8.375C6.875 12.8587 10.5163 16.5 15 16.5C19.4837 16.5 23.125 12.8587 23.125 8.375C23.125 3.89125 19.4837 0.25 15 0.25ZM15 2.75C18.105 2.75 20.625 5.27 20.625 8.375C20.625 11.48 18.105 14 15 14C11.895 14 9.375 11.48 9.375 8.375C9.375 5.27 11.895 2.75 15 2.75Z"
                      fill="white"
                    ></path>
                  </svg>
                </S.Round>
                <S.TextCard>
                  <S.LabelCard>{t("DASHBOARD_TOTAL_TEACHER")}</S.LabelCard>
                  <S.MainCard>745</S.MainCard>
                  <S.MoreInforCard>
                    +10% {t("DASHBOARD_THAN_LAST_MONTH")}
                  </S.MoreInforCard>
                </S.TextCard>
              </S.InnerCard>
            </S.Card>
          </Col>
          <Col className="gutter-row" span={8}>
            <S.Card>
              <S.InnerCard>
                <S.Round className="yellow">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.2365 21.8435C33.9956 21.0315 31.5096 21.212 29.4077 22.3374L25.9812 23.8788C25.7043 22.3007 24.4923 21.1148 22.9963 21.0692C22.9875 21.069 17.8587 21.0111 17.8587 21.0111C13.7536 19.885 11.0862 21.332 9.56458 22.7579C9.25338 23.0496 8.9797 23.3498 8.73885 23.646C8.32825 23.2038 7.60347 23.0856 7.07492 23.3762L2.41928 25.9354C1.81543 26.2674 1.5527 26.9956 1.80594 27.6358L6.35586 39.1377C6.65483 39.8934 7.57364 40.2274 8.29056 39.8333L12.9462 37.2742C13.3826 37.0343 13.6395 36.5873 13.6536 36.1162H20.6022C21.7356 36.1162 22.8546 35.8185 23.8382 35.2553C23.8382 35.2553 36.9065 27.7589 36.9803 27.6919C38.8104 26.027 38.8668 22.7966 36.2365 21.8435C37.2858 22.2237 33.9956 21.0315 36.2365 21.8435ZM8.33218 36.688L4.7968 27.7508L7.03304 26.5216L10.5684 35.4588L8.33218 36.688ZM35.2316 25.5773L22.4747 32.8826C21.9054 33.2087 21.2578 33.381 20.6019 33.381H12.6919L10.036 26.667C10.2636 26.2034 10.7117 25.4342 11.4394 24.7522C12.93 23.3555 14.8946 22.998 17.2791 23.6898C17.3983 23.7244 17.5218 23.7427 17.6459 23.7441L22.918 23.8034C23.0526 23.815 23.3011 24.1143 23.3011 24.568C23.3011 25.035 23.0445 25.3327 22.9103 25.3327H17.7302V28.0679H22.9103C23.552 28.0679 24.1492 27.8509 24.6463 27.4791L30.5779 24.8109C30.6094 24.7968 30.6401 24.7815 30.6704 24.765C32.0933 23.9914 33.7815 23.8636 35.3018 24.4145C35.9035 24.6326 35.4688 25.3364 35.2316 25.5773ZM27 19.7079C21.5669 19.7079 17.1467 15.2874 17.1467 9.85393C17.1467 4.42051 21.5668 0 27 0C32.4331 0 36.8532 4.42051 36.8532 9.85393C36.8532 15.2874 32.433 19.7079 27 19.7079ZM27 2.73521C23.0775 2.73521 19.8864 5.92863 19.8864 9.85393C19.8864 13.7792 23.0776 16.9727 27 16.9727C30.9225 16.9727 34.1136 13.7791 34.1136 9.85393C34.1136 5.92872 30.9224 2.73521 27 2.73521Z"
                      fill="white"
                    ></path>
                    <path
                      d="M27.6362 8.73923C26.5469 8.29188 26.4627 8.09966 26.4627 7.87684C26.4627 7.73453 26.5333 7.40368 27.1876 7.40368C27.7862 7.40368 28.532 7.73966 29.058 8.0859L29.7897 6.16795C29.2673 5.83539 28.6324 5.54966 28.0388 5.45829V4.21103H26.0879V5.57966C24.9289 5.94496 24.2147 6.87146 24.2147 8.02479C24.2147 9.55231 25.4368 10.2343 26.6304 10.6991C27.5841 11.0828 27.664 11.3765 27.664 11.6217C27.664 11.9989 27.3164 12.2426 26.7785 12.2426C26.077 12.2426 25.2614 11.838 24.6903 11.3952L23.9863 13.3439C24.5686 13.7954 25.2426 14.0933 26.0009 14.2045V15.4969H27.964V14.0901C29.1592 13.7095 29.9242 12.7193 29.9242 11.5354C29.9242 9.87812 28.7015 9.1706 27.6362 8.73923Z"
                      fill="white"
                    ></path>
                  </svg>
                </S.Round>
                <S.TextCard>
                  <S.LabelCard>{t("DASHBOARD_SCHOOL_BALANCE")}</S.LabelCard>
                  <S.MainCard>745</S.MainCard>
                  <S.MoreInforCard>$123,456</S.MoreInforCard>
                </S.TextCard>
              </S.InnerCard>
            </S.Card>
          </Col>
        </Row>
      </S.WrapCard>
      <S.WrapChart>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 30 }}>
          <Col className="gutter-row" span={12}>
            <S.Card className="chart">
              <S.TopChart>
                <S.LabelChart>{t("DASHBOARD_BALANCE_ANALYTICS")}</S.LabelChart>
                <SelectComponent
                  defaultValue={"Week"}
                  options={[
                    { label: t("WEEK"), value: "Week" },
                    { label: t("MONTH"), value: "Month" },
                    { label: t("YEAR"), value: "Year" },
                  ]}
                />
              </S.TopChart>
              <S.ContentChart>
                <AreaChart />
              </S.ContentChart>
            </S.Card>
          </Col>
          <Col className="gutter-row" span={12}>
            <S.Card className="chart">
              <S.TopChart>
                <S.LabelChart>{t("DASHBOARD_FINANCE_MAP")}</S.LabelChart>
                <SelectComponent
                  defaultValue={"Week"}
                  options={[
                    { label: t("WEEK"), value: "Week" },
                    { label: t("MONTH"), value: "Month" },
                    { label: t("YEAR"), value: "Year" },
                  ]}
                />
              </S.TopChart>
              <S.ContentChart>
                <ColumnChart />
              </S.ContentChart>
            </S.Card>
          </Col>
        </Row>
      </S.WrapChart>
      <S.WrapTable>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 30 }}>
          <Col className="gutter-row" span={14}>
            <S.Card className="wrap-table">
              <S.LabelTable>
                {t("DASHBOARD_UNPAID_STUDENT_INTUITION")}
              </S.LabelTable>
              <TableBase dataSource={dataSource} columns={columns} />
            </S.Card>
          </Col>
          <Col className="gutter-row" span={10}>
            <S.Card className="wrap-table">
              <S.LabelTable>{t("DASHBOARD_SCHOOL_EXPENSE")}</S.LabelTable>
              <TableBase dataSource={dataSource2} columns={columns2} />
            </S.Card>
          </Col>
        </Row>
      </S.WrapTable>
    </S.Container>
  );
};

export default Dashboard;
