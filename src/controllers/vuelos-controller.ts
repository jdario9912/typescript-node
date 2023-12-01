import { Request, Response } from "express";
import * as vuelosServices from "../services/vuelos-service";

export default class VuelosController {
  static getVuelos(_req: Request, res: Response) {
    return res.json(vuelosServices.getVuelos());
  }
}
