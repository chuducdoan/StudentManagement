import { PlusOutlined } from "@ant-design/icons";
import ButtonComponent from "components/ButtonComponent";
import InputComponent from "components/InputComponent";
import SelectComponent from "components/SelectComponent";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

interface Props {
  titleAdd?: string;
  changePageAdd?: any;
  handleOnSearch?: any;
  handleOnChange?: any;
}

const Search = ({
  titleAdd,
  changePageAdd,
  handleOnSearch,
  handleOnChange,
}: Props) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.WrapSearch>
        <div>
          <InputComponent
            typeInput="SEARCH"
            handleOnSearch={handleOnSearch}
            onChange={handleOnChange}
          />
        </div>
        <S.RightSearch>
          <SelectComponent
            defaultValue={"Newest"}
            options={[
              {
                label: t("OPTION_NEWEST"),
                value: "Newest",
              },
              {
                label: t("OPTION_OLDEST"),
                value: "Oldest",
              },
              {
                label: t("OPTION_RECENT"),
                value: "Recent",
              },
            ]}
          />
          <ButtonComponent
            minWidth={167}
            color="#fff"
            colorhover="#fff"
            bghover="#3d3690"
            onClick={changePageAdd}
          >
            <PlusOutlined />
            {titleAdd}
          </ButtonComponent>
        </S.RightSearch>
      </S.WrapSearch>
    </S.Container>
  );
};

export default Search;
