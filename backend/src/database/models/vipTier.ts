import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { UserModel } from "./user";
import { VipProgramActivityModel } from "./vipProgramActivity";
import { VipTierAdditionalBenefitsModel } from "./vipTierAdditionalBenefits";
import { VipTierRewardsModel } from "./vipTierRewards";

@Entity({ name: "vip_tier" })
export class VipTierModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  tier_key: string | null;

  @Column("varchar", { nullable: true })
  tier_key_display_text: string | null;

  @Column("varchar", { nullable: true })
  tier_key_icon: string | null;

  @Column("varchar", { nullable: true })
  tier_key_description: string | null;

  @Column("int", { nullable: true })
  goals_to_achieve_tier: number | null;

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
    () => VipProgramActivityModel,
    (vipProgramActivity) => vipProgramActivity.vipTier
  )
  vipProgramActivity: VipProgramActivityModel[];

  @ManyToOne(() => UserModel, (userModel) => userModel.vipTier)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.vipTier)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @OneToMany(
    () => VipTierAdditionalBenefitsModel,
    (vipTierAdditionalBenefit) => vipTierAdditionalBenefit.vipTier
  )
  vipTierAdditionalBenefit: VipTierAdditionalBenefitsModel[];

  @OneToMany(
    () => VipTierRewardsModel,
    (vipTierRewards) => vipTierRewards.vipTier
  )
  vipTierRewards: VipTierRewardsModel[];
}
