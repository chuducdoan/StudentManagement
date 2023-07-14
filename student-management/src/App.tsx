import { useAppSelector } from "app/hooks";
import { darkTheme, lightTheme } from "common/style/themes";
import { Loading } from "components";
import { selectTheme } from "features/theme/themeSlice";
import { DefaultLayout } from "layout";
import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";

const Dashboard = lazy(() => import("pages/Dashboard"));
const Login = lazy(() => import("pages/Login"));

function App() {
  const theme = useAppSelector(selectTheme);

  const getLoading = () => {
    return <Loading />;
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Router forceRefresh>
        <Suspense fallback={getLoading()}>
          <Switch>
            <Route path={"/login"} component={Login} />
            <DefaultLayout>
              <Route path={"/dashboard"} component={Dashboard} />
            </DefaultLayout>
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
