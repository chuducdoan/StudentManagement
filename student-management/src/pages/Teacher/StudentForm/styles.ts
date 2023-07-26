import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;

  .ant-upload-wrapper
    .ant-upload-list.ant-upload-list-picture-card
    .ant-upload-list-item-error {
    border-color: ${({ theme }) => theme.borderInputColor};
  }
`;

export const StudentDetails = styled.div`
  background-color: ${({ theme }) => theme.bgCard};
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const Title = styled.div`
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.borderInputColor};
  padding: 24px 30px 20px;
  font-size: 16px;
  font-family: "Popin-Semibold";
  color: ${({ theme }) => theme.color};
`;

export const Content = styled.div`
  padding: 30px;
`;

export const Item = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.div`
  color: #4d44b5;
  font-size: 14px;
  margin-bottom: 8px;

  .required {
    color: #fd5353;
  }
`;

export const GroupInput = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .w30 {
    width: 40%;
  }

  .w70 {
    width: 60%;
  }
`;

export const ParentDetail = styled.div`
  background-color: ${({ theme }) => theme.bgCard};
  border-radius: 5px;
`;
