import { useLanguage } from "../context/useLanguage";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher" aria-label="Language selector">
      <button
        className={language === "es" ? "language-btn active" : "language-btn"}
        onClick={() => setLanguage("es")}
        type="button"
      >
        ES
      </button>

      <button
        className={language === "en" ? "language-btn active" : "language-btn"}
        onClick={() => setLanguage("en")}
        type="button"
      >
        EN
      </button>
    </div>
  );
}

export default LanguageSwitcher;
