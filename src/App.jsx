import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Identidades from "./pages/Identidades";
import Reservas from "./pages/Reservas";
import Galeria from "./pages/Galeria";
import Cultura from "./pages/Cultura";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/identidades" element={<Identidades />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/cultura" element={<Cultura />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
