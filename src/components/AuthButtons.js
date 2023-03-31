import React, { useState } from "react";
import styled from "styled-components";
import { useAuthContext } from "../context/auth_context.js";
import { useLogout } from "../hooks/useLogout.js";
import Modal from "./Modal.js";
const AuthButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false);
  const { authIsReady, user } = useAuthContext();
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
    setIsOpen(false);
  };
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
      <HelloUser>
        <span>Hello, {user.displayName}</span>
        <button className="btn" onClick={handleClick}>
          Logout
        </button>
      </HelloUser>
    );
  }
};
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;
const HelloUser = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  span {
    font-weight: bold;
    font-size: 25px;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: uppercase;
  }
`;

export default AuthButtons;
