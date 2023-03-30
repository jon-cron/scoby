import React, { useState } from "react";
import { useAuthContext } from "../context/auth_context.js";
import Modal from "./Modal.js";
const AuthButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();
  if (!user) {
    return (
      <div>
        <button className="btn" onClick={() => setIsOpen(true)}>
          Login
        </button>
        <button className="btn" onClick={() => setIsOpen(true)}>
          Register
        </button>
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          I am a modal
        </Modal>
      </div>
    );
  }
};

export default AuthButtons;
