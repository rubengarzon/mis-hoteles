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
      <div className="bg-sky-200 text-black rounded-lg mt-10 w-1/3 h-[420px] cursor-pointer hover:scale-105 transition duration-700">
        <div className="flex flex-col">
          <img
            src={house.imagenes[0]}
            alt={house.nombre}
            className="w-full h-36 object-cover rounded-lg"
          />
          <div className="flex flex-col text-center">
            <h2
              key={house.id}
              className="text-xl mt-2 font-extrabold text-indigo-900"
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