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

  .ant-pagination .ant-pagination-item-active {
    border: none;
  }

  .ant-pagination .ant-pagination-item {
    height: auto;
    width: auto;
    min-width: auto;
    line-height: unset;
    height: 30px;
    overflow: hidden;
    line-height: 30px;
  }

  .ant-pagination .ant-pagination-item a {
    font-family: "Popin-Regular";
    font-size: 16px;
    color: #a098ae;
    height: 30px;
    width: 30px;
  }

  .ant-pagination .ant-pagination-item-active a {
    background-color: #4d44b5;
    border: none;
    color: #fff;
    font-family: "Popin-Regular";
    font-size: 16px;
    font-weight: normal;
  }

  .ant-pagination .ant-pagination-item-link {
    color: ${({ theme }) => theme.color};
  }

  .ant-pagination .ant-pagination-disabled .ant-pagination-item-link {
    color: rgba(0, 0, 0, 0.25);
  }

  .ant-table-content .ant-table-tbody .ant-table-row {
    &:hover {
      & > td {
        background: inherit;
      }
    }
  }

  .ant-table-wrapper .ant-table-column-sorter-up,
  .ant-table-wrapper .ant-table-column-sorter-down {
    color: ${({ theme }) => theme.color};
    opacity: 0.5;
  }

  .ant-table-wrapper .ant-table-thead th.ant-table-column-has-sorters {
    &:hover {
      background: rgba(77, 68, 181, 0.1);
    }
  }

  .ant-table-wrapper .ant-table-column-sorter-up.active,
  .ant-table-wrapper .ant-table-column-sorter-down.active {
    color: ${({ theme }) => theme.color};
    opacity: 1;
  }
`;
