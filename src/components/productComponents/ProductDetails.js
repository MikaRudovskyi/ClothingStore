import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import styled, { keyframes, css } from "styled-components";
import { useCart } from "../cartComponents/CartContext";
import { useCurrency } from "../CurrencyContext";

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
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
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  animation: ${fadeInUp} 0.5s ease;
`;

const ThumbnailGallery = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
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

  .message {
    color: green;
    font-weight: bold;
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
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || ""); // Установим начальный размер из массива
  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || ""
  );
  const { currency, currencyRates, currencySymbols } = useCurrency();

  if (!product) return <div>Product Not Found</div>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart({ ...product, size: selectedSize });
    setAddedToCart(true);
    setAnimateButton(true);
    setTimeout(() => {
      setAddedToCart(false);
      setAnimateButton(false);
    }, 1000);
  };

  const availableSizes = product.sizes || [];
  const convertedPrice = product.price * currencyRates[currency];
  const symbol = currencySymbols[currency];
  const formattedPrice =
    currency === "UAH" ? convertedPrice.toFixed(2) : Math.floor(convertedPrice);

  return (
    <Container>
      <ImageWrapper>
        <MainImage src={selectedImage} alt={product.name} />
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
        <p>{product.description}</p>

        {product.specifications && (
          <>
            <h3>Specifications:</h3>
            <ul>
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>{value}</li>
              ))}
            </ul>
          </>
        )}

        {product.colour && (
          <p>
            <strong>Colour:</strong> {product.colour}
          </p>
        )}
        {product.composition && (
          <p>
            <strong>Composition:</strong> {product.composition}
          </p>
        )}
        {product.care && (
          <p>
            <strong>Care:</strong> {product.care}
          </p>
        )}

        {availableSizes.length > 0 && (
          <div>
            <strong>Choose Size:</strong>
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
          <strong>Price:</strong> {symbol} {formattedPrice}
        </p>

        <Button onClick={handleAddToCart} animate={animateButton}>
          {addedToCart ? "Added to Cart" : "Add to Cart"}
        </Button>
        {addedToCart && <p className="message">Product added to cart!</p>}
      </InfoWrapper>
    </Container>
  );
};

export default ProductDetails;
