import React, { useContext, useEffect, useReducer, createContext } from "react";
import { auth } from "../firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();
const authReducer = (state, action) => {
  switch (action.type) {
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    case "LOGIN":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });
  //reducer function go here

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({
        type: "AUTH_IS_READY",
        payload: user,
      });
      console.log(user);
      unsub();
    });
  }, []);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Must use auth within the provider");
  }
  return context;
};
