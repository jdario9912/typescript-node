import { Router } from "express";
import VuelosController from "../controllers/vuelos-controller";

const router = Router()

router.get('/', VuelosController.getVuelos)

export default router