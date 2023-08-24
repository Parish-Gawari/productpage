/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const setUserDataHandler = (data) => setUserData(data);
  return (
    <UserContext.Provider value={{ userData, setUserDataHandler }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
