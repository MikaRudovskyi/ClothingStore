import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) {
      navigate("/"); // Если нет пользователя, редирект на главную
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    alert("Changes saved!");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AccountContainer>
      <Title>Account Settings</Title>
      <Form>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />

        <label>Email</label>
        <input type="email" name="email" value={user.email} readOnly />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={user.phone}
          onChange={handleChange}
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={user.address}
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
