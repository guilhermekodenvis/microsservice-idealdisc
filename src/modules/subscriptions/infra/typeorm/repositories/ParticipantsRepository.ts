import ICreateParticipantDTO from "@modules/subscriptions/dtos/ICreateParticipantDTO";
import IParticipantsRepository from "@modules/subscriptions/repositories/IParticipantsRepository";
import { getRepository, Repository } from "typeorm";

import Participant from "../entities/Participant";

class ParticipantsRepository implements IParticipantsRepository {
  private ormRepository: Repository<Participant>;

  constructor() {
    this.ormRepository = getRepository(Participant);
  }

  public async create(data: ICreateParticipantDTO): Promise<Participant> {
    const participant = this.ormRepository.create({ ...data });

    await this.ormRepository.save(participant);

    return participant;
  }
}

export default ParticipantsRepository;
