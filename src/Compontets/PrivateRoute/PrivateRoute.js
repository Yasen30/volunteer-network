import React from "react";
import { Redirect, Route } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import LoadingSpiner from "../Shared/LoadingSpiner/LoadingSpiner";

const PrivateRoute = ({ children, ...rest }) => {
  let { user, isLoading } = UseAuth();
  if (isLoading) {
    return <LoadingSpiner loading={isLoading}></LoadingSpiner>;
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
