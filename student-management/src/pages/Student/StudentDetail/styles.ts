import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-bottom: 38px;
`;

export const ContentDetail = styled.div``;

export const TopDetail = styled.div`
  background-color: ${({ theme }) => theme.bgCard};
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const CardHeader = styled.div`
  height: 140px;
  background-color: #4d44b5;
  position: relative;

  .user-svg,
  .user-svg-1 {
    position: absolute;
    bottom: 0;
    right: 40px;
    z-index: 1;
  }

  .user-svg-1 {
    right: 144px;
    z-index: 0;
  }
`;

export const CardContent = styled.div`
  padding: 30px;
`;

export const AboutMe = styled.div`
  margin-top: -100px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 8px solid #fff;
    position: relative;
    margin-bottom: 20px;
  }
`;

export const StudentName = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 30px;
  font-family: "Popin-Semibold";
  line-height: 45px;
`;

export const Role = styled.div`
  font-size: 14px;
  font-family: "Popin-Semibold";
  color: #4d44b5;
  margin-bottom: 16px;
`;

export const CardMini = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
`;

export const IconCard = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #fb7d5b;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
  }
`;

export const LabelCardMini = styled.div`
  font-size: 14px;
  font-family: "Popin-Regular";
  color: #a098ae;
`;

export const ValueCardMini = styled.div`
  font-size: 16px;
  font-family: "Popin-Semibold";
  color: ${({ theme }) => theme.color};
`;

export const InforMore = styled.div``;

export const BottomDetail = styled.div`
  background-color: ${({ theme }) => theme.bgCard};
  border-radius: 5px;
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

export const NameUser = styled.div`
  color: ${({ theme }) => theme.color};
  font-size: 14px;
  font-family: "Popin-Semibold";

  &.fs16 {
    font-size: 16px;
  }
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

export const ScheduleDetail = styled.div`
  padding: 30px;
  background-color: ${({ theme }) => theme.bgCard};
  border-radius: 5px;
  margin-bottom: 30px;
`;

export const TitleSchedule = styled.div`
  font-size: 18px;
  font-family: "Popin-Semibold";
  color: ${({ theme }) => theme.color};
  margin-bottom: 8px;
`;

export const TimeSchedule = styled.div`
  font-size: 14px;
  color: #a098ae;
`;

export const CardSchedule = styled.div`
  background-color: ${({ theme }) => theme.bgCard};
  border-radius: 5px;
  margin-bottom: 30px;
  overflow: hidden;
  position: relative;
  padding: 24px 30px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 7px;
    height: 100%;
  }

  &.card1 {
    &::after {
      background-color: #4d44b5;
    }
  }

  &.card2 {
    &::after {
      background-color: #fb7d5b;
    }
  }

  &.card3 {
    &::after {
      background-color: #fcc43e;
    }
  }

  &.card4 {
    &::after {
      background-color: #303972;
    }
  }
`;

export const TitleCard = styled.div`
  font-size: 18px;
  font-family: "Popin-Semibold";
  color: ${({ theme }) => theme.color};
  line-height: 27px;
`;

export const TypeSubject = styled.div`
  margin-bottom: 16px;
  font-size: 14px;
  color: #a098ae;
`;

export const InforSubject = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TimeSubject = styled.div``;

export const Teacher = styled.div`
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;

export const ItemTime = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  .ms-1 {
    margin-left: 3px;
    margin-right: 1px;
  }
`;

export const TextTime = styled.div`
  font-size: 14px;
  color: #a098ae;
`;
