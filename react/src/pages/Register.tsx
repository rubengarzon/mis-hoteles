import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

function Register() {
  return (
    <>
      <Header/>
      <h2 className="text-2xl text-[#111827] font-bold text-center mt-5">Registro de Usuario</h2>
      <RegisterForm/>
    </>
  );
}

export default Register;