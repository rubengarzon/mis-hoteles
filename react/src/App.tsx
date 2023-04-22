import Home from "./pages/Home";
import Flats from "./pages/Flats";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import PostAd from "./pages/PostAd";
import PostAdDetail from "./pages/PostAdDetail";
import PostAdImg from "./pages/PostAdImg";
import { Toaster, toast } from "sonner";
import EditAd from "./pages/EditAd";
import MyAds from "./pages/MyAds";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viviendas/:busqueda" element={<Flats />} />
        <Route path="/login" element={<Login />} />
        <Route path="/nuevo-usuario" element={<Register />} />
        <Route path="/publica-anuncio" element={<PostAd />} />
        <Route path="/publica-anuncio/2" element={<PostAdDetail />} />
        <Route path="/publica-anuncio/3" element={<PostAdImg />} />
        <Route path="/mis-anuncios" element={<MyAds />} />
        <Route path="/editar-anuncio/:id" element={<EditAd />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
      <Toaster richColors />
    </div>
  );
}

export default App;
