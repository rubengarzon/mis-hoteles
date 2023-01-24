import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex items-center mt-4 justify-center">
        <Link
          to="/"
          className="text-4xl font-bold text-indigo-900 fuente hover:underline hover:cursor-pointer"
        >
          mispisos.es
        </Link>
        <nav className="ml-64">
          <ul className="flex">
            <li className="mr-7 text-indigo-900 border-2 border-indigo-500 border-opacity-60 rounded-lg border-solid p-1 hover:border-indigo-900 font-semibold">
              <a href="/">📌 Pon tu anuncio gratis</a>
            </li>
            <li className="mr-7 text-indigo-900 hover:bg-indigo-900 hover:text-white p-1 rounded-lg font-semibold">
              <a href="/">👤 Iniciar sesión</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
