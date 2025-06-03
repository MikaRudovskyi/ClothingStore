import React, { useRef } from "react";
import products from "../data/products";
import ProductCard from "../components/productComponents/ProductCard";
import styled from "styled-components";
import Banner from "../components/homeComponents/Banner";
import Newsletter from "../components/homeComponents/Newsletter";
import Testimonials from "../components/homeComponents/Testimonials";
import ImageSlider from "../components/homeComponents/ImageSlider";
import banner1 from "../assets/images/banners/banner1.png";
import banner2 from "../assets/images/banners/banner2.png";
import banner3 from "../assets/images/banners/banner3.png";
import aboutUsImage from "../assets/images/banners/about-us.png";
import Modal from "../components/homeComponents/Modal";
import { useTranslation } from "react-i18next";

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const PageTitle = styled.h2`
  text-align: center;
  margin-top: 20px;
  font-size: 2rem;
  color: #ffd700;
`;

const BestOffers = styled.div`
  padding: 40px 20px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
    color: #ffd700;
  }
`;

const AboutUsContainer = styled.div`
  padding: 60px 20px;
  text-align: center;
  background-color: #1e1e1e;
  color: #fff;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #ffd700;
  }

  .about-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }

  .about-text {
    width: 50%;
    padding: 20px;
    text-align: left;

    h3 {
      font-size: 1.8rem;
      margin-bottom: 20px;
      color: #ffd700;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.8;
    }
  }

  .about-image {
    width: 50%;
    padding: 20px;

    img {
      max-width: 100%;
      border-radius: 8px;
    }
  }

  .cta-button {
    background-color: #ffd700;
    color: #121212;
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 20px;

    &:hover {
      background-color: #ffecb3;
    }
  }

  @media (max-width: 768px) {
    .about-content {
      flex-direction: column;
      align-items: center;
    }

    .about-text,
    .about-image {
      width: 100%;
    }

    .cta-button {
      font-size: 1rem;
      padding: 12px 25px;
    }
  }
`;

const Home = () => {
  const sliderImages = [banner1, banner2, banner3];
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const bestOffersRef = useRef(null);
  const { t } = useTranslation();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const scrollToBestOffers = () => {
    bestOffersRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const selectedProductIds = [3, 9, 5, 2, 6, 4];

  const bestOffersProducts = selectedProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter((product) => product !== undefined);

  return (
    <div>
      <Banner scrollToBestOffers={scrollToBestOffers} />
      <PageTitle>{t("home")}</PageTitle>
      <ImageSlider images={sliderImages} />
      <BestOffers ref={bestOffersRef}>
        <h2>{t("bestoffers")}</h2>
        <ProductList>
          {bestOffersProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductList>
      </BestOffers>
      <AboutUsContainer>
        <h2>{t("aboutus")}</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>{t("navigear")}</h3>
            <p>{t("navigeartext")}</p>
            <h3>{t("naviessentials")}</h3>
            <p>{t("naviessentialstext")}</p>
          </div>
          <div className="about-image">
            <img src={aboutUsImage} alt="О нас" />
          </div>
        </div>
        <button className="cta-button" onClick={openModal}>
          {t("findout")}
        </button>
      </AboutUsContainer>
      <Newsletter />
      <Testimonials />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>{t("ourvalues")}</h2>
        <p>{t("ourvaluesQuality")}</p>
        <p>{t("ourvaluesStyle")}</p>
        <p>{t("ourvaluesIndividuality")}</p>
        <p>{t("ourvaluesService")}</p>
      </Modal>
    </div>
  );
};

export default Home;
