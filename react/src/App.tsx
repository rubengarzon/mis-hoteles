import Home from "./pages/Home";
import Flats from "./pages/Flats";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viviendas/:busqueda" element={<Flats />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
