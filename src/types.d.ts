import { Visibility, Weather } from "./enums";

export interface VueloEntrada {
  id: number;
  date: string;
  weather: Weather;
  visibility: Visibility;
  comment: string;
}

// Existen estas dos formas de reutilizar una interfaz:
// Tomar los tipo necesarios con 'Pick'
// Omitir algun tipo con 'Omit'
// export type VueloEntradaNoComment = Pick<
//   VueloEntrada,
//   "id" | "date" | "visibility" | "weather"
// >;

export type VueloEntradaNoComment = Omit<VueloEntrada, "comment">;

export type NuevoVueloEntrada = Omit<VueloEntrada, "id">;
