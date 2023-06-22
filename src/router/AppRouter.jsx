/* eslint-disable react-hooks/exhaustive-deps */
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useHref,
  useNavigate,
} from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { routes } from "../routes/routes";
import Layout from "../Layout/Layout";
import { ROUTES } from "../constants";
import { useUser, useTheme } from "../hooks/index";
import defaultTheme from "../themes/defaultTheme";
import { useEffect } from "react";

function AppRouter() {
  const { darkMode } = useTheme();

  const theme = defaultTheme(darkMode);
  return (
    <Router>
      <UserValidator>
        <Routes>
          {routes?.map(({ path, component: Component, isLayout }, index) => (
            <Route
              path={path}
              key={index}
              element={
                <ThemeProvider theme={theme}>
                  <Layout isLayout={isLayout}>
                    <Component />
                  </Layout>
                </ThemeProvider>
              }
            />
          ))}
        </Routes>
      </UserValidator>
    </Router>
  );
}

function UserValidator({ children }) {
  const navigate = useNavigate();
  const href = useHref();
  const user = useUser();
  const currentRoute = routes.find((route) => route.path === href);
  useEffect(() => {
    if (user?.isLogged) {
      if (currentRoute?.onlyUnknownUsers) {
        navigate(ROUTES.HOME);
      }
    } else {
      if (currentRoute?.isPrivate) {
        navigate(ROUTES.LOGIN);
      }
    }
  }, [user, currentRoute]);

  return children;
}

export default AppRouter;
