import { Input, InputProps } from "antd";
import * as S from "./styles";
import { useTranslation } from "react-i18next";
import { NumericFormat } from "react-number-format";

interface PropsInputComp extends InputProps {
  typeInput?: "SEARCH" | "NUMBER";
  handleOnSearch?: any;
}

interface Props {
  value?: any;
  placeholder?: string;
  onChange?: any;
  disabled?: boolean;
  name?: string;
  defaultValue?: any;
}

const InputSearch = (props: InputProps) => {
  const { t } = useTranslation();
  return (
    <S.Container className="input-search">
      <i className="icon-search" onClick={props.onClick}>
        <svg
          width="15"
          height="15"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5605 15.4395L13.7527 11.6317C14.5395 10.446 15 9.02625 15 7.5C15 3.3645 11.6355 0 7.5 0C3.3645 0 0 3.3645 0 7.5C0 11.6355 3.3645 15 7.5 15C9.02625 15 10.446 14.5395 11.6317 13.7527L15.4395 17.5605C16.0245 18.1462 16.9755 18.1462 17.5605 17.5605C18.1462 16.9747 18.1462 16.0252 17.5605 15.4395V15.4395ZM2.25 7.5C2.25 4.605 4.605 2.25 7.5 2.25C10.395 2.25 12.75 4.605 12.75 7.5C12.75 10.395 10.395 12.75 7.5 12.75C4.605 12.75 2.25 10.395 2.25 7.5V7.5Z"
            fill="#4D44B5"
          ></path>
        </svg>
      </i>
      <Input {...props} placeholder={t("SEARCH_HERE")} />
    </S.Container>
  );
};

const InputNumber = ({
  value,
  placeholder,
  onChange,
  disabled,
  name,
  defaultValue,
}: Props) => {
  return (
    <S.Container className="input-number">
      <NumericFormat
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
        name={name}
        defaultValue={defaultValue}
      />
    </S.Container>
  );
};

const InputBase = (props: InputProps) => {
  return (
    <S.Container>
      <Input {...props} />
    </S.Container>
  );
};

const InputComponent = (props: PropsInputComp) => {
  const { typeInput, ...rest } = props;
  const {
    value,
    placeholder,
    onChange,
    disabled,
    name,
    defaultValue,
    handleOnSearch,
  } = rest;
  const renderInput = () => {
    switch (typeInput) {
      case "SEARCH":
        return <InputSearch {...rest} onClick={handleOnSearch} />;
      case "NUMBER":
        return (
          <InputNumber
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            disabled={disabled}
            name={name}
            defaultValue={defaultValue}
          />
        );
      default:
        return <InputBase {...rest} />;
    }
  };

  return renderInput();
};

export default InputComponent;
