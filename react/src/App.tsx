import Home from "./pages/Home";
import Flats from "./pages/Flats";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import PostAd from "./pages/PostAd";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viviendas/:busqueda" element={<Flats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nuevo-usuario" element={<Register />} />
        <Route path="/publica-anuncio" element={<PostAd />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
