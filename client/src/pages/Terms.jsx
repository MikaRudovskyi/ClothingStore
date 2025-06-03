import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <TermsContainer>
      <h2>{t("termsOfUse")}</h2>
      <p>{t("termsOfUseWelcome")}</p>
      <p>
        <b>{t("termsOfUse")}</b>
      </p>
      <ul>
        <li>{t("termsOfUseMust1")}</li>
        <li>{t("termsOfUseMust2")}</li>
        <li>{t("termsOfUseMust3")}</li>
      </ul>
      <p>
        <b>{t("termsOfUsePayment")}</b>
      </p>
      <ul>
        <li>{t("termsOfUsePaymentText1")}</li>
        <li>{t("termsOfUsePaymentText2")}</li>
      </ul>
      <p>
        <b>{t("termsOfUseShipping")}</b>
      </p>
      <ul>
        <li>{t("termsOfUseShippingText1")}</li>
        <li>{t("termsOfUseShippingText2")}</li>
      </ul>
      <p>
        <b>{t("termsOfUseReturns")}</b>
      </p>
      <ul>
        <li>{t("termsOfUseReturnsText1")}</li>
        <li>{t("termsOfUseReturnsText2")}</li>
      </ul>
      <p>
        <b>{t("termsOfUseLimitation")}</b>
      </p>
      <p>{t("termsOfUseLimitationText")}</p>
      <p>
        <b>{t("privacyPolicyChanges")}</b>
      </p>
      <p>{t("termsOfUseChangesText")}</p>
      <p>
        {t("privacyPolicyQuest")}{" "}
        <a href="mailto:terms@clothingstore.com">terms@clothingstore.com</a>
      </p>
    </TermsContainer>
  );
};

export default Terms;
