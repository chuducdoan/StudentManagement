import { useAppSelector } from "app/hooks";
import { darkTheme, lightTheme } from "common/style/themes";
import { Loading } from "components";
import { selectTheme } from "features/theme/themeSlice";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { DefaultLayout } from "layout";
import { Suspense, lazy } from "react";
import { END_POINT } from "common/constant/endPoint";

const Dashboard = lazy(() => import("pages/Dashboard"));
const Student = lazy(() => import("pages/Student"));
const StudentForm = lazy(() => import("pages/Student/StudentForm"));
const StudentDetail = lazy(() => import("pages/Student/StudentDetail"));
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
            <Route exact path={END_POINT.DASHBOARD} component={Dashboard} />
            <Route exact path={END_POINT.STUDENT} component={Student} />
            <Route exact path={END_POINT.STUDENT_ADD} component={StudentForm} />
            <Route
              exact
              path={END_POINT.STUDENT_DETAIL}
              component={StudentDetail}
            />
          </DefaultLayout>
        </Switch>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
