export default function HouseCard({ key, house }: any) {
  return (
    <>
      <div className="bg-white text-black rounded-md mt-10 w-full cursor-pointer">
        <div className="flex">
          <img
            src={house.imagenes[1]}
            alt={house.nombre}
            className="w-72 h-auto"
          />
          <div className="flex flex-col text-center w-full">
            <h2 key={key} className="text-lg">
              {house.nombre}
            </h2>
            <span className="text-md font-bold">{house.precio}</span>
          </div>
        </div>
      </div>
    </>
  );
}
