import React, { createContext, useState } from "react";
import UseFirebase from "../Hooks/UseFirebase";
// create context
export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  // get value from use firebase
  const allContext = UseFirebase();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
