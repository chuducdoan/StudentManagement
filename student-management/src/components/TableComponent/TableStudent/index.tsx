import * as S from "./styles";
import { Table } from "antd";

interface Props {
  columns: any;
  dataSource: any;
  pagination?: any;
}

const TableStudent = ({ dataSource, columns, pagination }: Props) => {
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
  };

  return (
    <S.Container>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ ...pagination }}
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
      />
    </S.Container>
  );
};

export default TableStudent;
