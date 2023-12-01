import { Router } from "express";
import VuelosController from "../controllers/vuelos-controller";

const router = Router();

router.get("/", VuelosController.getVuelos);

router.get("/:id", VuelosController.getPorId);

router.post('/', VuelosController.addVuelo)

export default router;
