import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";
const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDom.createPortal(
    <BackDrop>
      <ModalBG className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </ModalBG>
    </BackDrop>,
    document.getElementById("portal")
  );
};
const ModalBG = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: center;
  background: white;
  padding: 50px;
  z-index: 1000;
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
