import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../cartComponents/CartContext";
import { useAuth } from "../../context/AuthContext";
import { useCurrency } from "../CurrencyContext";
import CartIcon from "../../assets/images/icons/cart-icon.png";
import LoginIcon from "../../assets/images/icons/login-icon.png";
import LogoNavi from "../../assets/images/logo/navi_logo.png";
import LoginModal from "../loginComponents/LoginModal";
import { FaBars, FaTimes } from "react-icons/fa";
import { ChevronDown, Globe, DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Nav,
  TopBar,
  BottomBar,
  MobileMenu,
  Dropdown,
  CategoryDropdown,
} from "./NavbarStyles";

const Navbar = () => {
  const { totalItems } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useAuth();
  const { t, i18n } = useTranslation();
  const { language, setLanguage, currency, setCurrency } = useCurrency();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const languages = [
    { code: "en", labelKey: "english" },
    { code: "uk", labelKey: "ukrainian" },
    { code: "de", labelKey: "german" },
    { code: "es", labelKey: "spanish" },
    { code: "fr", labelKey: "french" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  useEffect(() => {
    const body = document.body;

    if (isMobileMenuOpen) {
      body.classList.add("mobile-menu-open");
    } else {
      body.classList.remove("mobile-menu-open");
      setCurrencyDropdownOpen(false);
      setLanguageDropdownOpen(false);
    }

    return () => {
      body.classList.remove("mobile-menu-open");
    };
  }, [isMobileMenuOpen]);

  const handleLanguageChange = (code) => {
    setLanguage(code);
    i18n.changeLanguage(code);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleCurrencyDropdown = () => {
    setCurrencyDropdownOpen((prev) => !prev);
  };

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen((prev) => !prev);
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
          <Dropdown className="desktop-dropdown">
            <button onClick={toggleCurrencyDropdown}>
              <DollarSign
                size={18}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              {currency}
            </button>
            {currencyDropdownOpen && (
              <ul>
                {["USD", "EUR", "UAH"].map((cur) => (
                  <li key={cur}>
                    <button onClick={() => handleCurrencyChange(cur)}>
                      {cur}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Dropdown>
          <Dropdown className="desktop-dropdown">
            <button onClick={toggleLanguageDropdown}>
              <Globe
                size={18}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              {t(currentLanguage?.labelKey)}
            </button>
            {languageDropdownOpen && (
              <ul>
                {languages.map(({ code, labelKey }) => (
                  <li key={code}>
                    <button onClick={() => handleLanguageChange(code)}>
                      {t(labelKey)}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Dropdown>
          <div className="cart-link">
            <Link to="/cart">
              <img src={CartIcon} alt="Cart" />
            </Link>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </div>
          {user ? (
            <Link to="/account">
              <span className="user-name">{user.name}</span>
            </Link>
          ) : (
            <button className="login-button" onClick={openModal}>
              <img src={LoginIcon} alt="Login" />
            </button>
          )}
          <button className="mobile-menu-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </TopBar>
      <MobileMenu className={isMobileMenuOpen ? "open" : ""}>
        <ul>
          <li>
            <Dropdown className="mobile-dropdown">
              <button onClick={toggleCurrencyDropdown}>
                <DollarSign /> {currency} <ChevronDown />
              </button>
              <ul style={{ display: currencyDropdownOpen ? "block" : "none" }}>
                {["USD", "EUR", "UAH"].map((cur) => (
                  <li key={cur}>
                    <button onClick={() => handleCurrencyChange(cur)}>
                      {cur}
                    </button>
                  </li>
                ))}
              </ul>
            </Dropdown>
          </li>
          <li>
            <Dropdown className="mobile-dropdown">
              <button onClick={toggleLanguageDropdown}>
                <Globe /> {t(currentLanguage?.labelKey)} <ChevronDown />
              </button>
              <ul style={{ display: languageDropdownOpen ? "block" : "none" }}>
                {languages.map(({ code, labelKey }) => (
                  <li key={code}>
                    <button onClick={() => handleLanguageChange(code)}>
                      {t(labelKey)}
                    </button>
                  </li>
                ))}
              </ul>
            </Dropdown>
          </li>
        </ul>
        <BottomBar>
          <ul>
            <li>
              <CategoryDropdown>
                <Link to="/category/PRO-KIT">{t("proKit")}</Link>
                <ul>
                  <li>
                    <Link to="/category/Jersey">{t("jersey")}</Link>
                  </li>
                  <li>
                    <Link to="/category/Sleeves">{t("sleeves")}</Link>
                  </li>
                </ul>
              </CategoryDropdown>
            </li>
            <li>
              <CategoryDropdown>
                <Link to="/category/APPAREL">{t("apparel")}</Link>
                <ul>
                  <li>
                    <Link to="/category/T-shirts">{t("tShirts")}</Link>
                  </li>
                  <li>
                    <Link to="/category/Hoodies">{t("hoodies")}</Link>
                  </li>
                  <li>
                    <Link to="/category/Jackets">{t("jackets")}</Link>
                  </li>
                  <li>
                    <Link to="/category/Pants">{t("pants")}</Link>
                  </li>
                  <li>
                    <Link to="/category/Shorts">{t("shorts")}</Link>
                  </li>
                </ul>
              </CategoryDropdown>
            </li>
            <li>
              <CategoryDropdown>
                <Link to="/category/ACCESSORIES">{t("accessories")}</Link>
                <ul>
                  <li>
                    <Link to="/category/Flag">{t("flag")}</Link>
                  </li>
                  <li>
                    <Link to="/category/Scarf">{t("scarf")}</Link>
                  </li>
                  <li>
                    <Link to="/category/Backpack">{t("backpack")}</Link>
                  </li>
                  <li>
                    <Link to="/category/Suitcase">{t("suitcase")}</Link>
                  </li>
                </ul>
              </CategoryDropdown>
            </li>
            <li>
              <Link to="/category/OUTLET">{t("outlet")}</Link>
            </li>
            <li>
              <Link to="/delivery">{t("delivery")}</Link>
            </li>
            <li>
              <Link to="/contact">{t("contact")}</Link>
            </li>
          </ul>
        </BottomBar>
      </MobileMenu>
      <BottomBar className="desktop-bottom-bar">
        <ul>
          <li>
            <CategoryDropdown>
              <Link to="/category/PRO-KIT">{t("proKit")}</Link>
              <ul>
                <li>
                  <Link to="/category/Jersey">{t("jersey")}</Link>
                </li>
                <li>
                  <Link to="/category/Sleeves">{t("sleeves")}</Link>
                </li>
              </ul>
            </CategoryDropdown>
          </li>
          <li>
            <CategoryDropdown>
              <Link to="/category/APPAREL">{t("apparel")}</Link>
              <ul>
                <li>
                  <Link to="/category/T-shirts">{t("tShirts")}</Link>
                </li>
                <li>
                  <Link to="/category/Hoodies">{t("hoodies")}</Link>
                </li>
                <li>
                  <Link to="/category/Jackets">{t("jackets")}</Link>
                </li>
                <li>
                  <Link to="/category/Pants">{t("pants")}</Link>
                </li>
                <li>
                  <Link to="/category/Shorts">{t("shorts")}</Link>
                </li>
              </ul>
            </CategoryDropdown>
          </li>
          <li>
            <CategoryDropdown>
              <Link to="/category/ACCESSORIES">{t("accessories")}</Link>
              <ul>
                <li>
                  <Link to="/category/Flag">{t("flag")}</Link>
                </li>
                <li>
                  <Link to="/category/Scarf">{t("scarf")}</Link>
                </li>
                <li>
                  <Link to="/category/Backpack">{t("backpack")}</Link>
                </li>
                <li>
                  <Link to="/category/Suitcase">{t("suitcase")}</Link>
                </li>
              </ul>
            </CategoryDropdown>
          </li>
          <li>
            <Link to="/category/OUTLET">{t("outlet")}</Link>
          </li>
          <li>
            <Link to="/delivery">{t("delivery")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("contact")}</Link>
          </li>
        </ul>
      </BottomBar>
      {isModalOpen && <LoginModal onClose={closeModal} />}
    </Nav>
  );
};

export default Navbar;
