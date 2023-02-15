function RenderError({ error }) {
  return (
    <>
      {error === "empty" && (
        <span className="bg-red-500 text-white font-semibold p-1 rounded-md">
          ⚠️ Escribe una ciudad
        </span>
      )}
      {error === "numbers" && (
        <span className="bg-red-500 text-white font-semibold p-1 rounded-md">
          ⚠️ Solo se aceptan letras
        </span>
      )}
      {error === "notFound" && (
        <span className="bg-red-500 text-white font-semibold p-1 rounded-md">
          ⚠️ No se han encontrado viviendas en {inputValue}
        </span>
      )}
    </>
  );
}

export default RenderError;
