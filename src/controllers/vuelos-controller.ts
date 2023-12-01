import { Request, Response } from "express";
import * as vuelosServices from "../services/vuelos-service";

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
    const { date, weather, visibility, comment } = req.body;
    const nuevoVuelo = vuelosServices.addVuelo(
      date,
      weather,
      visibility,
      comment
    );
    return res.json(nuevoVuelo);
  }
}
