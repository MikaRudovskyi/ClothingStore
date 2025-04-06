import React, { useState } from "react";
import styled from "styled-components";
import bgImage from "../../assets/images/banners/newsletter-bg.png";

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
      margin-bottom: 15px; /* Добавляем отступ для мобильных устройств */

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

  /* Мобильная версия */
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

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Вы подписались на рассылку с email: ${email}`);
    setEmail("");
  };

  return (
    <NewsletterContainer>
      <h2>Subscribe to the newsletter</h2>
      <p>Receive notifications about new arrivals and discounts.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Введите ваш email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </NewsletterContainer>
  );
};

export default Newsletter;
