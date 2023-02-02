import { House } from "../types";

const API_URL = "http://127.0.0.1:3001/api/";

/**
 * Obtiene todas las viviendas de la base de datos
 * @param ciudad - Ciudad de la que se quieren obtener las viviendas
 * @returns - Array de viviendas de la ciudad indicada
 */
export const getHousesByCity = (busqueda: string): Promise<House> => {
  return fetch(`${API_URL}viviendas/${busqueda}`)
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al obtener las viviendas");
    });
};
