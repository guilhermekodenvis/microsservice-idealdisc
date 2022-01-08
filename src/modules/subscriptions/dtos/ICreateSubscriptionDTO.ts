import BillingData from "../infra/typeorm/entities/BillingData";
import MasterUserData from "../infra/typeorm/entities/MasterUserData";
import Participant from "../infra/typeorm/entities/Participant";

export default interface ICreateSubscriptionDTO {
  participants: Participant[];
  billingData: BillingData;
  masterUserData: MasterUserData;
  cc: string[];
  investiment: string;
  date: string;
}
