import { styled } from "styled-components";

export const Container = styled.button<{
  isBorder?: boolean;
  background?: string;
  bghover?: string;
  color?: string;
  colorhover?: string;
  height?: number;
  minWidth?: number;
  borderRadius?: string;
  bordercolor?: string;
  bordercolorhover?: string;
  fullwidth?: boolean;
  fontsize?: number;
}>`
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "auto")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${({ color }) => color ?? "#131340"};
  font-family: "Popin-SemiBold";
  font-size: ${({ fontsize }) => (fontsize ? fontsize + "px" : "13px")};
  background: ${({ background }) => background ?? "#4D44B5"};
  border-color: ${({ bordercolor }) => bordercolor ?? "#4D44B5"};
  border-width: 1px;
  border-style: solid;
  outline: none;
  border-radius: ${({ borderRadius }) => borderRadius ?? "5px"};
  height: ${({ height }) => (height ? height + "px" : "48px")};
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  min-width: ${({ minWidth }) => (minWidth ? minWidth + "px" : "auto")};

  img {
    max-width: 16px;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${({ bghover }) => bghover ?? "#4D44B5"};
    border-color: ${({ bordercolorhover }) => bordercolorhover ?? "#4D44B5"};
    color: ${({ colorhover }) => colorhover ?? "#4D44B5"};
  }
`;
