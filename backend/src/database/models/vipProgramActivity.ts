import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { CustomerModel } from "./customer";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";
import { VipTierModel } from "./vipTier";

@Entity({ name: "customer_vip_program_activity" })
export class VipProgramActivityModel extends ModelTemplate {
  @Column("int", { nullable: true })
  customer_id: number | null;

  @Column("int", { nullable: true })
  vip_tier_id: number | null;

  @Column("varchar", { nullable: true })
  tier_title: string | null;

  @Column("datetime", { nullable: true })
  achieved_date: Date | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int", { nullable: true })
  admin_ref: number | null;

  @Column("int")
  user_id: number;

  @Column("int", { nullable: true })
  created_by: number | null;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @ManyToOne(
    () => CustomerModel,
    (customerModel) => customerModel.vipProgramActivity
  )
  @JoinColumn({ name: "customer_id", referencedColumnName: "id" })
  customer: CustomerModel;

  @ManyToOne(() => UserModel, (userModel) => userModel.vipProgramActivity)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.vipProgramActivity)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => VipTierModel, (vipTier) => vipTier.vipProgramActivity)
  @JoinColumn({ name: "vip_tier_id", referencedColumnName: "id" })
  vipTier: VipTierModel;
}
