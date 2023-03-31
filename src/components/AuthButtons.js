import React, { useState } from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/auth_context.js";
import Modal from "./Modal.js";
const AuthButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const { authIsReady, user } = useAuthContext();
  if (!user) {
    return (
      <ButtonDiv>
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
          isLogin={login}
          toggleLogin={() => setLogin(!login)}
        ></Modal>
      </ButtonDiv>
    );
  }
  if (authIsReady && user) {
    return (
      <div>
        <button>Logout</button>
      </div>
    );
  }
};
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export default AuthButtons;
