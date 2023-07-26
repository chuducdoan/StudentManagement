import { styled } from "styled-components";

export const Container = styled.div`
  .ant-pagination {
    text-align: right;
    position: relative;
  }
  .ant-pagination .ant-pagination-total-text {
    font-size: 12px;
    color: #a098ae;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .ant-pagination .ant-pagination-prev,
  .ant-pagination .ant-pagination-next {
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.color};

    svg {
      color: ${({ theme }) => theme.color};
    }
  }

  .ant-pagination .ant-pagination-prev.ant-pagination-disabled,
  .ant-pagination .ant-pagination-next.ant-pagination-disabled {
    border: 1px solid #a098ae;

    svg {
      color: #a098ae !important;
    }
  }

  .ant-pagination .ant-pagination-item-active {
    background-color: #4d44b5;
    border-color: #4d44b5 !important;

    a {
      color: #fff !important;
    }
  }
`;
