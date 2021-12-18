import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne } from "typeorm";

import BillingData from "./BillingData";
import MasterUserData from "./MasterUserData";
import Participant from "./Participant";

@Entity("subscriptions")
class Subscription {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToMany(() => Participant, participant => participant.subscription)
  participants: Participant[];

  @OneToOne(() => BillingData, billingData => billingData.subscription)
  billingData: BillingData;

  @OneToOne(() => MasterUserData, masterUserData => masterUserData.subscription)
  masterUserData: MasterUserData;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export default Subscription;
