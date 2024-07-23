import React from "react";
import { useLanguage } from "./LanguageContext";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  const translations = {
    en: {
      title: "Todo App",
      languageToggle: "Switch Language",
    },
    ge: {
      title: "Todo აპლიკაცია",
      languageToggle: "ენის შეცვლა",
    },
  };
  return (
    <header>
      <h1>{translations[language].title}</h1>
      <button onClick={toggleLanguage}>
        {translations[language].languageToggle}
      </button>
    </header>
  );
};
export default Header;
