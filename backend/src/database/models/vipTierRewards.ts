import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PointRedeemModel } from "./pointRedeem";
import { VipTierModel } from "./vipTier";

@Entity({ name: "vip_tier_rewards" })
export class VipTierRewardsModel extends ModelTemplate {
  @Column("int", { nullable: true })
  vip_tier_id: number | null;

  @Column("int", { nullable: true })
  point_redeemed_id: number | null;

  @Column("varchar", { nullable: true })
  reward_key: string | null;

  @Column("varchar", { nullable: true })
  reward_key_key_display_text: string | null;

  @Column("varchar", { nullable: true })
  reward_icon: string | null;

  @Column("varchar", { nullable: true })
  reward_description: string | null;

  @Column("varchar", { nullable: true })
  is_reward_enabled: string | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int", { nullable: true })
  admin_ref: number | null;

  @Column("int")
  created_by: number;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @ManyToOne(() => VipTierModel, (vipTier) => vipTier.vipTierRewards)
  @JoinColumn({ name: "vip_tier_id", referencedColumnName: "id" })
  vipTier: VipTierModel;

  @ManyToOne(
    () => PointRedeemModel,
    (pointRedeem) => pointRedeem.vipTierRewards
  )
  @JoinColumn({ name: "point_redeemed_id", referencedColumnName: "id" })
  pointRedeem: PointRedeemModel;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.vipTierRewards)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;
}
