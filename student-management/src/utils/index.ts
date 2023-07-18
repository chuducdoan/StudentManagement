import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const MoneyConvert = (value: any) => {
  if (value === undefined || value === null || value === "") return 0;
  return Number(value)
    .toFixed(0)
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};
