/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from "antd";
import { TextAreaProps } from "antd/es/input";
import * as S from "./styles";

const { TextArea } = Input;

const Textarea = (props: TextAreaProps) => {
  return (
    <S.Container>
      <TextArea {...props} />
    </S.Container>
  );
};

export default Textarea;
