import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.bgCard};
  padding: 16px 0;
  margin-top: 46px;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  font-family: "Popin-Regular";
  color: ${({ theme }) => theme.colorTextFooter};
  border-radius: 5px;

  span {
    cursor: pointer;
    color: #4d44b5;
    margin: 0 4px;
  }
`;
