import React, { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext();

export const useCurrency = () => {
  return useContext(CurrencyContext);
};

export const CurrencyProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "English"
  );
  const [currency, setCurrency] = useState(
    localStorage.getItem("currency") || "USD"
  );

  const currencyRates = {
    USD: 1,
    EUR: 0.9,
    UAH: 41.7,
  };

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    UAH: "₴",
  };

  useEffect(() => {
    localStorage.setItem("language", language);
    localStorage.setItem("currency", currency);
  }, [language, currency]);

  return (
    <CurrencyContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        currencyRates,
        currencySymbols,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
