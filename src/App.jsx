import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./pages/Home";
import Identidades from "./pages/Identidades";
import Reservas from "./pages/Reservas";
import Galeria from "./pages/Galeria";
import Cultura from "./pages/Cultura";
import "./App.css";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname);
    window.addEventListener("popstate", updatePath);
    window.addEventListener("app:navigate", updatePath);
    return () => {
      window.removeEventListener("popstate", updatePath);
      window.removeEventListener("app:navigate", updatePath);
    };
  }, []);

  const pages = {
    "/": <Home />,
    "/identidades": <Identidades />,
    "/reservas": <Reservas />,
    "/galeria": <Galeria />,
    "/cultura": <Cultura />,
  };

  return (
    <div className="app">
      <Navbar />

      {pages[path] ?? <Home />}

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
