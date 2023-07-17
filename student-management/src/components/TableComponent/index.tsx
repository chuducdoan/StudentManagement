import * as S from "./styles";
import { Table } from "antd";

interface Props {
  columns: any;
  dataSource: any;
}

const TableComponent = ({ dataSource, columns }: Props) => {
  return (
    <S.Container>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 3 }}
      />
    </S.Container>
  );
};

export default TableComponent;
