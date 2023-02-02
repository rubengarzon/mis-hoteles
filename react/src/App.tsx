import Home from "./pages/Home";
import Flat from "./pages/Flat";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/viviendas/:busqueda" element={<Flat />} />
      </Routes>
    </div>
  );
}

export default App;
