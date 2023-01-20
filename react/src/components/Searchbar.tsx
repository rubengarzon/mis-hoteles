import { useState } from "react";
import { getHouse } from "../services/Api";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 3) setInputValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getHouse();
  };

  return (
    <>
      <div className="flex mt-4">
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <input
              className="w-full border-2 border-gray-300 p-4 rounded-lg outline-none text-black"
              type="text"
              placeholder="Ciudad"
              onChange={handleChange}
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
