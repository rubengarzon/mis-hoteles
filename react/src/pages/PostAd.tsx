import Header from "../components/Header";
import { useForm } from "react-hook-form";
import AdForm from "../components/AdForm";
import { useNavigate } from "react-router-dom";
import Steps from "../components/Steps";
import { Ad } from "../types/ad";

function PostAd() {
  const { register, handleSubmit, watch, formState: { errors }} = useForm();
  const navigate = useNavigate();

  const onSubmit = (ad: Ad) => {
    const adNew: Ad = {
      tipo: ad.operacion,
      caracteristicas: {
        tipoInmueble: ad.tipo,
      },
      ciudad: ad.provincia,
      calle: ad.calle,
    }
    localStorage.setItem("ad", JSON.stringify(adNew));
    navigate("/publica-anuncio/2");
  };

  return (
    <>
      <Header />
      <Steps step="1" />
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
