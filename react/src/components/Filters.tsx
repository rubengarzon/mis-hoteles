import { ChangeEvent, useState } from "react";
import { getHousesByCity, getHouseByFilter } from "../services/Api";
import { uiSearchFilters } from "../js/util";
import { useEffect } from "react";

export default function filters({ updateHouses, busqueda }: any) {
  const [selectTipoVivienda, setSelectTipoVivienda] = useState<string>("");
  const [selectPrecio, setSelectPrecio] = useState<string>("");
  const [selectRooms, setSelectRooms] = useState<string>("");

  useEffect(() => {
    uiSearchFilters();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.id;
    if (id === "tipoVivienda") {
      setSelectTipoVivienda(e.target.value);
    } else if (id === "precio") {
      setSelectPrecio(e.target.value);
    } else if (id === "rooms") {
      setSelectRooms(e.target.value);
    }
  };
  const errorMessagesFilters = () => {
    if (
      selectTipoVivienda.length === 0 &&
      selectPrecio.length === 0 &&
      selectRooms.length === 0
    ) {
      const errorElement = document.getElementById(
        "error__message"
      ) as HTMLElement;

      errorElement.classList.remove("hidden");
      errorElement.style.display = "flex";
      return true;
    } else {
      const errorElement = document.getElementById(
        "error__message"
      ) as HTMLElement;

      errorElement.classList.add("hidden");
      errorElement.style.display = "none";
      return false;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (errorMessagesFilters() === true) {
      errorMessagesFilters();
    } else {
      getHouseByFilter(
        busqueda,
        selectTipoVivienda,
        selectPrecio,
        selectRooms
      ).then((res) => {
        updateHouses(res);
      });
    }
  };

  const resetFilters = () => {
    getHousesByCity(busqueda).then((res) => {
      updateHouses(res);
    });
    // reset select values
    setSelectTipoVivienda("");
    setSelectPrecio("");
    setSelectRooms("");
    // reset select options
    const select = document.getElementById("tipoVivienda") as HTMLSelectElement;
    select.selectedIndex = 0;
    const select2 = document.getElementById("precio") as HTMLSelectElement;
    select2.selectedIndex = 0;
    const select3 = document.getElementById("rooms") as HTMLSelectElement;
    select3.selectedIndex = 0;
    return;
  };

  return (
    <>
      <div className="mt-10 flex flex-wrap place-content-center w-full gap-2">
        <div>
          <span
            id="rooms"
            className="text-black font-bold flex items-center hover:underline hover:cursor-pointer"
          >
            Habitaciones
            <svg
              id="rooms__icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            <svg
              id="rooms__icon__close"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 hidden ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 15.75l7.5-7.5 7.5 7.5"
              />
            </svg>
          </span>
          <div
            id="rooms__icon__block"
            className="bg-white w-32 h-32 shadow-md hidden"
          >
            <button className="border-2 w-full p2 text-black">1+</button>
          </div>
        </div>
        <select
          className="bg-gray-200 rounded-md p-2 border-black border-2 hover:bg-blue-300"
          onChange={handleChange}
          id="tipoVivienda"
        >
          <option value="">Tipo de vivienda</option>
          <option value="piso">Piso</option>
          <option value="casa">Casa</option>
          <option value="atico">Ático</option>
        </select>
        <select
          className="bg-gray-200 rounded-md p-2 ml-2 border-black border-2 hover:bg-blue-300"
          onChange={handleChange}
          id="precio"
        >
          <option value="">Precio</option>
          <option value="70000">70.000€</option>
          <option value="100000">100.000€</option>
          <option value="200000">200.000€</option>
        </select>
        <select
          className="bg-gray-200 rounded-md p-2 ml-2 border-black border-2 hover:bg-blue-300"
          onChange={handleChange}
          id="rooms"
        >
          <option value="">Habitaciones</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="+3">3</option>
        </select>
        <button
          className="text-black border-2 border-black rounded-md p-2 ml-2"
          onClick={handleSubmit}
        >
          Aplicar
        </button>
        <button
          className="text-black border-2 border-black rounded-md p-2 ml-2"
          onClick={resetFilters}
        >
          Borrar
        </button>
      </div>
      <div id="error__message" className="hidden place-content-center">
        <span className="text-red-600 font-bold mt-2">
          ⚠️ No has seleccionado ningún filtro
        </span>
      </div>
    </>
  );
}
