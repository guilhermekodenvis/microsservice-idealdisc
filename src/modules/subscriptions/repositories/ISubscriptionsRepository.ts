import Subscription from "../infra/typeorm/entities/Subscription";

export default interface ISubscriptionsRepository {
  create(): Promise<Subscription>;
  findById(subscriptionId: string): Promise<Subscription | undefined>;
}
