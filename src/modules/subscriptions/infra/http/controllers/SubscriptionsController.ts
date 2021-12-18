import CreateSubscriptionService from "@modules/subscriptions/services/CreateSubscriptionService";
import { classToClass } from "class-transformer";
import { Request, Response } from "express";
import { container } from "tsyringe";

export default class SubscriptionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { participants, billingData, masterUserData } = request.body;

    const createSubscription = container.resolve(CreateSubscriptionService);

    const createdSubscription = await createSubscription.run({ participants, billingData, masterUserData });

    return response.json(classToClass(createdSubscription)).status(201);
  }
}
