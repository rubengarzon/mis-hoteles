export default function Footer() {
  let añoActual = new Date().getFullYear();

  return (
    <>
      <footer className="h-12 flex gap-5 items-center text-center place-content-center mt-20 md:mt-28">
        <span>Desarrollado por Rubén Garzón</span>
        <a href="https://rubengarzon.vercel.app/#proyectos" className="underline cursor-pointer" target="_blank">Mis proyectos</a>
      </footer>
    </>
  );
}
