function CardFeatures({ extra }: array<string>) {
  return (
    <>
      <div className="flex flex-wrap justify-center mt-2 gap-2">
        {extra.slice(0, 5).map((feature: string) => (
          <span className="text-sm text-blue-200 font-bold mt-2 rounded-full border-2 border-blue-300 p-1 bg-gray-500">
            {feature}
          </span>
        ))}
        {extra.length > 5 && (
          <span className="text-sm text-blue-600 font-bold self-center mt-1">
            +{extra.length - 5} extras más
          </span>
        )}
      </div>
    </>
  );
}

export default CardFeatures;
