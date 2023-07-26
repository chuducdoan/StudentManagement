import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const WrapCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.bgCard};
  border-radius: 5px;
  padding: 30px;
  position: relative;
  width: calc(25% - 22.5px);
  margin-bottom: 30px;
`;

export const ActionCard = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.bgAction};

  .icon-action {
    font-size: 28px;
    color: #4d44b5;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ImageCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
`;

export const TeacherName = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: "Popin-Semibold";
  color: ${({ theme }) => theme.color};
  line-height: 27px;
`;

export const TextGray = styled.div`
  margin-bottom: 16px;
  text-align: center;
  font-size: 14px;
  color: #a098ae;
`;

export const Subject = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 30px;

  span {
    font-size: 11px;
    padding: 4px 8px;
    font-family: "Popin-Semibold";
    border-radius: 3px;

    &.green {
      background-color: #ddfaea;
      color: #1eba62;
    }

    &.red {
      background-color: #fff3f0;
      color: #fb7d5b;
    }
  }
`;

export const WrapBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Popover = styled.div`
  width: 160px;
`;

export const PopoverItem = styled.div`
  padding: 4px 12px;
  color: #a098ae;
  font-family: "Popin-Regular";
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
  }

  &.delete {
    color: #fb7d5b;
  }

  &.edit {
    color: #3d3690;
  }
`;

export const Pagination = styled.div``;
