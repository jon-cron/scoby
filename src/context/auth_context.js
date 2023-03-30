import React, { useContext, useEffect, useState, useReducer } from "react";
import { auth } from "../firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";
import { AUTH_IS_READY } from "../actions.js";

const AuthContext = React.createContext();
const authReducer = (state, action) => {
  switch (action.type) {
    case AUTH_IS_READY:
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });
  //reducer function go here

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      dispatch({ type: AUTH_IS_READY, payload: user });
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
  return useContext(AuthContext);
};
