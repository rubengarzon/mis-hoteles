import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HouseList from "../components/HouseList";
import SearchBarHome from "../components/SearchbarHome";
import { House } from "../types";

interface FormState {
  houses: House;
}

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <img src="https://img.freepik.com/free-vector/open-house-abstract-concept-vector-illustration-open-inspection-property-home-sale-real-estate-service-potential-buyer-walk-through-house-staging-floor-plan-abstract-metaphor_335657-5732.jpg?w=740&t=st=1681985675~exp=1681986275~hmac=dc863f204b585d1dee0932a79b5ebaa037f8c90716c81e681f300e3500562e8f" width="200" className="self-center" />
        <h2 className="text-3xl text-black font-extrabold mt-8 text-center p-2">
          Alquiler de pisos, compra y venta
        </h2>
      </div>
     <SearchBarHome />
     <p className="text-gray-700 mt-10 text-center p-2 mx-5">
          aquí es donde puedes encontrar un lugar de ensueño para ti a precios
          asequibles.
        </p>
     <Footer/>
    </div>
  );
}
