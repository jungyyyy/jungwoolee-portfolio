import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import de from "@/locales/de.json";

export const LOCALE_STORAGE_KEY = "jl-portfolio-locale";

export type AppLocale = "en" | "de";

export function getInitialLocale(): AppLocale {
  if (typeof window === "undefined") {
    return "en";
  }

  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored === "en" || stored === "de") {
    return stored;
  }

  if (navigator.language.toLowerCase().startsWith("de")) {
    return "de";
  }

  return "en";
}

const resources = {
  en: { translation: en },
  de: { translation: de },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
}

export default i18n;
