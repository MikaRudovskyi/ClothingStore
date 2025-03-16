import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import GlobalStyle from "./styles/GlobalStyles";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import { CartProvider } from "./components/CartContext"; // Импорт CartProvider

function App() {
  return (
    <CartProvider>
      {" "}
      {/* Обертываем приложение CartProvider */}
      <div>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
