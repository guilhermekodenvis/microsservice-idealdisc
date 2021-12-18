import ISubscriptionsRepository from "@modules/subscriptions/repositories/ISubscriptionsRepository";
import { getRepository, Repository } from "typeorm";

import Subscription from "../entities/Subscription";

class SubscriptionsRepository implements ISubscriptionsRepository {
  private ormRepository: Repository<Subscription>;

  constructor() {
    this.ormRepository = getRepository(Subscription);
  }

  public async create(): Promise<Subscription> {
    const subscription = this.ormRepository.create();

    await this.ormRepository.save(subscription);

    return subscription;
  }

  public async findById(subscriptionId: string): Promise<Subscription | undefined> {
    const subscription = await this.ormRepository.findOne(subscriptionId, {
      relations: ["participants", "billingData", "masterUserData"],
    });

    return subscription;
  }
}

export default SubscriptionsRepository;
