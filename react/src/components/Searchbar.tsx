import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ handleHouses }: any) {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputValue === "") {
      setError(true);
    } else {
      setError(false);
      handleHouses(inputValue);
      clearInput();
      navigate(`/viviendas/${inputValue}`);
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
            />
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white text-3xl font-bold py-2 px-4 rounded-lg"
              type="submit"
            >
              🔎
            </button>
          </form>
          {error === true ? (
            <span className="bg-red-500 text-white font-semibold p-1 rounded-md">
              ⚠️ Escribe una ubicación donde buscar
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
}
