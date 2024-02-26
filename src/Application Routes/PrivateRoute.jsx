import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  // const storedToken = localStorage.getItem("token");
  // let auth = {'token': true}
  const token = useSelector((state) => state?.auth?.token);
  const isAuthenticated = token !== null && token !== undefined && token !== "";

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;
