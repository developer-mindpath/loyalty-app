import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { AppModel } from "./app";
import { LoyalityProgramActivityModel } from "./loyalityProgramActivity";
import { ModelTemplate } from "./modelTemplate";
import { PointActionModel } from "./pointAction";
import { PointActionDetailsModel } from "./pointActionDetails";
import { PointRedeemModel } from "./pointRedeem";
import { PointRedeemDetailModel } from "./pointRedeemDetail";
import { ReferralModel } from "./referral";
import { ReferralProgramActivityModel } from "./referralProgramActivity";
import { VipProgramActivityModel } from "./vipProgramActivity";
import { VipTierModel } from "./vipTier";

@Entity({ name: "user" })
export class UserModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  user_name: string | null;

  @Column("varchar", { nullable: true })
  user_image: string | null;

  @Column("varchar")
  email: string;

  @Column("varchar")
  password: string;

  @Column("varchar", { nullable: true })
  first_name: string | null;

  @Column("varchar", { nullable: true })
  last_name: string | null;

  @Column("varchar", { nullable: true })
  birthdate: string | null;

  @Column("int", { nullable: true })
  points: number | null;

  @Column("varchar", { nullable: true })
  referral_link: string | null;

  @Column("varchar", { nullable: true })
  status: string | null;

  @Column("int", { nullable: true })
  created_by: number | null;

  @Column("int", { nullable: true })
  updated_by: number | null;

  @Column("int")
  admin_ref: number;

  @ManyToOne(() => AdminUserModel, (adminUserModel) => adminUserModel.users)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @OneToMany(() => PointRedeemModel, (pointRedeem) => pointRedeem.user)
  pointRedeem: PointRedeemModel[];

  @OneToMany(
    () => PointRedeemDetailModel,
    (pointRedeemDetail) => pointRedeemDetail.user
  )
  pointRedeemDetail: PointRedeemDetailModel[];

  @OneToMany(() => PointActionModel, (pointAction) => pointAction.user)
  pointAction: PointActionModel[];

  @OneToMany(
    () => PointActionDetailsModel,
    (pointActionDetail) => pointActionDetail.user
  )
  pointActionDetail: PointActionDetailsModel[];

  @OneToMany(() => AppModel, (appModel) => appModel.user)
  appModel: AppModel[];

  @OneToMany(
    () => LoyalityProgramActivityModel,
    (loyalityProgramActivity) => loyalityProgramActivity.user
  )
  loyalityProgramActivity: LoyalityProgramActivityModel[];

  @OneToMany(
    () => ReferralProgramActivityModel,
    (referralProgramActivity) => referralProgramActivity.user
  )
  referralProgramActivity: ReferralProgramActivityModel[];

  @OneToMany(() => ReferralModel, (referralModel) => referralModel.user)
  referralModel: ReferralModel[];

  @OneToMany(
    () => VipProgramActivityModel,
    (vipProgramActivity) => vipProgramActivity.user
  )
  vipProgramActivity: VipProgramActivityModel[];

  @OneToMany(() => VipTierModel, (vipTier) => vipTier.user)
  vipTier: VipTierModel[];
}
