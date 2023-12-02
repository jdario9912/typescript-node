import app from "../app";
import supertest from "supertest";

const api = supertest(app);

test("retorna codigo de estado 200 y un json en la respuesta", async () => {
  await api.get("/api/vuelos").expect(200).expect('Content-Type', /application\/json/);

  const response = await api.get("/api/vuelos")

  console.log(response);
});

// TENGO QUE VER COMO EJECUTAR JEST CON TYPESCRIPT

// test("responde status 200 cuando se agrega una entrada", async () => {
//   const nuevaEntrada = {
//     "date": "wasi waso",
//     "weather": "ok",
//   }

//   await api.post("/api/vuelos").send(nuevaEntrada).expect(200).expect('Content-Type', /application\/json/)

//   const response = await app.get("/api/vuelos")

//   console.log(response);
  
// })
