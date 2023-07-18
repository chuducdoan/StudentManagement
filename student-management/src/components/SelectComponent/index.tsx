import { Select, SelectProps } from "antd";
import * as S from "./styles";

const SelectComponent = (props: SelectProps) => {
  return (
    <S.Container>
      <Select {...props} />
    </S.Container>
  );
};

export default SelectComponent;
