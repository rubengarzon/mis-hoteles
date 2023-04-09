import { register } from "../services/Api";
import { useNavigate } from "react-router-dom";

function RegisterForm() {
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const username = formData.get("username")?.toString().trim();
    const name = formData.get("name")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    register(username as string, name as string, password as string).then(
      (response) => {
        localStorage.setItem("token", response.token);
        navigate("/");
      }
    );
  }
  return (
    <>
      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="username" className="mb-5 font-bold">
            Usuario:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="andahers"
            autoComplete="off"
            required
            className="mb-10 px-5 py-2 border-none rounded-lg shadow-md"
          />
          <label htmlFor="username" className="mb-5 font-bold">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Francisco"
            autoComplete="off"
            required
            className="mb-10 px-5 py-2 border-none rounded-lg shadow-md"
          />
          <label htmlFor="password" className="mb-5 font-bold">
            Contraseña:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="********"
            required
            className="mb-10 px-5 py-2 border-none rounded-lg shadow-md"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-10 py-2 border-none rounded-lg cursor-pointer hover:bg-blue-700"
          >
            Crear cuenta
          </button>
        </form>
      </div>
      <div className="flex place-content-center mt-2">
        <span className="mr-2 text-gray-800">¿Tienes una cuenta?</span>
        <a href="/nuevo-usuario" className="underline">
          Inicar sesión
        </a>
      </div>
    </>
  );
}

export default RegisterForm;
