/* eslint-disable react-hooks/exhaustive-deps */
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { Col, Row } from "antd";
import Image from "assets/images/user.jpg";
import UserIcon from "assets/images/icon/profile.svg";
import LocationIcon from "assets/images/icon/location.svg";
import PhoneIcon from "assets/images/icon/phone.svg";
import EmailIcon from "assets/images/icon/email.svg";
import { TableBase } from "components";
import { MoneyConvert } from "utils";

const StudentDetail = () => {
  const { t } = useTranslation();
  const { studentId }: any = useParams();

  const dataSource = [
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
      title: t("EXPENSIVE"),
      dataIndex: "expensive",
      key: "nexpensiveame",
      sorter: (a: any, b: any) => a.name.localeCompare(b.name),
      render: (text: any) => (
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
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 30 }}>
        <Col className="gutter-row" span={18}>
          <S.ContentDetail>
            <S.TopDetail>
              <S.CardHeader>
                <svg
                  width="264"
                  height="109"
                  viewBox="0 0 264 109"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="user-svg"
                >
                  <rect
                    x="0.0107422"
                    y="0.6521"
                    width="263.592"
                    height="275.13"
                    rx="20"
                    fill="#FCC43E"
                  ></rect>
                </svg>
                <svg
                  width="264"
                  height="59"
                  viewBox="0 0 264 59"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="user-svg-1"
                >
                  <rect
                    y="0.564056"
                    width="263.592"
                    height="275.13"
                    rx="20"
                    fill="#FB7D5B"
                  ></rect>
                </svg>
              </S.CardHeader>
              <S.CardContent>
                <S.AboutMe>
                  <img src={Image} alt="student.png" />
                </S.AboutMe>
                <S.StudentName>Karen Hope</S.StudentName>
                <S.Role>Student</S.Role>
                <S.InforMore>
                  <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 30 }}>
                    <Col className="gutter-row" span={6}>
                      <S.CardMini>
                        <S.IconCard>
                          <img src={UserIcon} alt="user.png" />
                        </S.IconCard>
                        <div>
                          <S.LabelCardMini>Parents:</S.LabelCardMini>
                          <S.ValueCardMini>Justin Hope</S.ValueCardMini>
                        </div>
                      </S.CardMini>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <S.CardMini>
                        <S.IconCard>
                          <img src={LocationIcon} alt="location.png" />
                        </S.IconCard>
                        <div>
                          <S.LabelCardMini>Address:</S.LabelCardMini>
                          <S.ValueCardMini>Jakarta, Indonesia</S.ValueCardMini>
                        </div>
                      </S.CardMini>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <S.CardMini>
                        <S.IconCard>
                          <img src={PhoneIcon} alt="phone.png" />
                        </S.IconCard>
                        <div>
                          <S.LabelCardMini>Phone:</S.LabelCardMini>
                          <S.ValueCardMini>+12 345 6789 0</S.ValueCardMini>
                        </div>
                      </S.CardMini>
                    </Col>
                    <Col className="gutter-row" span={6}>
                      <S.CardMini>
                        <S.IconCard>
                          <img src={EmailIcon} alt="email.png" />
                        </S.IconCard>
                        <div>
                          <S.LabelCardMini>Email:</S.LabelCardMini>
                          <S.ValueCardMini>Historia@mail.com</S.ValueCardMini>
                        </div>
                      </S.CardMini>
                    </Col>
                  </Row>
                </S.InforMore>
              </S.CardContent>
            </S.TopDetail>
            <S.BottomDetail>
              <TableBase dataSource={dataSource} columns={columns} />
            </S.BottomDetail>
          </S.ContentDetail>
        </Col>
        <Col className="gutter-row" span={6}></Col>
      </Row>
    </S.Container>
  );
};

export default StudentDetail;
