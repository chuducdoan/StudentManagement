import { styled } from "styled-components";

export const Container = styled.div`
  .ant-select {
    min-width: 130px;
  }

  .ant-select {
    &:hover {
      .ant-select-selector {
        border-color: ${({ theme }) => theme.borderInputColor} !important;
      }
    }
  }

  .ant-select .ant-select-selector {
    padding-left: 20px;
    padding-right: 20px;
    height: 48px;
    background-color: ${({ theme }) => theme.bgSelect};
    border-width: 1px;
    border-color: ${({ theme }) => theme.borderInputColor};
  }

  .ant-select-selector .ant-select-selection-item {
    font-family: "Popin-Regular";
    font-size: 16px;
    color: ${({ theme }) => theme.color};
    line-height: 48px;
  }

  .ant-select-arrow {
    transform: translateX(-9px);
    color: #666;
  }
`;
