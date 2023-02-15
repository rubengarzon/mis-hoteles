import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHousesByCity } from "../services/Api";
import { House } from "../types";
import Header from "../components/Header";
import HouseList from "../components/HouseList";
import Filters from "../components/Filters";
import SearchbarFlats from "../components/SearchbarFlats";

export default function Flat() {
  const { busqueda } = useParams();
  const [houses, setHouses] = useState<House[]>([]);
  const [city, setCity] = useState<string>("");

  const updateHouses = (data: House[]) => {
    setHouses(data);
  };

  useEffect(() => {
    if(!busqueda) return;
    getHousesByCity(busqueda).then((data:any) => {
      setCity(data[0].ciudad);
      setHouses(data);
    });
  }, []);

  return (
    <div>
      <Header />
      {/* <SearchbarFlats  /> */}
      <Filters updateHouses={updateHouses} busqueda={busqueda} />
      <HouseList
        listFlat={houses}
        city={city}
        housesNumberTotal={houses.length}
      />
    </div>
  );
}
