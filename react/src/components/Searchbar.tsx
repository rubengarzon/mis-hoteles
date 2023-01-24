import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CIUDADES } from "../constants.js";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // solo se aceptan letras y espacios
    if (e.target.value.match(/[a-zA-Z ]/g)) {
      setError("");
      setInputValue(e.target.value.trim());
    } else {
      setError("numbers");
      setInputValue("");
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue === "") {
      setError("empty");
    } else {
      if (CIUDADES.includes(inputValue) === true) {
        setError("");
        clearInput();
        navigate(`/viviendas/${inputValue}`);
      } else {
        setError("notFound");
      }
    }
  };

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

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <>
      <div className="mt-16 flex justify-center">
        <div className="w-2/5">
          <form onSubmit={handleSubmit} className="flex mb-2">
            <input
              className="w-full border-2 border-gray-300 p-4 rounded-lg outline-none text-black mr-2"
              type="text"
              placeholder="Ciudad"
              onChange={handleChange}
              value={inputValue}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-3xl font-bold py-2 px-4 rounded-lg"
              type="submit"
            >
              🔎
            </button>
          </form>
          {error && renderSwitch(error)}
        </div>
      </div>
    </>
  );
}
