import { port } from "./config";
import app from "./app";

app.listen(port, () => console.log("Servidor express en puerto", port))