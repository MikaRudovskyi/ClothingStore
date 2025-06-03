import styled from "styled-components";
import { useTranslation } from "react-i18next";
import bannerImage from "../../assets/images/banners/slider-banner.jpg";

const BannerContainer = styled.div`
  background: url(${bannerImage}) center/cover no-repeat;
  position: relative;
  padding: 100px 30px;
  text-align: center;
  color: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: 700;
  color: #fff;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 40px;
  color: #f0f0f0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
`;

const Button = styled.button`
  background: linear-gradient(145deg, #d4af37, #b8860b);
  color: #fff;
  padding: 16px 36px;
  border: 1.5px solid #f7e488;
  border-radius: 12px;
  font-size: 1.15rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 4px 10px rgba(0, 0, 0, 0.25), 0 0 8px rgba(212, 175, 55, 0.4);

  &:hover {
    background: linear-gradient(145deg, #e3c565, #c39820);
    transform: translateY(-2px) scale(1.03);
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4),
      0 6px 14px rgba(0, 0, 0, 0.35), 0 0 12px rgba(255, 223, 70, 0.6);
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3), 0 2px 6px rgba(0, 0, 0, 0.2);
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
