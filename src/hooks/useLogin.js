import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config.js";
import { useState } from "react";
import { useAuthContext } from "../context/auth_context.js";
export const useLogin = () => {
  const [loginError, setLoginError] = useState(null);

  // NOTE this is how we hook into the auth context and trigger actions in the reducer
  const { dispatch } = useAuthContext();

  const login = (email, password) => {
    setLoginError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };
  return { loginError, login };
};
