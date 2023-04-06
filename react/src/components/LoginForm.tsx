import { login } from "../services/Api";
const LoginForm = () => {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const username = formData.get("username")?.toString().trim();
    const password = formData.get("password")?.toString().trim();

    login(username as string, password as string).then((response) => {
      localStorage.setItem("token", response.token);
    });
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
            className="mb-10 px-5 py-2 border-none rounded-lg shadow-md"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-10 py-2 border-none rounded-lg cursor-pointer hover:bg-blue-700"
          >
            Entrar en mispisos
          </button>
        </form>
      </div>
      <div className="flex place-content-center mt-2">
        <span className="mr-2 text-gray-800">¿No estás registrado?</span>
        <a href="/nuevo-usuario" className="underline">Crea una cuenta</a>
      </div>
    </>
  );
};

export default LoginForm;
