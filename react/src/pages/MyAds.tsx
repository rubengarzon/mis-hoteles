import { useEffect } from "react";
import Header from "../components/Header";
import { getAdsUser, deleteAd } from "../services/Api";
import { useState } from "react";
import { Ad } from "../types/ad";
import { toast } from "sonner";

function MisAnuncios() {
  const [ads, setAds] = useState<Ad[]>([]);
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      getAdsUser(userId).then((res) => {
        setAds(res);
      });
    }
  }, []);

  const handleDeleteAd = async (id: string) => {
  try {
    const response = await deleteAd(id);
    if (response === 204) {
      setAds(ads.filter((anuncio) => anuncio.id !== id));
      toast.success("Anuncio eliminado correctamente");
    } else {
      toast.error("Error al eliminar el anuncio");
    }
  } catch (error) {
    console.error(error);
  }
};


  return (
    <>
      <Header />
      <div className="container mx-auto mt-2">
        {ads.length === 0 && (

          <h2 className="text-center mt-4 text-xl font-bold">No hay anuncios publicados</h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 mx-6">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className="p-4 border border-gray-300 rounded-md shadow-md bg-white"
            >
              <img
                src={`http://localhost:3001/${ad.imagenes[0]}`}
                alt={ad.nombre}
                className="w-full h-48 object-cover"
              />
              <h2 className="text-xl font-semibold mt-4">
                Título: {ad.nombre}
              </h2>
              <p className="mt-2">Descripción: {ad.descripcion}</p>
              <p className="mt-2">Precio: {ad.precio}</p>
              <p className="mt-2">Ciudad: {ad.ciudad}</p>
              <div className="flex justify-end mt-4">
                <a
                  href={`/editar-anuncio/${ad.id}`}
                  className="text-black px-2 py-2 rounded-md mr-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                </a>
                <button
                  onClick={() => {
                    handleDeleteAd(ad.id);
                  }}
                  className="text-black px-2 py-2 rounded-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MisAnuncios;
