import { useEffect, useState } from "react";
import { getHousesByCity } from "../services/Api";
import HouseCard from "./HouseCard";

export default function HouseList({ inputValue }: any) {
  const [houses, setHouses] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getHousesByCity(inputValue).then((res: any) => {
      setHouses(res);
      setLoading(false);
    });
  }, [inputValue]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className="flex flex-col items-center">
      {houses.map((house: any) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}
