import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

import Subscription from "./Subscription";

@Entity("participants")
class Participant {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  cpf: string;

  @Column()
  email: string;

  @Column()
  tel: string;

  @Column()
  cell: string;

  @Column()
  office: string;

  @Column()
  instagram: string;

  @Column({ name: "subscription_id" })
  subscriptionId: string;

  @ManyToOne(() => Subscription, subscription => subscription.participants)
  @JoinColumn({ name: "subscription_id" })
  subscription: Subscription;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export default Participant;
