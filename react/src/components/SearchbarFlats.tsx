import useSearchFlat from "../hooks/useSearchFlat";
import { CIUDADES } from "../constants.js";
import { useParams } from "react-router-dom";

function SearchbarFlats({ updateHouses}) {
  const { city } = useParams();
  const { inputValue, handleChange, handleSubmit, error } = useSearchFlat();

  const renderSwitch = (param: string) => {
    switch (param) {
      case "empty":
        return (
          <span className="bg-red-500 text-white font-semibold p-1 rounded-md">
            ⚠️ Escribe una ciudad
          </span>
        );
      case "numbers":
        return (
          <span className="bg-red-500 text-white font-semibold p-1 rounded-md">
            ⚠️ Solo se aceptan letras
          </span>
        );
      case "notFound":
        return (
          <span className="bg-red-500 text-white font-semibold p-1 rounded-md">
            ⚠️ No se han encontrado viviendas en {inputValue}
          </span>
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex place-content-center mt-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            🔎
          </div>
          <input
            name="ciudad"
            type="text"
            placeholder="Córdoba.."
            list="cities"
            onChange={handleChange}
            value={inputValue}
            autocomplete="off"
            className="rounded-t-md w-40 h-10 bg-blue-400 text-black placeholder-slate-900 pl-10 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
          <datalist id="cities">
            {CIUDADES.map((city) => (
              <option key={city} value={city} />
            ))}
          </datalist>
          <button
            className="bg-blue-700 hover:bg-blue-800 text-white text-base p-2 ml-2 rounded-lg"
            type="submit"
          >
            Buscar
          </button>
        </div>
      </form>
      {error && renderSwitch(error)}
    </>
  );
}

export default SearchbarFlats;
