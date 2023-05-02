import { useEffect, useState } from "react";
import { getHousesByCity } from "../services/Api";
import HouseCard from "./HouseCard";
import { House } from "../types";
import NoResults from "./NoResults";

export default function HouseList({ listFlat, city }: any) {
  const [isResult, setIsResult] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (listFlat.length !== 0) {
      setIsResult(true);
    }
    setIsLoading(false);
  }, [listFlat]);

  return (
    <>
      <section className="mt-14 mb-10">
        <div className="flex flex-col items-center">
          {listFlat.map((house: any) => (
            <HouseCard key={house.id} house={house}></HouseCard>
          ))}
        </div>
      </section>
    </>
  );
}
