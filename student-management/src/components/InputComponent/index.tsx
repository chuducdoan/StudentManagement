import { Input, InputProps } from "antd";
import * as S from "./styles";

const InputComponent = (props: InputProps) => {
  return (
    <S.Container>
      <Input {...props} />
    </S.Container>
  );
};

export default InputComponent;
