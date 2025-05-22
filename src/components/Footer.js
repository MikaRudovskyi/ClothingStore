import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()} {t("allrights")}
      </p>
      <p>
        <a href="/privacy">{t("privacyPolicy")}</a> |{" "}
        <a href="/terms">{t("termsOfUse")}</a>
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
