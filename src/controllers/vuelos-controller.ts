import { Request, Response } from "express";
import * as vuelosServices from "../services/vuelos-service";
import { paraNuevoVueloEntrada } from "../utils/vuelos-util";

export default class VuelosController {
  static getVuelos(_req: Request, res: Response) {
    return res.json(vuelosServices.getVuelos());
  }

  static getPorId(req: Request, res: Response) {
    const vuelo = vuelosServices.getPorId(+req.params.id);

    return !vuelo
      ? res.status(404).json({ mensaje: "no existe el vuelo" })
      : res.json(vuelo);
  }

  static addVuelo(req: Request, res: Response) {
    try {
      const nuevoVuelo = paraNuevoVueloEntrada(req.body);

      const nuevoVueloIngresado = vuelosServices.addVuelo(nuevoVuelo);
      return res.json(nuevoVueloIngresado);
    } catch (error) {
      if (error instanceof Error) return res.json({ error: error.message });
      return;
    }
  }
}
