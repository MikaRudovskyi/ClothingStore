import { useState } from "react";
import styled from "styled-components";
import bgImage from "../../assets/images/banners/newsletter-bg.png";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

const NewsletterContainer = styled.div`
  padding: 60px 40px;
  background-image: url(${bgImage});
  background-size: cover;
  background-position: center;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  margin: 40px auto;
  max-width: 700px;
  color: #fff;
  font-family: "Roboto", sans-serif;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
    text-align: left;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 40px;
    text-align: left;
  }

  form {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    input[type="email"] {
      padding: 15px 20px;
      border: none;
      border-radius: 30px;
      margin-right: 20px;
      background-color: rgba(255, 255, 255, 0.2);
      color: #fff;
      width: 100%;
      max-width: 400px;
      transition: box-shadow 0.3s ease;
      margin-bottom: 15px;

      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.5);
      }
    }

    button {
      background-color: #ffd700;
      color: #121212;
      padding: 15px 35px;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      font-size: 1.2rem;
      font-weight: 600;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin: 20px 10px;
    max-width: 100%;

    h2 {
      font-size: 2rem;
      margin-bottom: 20px;
    }

    p {
      font-size: 1rem;
      margin-bottom: 20px;
    }

    form {
      flex-direction: column;
      align-items: center;
    }

    input[type="email"] {
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 15px;
    }

    button {
      max-width: 100%;
      padding: 12px 30px;
    }
  }
`;

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_nzi1h5l",
        "template_cssy30s",
        {
          user_email: email,
        },
        "5o8HIhpD-d843oCQ7"
      );

      toast.success(t("toastSubscription"), {
        position: "bottom-right",
        theme: "dark",
      });
      setEmail("");
    } catch {
      toast.error(t("toastError"), {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  return (
    <>
      <NewsletterContainer>
        <h2>{t("subscribeNewsletter")}</h2>
        <p>{t("receiveNotifications")}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder={t("enterEmail")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">{t("subscribe")}</button>
        </form>
      </NewsletterContainer>
      <ToastContainer />
    </>
  );
};

export default Newsletter;
