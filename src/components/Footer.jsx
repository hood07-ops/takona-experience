import { useLanguage } from "../context/useLanguage";

function Footer() {
  const { language } = useLanguage();
  const text =
    language === "en"
      ? "Mana. Culture. Nature. Rapa Nui."
      : "Mana. Cultura. Naturaleza. Rapa Nui.";

  return (
    <footer className="footer">
      <h3>T\u0101kona Experience</h3>
      <p>{text}</p>
      <p>\u00a9 2026 T\u0101kona Experience Rapa Nui</p>
    </footer>
  );
}

export default Footer;
