import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const { isAuthenticated } = useSelector((state) => state.userInfo);

  const users = { isAuthenticated };
  return users && users.isAuthenticated;
};

const ProtectedRoute = () => {
 
  
  const isAuth = useAuth();
  const location = useLocation();
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/v1/user/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
