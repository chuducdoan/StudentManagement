import { styled } from "styled-components";

export const Container = styled.div`
  .ant-table-wrapper .ant-table {
    background: inherit;
  }
  .ant-table-wrapper .ant-table-thead > tr > th {
    padding: 11px 20px;
    font-size: 14px;
    font-family: "Popin-Regular";
    background: rgba(77, 68, 181, 0.1);
    color: ${({ theme }) => theme.colorTitleTable};
    font-weight: 400;
  }
  .ant-table-wrapper .ant-table-container .ant-table-thead .ant-table-cell {
    &::before {
      display: none;
    }
  }
  .ant-table-wrapper .ant-table-container .ant-table-thead th:first-child {
    border-start-start-radius: 0;
    &::before {
      display: none;
    }
  }
  .ant-table-wrapper .ant-table-container .ant-table-thead th:last-child {
    border-start-end-radius: 0;
  }

  .ant-table-wrapper .ant-table-tbody > tr > td {
    padding: 11px 20px;
    font-size: 14px;
    font-family: "Popin-Regular";
    color: ${({ theme }) => theme.color};
  }
`;
