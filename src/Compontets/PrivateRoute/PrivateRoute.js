import React from "react";
import { Navigate, useLocation } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import LoadingSpiner from "../Shared/LoadingSpiner/LoadingSpiner";

const PrivateRoute = ({ children, ...rest }) => {
  let { user, isLoading } = UseAuth();
  let location = useLocation();
  if (isLoading) {
    return <LoadingSpiner loading={isLoading}></LoadingSpiner>;
  }
  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

export default PrivateRoute;
