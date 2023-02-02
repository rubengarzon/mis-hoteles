import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHousesByCity } from "../services/Api";
import { House } from "../types";
import Header from "../components/Header";
import HouseList from "../components/HouseList";

export default function Flat() {
  const { busqueda } = useParams();
  const [houses, setHouses] = useState<House[]>([]);

  useEffect(() => {
    if(!busqueda) return;
    getHousesByCity(busqueda).then((data:any) => {
      setHouses(data);
    });
  }, []);

  return (
    <div>
      <Header />
      <HouseList
        listFlat={houses}
        city={busqueda}
        housesNumberTotal={houses.length}
      />
    </div>
  );
}
