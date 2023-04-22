import { useForm } from "react-hook-form";
import CitiesSelect from "./CitiesSelect";

function AdForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-4 mx-2 mb-4"
        id="post-ad"
      >
        <label htmlFor="tipo" className="text-2xl font-bold">
          Elige el tipo de inmueble
        </label>
        <select
          name="tipo"
          id="tipo"
          {...register("tipo", { required: true })}
          aria-invalid={errors["tipo"] ? "true" : "false"}
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
        {errors["tipo"] && (
          <span className="text-white text-sm bg-red-600 rounded-md p-2 animate-bounce">
            Por favor, selecciona un tipo de inmueble
          </span>
        )}
        <label htmlFor="operacion" className="text-2xl font-bold mt-4">
          Operación
        </label>
        <fieldset className="mb-4">
          <div>
            <input
              type="radio"
              name="operacion"
              id="alquiler"
              value="Alquiler"
              className="mr-2"
              {...register("operacion", { required: true })}
              aria-invalid={errors["operacion"] ? "true" : "false"}
            />
            {errors["operacion"] && (
              <span className="text-white text-sm bg-red-600 rounded-md p-2 animate-bounce">
                Por favor, selecciona una operación
              </span>
            )}
            <label htmlFor="alquiler">Alquiler</label>
          </div>
          <div>
            <input
              type="radio"
              name="operacion"
              id="venta"
              value="Venta"
              className="mr-2"
              {...(register("operacion"), { required: true })}
              aria-invalid={errors["operacion"] ? "true" : "false"}
            />
            {errors["operacion"] && (
              <span className="text-white text-sm bg-red-600 rounded-md p-2 animate-bounce">
                Por favor, selecciona una operación
              </span>
            )}
            <label htmlFor="venta">Venta</label>
          </div>
        </fieldset>
        <h2 className="text-2xl font-bold">Ubicación del inmueble</h2>
        <label htmlFor="provincia" className="text-lg">
          Provincia
        </label>
        <CitiesSelect register={register} errors={errors} />
        <label htmlFor="calle" className="text-lg">
          Nombre de la calle
        </label>
        <input
          type="text"
          name="calle"
          id="calle"
          {...register("calle", { required: true })}
          aria-invalid={errors["calle"] ? "true" : "false"}
        />
        {errors["calle"] && (
          <span className="text-white text-sm bg-red-600 rounded-md p-2 animate-bounce">
            Por favor, introduce una calle
          </span>
        )}
        <input
          type="submit"
          value="Siguiente"
          className="bg-black text-white cursor-pointer hover:bg-gray-900 p-1 rounded-full w-40 self-center"
        />
      </form>
    </>
  );
}

export default AdForm;
