import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const getInitialUser = () => {
    try {
      const stored = localStorage.getItem("Users");
      return stored ? JSON.parse(stored) : undefined;
    } catch (e) {
      console.error("Failed to parse stored user:", e);
      localStorage.removeItem("Users");
      return undefined;
    }
  };

  const [authUser, setAuthUserState] = useState(getInitialUser);

  const setAuthUser = (user) => {
    if (user) {
      localStorage.setItem("Users", JSON.stringify(user));
    } else {
      localStorage.removeItem("Users");
    }
    setAuthUserState(user || undefined);
  };

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const UseAuth = () => useContext(AuthContext);