import { styled } from "styled-components";

export const Container = styled.div``;

export const WrapSearch = styled.div`
  background-color: ${({ theme }) => theme.bgCard};
  border-radius: 5px;
  padding: 16px 20px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RightSearch = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
