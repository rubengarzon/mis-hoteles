import { useForm } from "react-hook-form";

function AdForm({onSubmit}) {
  const { register, handleSubmit, watch, errors } = useForm();
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-4 mx-2"
        id="post-ad"
      >
        <label htmlFor="tipo-inmueble" className="text-2xl font-bold">
          Elige el tipo de inmueble
        </label>
        <select
          {...register("tipo-inmueble")}
          name="tipo-inmueble"
          id="tipo-inmueble"
          required
          className="p-1 rounded-full"
        >
          <option value="">Selecciona</option>
          <option value="Piso">Piso</option>
          <option value="Casa">Casa</option>
          <option value="Chalet">Chalet</option>
          <option value="Atico">Ático</option>
          <option value="Estudio">Estudio</option>
          <option value="Duplex">Dúplex</option>
        </select>
        <label htmlFor="operacion" className="text-2xl font-bold">
          Operación
        </label>
        <fieldset>
          <div>
            <input
              type="radio"
              name="operacion"
              id="alquiler"
              value="Alquiler"
              className="mr-2"
              {...register("operacion")}
              required
            />
            <label htmlFor="alquiler">Alquiler</label>
          </div>
          <div>
            <input
              type="radio"
              name="operacion"
              id="venta"
              value="Venta"
              className="mr-2"
              {...register("operacion")}
              required
            />
            <label htmlFor="venta">Venta</label>
          </div>
        </fieldset>
        <input
          type="submit"
          value="Continuar"
          className="bg-black text-white cursor-pointer hover:bg-gray-900 p-1 rounded-full w-40 self-center"
        />
      </form>
    </>
  );
}

export default AdForm;
