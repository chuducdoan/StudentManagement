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

  &.d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &.wrap-table {
    padding-left: 0;
    padding-right: 0;
    padding-top: 16px;
  }
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

export const ImageCard = styled.div`
  img {
    max-width: 200px;
    max-height: 100%;
  }
`;

export const WrapChart = styled.div`
  margin-top: 30px;
`;

export const TopChart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
export const ContentChart = styled.div``;
export const LabelChart = styled.div`
  font-size: 18px;
  font-family: "Popin-Semibold";
  color: ${({ theme }) => theme.color};
`;

export const WrapTable = styled.div`
  margin-top: 30px;
`;

export const LabelTable = styled.div`
  font-size: 18px;
  font-family: "Popin-Semibold";
  color: ${({ theme }) => theme.color};
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`;
