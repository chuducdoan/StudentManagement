import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  width: 280px;
  height: 100vh;
  flex-shrink: 0;
  background: #4d44b5;
  padding: 20px 20px 0;
`;
export const Main = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;
export const Header = styled.div`
  flex-shrink: 0;
`;

export const Content = styled.div`
  padding: 30px 30px 0;
  background-color: ${({ theme }) => theme.backgroundBody};
  // flex-grow: 1;
  height: calc(100vh - 80px);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0;
  }
`;
