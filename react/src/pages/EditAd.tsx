import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getAnuncio, editAd } from "../services/Api";
import { Ad } from "../types/ad";
import { toast } from "sonner";

function EditAd() {
  const { id } = useParams();
  const [anuncio, setAnuncio] = useState<Ad>();
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) return;
    getAnuncio(id).then((res) => setAnuncio(res));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.startsWith("caracteristicas.")) {
      const field = name.split(".")[1];
      setAnuncio({
        ...anuncio,
        caracteristicas: { ...anuncio?.caracteristicas, [field]: value },
      });
      return;
    } else {
      setAnuncio({ ...anuncio, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(anuncio);
    editAd(id, anuncio).then((res) => {
      console.log(anuncio);
      if (res) {
        toast.success("Anuncio editado con éxito");
        navigate("/mis-anuncios");
      } else {
        toast.error("Error al editar el anuncio");
      }
    });
  };

  return (
    <>
      <Header />
      <h2 className="text-2xl font-bold text-center my-2">Editar anuncio</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mx-4">
          <label
            htmlFor="nombre"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Título
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={anuncio?.nombre}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 mx-4">
          <label
            htmlFor="nombre"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tipo
          </label>
          <input
            id="tipo"
            name="tipo"
            type="text"
            value={anuncio?.tipo}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 mx-4">
          <label
            htmlFor="descripcion"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            value={anuncio?.descripcion}
            onChange={handleInputChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 mx-4">
          <label
            htmlFor="precio"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Precio
          </label>
          <input
            id="precio"
            name="precio"
            value={anuncio?.precio}
            onChange={handleInputChange}
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={anuncio?.precio}
          />
        </div>
        <div className="mb-4 mx-4">
          <label
            htmlFor="ciudad"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Ciudad
          </label>
          <input
            id="ciudad"
            name="ciudad"
            value={anuncio?.ciudad}
            onChange={handleInputChange}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 mx-4">
          <label
            htmlFor="m2"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Metros cuadrados
          </label>
          <input
            id="m2"
            name="m2"
            value={anuncio?.m2}
            onChange={handleInputChange}
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 mx-4">
          <label
            htmlFor="habitaciones"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Habitaciones
          </label>
          <input
            id="habitaciones"
            name="habitaciones"
            value={anuncio?.habitaciones}
            onChange={handleInputChange}
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 mx-4">
          <label
            htmlFor="banos"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Baños
          </label>
          <input
            id="banos"
            name="baños"
            value={anuncio?.baños}
            onChange={handleInputChange}
            type="number"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <h3>Caracteristicas</h3>
        <div className="mb-4 mx-4">
          <label
            htmlFor="tipoInmueble"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Tipo de Inmueble
          </label>
          <input
            id="tipoInmueble"
            name="caracteristicas.tipoInmueble"
            value={anuncio?.caracteristicas.tipoInmueble}
            onChange={handleInputChange}
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4 mx-4 flex place-content-center">
          <button
            type="submit"
            className="border-2 border-black text-black font-bold py-2 px-4 rounded flex gap-2 focus:outline-none focus:shadow-outline"
          >
            <svg
              width="24px"
              height="24px"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              color="#000000"
            >
              <path
                d="M3 7.5V5a2 2 0 012-2h11.172a2 2 0 011.414.586l2.828 2.828A2 2 0 0121 7.828V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.5M6 21v-4"
                stroke="#000000"
                strokeWidth="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M18 21v-7.4a.6.6 0 00-.6-.6H15M16 3v5.4a.6.6 0 01-.6.6h-1.9M8 3v3M1 12h11m0 0L9 9m3 3l-3 3"
                stroke="#000000"
                strokeWidth="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            Guardar
          </button>
        </div>
      </form>
    </>
  );
}

export default EditAd;
