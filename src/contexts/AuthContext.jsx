/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isUserLogin, setIsUserLogin] = useState(
    sessionStorage.getItem("isUserLogin") === true
  );

  useEffect(() => {
    sessionStorage.setItem("isUserLogin", isUserLogin);
  }, [isUserLogin]);

  const loginHandler = () => setIsUserLogin(true);
  const logoutHandler = () => setIsUserLogin(false);

  return (
    <AuthContext.Provider value={{ isUserLogin, loginHandler, logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
