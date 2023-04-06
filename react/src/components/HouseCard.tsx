import CardFeatures from "./CardFeatures";


function HouseCard({ house }: any) {
  /**
   * Formatea el precio de la vivienda
   * @returns Formatted price
   */
  const currencyFormatter = () => {
    let formatter = new Intl.NumberFormat("es-ES", {
      style: "currency",
      minimumFractionDigits: 0,
      currency: "EUR",
    });
    return formatter.format(house.precio);
  };

  return (
    <>
      <div className="bg-sky-200 text-black rounded-3xl mt-10 w-[25em] h-[39em] cursor-pointer shadow-md shadow-indigo-900">
        <div className="flex flex-col">
          <div className="flex flex-col w-full">
            <img
              src={house.imagenes[0]}
              alt={house.nombre}
              className="w-full h-[227px] object-cover rounded-t-3xl border-2 border-sky-200"
            />
            <div className="flex">
              <img
                src={house.imagenes[1]}
                alt={house.nombre}
                className="w-1/2 h-[95px] object-cover border-2 border-sky-200"
              />
              <img
                src={house.imagenes[2]}
                alt={house.nombre}
                className="w-1/2 h-[95px] object-cover border-2 border-sky-200"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-indigo-900 mt-2 ml-4 text-center">
              {currencyFormatter()}
            </span>
            <h2
              key={house.id}
              className="text-sm mt-2 text-gray-700 font-semibold ml-4 text-center"
            >
              {house.nombre}
            </h2>
            <p className="text-md text-gray-700 font-semibold mt-4 hidden">
              {house.descripcion.substring(0, 50)}...
            </p>
            <div className="flex flex-wrap place-content-center mt-2 p-1 gap-2">
              <span className="text-sm text-gray-700 font-bold mt-2">
                🛏️ {house.habitaciones} habitaciones
              </span>
              <span className="text-sm text-gray-700 font-bold mt-2">
                🏠 {house.m2} m²
              </span>
              <span className="text-sm text-gray-700 font-bold mt-2">
                🏢 {house.planta === "0" ? "Casa" : "Planta " + house.planta}{" "}
              </span>
            </div>
            <CardFeatures extra={house.extra} />
          </div>
        </div>
        <div className="flex mt-4 justify-center">
          <button className="bg-blue-800 text-white flex p-2 ml-2 rounded-md items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3443/3443354.png"
              width={20}
              className="mr-2 invert"
            />
            Contactar
          </button>
          <a
            href={`tel:957`}
            className="flex p-2 ml-4 rounded-md items-center text-blue-800 border-2 border-blue-800"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/73/73552.png"
              width={20}
              className="mr-2"
            />
            Teléfono
          </a>
        </div>
      </div>
    </>
  );
}

export default HouseCard;