import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CIUDADES } from "../constants.js";

function useSearchFlat() {
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();


  const clearInput = () => {
    setInputValue("");
  };

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
      // inputvalue quitar acentos y mayusculas
      const inputValueSinAcentos = inputValue
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      const inputValueNew = inputValueSinAcentos.toLowerCase();
      // agregar a un nuevo array las ciudades sin acentos y minusculas
      const NEW_CITIES = CIUDADES.map((city) => {
        return city
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
      });
      if (NEW_CITIES.includes(inputValueNew) === true) {
        setError("");
        clearInput();
        navigate(`/viviendas/${inputValueNew}`);
      } else {
        setError("notFound");
      }
    }
  };

  return { inputValue, handleChange, handleSubmit, error };
}

export default useSearchFlat;
