import { useState } from "react";
import { getHousesByCity } from "../services/Api";
import HouseCard from "./HouseCard";
import { House } from "../types";

export default function HouseList({
  listFlat,
  housesNumberTotal,
  busqueda,
}: any) {
  return (
    <>
      <section className="mt-14">
        <h2 className="text-center font-semibold text-2xl text-indigo-900">
          {housesNumberTotal} Viviendas en {busqueda}
        </h2>
        <div className="flex flex-col items-center">
          {listFlat.map((house: any) => (
            <HouseCard key={house.id} house={house}></HouseCard>
          ))}
        </div>
      </section>
    </>
  );
}
