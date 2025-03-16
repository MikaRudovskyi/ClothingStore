import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #1e1e1e;
  padding: 40px 20px;
  text-align: center;
  color: #888;

  p {
    margin-bottom: 10px;
  }

  a {
    color: #888;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffd700;
    }
  }

  .social-links {
    margin-top: 20px;

    a {
      margin: 0 10px;
      font-size: 1.5rem;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()} Clothing Store. All rights reserved.
      </p>
      <p>
        <a href="/privacy">Privacy Policy</a> |{" "}
        <a href="/terms">Terms of Use</a>
      </p>
      <div className="social-links">
        <a href="https://www.facebook.com/NatusVincere">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/natus_vincere_official/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@NAVICounterStrike">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </FooterContainer>
  );
};

export default Footer;
