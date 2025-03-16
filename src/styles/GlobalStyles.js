import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212;
    color: #FFFFFF;
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: #FFFFFF;
    transition: color 0.3s ease;

    &:hover {
      color: #FFD700;
    }
  }

  button {
    background-color: #FFD700;
    color: #121212;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #FFECB3;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  ul, ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export default GlobalStyle;
