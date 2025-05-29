import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCurrency } from "../CurrencyContext";

const Card = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease forwards;
  background-color: #1a1a1a;
  background-image: radial-gradient(
    circle,
    rgba(255, 204, 0, 0.2) 30%,
    transparent 80%
  );
  border-radius: 15px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-image 0.5s ease;
  margin: 4px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    background-image: radial-gradient(
      circle,
      rgba(255, 204, 0, 0.4) 30%,
      transparent 80%
    );
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProductName = styled.h3`
  color: rgb(255, 255, 255);
  margin: 0;
  font-size: 1.3rem;
  text-align: center;
  font-weight: 600;
`;

const ProductPrice = styled.p`
  color: #f1c40f;
  margin: 5px 0;
  font-weight: 600;
  text-align: center;
  font-size: 1.1rem;
`;

const ProductCard = ({ product }) => {
  const { currency, currencyRates, currencySymbols } = useCurrency();

  const convertedPrice = product.price * currencyRates[currency];
  const symbol = currencySymbols[currency];

  const formattedPrice =
    currency === "UAH" ? convertedPrice.toFixed(2) : Math.floor(convertedPrice);

  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <img
          src={
            product.images && product.images.length > 0
              ? product.images[0]
              : "path/to/default-image.png"
          }
          alt={product.name}
        />
        <ProductName>{product.name}</ProductName>
        <ProductPrice>
          {symbol} {formattedPrice}
        </ProductPrice>
      </Link>
    </Card>
  );
};

export default ProductCard;
