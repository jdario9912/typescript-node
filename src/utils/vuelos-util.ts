import { NuevoVueloEntrada } from "../types";
import { Visibility, Weather } from "../enums";

const esString = (string: any): boolean =>
  typeof string === "string" || string instanceof String;

const esFecha = (date: any): boolean => Boolean(Date.parse(date));

const esWeather = (weather: any): boolean =>
  Object.values(Weather).includes(weather);

const esVisibility = (visibility: any): boolean =>
  Object.values(Visibility).includes(visibility);

const parsearComment = (commentDeRequest: any): string => {
  if (!esString(commentDeRequest))
    throw new Error("El comentario no tiene el formato esperado.");

  return commentDeRequest;
};

const parsearFecha = (dateDeRequest: any): string => {
  if (!esString(dateDeRequest) || !esFecha(dateDeRequest))
    throw new Error("La fecha no tiene el formato esperado.");

  return dateDeRequest;
};

const parsearWeather = (weatherDeRequest: any): Weather => {
  if (!esString(weatherDeRequest || !esWeather(weatherDeRequest)))
    throw new Error("El weather no tiene el formato esperado.");

  return weatherDeRequest;
};

const parsearVisibility = (visibilityDeRequest: any): Visibility => {
  if (!esString(visibilityDeRequest) || !esVisibility(visibilityDeRequest))
    throw new Error("La visibility no tiene el formato esperado.");

  return visibilityDeRequest;
};

export const paraNuevoVueloEntrada = (object: any): NuevoVueloEntrada => {
  return {
    date: parsearFecha(object.date),
    weather: parsearWeather(object.weather),
    visibility: parsearVisibility(object.visibility),
    comment: parsearComment(object.comment),
  };
};
