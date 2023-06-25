import { useUser } from "../hooks/index";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ path }) => {
  const user = useUser();

  if (!user?.isLogged) return <Navigate to={path} replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
