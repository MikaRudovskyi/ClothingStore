import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

const ContactsWrapper = styled.div`
  min-height: 100vh;
  background-color: #121212;
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: #1e1e1e;
  border-radius: 20px;
  padding: 50px 40px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.06);
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #ffd700;
  text-align: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-size: 1.2rem;
  color: #cccccc;
  text-align: center;
  margin-bottom: 40px;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #f0f0f0;
  margin-bottom: 6px;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #333;
  background-color: #181818;
  color: #fff;
  font-size: 1rem;
  margin-bottom: 24px;

  &:focus {
    border-color: #ffd700;
    outline: none;
  }

  &::placeholder {
    color: #888;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #333;
  background-color: #181818;
  color: #fff;
  font-size: 1rem;
  height: 140px;
  resize: vertical;
  margin-bottom: 30px;

  &:focus {
    border-color: #ffd700;
    outline: none;
  }

  &::placeholder {
    color: #888;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background-color: #ffd700;
  color: #121212;
  padding: 16px;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e6c200;
  }

  &:disabled {
    background-color: #888;
    cursor: not-allowed;
  }
`;

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid #121212;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  margin-left: 10px;
`;

const Contacts = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success(t("toastMessage"), {
        position: "bottom-right",
        theme: "dark",
      });
      setForm({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <ContactsWrapper>
      <FormContainer>
        <Title>{t("contacts")}</Title>
        <Subtitle>{t("feedback")}</Subtitle>
        <form onSubmit={handleSubmit}>
          <Label>{t("yourName")}*</Label>
          <Input
            type="text"
            name="name"
            placeholder={t("enterYourName")}
            value={form.name}
            onChange={handleChange}
            required
          />

          <Label>{t("email")}*</Label>
          <Input
            type="email"
            name="email"
            placeholder="example@example.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <Label>{t("writeYourQuest")}*</Label>
          <Textarea
            name="message"
            placeholder={t("writeYourQuest")}
            value={form.message}
            onChange={handleChange}
            required
          />

          <SubmitButton type="submit" disabled={loading}>
            {loading ? (
              <>
                {t("sending")}
                <Spinner />
              </>
            ) : (
              t("send")
            )}
          </SubmitButton>
        </form>
      </FormContainer>
      <ToastContainer />
    </ContactsWrapper>
  );
};

export default Contacts;
