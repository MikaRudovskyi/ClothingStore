import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import ua from "./locales/ua.json";
import de from "./locales/de.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";

const savedLanguage = localStorage.getItem("language") || "English";

i18n.use(initReactI18next).init({
  resources: {
    English: { translation: en },
    Ukrainian: { translation: ua },
    German: { translation: de },
    Spanish: { translation: es },
    French: { translation: fr },
  },
  lng: savedLanguage,
  fallbackLng: "English",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
