import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { registerUser, loginUser } from "./LoginModal.api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: #222;
  padding: 40px;
  border-radius: 12px;
  width: 550px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  position: relative;
  animation: ${slideUp} 0.3s ease-out;

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(90deg);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #ffc107;
  opacity: 0.8;
  transition: opacity 0.2s ease, transform 0.3s ease, background-color 0.3s ease;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 1;
    transform: rotate(90deg);
    animation: ${rotate} 0.3s ease;
    background-color: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  color: #ffc107;
  font-size: 2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 8px;
    color: #ddd;
    font-weight: 500;
  }

  input {
    padding: 14px;
    margin-bottom: 25px;
    border: 1px solid #444;
    border-radius: 6px;
    font-size: 1rem;
    background-color: #333;
    color: #eee;
    transition: border-color 0.3s ease, transform 0.3s ease;

    &:focus {
      outline: none;
      border-color: #ffc107;
      transform: scale(1.02);
    }

    &::placeholder {
      color: #bbb;
    }
  }

  button[type="submit"] {
    padding: 14px 25px;
    background-color: #ffc107;
    color: #222;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
      background-color: #ffb300;
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.98);
    }
  }

  @media (max-width: 768px) {
    button[type="submit"] {
      font-size: 0.9rem;
      padding: 12px 20px;
    }

    input {
      font-size: 0.9rem;
    }
  }
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  color: #ddd;
  gap: 10px;
  white-space: nowrap;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #ffc107;
  }

  &:focus + span {
    box-shadow: 0 0 1px #ffc107;
  }

  &:checked + span:before {
    transform: translateX(20px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    width: 38px;
    height: 18px;

    &:before {
      height: 14px;
      width: 14px;
    }
  }
`;

const SwitchLabel = styled.span`
  margin-left: 1px;
  margin-bottom: 7px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 11px;
  }
`;

const ForgotPasswordLink = styled.a`
  margin-left: auto;
  margin-bottom: 7px;
  color: #ffc107;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    color: #ffb300;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 10px;
  }
`;

const SignUp = styled.div`
  text-align: center;
  margin-top: 30px;
  color: #999;

  a {
    color: #ffc107;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffb300;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 20px;
  }
`;

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        const userData = { name, email, phone, password };
        const response = await registerUser(userData);
        login(response.user, response.token);
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(response.user));
          localStorage.setItem("token", response.token);
        }
        toast.success("Registration successful!");
        onClose();
        navigate("/");
      } else {
        const credentials = { email, password };
        const response = await loginUser(credentials);
        login(response.user, response.token);
        if (rememberMe) {
          localStorage.setItem("user", JSON.stringify(response.user));
          localStorage.setItem("token", response.token);
        }
        toast.success("Login successful!");
        onClose();
        navigate("/account");
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      toast.error("An error occurred.");
    }
  };

  const toggleRegister = (e) => {
    e.preventDefault();
    setIsRegistering(!isRegistering);
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>{isRegistering ? "REGISTRATION" : "FILL THE FORM"}</Title>
        <Form onSubmit={handleSubmit}>
          {isRegistering && (
            <>
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your Name"
              />
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="Enter phone"
              />
            </>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@example.com"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="•••••••••"
          />
          {!isRegistering && (
            <RememberMe>
              <Switch>
                <SwitchInput
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <Slider />
              </Switch>
              <SwitchLabel htmlFor="remember">Remember me</SwitchLabel>
              <ForgotPasswordLink href="#">
                Do not remember the password?
              </ForgotPasswordLink>
            </RememberMe>
          )}
          <button type="submit">{isRegistering ? "SIGN UP" : "LOGIN"}</button>
        </Form>
        <SignUp>
          {isRegistering ? (
            <>
              Already have an account?{" "}
              <a href="#" onClick={toggleRegister}>
                Login
              </a>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <a href="#" onClick={toggleRegister}>
                Register
              </a>
            </>
          )}
        </SignUp>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LoginModal;
