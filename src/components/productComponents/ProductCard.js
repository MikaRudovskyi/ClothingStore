import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductName = styled.h3`
  color: #ffffff;
  margin: 0;
  font-size: 1.2rem;
`;

const ProductPrice = styled.p`
  color: #ffffff;
  margin: 5px 0;
  font-weight: 600;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} />
        <ProductName>{product.name}</ProductName>
        <ProductPrice>${product.price}</ProductPrice>
      </Link>
    </Card>
  );
};

export default ProductCard;
