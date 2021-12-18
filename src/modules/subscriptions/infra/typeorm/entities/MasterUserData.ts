import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from "typeorm";

import Subscription from "./Subscription";

@Entity("master_user_datas")
class MasterUserData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  office: string;

  @Column()
  email: string;

  @Column()
  tel: string;

  @Column()
  mobile: string;

  @Column({ name: "subscription_id" })
  subscriptionId: string;

  @OneToOne(() => Subscription, subscription => subscription.masterUserData)
  @JoinColumn({ name: "subscription_id", referencedColumnName: "id" })
  subscription: Subscription;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export default MasterUserData;
