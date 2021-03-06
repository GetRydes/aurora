import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { CustomerAddress } from "./CustomerAddress";
import { CustomerCard } from "./CustomerCard";
import { DeviceSource } from "./DeviceSource";

@Entity({ name: "customer" })
export class Customer {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  hash!: string;

  @Column({ unique: true, nullable: false })
  email!: string;

  @Column({
    nullable: false,
  })
  first_name!: string;

  @Column({ nullable: false })
  last_name!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ nullable: false })
  phone_number!: string;

  @Column({
    default: true,
  })
  is_active?: Boolean;

  @OneToMany(() => DeviceSource, (source) => source.customer)
  @JoinColumn()
  sources?: DeviceSource[];

  @OneToMany(() => CustomerAddress, (address) => address.customer)
  @JoinColumn()
  saved_addresses?: CustomerAddress[];

  @OneToMany(() => CustomerCard, (address) => address.customer)
  @JoinColumn()
  cards?: CustomerCard[];

  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at!: Date;

  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_at!: Date;
}
