import CitiesSelect from "../CitiesSelect";

function PropertyLocationForm() {
  return (
    <>
      <form className="flex flex-col gap-4 mt-4 mx-2">
        <label htmlFor="provincia" className="text-lg">
          Provincia
        </label>
        <CitiesSelect />
        <label htmlFor="calle" className="text-lg">
          Nombre de la calle
        </label>
        <input type="text" name="calle" id="calle" />
        <label htmlFor="numero" className="text-lg">
          Número
        </label>
        <input type="number" name="numero" id="numero" required />
      </form>
    </>
  );
}

export default PropertyLocationForm;
