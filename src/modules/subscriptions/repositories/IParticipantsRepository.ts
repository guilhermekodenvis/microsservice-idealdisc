import ICreateParticipantDTO from "../dtos/ICreateParticipantDTO";
import Participant from "../infra/typeorm/entities/Participant";

export default interface IParticipantsRepository {
  create(data: ICreateParticipantDTO): Promise<Participant>;
}
