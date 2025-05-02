import React from "react";
import styled from "styled-components";
import { useCart } from "./CartContext";
import { useCurrency } from "../CurrencyContext";

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
  const { currency, currencyRates, currencySymbols } = useCurrency();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalInSelectedCurrency = calculateTotal() * currencyRates[currency];

  const symbol = currencySymbols[currency];

  const formatCurrency = (value) => {
    return value
      .toLocaleString("uk-UA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })
      .replace(",", ".");
  };

  const formattedTotal =
    currency === "UAH"
      ? formatCurrency(totalInSelectedCurrency)
      : Math.floor(totalInSelectedCurrency);

  return (
    <CartStyled>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={`${item.id}-${item.size}`}>
                <img
                  src={
                    item.images && item.images.length > 0
                      ? item.images[0]
                      : "path/to/default-image.png"
                  }
                  alt={item.name}
                />
                <span>
                  {item.name} - {symbol}{" "}
                  {currency === "UAH"
                    ? formatCurrency(item.price * currencyRates[currency])
                    : Math.floor(item.price * currencyRates[currency])}{" "}
                  x {item.quantity} ({item.size}) = {symbol}{" "}
                  {currency === "UAH"
                    ? formatCurrency(
                        item.price * item.quantity * currencyRates[currency]
                      )
                    : Math.floor(
                        item.price * item.quantity * currencyRates[currency]
                      )}
                </span>
                <div>
                  <button onClick={() => decreaseQuantity(item.id, item.size)}>
                    -
                  </button>
                  <button onClick={() => increaseQuantity(item.id, item.size)}>
                    +
                  </button>
                  <button onClick={() => removeFromCart(item.id, item.size)}>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>
            Total: {symbol} {formattedTotal}
          </p>
        </>
      )}
    </CartStyled>
  );
};

export default Cart;
