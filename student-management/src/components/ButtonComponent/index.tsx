import * as S from "./styles";

interface Props {
  children: any;
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
}

const ButtonComponent = ({
  children,
  isBorder,
  background,
  bghover,
  color,
  colorhover,
  height,
  minWidth,
  borderRadius,
  bordercolor,
  bordercolorhover,
  fullwidth,
  fontsize,
}: Props) => {
  return (
    <S.Container
      background={background}
      bordercolor={bordercolor}
      borderRadius={borderRadius}
      height={height}
      bghover={bghover}
      bordercolorhover={bordercolorhover}
      colorhover={colorhover}
      color={color}
      fullwidth={fullwidth}
      minWidth={minWidth}
      fontsize={fontsize}
    >
      {children}
    </S.Container>
  );
};

export default ButtonComponent;
