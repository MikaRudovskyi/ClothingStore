import React from "react";
import styled from "styled-components";
import { useCart } from "./CartContext";

const CartStyled = styled.div`
  padding: 20px;

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
  }

  button {
    margin: 0 5px;
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
