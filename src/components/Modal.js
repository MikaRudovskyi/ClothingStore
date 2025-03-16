import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.3s ease;
`;

const ModalContent = styled.div`
  background: #282828;
  padding: 50px;
  border-radius: 12px;
  max-width: 900px;
  position: relative;
  color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);

  h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #ffd700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }

  p {
    font-size: 1.2rem;
    line-height: 1.9;
    margin-bottom: 25px;
  }

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 215, 0, 0.2);
    border: none;
    font-size: 1.8rem;
    color: #ffd700;
    cursor: pointer;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: rgba(255, 215, 0, 0.4);
    }
  }
`;

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>&times;</button>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
