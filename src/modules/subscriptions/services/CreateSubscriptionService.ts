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

  public async run({
    participants,
    billingData,
    masterUserData,
    cc,
    investiment,
    date,
  }: ICreateSubscriptionDTO): Promise<Subscription> {
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
      investiment,
      date,
    };

    let emailToSend: string;
    if (masterUserData.email) {
      emailToSend = masterUserData.email;
    } else {
      emailToSend = billingData.email;
    }

    const filteredCc = cc.filter(n => n);

    await this.mailProvider.sendMail(
      emailToSend,
      `Inscrição Treinamento FORMAÇÃO DISC AVANÇADO (ONLINE) - ${date}`,
      variables,
      templatePath,
      filteredCc,
    );

    return returnableSubscription;
  }
}

export default CreateSubscriptionService;
