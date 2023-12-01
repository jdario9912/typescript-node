import vuelosEntradas from "../db.json";
import { NuevoVueloEntrada, VueloEntrada } from "../types";

const vuelos: Array<VueloEntrada> = vuelosEntradas as Array<VueloEntrada>;

export const getVuelos = (): Array<VueloEntrada> => vuelos;

export const getPorId = (id: number): VueloEntrada | undefined =>
  vuelos.find((vuelo) => vuelo.id === id);

export const addVuelo = (
  nuevoVueloEntrada: NuevoVueloEntrada
): VueloEntrada => {
  const nuevoVuelo = {
    id: Math.max(...vuelos.map((vuelo) => vuelo.id)) + 1,
    ...nuevoVueloEntrada,
  };

  vuelosEntradas.push(nuevoVuelo);

  return nuevoVuelo;
};
