import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { keyframes, css } from "styled-components";
import { useCart } from "./CartContext";
import CartIcon from "../assets/images/cart-icon.png";
import LoginIcon from "../assets/images/login-icon.png";
import LoginModal from "./LoginModal";

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

  .logo {
    font-weight: 700;
    font-size: 2.2rem;
    cursor: pointer;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    position: relative;
    display: inline-block;
    overflow: hidden;
    transition: transform 0.3s ease;
    border-radius: 5px;
  }

  .logo:hover {
    transform: scale(1.1);
  }

  .logo::after {
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

  .logo:hover::after {
    left: 100%;
    transition: left 0.3s ease-in-out;
    mix-blend-mode: lighten;
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

    li {
      margin-left: 30px;

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

const Navbar = () => {
  const { totalItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLanguageChange = (newLanguage) => {
    console.log(`Language changed to: ${newLanguage}`);
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
        <Link to="/" className="logo">
          Clothing Store
        </Link>
        <div className="top-bar-right">
          <Dropdown>
            <button>USD</button>
            <ul>
              <li>
                <button>USD</button>
              </li>
              <li>
                <button>EUR</button>
              </li>
              <li>
                <button>UAH</button>
              </li>
            </ul>
          </Dropdown>
          <Dropdown>
            <button>English</button>
            <ul>
              <li>
                <button onClick={() => handleLanguageChange("en")}>
                  English
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange("uk")}>
                  Ukrainian
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange("tr")}>
                  Turkish
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange("de")}>
                  German
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange("pt")}>
                  Portuguese
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange("es")}>
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
          <button className="login-button" onClick={openModal}>
            <img src={LoginIcon} alt="Login" />
          </button>
        </div>
      </TopBar>
      <BottomBar>
        <ul>
          <li>
            <Link to="/category/Sleeves">Sleeves</Link>
          </li>
          <li>
            <Link to="/category/T-shirts">T-shirts</Link>
          </li>
          <li>
            <Link to="/category/Pants">Pants</Link>
          </li>
          <li>
            <Link to="/category/Hoodies">Hoodies</Link>
          </li>
          <li>
            <Link to="/category/Jackets">Jackets</Link>
          </li>
          <li>
            <Link to="/category/Shorts">Shorts</Link>
          </li>
        </ul>
      </BottomBar>
      {isModalOpen && <LoginModal onClose={closeModal} />}
    </Nav>
  );
};

export default Navbar;
