import React   from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const { isAuthenticated } = useSelector((state) => state.userInfo);
console.log(isAuthenticated);
  const users = { isAuthenticated };
  return users && users.isAuthenticated;
};
const ProtectedRoute = () => {
  const isAuth = useAuth();
  
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/v1/user/login"  />
  );
};

export default ProtectedRoute;
