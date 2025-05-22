import styled from "styled-components";
import { useTranslation } from "react-i18next";

const BannerContainer = styled.div`
  background: linear-gradient(135deg, #ffd700, #ffa500);
  padding: 100px 30px;
  text-align: center;
  color: #333;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  font-weight: 600;
  color: #222;
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 40px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  color: #444;
`;

const Button = styled.button`
  background-color: #121212;
  color: #ffd700;
  padding: 18px 35px;
  border: none;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #333;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }
`;

const Banner = ({ scrollToBestOffers }) => {
  const { t } = useTranslation();

  return (
    <BannerContainer>
      <Title>{t("newcollection")}</Title>
      <Subtitle>{t("checkout")}</Subtitle>
      <Button onClick={scrollToBestOffers}>{t("watchnow")}</Button>
    </BannerContainer>
  );
};

export default Banner;
