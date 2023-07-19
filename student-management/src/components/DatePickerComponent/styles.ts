import { styled } from "styled-components";

export const Container = styled.div`
  .ant-picker {
    width: 100%;
    height: 48px;
    padding: 11px 20px;
    background: ${({ theme }) => theme.bgInput};
    border-color: ${({ theme }) => theme.borderInputColor};
  }
  .ant-picker-focused {
    box-shadow: none;
    border-color: ${({ theme }) => theme.inputFocusColor};
  }

  .ant-picker .ant-picker-input > input {
    font-size: 14px;
    font-family: "Popin-Regular";
    color: ${({ theme }) => theme.color};
  }

  .ant-picker .ant-picker-suffix {
    color: ${({ theme }) => theme.color};
  }
`;
