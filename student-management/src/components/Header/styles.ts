import { styled } from "styled-components";

export const Container = styled.div`
  height: 80px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.backgroundHeader};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;

  .icon-bar {
    font-size: 28px;
    color: ${({ theme }) => theme.color};
  }
`;
export const TitlePage = styled.div`
  margin-left: 24px;
  font-size: 25px;
  color: ${({ theme }) => theme.color};
  font-family: "Popin-Semibold";
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const Box = styled.button`
  width: 48px;
  height: 48px;
  overflow: hidden;
  padding: 0;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.bgButton};

  #icon-dark-1,
  #icon-light-1 {
    color: #a098ae;
  }

  img {
    max-width: 100%;
  }
`;

export const ItemLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: "Popin-Regular";
  padding: 8px 12px;
  border-radius: 5px;

  &:hover {
    background-color: #e9ecef;
  }
`;

export const InforUser = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 0;
  border-bottom: 1px solid #dddddd;
  margin-bottom: 16px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 8px;
  }
`;

export const Infor = styled.div``;
export const Username = styled.div`
  font-size: 18px;
  font-family: "Popin-Semibold";
  color: #303972;
`;
export const Role = styled.div`
  color: #666666;
  font-size: 14px;
  font-family: "Popin-Regular";
`;

export const ItemMenuUser = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: #a098ae;
  font-family: "Popin-Regular";
  padding: 8px 12px;
  border-radius: 5px;

  &:hover {
    background-color: #e9ecef;
  }

  .icon {
    color: #4d44b5;
  }
`;

export const ButtonLogout = styled.div`
  padding: 16px 12px;
  border-top: 1px solid #dddddd;
  margin-top: 16px;
`;
