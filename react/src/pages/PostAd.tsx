import Header from "../components/Header";
import { useForm } from "react-hook-form";
import PropertyLocationForm from "../components/PostAd/PropertyLocationForm";
import AdForm from "../components/AdForm";
import { useNavigate } from "react-router-dom";

function PostAd() {
  const { register, handleSubmit, watch, errors } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    navigate("/publica-anuncio/2");
  };

  return (
    <>
      <Header />
      <div className="flex place-content-center border-2 border-gray-400">
        <span className="bg-black text-white p-2 text-xs font-bold w-full text-center flex">
          1. Datos Básicos
        </span>
        <span className="bg-gray-300 text-gray-600 p-2 text-xs w-full text-center">
          2. Detalles
        </span>
        <span className="bg-gray-300 text-gray-600 p-2 text-xs w-full text-center">
          3. Fotos
        </span>
      </div>
      <h1 className="text-2xl font-bold mt-8 mx-2">
        Publica tu anuncio de particular
      </h1>
      <p className="mx-2 mt-6 mb-6">
        Rellena el formulario y publica tu anuncio de forma gratuita.
      </p>
      <AdForm onSubmit={onSubmit} />
    </>
  );
}

export default PostAd;
