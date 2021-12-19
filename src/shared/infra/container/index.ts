import "./providers";

import BillingDatasRepository from "@modules/subscriptions/infra/typeorm/repositories/BillingDatasRepository";
import MasterUserDatasRepository from "@modules/subscriptions/infra/typeorm/repositories/MasterUserDatasRepository";
import ParticipantsRepository from "@modules/subscriptions/infra/typeorm/repositories/ParticipantsRepository";
import SubscriptionsRepository from "@modules/subscriptions/infra/typeorm/repositories/SubscriptionsRepository";
import IBillingDatasRepository from "@modules/subscriptions/repositories/IBillingDatasRepository";
import IMasterUserDatasRepository from "@modules/subscriptions/repositories/IMasterUserDatasRepository";
import IParticipantsRepository from "@modules/subscriptions/repositories/IParticipantsRepository";
import ISubscriptionsRepository from "@modules/subscriptions/repositories/ISubscriptionsRepository";
import { container } from "tsyringe";

container.registerSingleton<IBillingDatasRepository>("BillingDatasRepository", BillingDatasRepository);
container.registerSingleton<IMasterUserDatasRepository>("MasterUserDatasRepository", MasterUserDatasRepository);
container.registerSingleton<IParticipantsRepository>("ParticipantsRepository", ParticipantsRepository);
container.registerSingleton<ISubscriptionsRepository>("SubscriptionsRepository", SubscriptionsRepository);
