import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import styled, { keyframes, css } from "styled-components";
import { useCart } from "../cartComponents/CartContext";
import { useCurrency } from "../CurrencyContext";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 40px;
  color: #fff;
  max-width: 1200px;
  margin: auto;
`;

const ImageWrapper = styled.div`
  flex: 1 1 40%;
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 0 30px rgba(255, 215, 0, 0.4), 0 0 10px rgba(255, 215, 0, 0.2);
  animation: ${fadeInUp} 0.5s ease;
  cursor: zoom-in;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 0 40px rgba(255, 215, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.4);
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: repeating-linear-gradient(
      45deg,
      #0e0e0e,
      #0e0e0e 10px,
      #1a1a1a 10px,
      #1a1a1a 20px
    ),
    radial-gradient(circle at center, #000 60%, #111 100%);
  background-blend-mode: overlay;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(6px);
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease;
`;

const ModalContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 100vw;
  max-height: 100vh;
  padding: 0 30px;
  box-sizing: border-box;
  animation: ${slideIn} 0.4s ease;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 80vh;
  border-radius: 16px;
  box-shadow: 0 0 40px rgba(255, 215, 0, 0.5), 0 0 60px rgba(255, 215, 0, 0.3);
  transition: transform 0.4s ease-in-out;
  object-fit: contain;

  @media (max-width: 768px) {
    border-radius: 10px;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.7rem;
  background: linear-gradient(145deg, #111, #222);
  color: #ffd700;
  border: 2px solid #ffd700;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10000;
  transition: all 0.3s ease;
  box-shadow: 0 0 12px #ffd700aa;

  &:hover {
    background: #ffd700;
    color: #000;
    box-shadow: 0 0 20px #ffd700, 0 0 10px #fff;
    transform: scale(1.1) translateY(-50%);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    width: 40px;
    height: 40px;
  }
`;

const PrevButton = styled(NavButton)`
  left: 50px;

  @media (max-width: 768px) {
    left: 20px;
  }
`;

const NextButton = styled(NavButton)`
  right: 50px;

  @media (max-width: 768px) {
    right: 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 50px;
  background: rgba(255, 215, 0, 0.15);
  border: none;
  font-size: 1.8rem;
  color: #ffd700;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.3),
    inset 0 0 5px rgba(255, 215, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.2s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: rgba(255, 215, 0, 0.4);
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6), 0 0 10px rgba(255, 215, 0, 0.3);
  }

  @media (max-width: 768px) {
    top: 15px;
    right: 25px;
    font-size: 1.6rem;
  }
`;

const ThumbnailGallery = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
  flex-wrap: wrap;
`;

const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 6px;
  border: 2px solid transparent;
  cursor: pointer;
  object-fit: cover;
  transition: all 0.3s ease;

  &:hover,
  &.active {
    border-color: #ffd700;
    transform: scale(1.05);
  }
`;

const InfoWrapper = styled.div`
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  animation: ${fadeInUp} 0.6s ease;

  h2 {
    font-size: 2.5rem;
    color: #ffd700;
  }

  ul {
    padding-left: 20px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const Button = styled.button`
  background-color: #ffd700;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  color: #000;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${(props) =>
    props.animate &&
    css`
      ${pulseAnimation} 0.5s ease-in-out
    `};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  }
`;

const SizeSelector = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const SizeButton = styled.button`
  padding: 8px 14px;
  background: #222;
  border: 1px solid #555;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: #ffd700;
    color: #000;
    border-color: #ffd700;
  }

  &.active {
    background-color: #ffd700;
    color: #000;
    border-color: #ffd700;
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [isZoomed, setIsZoomed] = useState(false);
  const { addToCart } = useCart();
  const [animateButton, setAnimateButton] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || "");
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || ""
  );
  const { currency, currencyRates, currencySymbols } = useCurrency();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowRight") {
        handleNextImage(e);
      } else if (e.key === "ArrowLeft") {
        handlePrevImage(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedImage]);

  if (!product) return <div>Product Not Found</div>;

  const handleAddToCart = () => {
    if (product.sizes?.length > 0 && !selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart({ ...product, size: selectedSize || null });
    setAnimateButton(true);

    toast.success(t("productAdded"), {
      position: "bottom-right",
      theme: "dark",
    });

    setTimeout(() => {
      setAnimateButton(false);
    }, 1000);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    const currentIndex = product.images.indexOf(selectedImage);
    const nextIndex = (currentIndex + 1) % product.images.length;
    setSelectedImage(product.images[nextIndex]);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    const currentIndex = product.images.indexOf(selectedImage);
    const prevIndex =
      (currentIndex - 1 + product.images.length) % product.images.length;
    setSelectedImage(product.images[prevIndex]);
  };

  const availableSizes = product.sizes || [];
  const convertedPrice = product.price * currencyRates[currency];
  const symbol = currencySymbols[currency];
  const formattedPrice =
    currency === "UAH" ? convertedPrice.toFixed(2) : Math.floor(convertedPrice);

  return (
    <Container>
      {isModalOpen && (
        <ModalOverlay
          onClick={() => {
            setIsZoomed(false);
            closeModal();
          }}
        >
          <ModalContent>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <PrevButton onClick={handlePrevImage}>&larr;</PrevButton>
            <ModalImage
              src={selectedImage}
              alt="Enlarged"
              isZoomed={isZoomed}
              onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(!isZoomed);
              }}
            />
            <NextButton onClick={handleNextImage}>&rarr;</NextButton>
          </ModalContent>
        </ModalOverlay>
      )}

      <ImageWrapper>
        <MainImage src={selectedImage} alt={product.name} onClick={openModal} />

        {product.images && product.images.length > 1 && (
          <ThumbnailGallery>
            {product.images.map((img, index) => (
              <Thumbnail
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setSelectedImage(img)}
                className={selectedImage === img ? "active" : ""}
              />
            ))}
          </ThumbnailGallery>
        )}
      </ImageWrapper>

      <InfoWrapper>
        <h2>{product.name}</h2>
        <p>{t(product.description)} </p>

        {product.specifications && (
          <>
            <h3>{t("specifications")}</h3>
            <ul>
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>{t(value)}</li>
              ))}
            </ul>
          </>
        )}

        {product.colour && (
          <p>
            <strong>{t("colour")}</strong> {t(product.colour)}
          </p>
        )}
        {product.composition && (
          <p>
            <strong>{t("composition")}</strong> {t(product.composition)}
          </p>
        )}
        {product.care && (
          <p>
            <strong>{t("care")}</strong> {t(product.care)}
          </p>
        )}

        {availableSizes.length > 0 && (
          <div>
            <strong>{t("chooseSize")}</strong>
            <SizeSelector>
              {availableSizes.map((size) => (
                <SizeButton
                  key={size}
                  className={selectedSize === size ? "active" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </SizeButton>
              ))}
            </SizeSelector>
          </div>
        )}

        <p>
          <strong>{t("price")}</strong> {symbol} {formattedPrice}
        </p>

        <Button onClick={handleAddToCart} animate={animateButton}>
          {animateButton ? t("adding") : t("addToCart")}
        </Button>
      </InfoWrapper>

      <ToastContainer />
    </Container>
  );
};

export default ProductDetails;
