import i18next from "i18next";
import English from "locales/eng.json";
import Vietnamese from "locales/vie.json";
import { initReactI18next } from "react-i18next";

const resources = {
  eng: {
    translation: English,
  },
  vie: {
    translation: Vietnamese,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "vie",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
