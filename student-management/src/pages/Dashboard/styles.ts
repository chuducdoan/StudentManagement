import { styled } from "styled-components";

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

  &.chart {
    padding-top: 24px;
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

export const WrapNameTable = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ImgUser = styled.div`
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const NameUser = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 14px;
  font-family: "Popin-Semibold";

  &.fs16 {
    font-size: 16px;
  }
`;

export const Id = styled.div`
  color: #4d44b5;
  font-size: 14px;
  font-family: "Popin-Semibold";
`;

export const WrapClassTable = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ImgClass = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #fb7d5b;
  display: flex;
  align-items: center;
  justify-content: center;

  &.expensive {
    background-color: #fd5353;

    svg {
      width: 18px;
      height: 16px;
    }
  }
`;

export const NameClass = styled.div`
  font-size: 15px;
  font-family: "Popin-Semibold";
  color: ${({ theme }) => theme.colorTitleTable};
`;

export const TextGray = styled.div`
  color: #a098ae;
  font-size: 14px;
`;

export const Status = styled.div`
  font-size: 11px;
  padding: 5px 8px;
  border-radius: 4px;
  display: inline-block;

  &.completed {
    background-color: #ddfaea;
    color: #1eba62;
  }

  &.canceled {
    background-color: #ffeaea;
    color: #fd5353;
  }
`;
