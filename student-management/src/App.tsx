import { Select } from "antd";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { darkTheme, lightTheme } from "common/style/themes";
import { selectTheme, setTheme } from "features/theme/themeSlice";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import "./App.css";

function App() {
  const { t } = useTranslation("translation");
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const changeLanguage = (value: string) => {
    console.log(value);
    i18next.changeLanguage(value);
  };

  const handleChangeTheme = (value: any) => {
    dispatch(
      setTheme({
        selectTheme: value,
      })
    );
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <div className="App">
        <div>{t("title")}</div>
        <Select
          defaultValue="eng"
          style={{ width: 120 }}
          onChange={changeLanguage}
          options={[
            { value: "eng", label: "English" },
            { value: "vie", label: "Vietnamese" },
          ]}
        />

        <Select
          defaultValue={theme}
          style={{ width: 120 }}
          onChange={handleChangeTheme}
          options={[
            { value: "dark", label: "Dark" },
            { value: "light", label: "Light" },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
