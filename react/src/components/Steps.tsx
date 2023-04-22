interface Props {
  step: string;
}

const Steps: React.FC<Props> = ({ step }) => {
  return (
    <>
      {step === "1" ? (
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
      ) : null}
      {step === "2" ? (
        <div className="flex place-content-center border-2 border-gray-400">
          <span className="bg-gray-300 text-gray-600 p-2 text-xs w-full text-center">
            1. Datos Básicos
          </span>
          <span className="bg-black text-white p-2 text-xs font-bold w-full text-center flex">
            2. Detalles
          </span>
          <span className="bg-gray-300 text-gray-600 p-2 text-xs w-full text-center">
            3. Fotos
          </span>
        </div>
      ) : null}
      {step === "3" ? (
        <div className="flex place-content-center border-2 border-gray-400">
          <span className="bg-gray-300 text-gray-600 p-2 text-xs w-full text-center">
            1. Datos Básicos
          </span>
          <span className="bg-gray-300 text-gray-600 p-2 text-xs w-full text-center">
            2. Detalles
          </span>
          <span className="bg-black text-white p-2 text-xs font-bold w-full text-center flex">
            3. Fotos
          </span>
        </div>
      ) : null}
    </>
  );
};

export default Steps;
