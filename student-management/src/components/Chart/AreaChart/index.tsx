import { Area } from "@ant-design/charts";

const SelectComponent = () => {
  const data = [
    {
      country: "北美",
      date: "Week1",
      value: 200,
    },
    {
      country: "北美",
      date: "Week2",
      value: 400,
    },
    {
      country: "北美",
      date: "Week3",
      value: 300,
    },
    {
      country: "北美",
      date: "Week4",
      value: 400,
    },
    {
      country: "北美",
      date: "Week5",
      value: 200,
    },
    {
      country: "北美",
      date: "Week6",
      value: 400,
    },
  ];

  const config = {
    height: 295,
    data,
    xField: "date",
    yField: "value",
    seriesField: "country",
  };

  return <Area {...config} />;
};

export default SelectComponent;
