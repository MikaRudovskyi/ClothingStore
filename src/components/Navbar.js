import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { useCart } from "./cartComponents/CartContext";
import { useAuth } from "../context/AuthContext";
import CartIcon from "../assets/images/icons/cart-icon.png";
import LoginIcon from "../assets/images/icons/login-icon.png";
import LogoNavi from "../assets/images/logo/navi_logo.png";
import LoginModal from "./loginComponents/LoginModal";
import { useCurrency } from "../components/CurrencyContext";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 30px;

  button {
    background: none;
    border: none;
    color: #ffffff;
    cursor: pointer;
    padding: 12px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    font-size: 1.1rem;

    &:hover {
      background-color: #555;
      transform: translateY(-3px);
    }
  }

  ul {
    display: none;
    position: absolute;
    background-color: #1e1e1e;
    min-width: 150px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
    list-style: none;
    padding: 5px 0;
    margin: 0;
    border-radius: 5px;

    li {
      button {
        width: 100%;
        text-align: left;
        background: transparent;
        border: none;
        color: #ffffff;
        padding: 10px 20px;
        text-decoration: none;
        display: block;
        transition: background-color 0.3s ease;
        font-size: 1rem;
        cursor: pointer;

        &:hover {
          background-color: #333;
          color: #ffd700;
        }
      }
    }
  }

  &:hover ul {
    display: block;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Montserrat", sans-serif;
`;

const TopBar = styled.div`
  background-color: #1e1e1e;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 2.2rem;
    cursor: pointer;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease;
    border-radius: 5px;
    text-decoration: none;

    &:hover {
      transform: scale(1.1);
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent 0%,
        #ffd700 50%,
        transparent 100%
      );
      transition: left 0.3s ease-in-out;
    }

    &:hover::after {
      left: 100%;
      transition: left 0.3s ease-in-out;
      mix-blend-mode: lighten;
    }

    .logo-image {
      width: 50px;
      height: auto;
      margin-right: 15px;
    }
  }

  .top-bar-right {
    display: flex;
    align-items: center;
  }

  .cart-link {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 30px;
    color: #ffffff;

    img {
      width: 30px;
      height: 30px;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }

    .cart-count {
      position: absolute;
      top: -10px;
      right: -10px;
      background-color: #ffd700;
      color: #121212;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.9rem;
      font-weight: bold;
      animation: ${css`
        ${fadeIn} 0.3s ease-in-out
      `};
    }
  }

  .user-name {
    font-size: 1.3rem;
    font-weight: 600;
    color: #ffffff;
    margin-left: 40px;
    position: relative;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease;

    &:hover {
      color: #ffd700;
      transform: translateY(-3px);
      text-shadow: 0 0 15px rgba(255, 215, 0, 0.7),
        0 0 20px rgba(255, 215, 0, 0.5);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, #ffd700, #f4b400);
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  .login-button {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 30px;
    color: #ffffff;

    img {
      width: 30px;
      height: 30px;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #1e1e1e;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

    .logo {
      font-size: 1.6rem;

      .logo-image {
        width: 35px;
        margin-right: 10px;
      }

      .logo-text {
        display: none;
      }
    }

    .top-bar-right {
      margin-top: 0;
      display: flex;
      flex-wrap: wrap;

      .cart-link {
        margin-left: 15px;
      }

      .login-button {
        margin-left: 15px;
      }

      .user-name {
        font-size: 1rem;
        margin-left: 15px;
      }

      ${Dropdown} {
        margin-left: 15px;

        button {
          font-size: 0.95rem;
          padding: 8px 12px;
        }

        ul {
          min-width: 120px;

          li button {
            font-size: 0.9rem;
            padding: 8px 15px;
          }
        }
      }
    }

    body {
      padding-top: 60px;
    }
  }
`;

const BottomBar = styled.div`
  background-color: #333;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    flex-wrap: wrap;

    li {
      margin-left: 30px;
      position: relative;

      a {
        color: #ffffff;
        text-decoration: none;
        padding: 12px 20px;
        border-radius: 5px;
        transition: background-color 0.3s ease, transform 0.3s ease;
        font-size: 1.1rem;

        &:hover {
          background-color: #555;
          transform: translateY(-3px);
        }
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      width: 100%;

      li {
        margin: 10px 0;

        a {
          font-size: 1rem;
          width: 100%;
          display: block;
          text-align: center;
        }
      }
    }
    margin-top: 60px;
  }
`;

const CategoryDropdown = styled.li`
  position: relative;

  > a {
    color: #ffffff;
    text-decoration: none;
    padding: 12px 20px;
    display: inline-block;
    font-size: 1.1rem;
    border-radius: 5px;
    transition: all 0.3s ease;
    background-color: transparent;

    &:hover {
      background-color: #555;
      transform: translateY(-3px);
    }
  }

  ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #1e1e1e;
    border-radius: 0 0 8px 8px;
    min-width: 180px;
    padding: 10px 8px;
    margin: 0;
    z-index: 1000;
    list-style: none;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    animation: ${fadeIn} 0.3s ease-in-out;

    li {
      a {
        display: block;
        padding: 10px 20px;
        color: #ffffff;
        font-size: 1rem;
        text-decoration: none;
        transition: all 0.3s ease;

        &:hover {
          background-color: #333;
          color: #ffd700;
          padding-left: 25px;
        }
      }
    }
  }

  &:hover > ul {
    display: block;
  }

  @media (max-width: 768px) {
    position: static;

    > a {
      padding: 10px 15px;
      font-size: 1rem;
    }

    ul {
      position: static;
      box-shadow: none;
      background-color: #2a2a2a;
      border-radius: 5px;
      margin-top: 5px;

      li a {
        padding: 8px 15px;
        font-size: 0.95rem;
      }
    }
  }
`;

const Navbar = () => {
  const { totalItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();

  const { language, setLanguage, currency, setCurrency } = useCurrency();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Nav>
      <TopBar>
        <div className="logo-container">
          <Link to="/" className="logo">
            <img src={LogoNavi} alt="Logo Navi" className="logo-image" />
            <span className="logo-text">Clothing Store</span>
          </Link>
        </div>
        <div className="top-bar-right">
          <Dropdown>
            <button>{currency}</button>
            <ul>
              <li>
                <button onClick={() => handleCurrencyChange("USD")}>USD</button>
              </li>
              <li>
                <button onClick={() => handleCurrencyChange("EUR")}>EUR</button>
              </li>
              <li>
                <button onClick={() => handleCurrencyChange("UAH")}>UAH</button>
              </li>
            </ul>
          </Dropdown>
          <Dropdown>
            <button>{language}</button>
            <ul>
              <li>
                <button onClick={() => handleLanguageChange("English")}>
                  English
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange("Ukrainian")}>
                  Ukrainian
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange("Turkish")}>
                  Turkish
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange("German")}>
                  German
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange("Portuguese")}>
                  Portuguese
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange("Spanish")}>
                  Spanish
                </button>
              </li>
            </ul>
          </Dropdown>
          <div className="cart-link">
            <Link to="/cart">
              <img src={CartIcon} alt="Cart" />
            </Link>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </div>
          {user ? (
            <>
              <Link to="/account">
                <span className="user-name">{user.name}</span>
              </Link>
            </>
          ) : (
            <button className="login-button" onClick={openModal}>
              <img src={LoginIcon} alt="Login" />
            </button>
          )}
        </div>
      </TopBar>
      <BottomBar>
        <ul>
          <li>
            <CategoryDropdown>
              <Link to="/category/PRO-KIT">PRO KIT</Link>
              <ul>
                <li>
                  <Link to="/category/Jersey">Jersey</Link>
                </li>
                <li>
                  <Link to="/category/Sleeves">Sleeves</Link>
                </li>
              </ul>
            </CategoryDropdown>
          </li>
          <li>
            <CategoryDropdown>
              <Link to="/category/APPAREL">APPAREL</Link>
              <ul>
                <li>
                  <Link to="/category/T-shirts">T-shirts</Link>
                </li>
                <li>
                  <Link to="/category/Hoodies">Hoodies</Link>
                </li>
                <li>
                  <Link to="/category/Jackets">Jackets</Link>
                </li>
                <li>
                  <Link to="/category/Pants">Pants</Link>
                </li>
                <li>
                  <Link to="/category/Shorts">Shorts</Link>
                </li>
              </ul>
            </CategoryDropdown>
          </li>
          <li>
            <CategoryDropdown>
              <Link to="/category/ACCESSORIES">ACCESSORIES</Link>
              <ul>
                <li>
                  <Link to="/category/Flag">Flag</Link>
                </li>
                <li>
                  <Link to="/category/Scarf">Scarf</Link>
                </li>
                <li>
                  <Link to="/category/Backpack">Backpack</Link>
                </li>
                <li>
                  <Link to="/category/Suitcase">Suitcase</Link>
                </li>
              </ul>
            </CategoryDropdown>
          </li>
          <li>
            <Link to="/category/OUTLET">OUTLET</Link>
          </li>
          <li>
            <Link to="/delivery">DELIVERY</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </BottomBar>
      {isModalOpen && <LoginModal onClose={closeModal} />}
    </Nav>
  );
};

export default Navbar;
