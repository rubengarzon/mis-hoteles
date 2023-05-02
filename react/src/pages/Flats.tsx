import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHousesByCity } from "../services/Api";
import { House } from "../types";
import Header from "../components/Header";
import HouseList from "../components/HouseList";
import Filters from "../components/Filters";
import SearchbarFlats from "../components/SearchbarFlats";
import NoResults from "../components/NoResults";
import { Jelly } from "@uiball/loaders";

export default function Flat() {
  const { busqueda } = useParams();
  const [houses, setHouses] = useState<House[]>([]);
  const [city, setCity] = useState<string>("");
  const [finalizado, setFinalizado] = useState<boolean>(false);

  const updateHouses = (data: House[]) => {
    setHouses(data);
  };

  useEffect(() => {
    if (!busqueda) return;
    getHousesByCity(busqueda)
      .then((data: any) => {
        setCity(data[0].ciudad);
        setHouses(data);
      })
      .finally(() => {
        setFinalizado(true);
      });
  }, []);

  return (
    <div>
      <Header />
      {finalizado ? (
        houses && houses.length === 0 ? (
          <NoResults />
        ) : (
          <>
            <Filters updateHouses={updateHouses} busqueda={busqueda} />
            <HouseList listFlat={houses} city={city} />
          </>
        )
      ) : (
        <div className="flex h-screen justify-center items-center">
          <Jelly size={80} speed={0.9} color="black" />
        </div>
      )}
    </div>
  );
}
