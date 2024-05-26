import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { English } from "./languages/";

/**
 * @description Internationlaisation i18n. if Confused check LoginPage.jsx
 * @author Anirban Mishra
 */

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: localStorage.getItem("lang") || "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: { ...English } },
    },
  });

export default i18n;
