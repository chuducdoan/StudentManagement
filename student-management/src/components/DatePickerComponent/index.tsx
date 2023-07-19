/* eslint-disable react-hooks/exhaustive-deps */
import { DatePickerProps, DatePicker } from "antd";
import * as S from "./styles";
import dayjs from "dayjs";

const DatePickerComponent = (props: DatePickerProps) => {
  return (
    <S.Container>
      <DatePicker
        {...props}
        defaultValue={dayjs(dayjs(), "DD-MM-YYYY")}
        format={"DD-MM-YYYY"}
      />
    </S.Container>
  );
};

export default DatePickerComponent;
