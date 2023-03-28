const LoginForm = () => {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("submit");
  }

  return (
    <div className="flex justify-center mt-32">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label htmlFor="username" className="mb-5 font-bold">
          Usuario:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="andahers"
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
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
