import { useState } from "react";
import { getHousesByCity } from "../services/Api";
import HouseCard from "./HouseCard";
import { House } from "../types";

export default function HouseList({
  fetchHouse,
  housesNumberTotal,
  city,
}: House[]) {
  return (
    <>
      <section className="mt-14">
        <h2 className="text-center font-semibold text-2xl text-indigo-900">
          {housesNumberTotal} Viviendas en {city}
        </h2>
        <div className="flex flex-col items-center">
          {fetchHouse.map((house: any) => (
            <HouseCard key={house.id} house={house}></HouseCard>
          ))}
        </div>
      </section>
    </>
  );
}
