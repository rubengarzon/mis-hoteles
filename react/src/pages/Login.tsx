import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

function Login() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("submit");
  }
  return (
    <>
      <Header />
      <h2 className="text-2xl text-[#111827] font-bold text-center mt-5">Iniciar Sesión</h2>
      <LoginForm />
    </>
  );
}

export default Login;
