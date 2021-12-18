import subscriptionsRouter from "@modules/subscriptions/infra/http/routes/subscriptions.routes";
import { Router } from "express";

const routes = Router();

routes.get("/teste", (request, response) => response.send("teste"));
routes.use("/subscriptions", subscriptionsRouter);

export default routes;
