import express from "express";
import vuelosRouter from './routers/vuelos-routes'

const app = express();

app.use(express.json());

app.use('/api/vuelos', vuelosRouter)

export default app;
