import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbarComponents/Navbar";
import Home from "./pages/Home";
import Category from "./pages/Category";
import ProductDetails from "./components/productComponents/ProductDetails";
import Cart from "./components/cartComponents/Cart";
import GlobalStyle from "./styles/GlobalStyles";
import Footer from "./components/Footer";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Account from "./pages/Account";
import { CartProvider } from "./components/cartComponents/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { CurrencyProvider } from "./components/CurrencyContext";
import Delivery from "./pages/Delivery";
import Contacts from "./pages/Contacts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <CurrencyProvider>
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
              <Route path="/account" element={<Account />} />
              <Route path="/delivery" element={<Delivery />} />
              <Route path="/contact" element={<Contacts />} />
            </Routes>
            <Footer />
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </div>
        </CurrencyProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
