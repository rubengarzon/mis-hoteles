import Header from "../components/Header";
import { useForm } from "react-hook-form";
import Steps from "../components/Steps";
import { useNavigate } from "react-router-dom";

function PostAdDetail() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const ad = JSON.parse(localStorage.getItem("ad") || "{}");
    const newData = {
      nombre: data.titulo,
      descripcion: data.descripcion,
      habitaciones: data.habitaciones,
      baños: data.banos,
      metros: data.metros,
      precio: data.precio,
    }
    localStorage.setItem("ad", JSON.stringify({ ...ad, ...newData }));
    navigate("/publica-anuncio/3");
  };
  return (
    <>
      <Header />
      <Steps step="2" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 mt-4 mx-2 mb-4"
        id="post-ad"
      >
        <h2 className="text-2xl font-bold">Detalles del inmueble</h2>
        <p className="text-sm">
          Añade detalles como el número de habitaciones, baños, etc.
        </p>
        <label htmlFor="titulo" className="text-lg">
          Título
        </label>
        <input
          type="text"
          name="titulo"
          id="titulo"
          {...register("titulo", { required: true })}
          aria-invalid={errors["titulo"] ? "true" : "false"}
        />
        {errors["titulo"] && (
          <span className="text-white text-sm bg-red-600 rounded-md p-2 animate-bounce">
            Por favor, introduce un título
          </span>
        )}
        <label htmlFor="descripcion" className="text-lg">
          Descripción
        </label>
        <textarea
          name="descripcion"
          id="descripcion"
          {...register("descripcion", { required: true })}
          aria-invalid={errors["descripcion"] ? "true" : "false"}
        />
        {errors["descripcion"] && (
          <span className="text-white text-sm bg-red-600 rounded-md p-2 animate-bounce">
            Por favor, introduce una descripción
          </span>
        )}
        <label htmlFor="precio" className="text-lg">
          Precio
        </label>
        <input
          type="number"
          name="precio"
          id="precio"
          {...register("precio", { required: true })}
          aria-invalid={errors["precio"] ? "true" : "false"}
        />
        {errors["precio"] && (
          <span className="text-white text-sm bg-red-600 rounded-md p-2 animate-bounce">
            Por favor, introduce un precio
          </span>
        )}
        <label htmlFor="habitaciones" className="text-lg">
          Habitaciones
        </label>
        <input
          type="number"
          name="habitaciones"
          id="habitaciones"
          {...register("habitaciones", { required: true })}
          aria-invalid={errors["habitaciones"] ? "true" : "false"}
        />
        {errors["habitaciones"] && (
          <span className="text-white text-sm bg-red-600 rounded-md p-2 animate-bounce">
            Por favor, introduce el número de habitaciones
          </span>
        )}
        <label htmlFor="banos" className="text-lg">
          Baños
        </label>
        <input
          type="number"
          name="banos"
          id="banos"
          {...register("banos", { required: true })}
          aria-invalid={errors["banos"] ? "true" : "false"}
        />
        {errors["banos"] && (
          <span className="text-white text-sm bg-red-600 rounded-md p-2 animate-bounce">
            Por favor, introduce el número de baños
          </span>
        )}
        <label htmlFor="metros" className="text-lg">
          Metros cuadrados
        </label>
        <input
          type="number"
          name="metros"
          id="metros"
          {...register("metros", { required: true })}
          aria-invalid={errors["metros"] ? "true" : "false"}
        />
        {errors["metros"] && (
          <span className="text-white text-sm bg-red-600 rounded-md p-2 animate-bounce">
            Por favor, introduce el número de metros cuadrados
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

export default PostAdDetail;
