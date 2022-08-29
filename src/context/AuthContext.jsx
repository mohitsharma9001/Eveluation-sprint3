import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth,setAuth] = React.useState(false)
  function handleAuth(){
    setAuth(!auth)
  }
  return <AuthContext.Provider value={{handleAuth,auth}}>{children}</AuthContext.Provider>;
};
