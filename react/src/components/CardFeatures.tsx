function CardFeatures({ extra }: array<string>) {
  return (
    <>
      <div className="flex justify-center mt-2 gap-2">
        {extra.slice(0,3).map((feature: string) => (
          <span className="text-md text-gray-700 font-bold mt-2 rounded-full border-2 border-blue-300 p-1">
            {feature}
          </span>
        ))}
      </div>
    </>
  );
}

export default CardFeatures;
