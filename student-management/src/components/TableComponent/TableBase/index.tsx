import * as S from "./styles";
import { Table } from "antd";

interface Props {
  columns: any;
  dataSource: any;
  pagination?: any;
}

const TableBase = ({ dataSource, columns, pagination }: Props) => {
  return (
    <S.Container>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ ...pagination, pageSize: 3 }}
      />
    </S.Container>
  );
};

export default TableBase;
