import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHousesByCity } from "../services/Api";
import { House } from "../types";
import Header from "../components/Header";
import HouseList from "../components/HouseList";

export default function Flat() {
  const { ciudad } = useParams();
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    getHousesByCity(ciudad).then((data) => {
      setHouses(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <HouseList
        fetchHouse={houses}
        city={ciudad}
        housesNumberTotal={houses.length}
      />
    </div>
  );
}
