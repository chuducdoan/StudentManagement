import { styled } from "styled-components";
import BG from "assets/images/pic-2.png";

export const Container = styled.div`
  width: 100%;
`;

export const WrapCard = styled.div``;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.bgCard};
  padding: 30px;
  border-radius: 5px;
`;
export const InnerCard = styled.div`
  gap: 16px;
  display: flex;
  align-items: center;
`;

export const Round = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.violet {
    background-color: #4d44b5;
  }

  &.orange {
    background-color: #fb7d5b;
  }

  &.yellow {
    background-color: #fcc43e;
  }

  svg {
    max-width: 19px;
  }
`;

export const TextCard = styled.div``;

export const LabelCard = styled.div`
  font-size: 14px;
  font-family: "Popin-Regular";
  color: ${({ theme }) => theme.colorCard};
`;

export const MainCard = styled.div`
  font-size: 24px;
  color: ${({ theme }) => theme.color};
  font-family: "Popin-Semibold";
  margin: 4px 0;
`;

export const MoreInforCard = styled.div`
  font-size: 14px;
  font-family: "Popin-Regular";
  color: ${({ theme }) => theme.colorCard};
`;

export const ImageCard = styled.div``;
