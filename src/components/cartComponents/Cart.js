import React from "react";
import styled from "styled-components";
import { useCart } from "./CartContext";

const CartStyled = styled.div`
  padding: 20px;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    border-bottom: 1px solid #eee;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 15px;
  }

  span {
    font-size: 1rem;
    display: block;
    margin-bottom: 5px;
    flex-grow: 1;
  }

  div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  button {
    padding: 8px 15px;
    font-size: 1rem;
    background-color: rgb(255, 215, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #fff;
    }

    &:focus {
      outline: none;
    }

    @media (max-width: 768px) {
      padding: 6px 12px;
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    h2 {
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const Cart = () => {
  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } =
    useCart();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <CartStyled>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />{" "}
                <span>
                  {item.name} - ${item.price} x {item.quantity} = $
                  {item.price * item.quantity}
                </span>
                <div>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: ${calculateTotal()}</p>
        </>
      )}
    </CartStyled>
  );
};

export default Cart;
