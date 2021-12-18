import { Router } from "express";

import SubscriptionsController from "../controllers/SubscriptionsController";

const subscriptionsRouter = Router();

const subscriptionsController = new SubscriptionsController();

subscriptionsRouter.post("/", subscriptionsController.create);

export default subscriptionsRouter;
