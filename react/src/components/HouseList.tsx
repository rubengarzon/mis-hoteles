import { useEffect, useState } from "react";
import { getHouses } from "../services/Api";

export default function HouseList() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getHouses().then((res) => {
      setHouses(res);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div className="flex flex-wrap">
      {houses.map((house) => (
        <HouseCard key={house.id} house={house} />
      ))}
    </div>
  );
}
