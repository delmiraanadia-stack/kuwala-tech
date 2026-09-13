"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { pt } from "@/i18n/pt";
import { en } from "@/i18n/en";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof pt;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    // Check localStorage on mount
    const saved = localStorage.getItem("kuwala_lang") as Language;
    if (saved === "pt" || saved === "en") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("kuwala_lang", lang);
    document.documentElement.lang = lang;
  };

  const t = language === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
