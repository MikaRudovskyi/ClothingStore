import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { updateUser } from "../components/loginComponents/LoginModal.api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AccountContainer = styled.div`
  max-width: 500px;
  margin: 60px auto;
  padding: 30px 25px;
  background: linear-gradient(145deg, #1a1a1a, #222);
  border-radius: 16px;
  box-shadow: 0 0 20px rgba(255, 193, 7, 0.1);
  color: #eee;
  backdrop-filter: blur(6px);
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 600px) {
    margin: 20px 10px;
    padding: 20px 15px;
    border-radius: 12px;
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #ffc107;
  font-size: 2rem;
  margin-bottom: 20px;
  letter-spacing: 1px;
  text-shadow: 0 0 5px #ffeb3b66;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 14px;
    font-size: 1rem;
    color: #ccc;
    text-shadow: 0 0 2px #000;
  }

  input {
    padding: 12px;
    margin-top: 6px;
    background: #111;
    color: #eee;
    border: 1px solid #333;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    box-shadow: inset 0 0 5px #000;

    &:focus {
      outline: none;
      border-color: #ffc107;
      box-shadow: 0 0 8px #ffc10766;
    }

    @media (max-width: 600px) {
      font-size: 0.95rem;
      padding: 10px;
    }
  }
`;

const Button = styled.button`
  margin-top: 25px;
  padding: 12px;
  background: linear-gradient(145deg, #ffc107, #ff9800);
  color: #111;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 1rem;
  box-shadow: 0 4px 15px rgba(255, 193, 7, 0.3);
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(145deg, #ffb300, #ffa000);
    box-shadow: 0 6px 20px rgba(255, 193, 7, 0.5);
    transform: translateY(-1px);
  }

  @media (max-width: 600px) {
    font-size: 0.95rem;
    padding: 10px;
  }
`;

const LogoutButton = styled(Button)`
  background: linear-gradient(145deg, #ff4444, #cc0000);
  color: #fff;
  margin-top: 15px;
  box-shadow: 0 4px 15px rgba(255, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(145deg, #ff0000, #b00000);
    box-shadow: 0 6px 20px rgba(255, 0, 0, 0.4);
  }
`;

const Account = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [updatedUser, setUpdatedUser] = useState(user || {});

  useEffect(() => {
    if (!user) {
      navigate("/account");
    } else {
      setUpdatedUser(user);
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    logout();
    localStorage.removeItem("user");
    toast.success("Logged out successfully!", {
      position: "bottom-right",
      theme: "dark",
    });
    setTimeout(() => {
      navigate("/");
      window.location.reload();
    }, 1500);
  };

  const handleSave = async () => {
    try {
      let currentUser = JSON.parse(localStorage.getItem("user"));
      if (!currentUser?.id) {
        toast.error("User ID missing!", {
          position: "bottom-right",
          theme: "dark",
        });
        return;
      }

      const userToUpdate = {
        ...updatedUser,
        userId: currentUser.id,
      };

      const response = await updateUser(userToUpdate);

      localStorage.setItem("user", JSON.stringify(response.user));

      toast.success("Changes saved successfully!", {
        position: "bottom-right",
        theme: "dark",
      });
    } catch (error) {
      toast.error(`Error: ${error.message}`, {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  return (
    <>
      <AccountContainer>
        <Title>Account Settings</Title>
        <Form>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            value={updatedUser.name || ""}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={updatedUser.email || ""}
            readOnly
          />
          <label>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={updatedUser.phone || ""}
            onChange={handleChange}
          />
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={updatedUser.address || ""}
            onChange={handleChange}
          />
          <Button type="button" onClick={handleSave}>
            Save
          </Button>
          <LogoutButton type="button" onClick={handleLogout}>
            Log out
          </LogoutButton>
        </Form>
      </AccountContainer>
      <ToastContainer />
    </>
  );
};

export default Account;
