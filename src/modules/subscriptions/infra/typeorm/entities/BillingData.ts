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

@Entity("billing_datas")
class BillingData {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  pj: boolean;

  @Column({ name: "corporate_name" })
  corporateName: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ name: "cpf_or_cnpj" })
  cpfOrCnpj: string;

  @Column()
  street: string;

  @Column()
  number: string;

  @Column()
  complement: string;

  @Column()
  neighboor: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column({ name: "postal_code" })
  postalCode: string;

  @Column({ name: "payment_method" })
  paymentMethod: string;

  @Column({ name: "subscription_id" })
  subscriptionId: string;

  @OneToOne(() => Subscription, subscription => subscription.billingData)
  @JoinColumn({ name: "subscription_id", referencedColumnName: "id" })
  subscription: Subscription;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export default BillingData;
