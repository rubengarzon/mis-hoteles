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
      <div className="bg-sky-200 text-black rounded-3xl mt-10 w-1/2 cursor-pointer hover:scale-105 transition duration-700 shadow-md shadow-indigo-900">
        <div className="flex">
          <div className="flex flex-col w-[500px]">
            <img
              src={house.imagenes[0]}
              alt={house.nombre}
              className="w-full h-[257px] object-cover rounded-tl-3xl border-2 border-sky-200"
            />
            <div className="flex">
              <img
                src={house.imagenes[1]}
                alt={house.nombre}
                className="w-1/2 h-[115px] object-cover rounded-bl-3xl border-2 border-sky-200"
              />
              <img
                src={house.imagenes[2]}
                alt={house.nombre}
                className="w-1/2 h-[115px] object-cover border-2 border-sky-200"
              />
            </div>
          </div>
          <div className="flex flex-col text-center">
            <h2
              key={house.id}
              className="text-xl mt-7 font-extrabold text-indigo-900"
            >
              {house.nombre}
            </h2>
            <p className="text-md text-gray-700 font-semibold mt-4">
              {house.descripcion.substring(0, 50)}...
            </p>
            <div className="flex flex-wrap place-content-center mt-4 p-1 gap-2">
              <span className="text-md text-gray-700 font-bold mt-2">
                🛏️ {house.habitaciones} habitaciones
              </span>
              <span className="text-md text-gray-700 font-bold mt-2">
                🏠 {house.m2} m²
              </span>
              <span className="text-md text-gray-700 font-bold mt-2">
                🏢 {house.planta === "0" ? "Casa" : "Planta " + house.planta}{" "}
              </span>
            </div>
            <CardFeatures extra={house.extra} />
            <span className="text-xl font-extrabold text-indigo-900 mt-7">
              {currencyFormatter()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default HouseCard;