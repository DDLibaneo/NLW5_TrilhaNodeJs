import express, { request, response } from "express"

import "./database";

const app = express();

/**
 * GET
 * POST
 * PUT
 * DELETE
 * PATCH = alterar uma informação especifica ex. senha
 */

app.get("/", (request, response) => {
  return response.send("Olá NLW 05");
});

app.post("/users", (request, response) => {
  return response.json({
    message: "Usuario salvo com sucesso!"
  })
});

app.listen(3333, () => console.log("Server is running on port 3333"));

