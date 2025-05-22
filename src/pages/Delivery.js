import styled from "styled-components";
import { useTranslation } from "react-i18next";

const DeliveryContainer = styled.div`
  padding: 80px 20px;
  max-width: 1000px;
  margin: 0 auto;
  font-family: "Inter", "Segoe UI", sans-serif;
  color: #fefefe;
`;

const Section = styled.div`
  background: linear-gradient(145deg, #1c1c1c, #141414);
  border: 1px solid #2a2a2a;
  border-radius: 24px;
  padding: 40px 30px;
  margin-bottom: 40px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(255, 215, 0, 0.15);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #ffd700;
  text-align: center;
  letter-spacing: 1px;
`;

const Subtitle = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 20px;
  color: #ffcc00;
  border-left: 4px solid #ffd700;
  padding-left: 12px;
`;

const Text = styled.p`
  font-size: 1.15rem;
  line-height: 1.9;
  margin-bottom: 16px;
  color: #ddd;
`;

const List = styled.ul`
  padding-left: 24px;
  margin-top: 10px;
`;

const ListItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 10px;
  position: relative;
  padding-left: 12px;

  &::before {
    content: "•";
    position: absolute;
    left: 0;
    color: #ffd700;
    font-size: 1.2rem;
  }
`;

const Link = styled.a`
  color: #ffd700;
  text-decoration: underline;
  transition: color 0.2s ease;

  &:hover {
    color: #ffae00;
    text-decoration: none;
  }
`;

const Delivery = () => {
  const { t } = useTranslation();

  return (
    <DeliveryContainer>
      <Title>{t("deliveryNfaq")}</Title>
      <Section>
        <Subtitle>{t("deliverySubtitle1")}</Subtitle>
        <Text>{t("deliveryText1")}</Text>
      </Section>
      <Section>
        <Subtitle>{t("deliverySubtitle2")}</Subtitle>
        <Text>{t("deliveryText2")}</Text>
        <Text>{t("deliveryText3")}</Text>
      </Section>
      <Section>
        <Subtitle>{t("deliverySubtitle3")}</Subtitle>
        <Text>
          {t("deliveryText4")}{" "}
          <Link
            href="https://www.ukrposhta.ua/en"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("deliveryTextHere")}
          </Link>
          .
        </Text>
        <Text>{t("deliveryText5")}</Text>
      </Section>
      <Section>
        <Subtitle>{t("deliverySubtitle4")}</Subtitle>
        <List>
          <ListItem>{t("deliveryItem1")}</ListItem>
          <ListItem>{t("deliveryItem2")}</ListItem>
          <ListItem>{t("deliveryItem3")}</ListItem>
          <ListItem>{t("deliveryItem4")}</ListItem>
          <ListItem>{t("deliveryItem5")}</ListItem>
          <ListItem>{t("deliveryItem6")}</ListItem>
        </List>
        <Text>{t("deliveryText6")} </Text>
      </Section>
      <Section>
        <Subtitle>{t("deliverySubtitle5")}</Subtitle>
        <List>
          <ListItem>
            <strong>{t("bankCard")}</strong> {t("deliveryItem7")}
          </ListItem>
          <ListItem>
            <strong>{t("cashOn")}</strong> {t("deliveryItem8")}
          </ListItem>
          <ListItem>
            <strong>{t("paypal")}</strong> {t("deliveryItem9")}
          </ListItem>
          <ListItem>
            <strong>{t("bankTransfer")}</strong> {t("deliveryItem10")}{" "}
            <Link href="mailto:order@navi.gg">order@navi.gg</Link>.
          </ListItem>
        </List>
      </Section>
    </DeliveryContainer>
  );
};

export default Delivery;
