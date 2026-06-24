import React, { createContext, useContext, useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const LanguageContext = createContext(null);

const RTL_CODES = ["AR", "SA"];

export const LANGUAGES = [
  { code: "EN", label: "English",    flag: "🇺🇸" },
  { code: "ES", label: "Español",    flag: "🇪🇸" },
  { code: "FR", label: "Français",   flag: "🇫🇷" },
  { code: "DE", label: "Deutsch",    flag: "🇩🇪" },
  { code: "PT", label: "Português",  flag: "🇧🇷" },
  { code: "JA", label: "日本語",      flag: "🇯🇵" },
  { code: "ZH", label: "中文",        flag: "🇨🇳" },
  { code: "AR", label: "العربية",    flag: "🇸🇦" },
];

const DEFAULT_LANG = LANGUAGES[0]; // EN

function getLangFromCode(code) {
  return LANGUAGES.find(l => l.code === code.toUpperCase()) ?? DEFAULT_LANG;
}

export function LanguageProvider({ children }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // On first render read ?lang=ar (or SA / AR / en …) from the URL
  const urlCode = (searchParams.get("lang") ?? "").toUpperCase();
  const initial = urlCode ? getLangFromCode(urlCode) : DEFAULT_LANG;

  const [language, _setLanguage] = useState(initial);

  // Whenever language changes → keep the URL in sync
  const setLanguage = (lang) => {
    _setLanguage(lang);
    setSearchParams(prev => {
      const next = new URLSearchParams(prev);
      if (lang.code === "EN") {
        next.delete("lang");          // clean URL for default language
      } else {
        next.set("lang", lang.code.toLowerCase());
      }
      return next;
    }, { replace: true });           // replace so back-button still works
  };

  const isRTL = RTL_CODES.includes(language.code);

  // Apply dir / lang / class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isRTL) {
      html.setAttribute("dir", "rtl");
      html.setAttribute("lang", "ar");
      html.classList.add("rtl");
    } else {
      html.setAttribute("dir", "ltr");
      html.removeAttribute("lang");
      html.classList.remove("rtl");
    }
  }, [isRTL]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}