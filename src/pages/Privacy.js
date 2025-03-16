import React from "react";
import styled from "styled-components";

const PrivacyContainer = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #ffd700;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const Privacy = () => {
  return (
    <PrivacyContainer>
      <h2>Privacy Policy</h2>
      <p>
        As a clothing store, we take your privacy seriously. This policy
        describes how we collect, use and protect your personal information.
      </p>
      <p>
        <b>Collection of Information:</b> We may collect information such as
        your name, email address, shipping address and payment details when you
        place an order or register on our site.
      </p>
      <p>
        <b>Use of Information:</b> We use your information to process orders,
        improve our site and send you news and offers (if you have subscribed).
      </p>
      <p>
        <b>Security of Information:</b> We take steps to protect your
        information from unauthorized access.
      </p>
      <p>
        <b>Cookies:</b> We use cookies to improve your experience of the site.{" "}
      </p>
      <p>
        <b>Changes:</b> We may update this policy, and changes will be posted on
        this page.
      </p>
      <p>
        If you have any questions, please contact us at:{" "}
        <a href="mailto:privacy@clothingstore.com">privacy@clothingstore.com</a>
      </p>
    </PrivacyContainer>
  );
};

export default Privacy;
