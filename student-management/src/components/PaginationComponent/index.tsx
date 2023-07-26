import { Pagination } from "antd";
import { useTranslation } from "react-i18next";
import * as S from "./styles";

interface Props {
  pagination?: any;
}

const PaginationComponent = ({ pagination }: Props) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Pagination
        {...pagination}
        showTotal={(total, range) =>
          `${t("SHOWING")} ${range[0]}-${range[1]} ${t("FROM")} ${total} ${t(
            "DATA"
          )}
          `
        }
        showSizeChanger={false}
      />
    </S.Container>
  );
};

export default PaginationComponent;
