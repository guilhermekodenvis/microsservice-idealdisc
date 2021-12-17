import { Router } from "express";

const routes = Router();

routes.get("/teste", (request, response) => response.send("teste"));

export default routes;
