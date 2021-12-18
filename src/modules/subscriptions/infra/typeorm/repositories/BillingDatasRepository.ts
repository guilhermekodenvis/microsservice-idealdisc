import ICreateBillignDataDTO from "@modules/subscriptions/dtos/ICreateBillignDataDTO";
import IBillingDatasRepository from "@modules/subscriptions/repositories/IBillingDatasRepository";
import { getRepository, Repository } from "typeorm";

import BillingData from "../entities/BillingData";

class BillingDatasRepository implements IBillingDatasRepository {
  private ormRepository: Repository<BillingData>;

  constructor() {
    this.ormRepository = getRepository(BillingData);
  }

  public async create(data: ICreateBillignDataDTO): Promise<BillingData> {
    const billingData = this.ormRepository.create({ ...data });

    await this.ormRepository.save(billingData);

    return billingData;
  }
}

export default BillingDatasRepository;
