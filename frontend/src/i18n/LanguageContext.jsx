// Lightweight i18n for the portfolio
import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({ lang: "es", toggle: () => {}, setLang: () => {} });

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "es";
    return localStorage.getItem("portfolio_lang") || "es";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("portfolio_lang", lang);
      document.documentElement.setAttribute("lang", lang);
    }
  }, [lang]);

  const setLang = (l) => setLangState(l);
  const toggle = () => setLangState((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);

// Helper to pick a field from a bilingual object, with fallback
export const pick = (field, lang) => {
  if (field == null) return "";
  if (typeof field === "string") return field;
  return field[lang] ?? field.es ?? field.en ?? "";
};
