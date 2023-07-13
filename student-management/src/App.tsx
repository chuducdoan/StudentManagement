import { useAppDispatch, useAppSelector } from "app/hooks";
import { darkTheme, lightTheme } from "common/style/themes";
import { selectTheme, setTheme } from "features/theme/themeSlice";
import i18next from "i18next";
import Login from "pages/Login";
import { useTranslation } from "react-i18next";
import { ThemeProvider } from "styled-components";
import "./App.css";
import {} from "react-router-dom";

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
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
