import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { updateUser } from "../components/loginComponents/LoginModal.api";

const AccountContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: #222;
  border-radius: 12px;
  color: #eee;
`;

const Title = styled.h2`
  text-align: center;
  color: #ffc107;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 10px;
  }

  input {
    padding: 10px;
    margin-top: 5px;
    background: #333;
    color: #eee;
    border: 1px solid #444;
    border-radius: 6px;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px;
  background: #ffc107;
  color: #222;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #ffb300;
  }
`;

const LogoutButton = styled(Button)`
  background: red;
  margin-top: 10px;

  &:hover {
    background: darkred;
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
    navigate("/");
    window.location.reload();
  };

  const handleSave = async () => {
    try {
      let currentUser = null;
      try {
        currentUser = JSON.parse(localStorage.getItem("user"));
      } catch (e) {
        alert("User data corrupted in localStorage.");
        return;
      }
      if (!currentUser?.id) {
        alert("User ID missing.");
        return;
      }

      const userToUpdate = {
        ...updatedUser,
        userId: currentUser.id,
      };

      const response = await updateUser(userToUpdate);

      localStorage.setItem("user", JSON.stringify(response.user));

      alert("Changes saved!");
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
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
  );
};

export default Account;
