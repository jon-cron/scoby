import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
const Modal = ({ open, onClose, login, toggleLogin }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <BackDrop>
      {login ? (
        <ModalBG className="modal">
          <h2>Login</h2>
          <form>
            <label>
              <span>Email:</span>
              <input type="text" placeholder="enter email" />
            </label>
            <label>
              <span>Password:</span>
              <input type="text" placeholder="enter password" />
            </label>
            <div>
              <button className="btn">Login</button>
              <button className="btn" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
          <p>
            If you don't have an account click here:{" "}
            <button className="btn" onClick={toggleLogin}>
              register
            </button>
          </p>
        </ModalBG>
      ) : (
        <ModalBG className="modal">
          <h2>Register</h2>
          <form>
            <label>
              <span>Email:</span>
              <input type="text" placeholder="enter email" />
            </label>
            <label>
              <span>Password:</span>
              <input type="text" placeholder="enter password" />
            </label>
            <div>
              <button className="btn">Login</button>
              <button className="btn" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
          <p>
            Do you already have an account?{" "}
            <button className="btn" onClick={toggleLogin}>
              login
            </button>
          </p>
        </ModalBG>
      )}
    </BackDrop>,
    document.getElementById("portal")
  );
};
const ModalBG = styled.div`
  position: fixed;
  height: 40vh;
  width: 80vw;
  top: 10vh;
  left: 10vw;
  @media screen and (min-width: 800px) {
    height: 40vh;
    width: 60vw;
    top: 30vh;
    left: 20vw;
  }
  @media screen and (min-width: 1000px) {
    height: 40vh;
    width: 50vw;
    top: 30vh;
    left: 25vw;
  }
  @media screen and (min-width: 1200px) {
    height: 40vh;
    width: 50vw;
    top: 30vh;
    left: 25vw;
  }
  @media screen and (min-width: 1400px) {
    height: 40vh;
    width: 40vw;
    top: 30vh;
    left: 30vw;
  }
  @media screen and (min-width: 1600px) {
    height: 40vh;
    width: 30vw;
    top: 30vh;
    left: 35vw;
  }
  transform: center;
  background: white;
  z-index: 1000;
  padding: 10px;
  border-radius: 5px;
  h2 {
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }
  form label {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 8px;
    height: 2rem;
  }
  form label span {
    padding-right: 5px;
    height: 100%;
    text-align: center;
    font-size: 20px;
  }
  form label input {
    width: 80%;
    height: 100%;
  }
  form div {
    padding-top: 10px;
    display: flex;
    justify-content: space-evenly;
  }
  p {
    text-align: center;
  }
`;
const BackDrop = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export default Modal;
