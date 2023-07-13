import { styled } from "styled-components";

export const Container = styled.div`
  .ant-input {
    height: 48px;
    padding: 11px 20px;
    background: ${(theme: any) => theme?.theme?.background};
    color: ${(theme: any) => theme?.theme?.color};
    line-height: 1.7;
    font-size: 14px;
    font-family: "Popin-Regular";
    border-color: ${(theme: any) => theme?.theme?.borderInputColor};

    &:hover {
      border-color: ${(theme: any) => theme?.theme?.borderInputColor};
    }

    &:focus {
      box-shadow: none;
      border-color: ${(theme: any) => theme?.theme.inputFocusColor};
    }
  }
`;
