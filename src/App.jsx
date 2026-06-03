import Loader from "./components/Loader";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Identidades from "./pages/Identidades";
import Reservas from "./pages/Reservas";
import Galeria from "./pages/Galeria";
import Cultura from "./pages/Cultura";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Loader />
        
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
    </BrowserRouter>
  );
}

export default App;