import { styled } from "styled-components";

export const Container = styled.div`
  .ant-input {
    height: 48px;
    padding: 11px 20px;
    background: ${(theme: any) => theme?.theme?.bgInput};
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

    &::placeholder {
      color: #a098ae;
    }
  }

  &.input-search {
    border-width: 1px;
    border-style: solid;
    border-radius: 6px;
    padding-left: 35px;
    position: relative;
    border-color: ${(theme: any) => theme?.theme?.borderInputColor};
    background: ${(theme: any) => theme?.theme?.bgInput};

    .ant-input {
      border: none;
    }

    .icon-search {
      position: absolute;
      top: 54%;
      transform: translateY(-50%);
      left: 20px;
      cursor: pointer;
    }
  }
`;
