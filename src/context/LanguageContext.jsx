import { useMemo, useState } from "react";
import { LanguageContext } from "./language";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem("takona-language") || "es";
  });

  const setLanguage = (nextLanguage) => {
    localStorage.setItem("takona-language", nextLanguage);
    setLanguageState(nextLanguage);
  };

  const value = useMemo(() => ({ language, setLanguage }), [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
