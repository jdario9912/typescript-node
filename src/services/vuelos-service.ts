import vuelosEntradas from "../db.json";
import { VueloEntrada } from "../types";

const vuelos: Array<VueloEntrada> = vuelosEntradas as Array<VueloEntrada>;

export const getVuelos = (): Array<VueloEntrada> => vuelos;

export const addVuelo = (): undefined => undefined;
