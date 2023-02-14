function NoResults() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-center font-semibold text-2xl text-indigo-900">
        Hemos mirado por todas partes pero...
      </h2>
      <h2 className="text-center font-semibold text-2xl text-indigo-900">
        no hemos encontrado lo que buscas 😢
      </h2>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGY1MjdiOTY1YTI0OWM5ZWE5NmY5ODRmMzdlYThhYWNmNzk0ZjYzNyZjdD1n/l2JehQ2GitHGdVG9y/giphy.gif"
        alt="No hay resultados"
        className="w-1/3 h-[257px] object-cover rounded-md mt-4"
      />
    </div>
  );
}

export default NoResults;