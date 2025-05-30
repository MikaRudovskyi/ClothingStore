import styled, { keyframes, css } from "styled-components";

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

export const Dropdown = styled.div`
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

  &.mobile-dropdown {
    display: none;
  }

  @media (max-width: 768px) {
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

    &.mobile-dropdown {
      display: inline-block;
      margin-left: 0;
      width: 100%;

      button {
        display: block;
        width: 100%;
        text-align: center;
        padding: 10px 20px;
        margin-bottom: 5px;
      }

      ul {
        position: static;
        display: none;
        background-color: transparent;
        box-shadow: none;
        min-width: auto;
        padding: 0;
        margin-top: 0;
        border-radius: 0;

        li button {
          text-align: center;
          padding: 8px 15px;
        }
      }
    }

    &.desktop-dropdown {
      display: none;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: "Montserrat", sans-serif;
`;

export const TopBar = styled.div`
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

  .mobile-menu-button {
    display: none;
    transform: translateY(4px);
    background: none;
    border: none;
    color: #ffffff;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 10px;
    z-index: 1001;
    order: 3;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    flex-direction: row;
    flex-wrap: nowrap;
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
      flex-wrap: nowrap;
      align-items: center;

      .cart-link {
        display: block;
        margin-left: 15px;
        order: 1;
      }

      .user-name,
      .login-button {
        display: block;
        margin-left: 15px;
        order: 2;
      }

      ${Dropdown} {
      }

      ${Dropdown}.mobile-dropdown ul {
        display: block;
        position: static;
        background-color: #1e1e1e;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 1002;
        list-style: none;
        padding: 5px 0;
        margin: 0;
        border-radius: 5px;
        width: 100%;
      }

      ${Dropdown}.mobile-dropdown ul li button {
        width: 100%;
        text-align: left;
      }

      .mobile-menu-button {
        display: block;
        margin-left: 15px;
      }
    }

    body {
      padding-top: 60px;
    }
  }
`;

export const BottomBar = styled.div`
  background: linear-gradient(145deg, #0d0d0d, #1c1c1c);
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #222;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
    gap: 25px;
    flex-wrap: wrap;

    li {
      position: relative;

      a {
        color: #f5f5f5;
        text-decoration: none;
        padding: 12px 24px;
        border-radius: 12px;
        font-size: 1.05rem;
        font-weight: 600;
        background: linear-gradient(145deg, #1a1a1a, #232323);
        border: 1px solid #2a2a2a;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
        transition: all 0.3s ease;

        &:hover {
          background: linear-gradient(145deg, #2a2a2a, #333);
          color: #ffd700;
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 0 15px #ffd70088, 0 0 5px #ffd70044 inset;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: block;
    padding: 20px;

    ul {
      flex-direction: column;
      align-items: stretch;

      li {
        width: 100%;
        margin: 10px 0;

        a {
          display: block;
          width: 100%;
          text-align: center;
          padding: 14px 20px;
          font-size: 1rem;
          background: linear-gradient(145deg, #1b1b1b, #262626);
          border: 1px solid #333;
          border-radius: 10px;
          color: #fff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;

          &:hover {
            background: linear-gradient(145deg, #2c2c2c, #383838);
            color: #ffcc00;
            box-shadow: 0 0 12px #ffcc00aa, 0 0 6px #ffcc0044 inset;
          }
        }
      }
    }
  }

  &.desktop-bottom-bar {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const CategoryDropdown = styled.li`
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

    li a {
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

  &:hover > ul {
    display: block;
  }

  .dropdown-toggle {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;

    a {
      flex-grow: 1;
    }
  }

  .dropdown-arrow {
    background: none;
    border: none;
    color: #ffd700;
    cursor: pointer;
    padding: 4px;
    transition: transform 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
      transform: rotate(0deg) scale(1);
    }

    &.open svg {
      transform: rotate(180deg) scale(1);
    }

    &:hover svg {
      transform: rotate(0deg) scale(1.2);
    }

    &.open:hover svg {
      transform: rotate(180deg) scale(1.2);
    }
  }

  @media (max-width: 768px) {
    position: static;

    > a {
      padding: 10px 15px;
      font-size: 1rem;
      display: block;
    }

    ul {
      position: static;
      box-shadow: none;
      background-color: #2a2a2a;
      border-radius: 5px;
      margin-top: 5px;
      padding: 0;

      li a {
        padding: 8px 15px;
        font-size: 0.95rem;
      }
    }

    .dropdown-toggle {
      width: 100%;
    }

    .dropdown-arrow {
      padding: 10px;
    }
  }
`;

const slideFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: #0f0f0f;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: calc(100vh - 70px);
    overflow-y: auto; /* <-- вот это нужно */
    z-index: 999;
    transform: translateX(-100%);
    transition: transform 0.4s ease-in-out;

    &.open {
      transform: translateX(0);
    }

    ul {
      list-style: none;
      padding: 30px 20px;
      margin: 0;
      width: 100%;

      li {
        margin-bottom: 18px;
        width: 100%;
        opacity: 0;
        animation: ${slideFadeIn} 0.4s ease forwards;

        &:nth-child(1) {
          animation-delay: 0.1s;
        }
        &:nth-child(2) {
          animation-delay: 0.2s;
        }
        &:nth-child(3) {
          animation-delay: 0.3s;
        }
        &:nth-child(4) {
          animation-delay: 0.4s;
        }
        &:nth-child(5) {
          animation-delay: 0.5s;
        }

        ${Dropdown}.mobile-dropdown {
          width: 100%;

          button {
            display: flex;
            align-items: center;
            gap: 12px;
            width: 100%;
            padding: 14px 20px;
            background-color: #1a1a1a;
            color: #fff;
            border: 1px solid #2b2b2b;
            border-radius: 8px;
            font-size: 1rem;
            transition: background-color 0.3s ease, box-shadow 0.3s ease;
            font-weight: 500;
            text-transform: uppercase;

            svg {
              color: #ffcc00;
              width: 20px;
              height: 20px;
              flex-shrink: 0;
            }

            &:hover {
              background-color: #242424;
              box-shadow: 0 0 8px #ffcc00aa;
            }
          }

          ul {
            background-color: #1a1a1a;
            margin-top: 8px;
            border-radius: 6px;
            padding: 8px 0;
            box-shadow: 0 0 10px #00000088;

            li {
              button {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 12px 20px;
                width: 100%;
                background: none;
                border: none;
                color: #ddd;
                font-size: 0.95rem;
                transition: background-color 0.3s ease, color 0.3s ease;

                svg {
                  color: #ffcc00;
                  width: 18px;
                  height: 18px;
                }

                &:hover {
                  background-color: #292929;
                  color: #ffcc00;
                }
              }
            }
          }
        }
      }
    }
  }
`;
