import { House } from "../types";

export const getHouse = async (ciudad: string): Promise<House> => {
  return fetch(`http://127.0.0.1:8787/viviendas/${ciudad}`).then((response) =>
    response.json()
  );
};
