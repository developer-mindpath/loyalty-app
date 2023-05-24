import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { LoyalityProgramActivityModel } from "./loyalityProgramActivity";
import { ModelTemplate } from "./modelTemplate";
import { ReferralProgramActivityModel } from "./referralProgramActivity";
import { UserModel } from "./user";
import { VipProgramActivityModel } from "./vipProgramActivity";

@Entity({ name: "customer" })
export class CustomerModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  customer_name: string | null;

  @Column("varchar", { nullable: true })
  customer_email: string | null;

  @Column("datetime", { nullable: true })
  customer_birthday: Date | null;

  @Column("varchar", { nullable: true })
  customer_type: string | null;

  @Column("varchar", { nullable: true })
  customer_image: string | null;

  @Column("datetime", { nullable: true })
  customer_joining_date: Date | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int")
  admin_ref: number;

  @Column("int")
  user_id: number;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @OneToMany(
    () => LoyalityProgramActivityModel,
    (loyalityProgramActivity) => loyalityProgramActivity.customer
  )
  loyalityProgramActivity: LoyalityProgramActivityModel[];

  @OneToMany(
    () => ReferralProgramActivityModel,
    (referralProgramActivity) => referralProgramActivity.customer
  )
  referralProgramActivity: ReferralProgramActivityModel[];

  @OneToMany(
    () => VipProgramActivityModel,
    (vipProgramActivity) => vipProgramActivity.customer
  )
  vipProgramActivity: VipProgramActivityModel[];

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.customer)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (user) => user.customer)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;
}
