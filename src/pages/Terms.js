import React from "react";
import styled from "styled-components";

const TermsContainer = styled.div`
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

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 10px;
  }
`;

const Terms = () => {
  return (
    <TermsContainer>
      <h2>Terms of Use</h2>
      <p>
        Welcome to our online clothing store. By using this site, you agree to
        our terms.
      </p>
      <p>
        <b>Terms of Use:</b>
      </p>
      <ul>
        <li>You must be of legal age to make purchases.</li>
        <li>You must not use the site for illegal purposes.</li>
        <li>
          We reserve the right to change prices and products without notice.
        </li>
      </ul>
      <p>
        <b>Payment:</b>
      </p>
      <ul>
        <li>We accept a variety of payment methods.</li>
        <li>All payments must be made before the item is shipped.</li>
      </ul>
      <p>
        <b>Shipping:</b>
      </p>
      <ul>
        <li>We ship to the addresses provided.</li>
        <li>Shipping times may vary.</li>
      </ul>
      <p>
        <b>Returns:</b>
      </p>
      <ul>
        <li>We accept returns within 30 days.</li>
        <li>Items must be in their original condition.</li>
      </ul>
      <p>
        <b>Limitation of Liability:</b>
      </p>
      <p>We are not responsible for any damages arising from using our site.</p>
      <p>
        <b>Changes:</b>
      </p>
      <p>
        We may update these terms and conditions, and changes will be posted on
        this page.
      </p>
      <p>
        If you have any questions, please contact us at:{" "}
        <a href="mailto:terms@clothingstore.com">terms@clothingstore.com</a>
      </p>
    </TermsContainer>
  );
};

export default Terms;
