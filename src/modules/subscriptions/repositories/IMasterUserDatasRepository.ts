import ICreateMasterUserDataDTO from "../dtos/ICreateMasterUserDataDTO";
import MasterUserData from "../infra/typeorm/entities/MasterUserData";

export default interface IMasterUserDatasRepository {
  create(data: ICreateMasterUserDataDTO): Promise<MasterUserData>;
}
