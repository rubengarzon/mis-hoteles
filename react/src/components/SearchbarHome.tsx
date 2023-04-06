import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CIUDADES } from "../constants.js";
import useSearchFlat from "../hooks/useSearchFlat";
import RenderError from "./RenderError";

export default function SearchBar() {
  const {inputValue, handleChange, handleSubmit, error} = useSearchFlat();

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <>
      <div className="mt-16 flex">
        <div className="w-full">
          <form onSubmit={handleSubmit} className="flex mb-2">
            <input
              className="w-full border-2 border-gray-300 p-4 rounded-lg outline-none text-black mr-2"
              type="text"
              placeholder="Madrid"
              onChange={handleChange}
              value={inputValue}
              list="cities"
            />
            <datalist id="cities">
              {CIUDADES.map((city) => (
                <option key={city} value={city} />
              ))}
            </datalist>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-3xl font-bold py-2 px-4 rounded-lg"
              type="submit"
            >
              🔎
            </button>
          </form>
          <RenderError error={error} />
        </div>
      </div>
    </>
  );
}
