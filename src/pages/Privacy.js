import styled from "styled-components";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <PrivacyContainer>
      <h2>{t("privacyPolicy")}</h2>
      <p>{t("privacyPolicyText")}</p>
      <p>
        <b>{t("privacyPolicyCollection")}</b>
        {t("privacyPolicyCollectionText")}
      </p>
      <p>
        <b>{t("privacyPolicyUse")}</b>
        {t("privacyPolicyUseText")}
      </p>
      <p>
        <b>{t("privacyPolicySecurity")}</b>
        {t("privacyPolicySecurityText")}
      </p>
      <p>
        <b>{t("privacyPolicyCookies")}</b>
        {t("privacyPolicyCookiesText")}
      </p>
      <p>
        <b>{t("privacyPolicyChanges")}</b>
        {t("privacyPolicyChangesText")}
      </p>
      <p>
        {t("privacyPolicyQuest")}{" "}
        <a href="mailto:privacy@clothingstore.com">privacy@clothingstore.com</a>
      </p>
    </PrivacyContainer>
  );
};

export default Privacy;
