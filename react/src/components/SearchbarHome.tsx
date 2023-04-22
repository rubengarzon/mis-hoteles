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
      <div className="mt-10 flex">
        <div className="w-full mx-6">
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
              className="bg-black text-white text-3xl font-bold py-2 px-4 rounded-lg"
              type="submit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
             </svg>
            </button>
          </form>
          <RenderError error={error} />
        </div>
      </div>
    </>
  );
}
