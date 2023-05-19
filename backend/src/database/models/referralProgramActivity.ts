import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { CustomerModel } from "./customer";
import { ModelTemplate } from "./modelTemplate";
import { ReferralModel } from "./referral";
import { UserModel } from "./user";

@Entity({ name: "customer_referral_program_activity" })
export class ReferralProgramActivityModel extends ModelTemplate {
  @Column("int", { nullable: true })
  customer_id: number | null;

  @Column("int", { nullable: true })
  referral_id: number | null;

  @Column("varchar", { nullable: true })
  claim_status: string | null;

  @Column("datetime", { nullable: true })
  referred_date: Date | null;

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

  @ManyToOne(
    () => CustomerModel,
    (customerModel) => customerModel.referralProgramActivity
  )
  @JoinColumn({ name: "customer_id", referencedColumnName: "id" })
  customer: CustomerModel;

  @ManyToOne(() => UserModel, (userModel) => userModel.referralProgramActivity)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(
    () => AdminUserModel,
    (adminUser) => adminUser.referralProgramActivity
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(
    () => ReferralModel,
    (referralModel) => referralModel.referralProgramActivity
  )
  @JoinColumn({ name: "referral_id", referencedColumnName: "id" })
  referralModel: ReferralModel;
}
