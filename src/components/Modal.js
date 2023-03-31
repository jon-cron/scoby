import React, { useState } from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
import { useLogin } from "../hooks/useLogin.js";
import { useRegister } from "../hooks/useRegister.js";
const Modal = ({ open, onClose, isLogin, toggleLogin }) => {
  const { loginError, login } = useLogin();
  const { registerError, isPending, register } = useRegister();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupError, setSignupError] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [profileImgError, setProfileImgError] = useState(null);
  if (!open) return null;
  const handleLogin = () => {};
  const handleRegister = (e) => {
    e.preventDefault();
    setSignupError(null);
    if (password.length < 10) {
      return;
    }
    register(email, password, displayName, profileImg);
    if (registerError) {
      setSignupError(registerError);
    }
  };
  const handleImg = (e) => {
    setProfileImg(null);
    setProfileImgError(null);
    let selected = e.target.files[0];
    if (!selected) {
      setProfileImgError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setProfileImgError("Please select an image file");
      return;
    }
    if (selected.size > 100000) {
      setProfileImgError("File size too larger");
      return;
    }
    setProfileImgError(null);
    setProfileImg(selected);
    console.log(profileImg);
  };
  return ReactDom.createPortal(
    <BackDrop>
      {isLogin ? (
        <ModalBG className="modal">
          <h2>Login</h2>
          <form>
            <label>
              <span>Email:</span>
              <input
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter email"
              />
            </label>
            <label>
              <span>Password:</span>
              <input type="password" placeholder="enter password" />
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
          <form onSubmit={handleRegister}>
            <label>
              <span>Email:</span>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter email"
                value={email}
              />
            </label>
            <label>
              <span>Name:</span>
              <input
                type="text"
                placeholder="enter name"
                onChange={(e) => setDisplayName(e.target.value)}
                value={displayName}
              />
            </label>
            <label>
              <span>Image:</span>
              <input type="file" onChange={handleImg} />
            </label>
            {profileImgError && <div>{profileImgError}</div>}
            <label>
              <span>Password:</span>
              <input
                type="password"
                placeholder="enter password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </label>
            {signupError && <div>{signupError}</div>}
            <div>
              <button className="btn">Register</button>
              <button className="btn" type="button" onClick={onClose}>
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
  height: 22em;
  width: 80vw;
  top: 10vh;
  left: 10vw;
  @media screen and (min-width: 800px) {
    height: 22em;
    width: 60vw;
    top: 30vh;
    left: 20vw;
  }
  @media screen and (min-width: 1000px) {
    height: 22em;
    width: 50vw;
    top: 30vh;
    left: 25vw;
  }
  @media screen and (min-width: 1200px) {
    height: 22em;
    width: 50vw;
    top: 30vh;
    left: 25vw;
  }
  @media screen and (min-width: 1400px) {
    height: 22em;
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
