import React from "react";
import { useAuthContext } from "../context/auth_context.js";
function AuthButtons() {
  const { user } = useAuthContext();
  console.log(user);
  return (
    <div>
      <button className="btn">Login</button>
      <button className="btn">Register</button>
    </div>
  );
}

export default AuthButtons;
