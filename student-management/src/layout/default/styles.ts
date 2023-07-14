import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  width: 280px;
  height: 100vh;
  flex-shink: 0;
  background: #4d44b5;
  padding: 20px 20px 0;
`;
export const Main = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  flex-shink: 0;
`;

export const Content = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.backgroundBody};
  flex-grow: 1;
`;
