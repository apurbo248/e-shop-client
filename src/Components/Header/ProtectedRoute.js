import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = ({ isAuthenticated }) => {
 

  const location = useLocation();
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/v1/user/login" state={{ from:  location }} reload />
  );
};

export default ProtectedRoute;
