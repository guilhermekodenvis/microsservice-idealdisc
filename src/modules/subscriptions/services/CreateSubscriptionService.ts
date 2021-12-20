import path from "path";
import { inject, injectable } from "tsyringe";

import IMailProvider from "@shared/infra/container/providers/MailProvider/IMailProvider";
import AppError from "@shared/infra/errors/AppError";

import ICreateSubscriptionDTO from "../dtos/ICreateSubscriptionDTO";
import Subscription from "../infra/typeorm/entities/Subscription";
import IBillingDatasRepository from "../repositories/IBillingDatasRepository";
import IMasterUserDatasRepository from "../repositories/IMasterUserDatasRepository";
import IParticipantsRepository from "../repositories/IParticipantsRepository";
import ISubscriptionsRepository from "../repositories/ISubscriptionsRepository";

@injectable()
class CreateSubscriptionService {
  constructor(
    @inject("BillingDatasRepository")
    private billingDatasRepository: IBillingDatasRepository,

    @inject("MasterUserDatasRepository")
    private masterUserDatasRepository: IMasterUserDatasRepository,

    @inject("ParticipantsRepository")
    private participantsRepository: IParticipantsRepository,

    @inject("SubscriptionsRepository")
    private subscriptionsRepository: ISubscriptionsRepository,

    @inject("MailProvider")
    private mailProvider: IMailProvider,
  ) {}

  public async run({ participants, billingData, masterUserData }: ICreateSubscriptionDTO): Promise<Subscription> {
    const savedSubscription = await this.subscriptionsRepository.create();

    const templatePath = path.resolve(__dirname, "..", "views", "emails", "subscriptionDone.hbs");

    participants.forEach(async participant => {
      await this.participantsRepository.create({
        ...participant,
        subscriptionId: savedSubscription.id,
      });
    });

    await this.billingDatasRepository.create({
      ...billingData,
      subscriptionId: savedSubscription.id,
    });

    await this.masterUserDatasRepository.create({
      ...masterUserData,
      subscriptionId: savedSubscription.id,
    });

    const returnableSubscription = await this.subscriptionsRepository.findById(savedSubscription.id);

    if (!returnableSubscription) throw new AppError("Opa, deu ruim! Subscription retornável não encontrada.");

    const variables = {
      returnableSubscription,
    };

    await this.mailProvider.sendMail(
      masterUserData.email,
      "Inscrição formação IDEALDISC AVANÇADO.",
      variables,
      templatePath,
    );

    return returnableSubscription;
  }
}

export default CreateSubscriptionService;
