import { Column, Entity, OneToMany } from "typeorm";
import { AppModel } from "./app";
import { LoyalityProgramActivityModel } from "./loyalityProgramActivity";
import { ModelTemplate } from "./modelTemplate";
import { PointActionModel } from "./pointAction";
import { PointActionDetailsModel } from "./pointActionDetails";
import { PointRedeemModel } from "./pointRedeem";
import { PointRedeemDetailModel } from "./pointRedeemDetail";
import { ReferralModel } from "./referral";
import { ReferralProgramActivityModel } from "./referralProgramActivity";
import { UserModel } from "./user";
import { VipProgramActivityModel } from "./vipProgramActivity";
import { VipTierModel } from "./vipTier";

@Entity({ name: "admin_user" })
export class AdminUserModel extends ModelTemplate {
  @Column("int", { nullable: true })
  admin_type_id: number | null;

  @Column("varchar", { nullable: true })
  first_name: string | null;

  @Column("varchar", { nullable: true })
  last_name: string | null;

  @Column("varchar", { nullable: true })
  image: string | null;

  @Column("varchar", { nullable: true })
  email: string | null;

  @Column("tinyint", { nullable: true })
  is_joined: number | null;

  @Column("tinyint", { nullable: true })
  is_password_genereated: number | null;

  @Column("varchar", { nullable: true })
  password: string | null;

  @Column("tinyint", { nullable: true })
  is_active: number | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int", { nullable: true })
  created_by: number | null;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @OneToMany(() => UserModel, (users) => users.adminUser)
  users: UserModel[];

  @OneToMany(() => PointRedeemModel, (pointRedeem) => pointRedeem.adminUser)
  pointRedeem: PointRedeemModel[];

  @OneToMany(
    () => PointRedeemDetailModel,
    (pointRedeemDetail) => pointRedeemDetail.adminUser
  )
  pointRedeemDetail: PointRedeemDetailModel[];

  @OneToMany(() => PointActionModel, (pointAction) => pointAction.adminUser)
  pointAction: PointActionModel[];

  @OneToMany(
    () => PointActionDetailsModel,
    (pointActionDetail) => pointActionDetail.adminUser
  )
  pointActionDetail: PointActionDetailsModel[];

  @OneToMany(() => AppModel, (appModel) => appModel.adminUser)
  appModel: AppModel[];

  @OneToMany(
    () => LoyalityProgramActivityModel,
    (loyalityProgramActivity) => loyalityProgramActivity.adminUser
  )
  loyalityProgramActivity: LoyalityProgramActivityModel[];

  @OneToMany(
    () => ReferralProgramActivityModel,
    (referralProgramActivity) => referralProgramActivity.adminUser
  )
  referralProgramActivity: ReferralProgramActivityModel[];

  @OneToMany(() => ReferralModel, (referralModel) => referralModel.adminUser)
  referralModel: ReferralModel[];

  @OneToMany(
    () => VipProgramActivityModel,
    (vipProgramActivity) => vipProgramActivity.adminUser
  )
  vipProgramActivity: VipProgramActivityModel[];

  @OneToMany(() => VipTierModel, (vipTier) => vipTier.adminUser)
  vipTier: VipTierModel[];
}
