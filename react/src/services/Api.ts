import { House } from "../types";
/**
 * Obtiene todas las viviendas de la base de datos
 * @param ciudad - Ciudad de la que se quieren obtener las viviendas
 * @returns - Array de viviendas de la ciudad indicada
 */
export const getHousesByCity = (ciudad: string): Promise<House> => {
  return fetch(`http://127.0.0.1:8787/viviendas/${ciudad}`)
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al obtener las viviendas");
    });
};
