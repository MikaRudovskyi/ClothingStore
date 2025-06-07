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
import { ChevronDown, Globe, DollarSign, Euro } from "lucide-react";
import CurrencyHryvnia from "./CurrencyHryvnia";
import { useTranslation } from "react-i18next";
import { ReactComponent as FlagGB } from "../../assets/images/flags/gb.svg";
import { ReactComponent as FlagUA } from "../../assets/images/flags/ua.svg";
import { ReactComponent as FlagDE } from "../../assets/images/flags/de.svg";
import { ReactComponent as FlagES } from "../../assets/images/flags/es.svg";
import { ReactComponent as FlagFR } from "../../assets/images/flags/fr.svg";
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
  const { setLanguage, currency, setCurrency } = useCurrency();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const languages = [
    { code: "en", labelKey: "english", FlagIcon: FlagGB },
    { code: "uk", labelKey: "ukrainian", FlagIcon: FlagUA },
    { code: "de", labelKey: "german", FlagIcon: FlagDE },
    { code: "es", labelKey: "spanish", FlagIcon: FlagES },
    { code: "fr", labelKey: "french", FlagIcon: FlagFR },
  ];

  const currencyIcons = {
    USD: (
      <DollarSign
        size={18}
        style={{ marginRight: 8, verticalAlign: "middle" }}
      />
    ),
    EUR: <Euro size={18} style={{ marginRight: 8, verticalAlign: "middle" }} />,
    UAH: (
      <CurrencyHryvnia
        size={18}
        style={{ marginRight: 8, verticalAlign: "middle" }}
      />
    ),
  };

  const currentLanguage =
    languages.find((lang) => i18n.language.startsWith(lang.code)) ??
    languages[0];

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

  const [openCategory, setOpenCategory] = useState(null);

  return (
    <Nav>
      <TopBar>
        <div className="logo-container">
          <Link
            to="/"
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img src={LogoNavi} alt="Logo Navi" className="logo-image" />
            <span className="logo-text">Clothing Store</span>
          </Link>
        </div>
        <div className="top-bar-right">
          <Dropdown className="desktop-dropdown">
            <button onClick={toggleCurrencyDropdown}>
              {currencyIcons[currency] || (
                <DollarSign
                  size={18}
                  style={{ marginRight: 8, verticalAlign: "middle" }}
                />
              )}
              {currency}
            </button>
            {currencyDropdownOpen && (
              <ul>
                {["USD", "EUR", "UAH"].map((cur) => (
                  <li key={cur}>
                    <button onClick={() => handleCurrencyChange(cur)}>
                      {currencyIcons[cur]} {cur}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Dropdown>
          <Dropdown className="desktop-dropdown">
            <button onClick={toggleLanguageDropdown}>
              {currentLanguage.FlagIcon && (
                <currentLanguage.FlagIcon
                  style={{
                    width: 20,
                    height: 14,
                    marginRight: 6,
                    verticalAlign: "middle",
                  }}
                  aria-hidden="true"
                  focusable="false"
                />
              )}
              {t(currentLanguage?.labelKey)}
            </button>
            {languageDropdownOpen && (
              <ul>
                {languages.map(({ code, labelKey, FlagIcon }) => (
                  <li key={code}>
                    <button onClick={() => handleLanguageChange(code)}>
                      {FlagIcon && (
                        <FlagIcon
                          style={{
                            width: 20,
                            height: 14,
                            marginRight: 6,
                            verticalAlign: "middle",
                          }}
                          aria-hidden="true"
                          focusable="false"
                        />
                      )}
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
                {currencyIcons[currency] || (
                  <DollarSign
                    size={18}
                    style={{ marginRight: 8, verticalAlign: "middle" }}
                  />
                )}
                {currency} <ChevronDown />
              </button>
              <ul style={{ display: currencyDropdownOpen ? "block" : "none" }}>
                {["USD", "EUR", "UAH"].map((cur) => (
                  <li key={cur}>
                    <button onClick={() => handleCurrencyChange(cur)}>
                      {currencyIcons[cur]} {cur}
                    </button>
                  </li>
                ))}
              </ul>
            </Dropdown>
          </li>
          <li>
            <Dropdown className="mobile-dropdown">
              <button onClick={toggleLanguageDropdown}>
                <Globe /> {t(currentLanguage?.labelKey) || "English"}{" "}
                <ChevronDown />
              </button>
              <ul style={{ display: languageDropdownOpen ? "block" : "none" }}>
                {languages.map(({ code, labelKey, FlagIcon }) => (
                  <li key={code}>
                    <button onClick={() => handleLanguageChange(code)}>
                      {FlagIcon && (
                        <FlagIcon
                          style={{ marginRight: 8, verticalAlign: "middle" }}
                        />
                      )}
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
            {[
              {
                name: "PRO-KIT",
                label: t("proKit"),
                sub: [
                  { slug: "Jersey", label: t("jersey") },
                  { slug: "Sleeves", label: t("sleeves") },
                ],
              },
              {
                name: "APPAREL",
                label: t("apparel"),
                sub: [
                  ["T-shirts", "tShirts"],
                  ["Hoodies", "hoodies"],
                  ["Jackets", "jackets"],
                  ["Pants", "pants"],
                  ["Shorts", "shorts"],
                ].map(([slug, label]) => ({ slug, label: t(label) })),
              },
              {
                name: "ACCESSORIES",
                label: t("accessories"),
                sub: [
                  ["Flag", "flag"],
                  ["Scarf", "scarf"],
                  ["Backpack", "backpack"],
                  ["Suitcase", "suitcase"],
                ].map(([slug, label]) => ({ slug, label: t(label) })),
              },
            ].map(({ name, label, sub }) => (
              <li key={name}>
                <CategoryDropdown>
                  <div className="dropdown-toggle">
                    <Link
                      to={`/category/${name}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                    <button
                      type="button"
                      className={`dropdown-arrow ${
                        openCategory === name ? "open" : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setOpenCategory(openCategory === name ? null : name);
                      }}
                      aria-label={`Toggle subcategories for ${name}`}
                    >
                      <ChevronDown />
                    </button>
                  </div>
                  {openCategory === name && (
                    <ul>
                      {sub.map(({ slug, label }) => (
                        <li key={slug}>
                          <Link
                            to={`/category/${slug}`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </CategoryDropdown>
              </li>
            ))}
            <li>
              <Link
                to="/category/OUTLET"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("outlet")}
              </Link>
            </li>
            <li>
              <Link to="/delivery" onClick={() => setIsMobileMenuOpen(false)}>
                {t("delivery")}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                {t("contact")}
              </Link>
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
