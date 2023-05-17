import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "../routes/routes";
import Layout from "../Layout/Layout";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {routes?.map(({ path, component: Component, isLayout }, index) => (
          <Route
            path={path}
            key={index}
            element={
              <Layout isLayout={isLayout}>
                <Component />
              </Layout>
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default AppRouter;
