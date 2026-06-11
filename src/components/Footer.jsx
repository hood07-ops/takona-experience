import { useLanguage } from "../context/useLanguage";

function Footer() {
  const { language } = useLanguage();
  const text =
    language === "en"
      ? "Mana. Culture. Nature. Rapa Nui."
      : "Mana. Cultura. Naturaleza. Rapa Nui.";

  return (
    <footer className="footer">
      <h3>Tākona Experience</h3>
      <p>{text}</p>
      <p>© 2026 Tākona Experience Rapa Nui</p>
    </footer>
  );
}

export default Footer;
