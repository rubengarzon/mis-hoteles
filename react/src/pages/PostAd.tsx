import Header from "../components/Header";
import { useForm } from "react-hook-form";
import PropertyLocationForm from "../components/PostAd/PropertyLocationForm";
import AdForm from "../components/PostAd/AdForm";

function PostAd() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    if (data["operacion"].length > 0 && data["tipo-inmueble"].length > 0) {
      document.querySelector("section").classList.remove("hidden");
    }
  };
  return (
    <>
      <Header />
      <h1 className="text-center text-3xl font-bold mt-2">
        Publica tu anuncio de particular
      </h1>
      <AdForm onSubmit={onSubmit}/>
      <section className="hidden">
        <h2 className="text-2xl font-bold mt-4 ml-2">Ubicación del inmueble</h2>
        <PropertyLocationForm />
      </section>
    </>
  );
}

export default PostAd;
