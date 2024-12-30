import i18n from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import en from "../../public/locales/en/translation.json";
import id from "../../public/locales/id/translation.json";
import de from "../../public/locales/de/translation.json";
import fr from "../../public/locales/fr/translation.json";

i18n
  .use(initReactI18next)
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      id: { translation: id },
      de: { translation: de },
      fr: { translation: fr },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
