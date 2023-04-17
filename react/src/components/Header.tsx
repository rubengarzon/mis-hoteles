import { useEffect, useState } from "react";
import { getAvatar } from "../services/Api";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [avatar, setAvatar] = useState<Blob | void>();
  const username = localStorage.getItem("username");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (username) {
      getAvatar(username).then((response) => {
        setAvatar(response);
      });
    }

    if (token) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  }, [username]);

  const logout = () => {
    localStorage.removeItem("token");
    setIsOnline(false);
  };

  const handleTokenChange = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  };

  window.addEventListener("storage", handleTokenChange);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <>
      <nav className="border-gray-200 bg-gray-900">
        <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              mispisos
            </span>
          </a>
          {isOnline ? (
            <button
              id="boton"
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {avatar ? (
                <img
                  src={URL.createObjectURL(avatar)}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <img
                  src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span className="ml-2">{username}</span>
            </button>
          ) : (
            <button
              id="boton"
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
              </svg>
            </button>
          )}

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/publica-anuncio"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  📌 Pon tu anuncio gratis
                </a>
              </li>
              <li>
                <a
                  href="/login"
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  👤 Iniciar sesión
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="menu-mobile"
          className={`${
            menuVisible ? "" : "hidden"
          } bg-[#111827] border-2 border-white`}
        >
          <ul className="flex flex-col gap-2 text-center">
            <li>
              <a
                href="/publica-anuncio"
                className="font-bold text-lg text-white"
              >
                📌 Pon tu anuncio gratis
              </a>
            </li>
            {isOnline ? (
              <li>
                <a
                  onClick={logout}
                  className="font-bold text-lg text-white cursor-pointer"
                >
                  👤 Cerrar sesión
                </a>
              </li>
            ) : (
              <li>
                <a href="/login" className="font-bold text-lg text-white">
                  👤 Iniciar sesión
                </a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  );
}
