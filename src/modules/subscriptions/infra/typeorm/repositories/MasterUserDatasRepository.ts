import ICreateMasterUserDataDTO from "@modules/subscriptions/dtos/ICreateMasterUserDataDTO";
import IMasterUserDatasRepository from "@modules/subscriptions/repositories/IMasterUserDatasRepository";
import { getRepository, Repository } from "typeorm";

import MasterUserData from "../entities/MasterUserData";

class MasterUserDatasRepository implements IMasterUserDatasRepository {
  private ormRepository: Repository<MasterUserData>;

  constructor() {
    this.ormRepository = getRepository(MasterUserData);
  }

  public async create(data: ICreateMasterUserDataDTO): Promise<MasterUserData> {
    const masterUserData = this.ormRepository.create({ ...data });

    await this.ormRepository.save(masterUserData);

    return masterUserData;
  }
}

export default MasterUserDatasRepository;
