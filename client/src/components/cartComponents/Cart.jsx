import { useState } from "react";
import styled from "styled-components";
import { useCart } from "./CartContext";
import { useCurrency } from "../CurrencyContext";
import { useTranslation } from "react-i18next";
import CheckoutModal from "../cartComponents/CheckoutModal";

const CartStyled = styled.div`
  padding: 30px;
  background: linear-gradient(145deg, #0a0a0a, #1a1a1a);
  color: #e0e0e0;
  border-radius: 16px;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);

  h2 {
    font-size: 2rem;
    margin-bottom: 25px;
    text-align: center;
    color: #ffe100;
    text-shadow: 0 0 10px #ffe10090;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    background: #121212;
    border: 1px solid #2e2e2e;
    border-radius: 12px;
    padding: 15px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    transition: transform 0.3s ease;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.05);

    &:hover {
      transform: scale(1.02);
    }
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 10px;
    border: 2px solid #ffe10050;
  }

  span {
    font-size: 1rem;
    display: block;
    margin-bottom: 5px;
    flex-grow: 1;
    color: #cfcfcf;
  }

  div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .order-button-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  button {
    padding: 8px 15px;
    font-size: 1rem;
    background: linear-gradient(145deg, #ffd700, #ffb800);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: #000;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(255, 215, 0, 0.3);
    transition: all 0.3s ease;

    &:hover {
      background: linear-gradient(145deg, #fff700, #ffe100);
      box-shadow: 0 0 12px #ffe100aa;
    }

    &:active {
      transform: scale(0.97);
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #ffe10080;
    }

    @media (max-width: 768px) {
      padding: 6px 12px;
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    margin-top: 30px;
    color: #fff700;
    text-shadow: 0 0 8px #ffe100;
  }

  @media (max-width: 768px) {
    padding: 15px;

    h2 {
      font-size: 1.4rem;
    }

    p {
      font-size: 1.2rem;
    }

    span {
      font-size: 0.95rem;
    }
  }
`;

const PremiumOrderButton = styled.button`
  background: linear-gradient(135deg, #ffe100, #ffb800);
  color: #000;
  font-size: 1.25rem;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.3), inset 0 0 0 2px #00000020;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #fff700, #ffe100);
    box-shadow: 0 0 15px #ffe100aa;
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #ffe10080;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, #fff80055, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.9rem 1.5rem;
    width: 100%;
  }
`;

const Cart = () => {
  const { cartItems, removeFromCart, decreaseQuantity, increaseQuantity } =
    useCart();
  const { currency, currencyRates, currencySymbols } = useCurrency();
  const [isModalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

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
      <h2>{t("cart")}</h2>
      {cartItems.length === 0 ? (
        <p>{t("cartIsEmpty")}</p>
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
                    {t("remove")}
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p>
            {t("total")}: {symbol} {formattedTotal}
          </p>
          <div className="order-button-wrapper">
            {cartItems.length > 0 && (
              <>
                <PremiumOrderButton onClick={() => setModalOpen(true)}>
                  {t("makeOrder")}
                </PremiumOrderButton>
                <CheckoutModal
                  isOpen={isModalOpen}
                  onClose={() => setModalOpen(false)}
                />
              </>
            )}
          </div>
        </>
      )}
    </CartStyled>
  );
};

export default Cart;
