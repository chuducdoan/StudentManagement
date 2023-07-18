import { useAppSelector } from "app/hooks";
import { darkTheme, lightTheme } from "common/style/themes";
import { Loading } from "components";
import { selectTheme } from "features/theme/themeSlice";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { DefaultLayout } from "layout";
import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("pages/Dashboard"));
const Student = lazy(() => import("pages/Student"));
const Login = lazy(() => import("pages/Login"));

function App() {
  const theme = useAppSelector(selectTheme);

  const getLoading = () => {
    return <Loading />;
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Suspense fallback={getLoading()}>
        <Switch>
          <Route exact path={"/"} children={<Login />} />
          <Route exact path={"/login"} component={Login} />
          <DefaultLayout>
            <Route exact path={"/dashboard"} component={Dashboard} />
            <Route exact path={"/student"} component={Student} />
          </DefaultLayout>
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
