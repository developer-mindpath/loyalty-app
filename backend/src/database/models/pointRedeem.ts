import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { PointRedeemDetailModel } from "./pointRedeemDetail";
import { UserModel } from "./user";
import { VipTierRewardsModel } from "./vipTierRewards";

@Entity({ name: "point_redeem" })
export class PointRedeemModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  reward_key: string | null;

  @Column("varchar", { nullable: true })
  reward_key_key_display_text: string | null;

  @Column("varchar", { nullable: true })
  reward_icon: string | null;

  @Column("varchar", { nullable: true })
  reward_description: string | null;

  @Column("tinyint", { nullable: true })
  is_reward_enabled: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int", { nullable: true })
  created_by: number | null;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int")
  admin_ref: number;

  @Column("int")
  user_id: number;

  @ManyToOne(
    () => AdminUserModel,
    (adminUserModel) => adminUserModel.pointRedeem
  )
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @ManyToOne(() => UserModel, (userModel) => userModel.pointRedeem)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @OneToMany(
    () => PointRedeemDetailModel,
    (pointRedeemDetail) => pointRedeemDetail.pointRedeem
  )
  pointRedeemDetail: PointRedeemDetailModel[];

  @OneToMany(
    () => VipTierRewardsModel,
    (vipTierRewards) => vipTierRewards.pointRedeem
  )
  vipTierRewards: VipTierRewardsModel[];
}
