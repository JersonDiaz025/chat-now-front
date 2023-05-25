import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routes } from "../routes/routes";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import { auth } from "../constants/index";

const AppRouter = () => {
  const store = useSelector((state) => state.user);
  console.log(store)
  return (
    <Router>
      <Routes>
        {routes?.map(
          ({ path, component: Component, isLayout, isPrivate }, index) => (
            <Route
              path={path}
              key={index}
              element={
                isPrivate && !store.isLoggedIn ? (
                  <Navigate to={`/${auth.LOGIN}`} replace={true} />
                ) : (
                  <Layout isLayout={isLayout}>
                    <Component/>
                  </Layout>
                )
              }
            />
          )
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
