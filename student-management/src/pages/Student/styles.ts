import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const WrapTable = styled.div`
  background-color: ${({ theme }) => theme.bgCard};
  border-radius: 5px;
  overflow: hidden;
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

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const TextGray = styled.div`
  color: #a098ae;
  font-size: 14px;
`;

export const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  i {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(235, 235, 249);
    border-radius: 50%;
    cursor: pointer;
  }
  svg {
    width: 16px;
    height: 16px;
  }
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
