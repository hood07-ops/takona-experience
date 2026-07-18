import { useLanguage } from "../context/useLanguage";

function FloatingWhatsApp() {
  const { language } = useLanguage();
  const copy =
    language === "en"
      ? {
          label: "Book on WhatsApp",
          message: "Hello, I want to book a Takona experience.",
        }
      : {
          label: "Reservar por WhatsApp",
          message: "Hola, quiero reservar una experiencia Takona.",
        };

  return (
    <a
      className="floating-whatsapp"
      href={`https://wa.me/56973199456?text=${encodeURIComponent(copy.message)}`}
      target="_blank"
      rel="noreferrer"
      aria-label={copy.label}
    >
      WhatsApp
    </a>
  );
}

export default FloatingWhatsApp;
