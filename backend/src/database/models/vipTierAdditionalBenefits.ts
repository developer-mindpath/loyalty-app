import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { VipTierModel } from "./vipTier";

@Entity({ name: "vip_tier_additional_benefits" })
export class VipTierAdditionalBenefitsModel extends ModelTemplate {
  @Column("int", { nullable: true })
  vip_tier_id: number | null;

  @Column("varchar", { nullable: true })
  text: string | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int", { nullable: true })
  admin_ref: number | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @ManyToOne(() => VipTierModel, (vipTier) => vipTier.vipTierAdditionalBenefit)
  @JoinColumn({ name: "vip_tier_id", referencedColumnName: "id" })
  vipTier: VipTierModel;

  @ManyToOne(
    () => AdminUserModel,
    (adminUser) => adminUser.vipTierAdditionalBenefit
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;
}
