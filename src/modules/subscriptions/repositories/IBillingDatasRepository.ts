import ICreateBillignDataDTO from "../dtos/ICreateBillignDataDTO";
import BillingData from "../infra/typeorm/entities/BillingData";

export default interface IBillingDatasRepository {
  create(data: ICreateBillignDataDTO): Promise<BillingData>;
}
