import React, { useState } from "react";
import { useAuthContext } from "../context/auth_context.js";
import Modal from "./Modal.js";
const AuthButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const { user } = useAuthContext();
  if (!user) {
    return (
      <div>
        <button
          className="btn"
          onClick={() => {
            setLogin(true);
            setIsOpen(true);
          }}
        >
          Login
        </button>
        <button
          className="btn"
          onClick={() => {
            setLogin(false);
            setIsOpen(true);
          }}
        >
          Register
        </button>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          login={login}
          toggleLogin={() => setLogin(!login)}
        ></Modal>
      </div>
    );
  } else {
    return (
      <div>
        {user} <button>Logout</button>
      </div>
    );
  }
};

export default AuthButtons;
