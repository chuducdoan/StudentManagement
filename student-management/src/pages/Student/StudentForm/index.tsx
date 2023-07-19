/* eslint-disable react-hooks/exhaustive-deps */
import { Col, Row } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./styles";
import {
  ButtonComponent,
  DatePickerComponent,
  InputComponent,
  Textarea,
  UploadComponent,
} from "components";

const StudentForm = () => {
  const { t } = useTranslation();
  const [file, setFile] = useState<any>(null);

  console.log(file);

  return (
    <S.Container>
      <S.StudentDetails>
        <S.Title>{t("STUDENT_DETAIL")}</S.Title>
        <S.Content>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 30 }}>
            <Col className="gutter-row" span={8}>
              <S.Item>
                <S.Label>
                  {t("STUDENT_PHOTO")}
                  <span className="required">*</span>
                </S.Label>
                <UploadComponent getFile={(val: any) => setFile(val)} />
              </S.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <S.Item>
                <S.Label>
                  {t("STUDENT_FIRSTNAME")}
                  <span className="required">*</span>
                </S.Label>
                <InputComponent />
              </S.Item>
              <S.Item>
                <S.Label>
                  {t("STUDENT_DATE_PLACE_BIRTH")}
                  <span className="required">*</span>
                </S.Label>
                <S.GroupInput>
                  <div className="w70">
                    <DatePickerComponent />
                  </div>
                  <div className="w30">
                    <InputComponent placeholder="Place" />
                  </div>
                </S.GroupInput>
              </S.Item>
              <S.Item>
                <S.Label>
                  {t("STUDENT_EMAIL")}
                  <span className="required">*</span>
                </S.Label>
                <InputComponent placeholder="hello@example.com" />
              </S.Item>
              <S.Item>
                <S.Label>
                  {t("STUDENT_ADDRESS")}
                  <span className="required">*</span>
                </S.Label>
                <Textarea rows={5} name="address1" />
              </S.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <S.Item>
                <S.Label>
                  {t("STUDENT_LASTNAME")}
                  <span className="required">*</span>
                </S.Label>
                <InputComponent />
              </S.Item>
              <S.Item>
                <S.Label>
                  {t("STUDENT_PARENT_NAME")}
                  <span className="required">*</span>
                </S.Label>
                <InputComponent />
              </S.Item>
              <S.Item>
                <S.Label>
                  {t("STUDENT_PHONE_NUMBER")}
                  <span className="required">*</span>
                </S.Label>
                <InputComponent typeInput="NUMBER" />
              </S.Item>
              <S.Item>
                <S.Label>
                  {t("CLASS")}
                  <span className="required">*</span>
                </S.Label>
                <InputComponent />
              </S.Item>
            </Col>
          </Row>
        </S.Content>
      </S.StudentDetails>
      <S.ParentDetail>
        <S.Title>{t("STUDENT_PARENTS_DETAIL")}</S.Title>
        <S.Content>
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 30 }}>
            <Col className="gutter-row" span={12}>
              <S.Item>
                <S.Label>
                  {t("STUDENT_FIRSTNAME")}
                  <span className="required">*</span>
                </S.Label>
                <InputComponent />
              </S.Item>
              <S.Item>
                <S.Label>
                  {t("STUDENT_EMAIL")}
                  <span className="required">*</span>
                </S.Label>
                <InputComponent placeholder="hello@example.com" />
              </S.Item>
              <S.Item>
                <S.Label>
                  {t("STUDENT_ADDRESS")}
                  <span className="required">*</span>
                </S.Label>
                <Textarea rows={5} name="address2" />
              </S.Item>
              <S.Item>
                <ButtonComponent minWidth={89} color="#fff" colorhover="#fff">
                  {t("SAVE")}
                </ButtonComponent>
              </S.Item>
            </Col>
            <Col className="gutter-row" span={12}>
              <S.Item>
                <S.Label>
                  {t("STUDENT_LASTNAME")}
                  <span className="required">*</span>
                </S.Label>
                <InputComponent />
              </S.Item>
              <S.Item>
                <S.Label>
                  {t("STUDENT_PHONE_NUMBER")}
                  <span className="required">*</span>
                </S.Label>
                <InputComponent typeInput="NUMBER" />
              </S.Item>
            </Col>
          </Row>
        </S.Content>
      </S.ParentDetail>
    </S.Container>
  );
};

export default StudentForm;
