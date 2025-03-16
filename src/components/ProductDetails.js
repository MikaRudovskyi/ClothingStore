import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import styled, { keyframes, css } from "styled-components";
import { useCart } from "./CartContext";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Details = styled.div`
  padding: 40px;
  max-width: 800px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #ffd700;
  }

  img {
    border-radius: 8px;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  button {
    margin-top: 20px;
    animation: ${(props) =>
      props.animate
        ? css`
            ${pulseAnimation} 0.5s ease-in-out
          `
        : "none"}; // Используем css helper
  }

  .message {
    margin-top: 10px;
    color: green;
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);
  const [animateButton, setAnimateButton] = useState(false);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    setAnimateButton(true);
    setTimeout(() => {
      setAddedToCart(false);
      setAnimateButton(false);
    }, 1000);
  };

  return (
    <Details animate={animateButton}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>Цена: ${product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart}>
        {addedToCart ? "Added to Cart" : "Add to Cart"}
      </button>
      {addedToCart && <p className="message">Product added to cart!</p>}
    </Details>
  );
};

export default ProductDetails;
