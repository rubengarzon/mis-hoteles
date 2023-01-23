export default function Footer() {
  let añoActual = new Date().getFullYear();

  return (
    <>
      <footer className="mt-auto h-20 flex items-center text-center bg-blue-400">
        <h2 className="text-md text-black w-full">
          Rubén Garzón Copyright © {añoActual}
        </h2>
      </footer>
    </>
  );
}
