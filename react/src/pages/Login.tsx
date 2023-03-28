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
      <LoginForm />
    </>
  );
}

export default Login;
