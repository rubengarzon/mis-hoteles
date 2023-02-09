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
/**
 *  Obtiene todas las viviendas de la base de datos
 * @param tipoInmueble - Tipo de inmueble de la que se quieren obtener las viviendas
 * @returns - Array de viviendas del tipo de inmueble indicado
 */
export const getHouseByPropertyType = (
  tipoInmueble: string
): Promise<House> => {
  return fetch(`${API_URL}viviendas/tipoInmueble/${tipoInmueble}`)
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al obtener las viviendas");
    });
};
export const getHouseByPrice = (precio: string): Promise<House> => {
  return fetch(`${API_URL}viviendas/precio/${precio}`)
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al obtener las viviendas");
    });
};
export const getHouseByFilter = (ciudad: string, tipoVivienda: string, precio: string, habitaciones: string): Promise<House> => {

  let query = "";

  if(tipoVivienda.length > 0){
    query += `&tipo=${tipoVivienda}`;
  }

  if(precio.length > 0){
    query += `&precio=${precio}`;
  }

  if(habitaciones.length > 0){
    query += `&habitaciones=${habitaciones}`;
  }

  return fetch(`${API_URL}viviendas/filtros?ciudad=${ciudad}${query}`)
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al obtener las viviendas");
    });
};
export const getHouseByRooms = (habitaciones: string): Promise<House> => {
  return fetch(`${API_URL}viviendas/habitaciones/${habitaciones}`)
    .then((response) => response.json())
    .catch(() => {
      console.log("Error al obtener las viviendas");
    });
};