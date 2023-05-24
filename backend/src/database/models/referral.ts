import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminUserModel } from "./adminUser";
import { ModelTemplate } from "./modelTemplate";
import { ReferralProgramActivityModel } from "./referralProgramActivity";
import { UserModel } from "./user";

@Entity({ name: "referral" })
export class ReferralModel extends ModelTemplate {
  @Column("varchar", { nullable: true })
  referral_friend_title: string | null;

  @Column("varchar", { nullable: true })
  referral_friend_discount: string | null;

  @Column("tinyint", { nullable: true })
  referral_friend_is_minimum_cart_requirement: number | null;

  @Column("int", { nullable: true })
  referral_friend_minimum_cart_value: number | null;

  @Column("varchar", { nullable: true })
  referral_friend_apply_to: string | null;

  @Column("int", { nullable: true })
  referral_friend_collection_id: number | null;

  @Column("varchar", { nullable: true })
  referral_friend_purchase_type: string | null;

  @Column("int", { nullable: true })
  referral_friend_expiry: number | null;

  @Column("varchar", { nullable: true })
  referral_friend_icon: string | null;

  @Column("tinyint", { nullable: true })
  referral_friend_is_enabeled: number | null;

  @Column("float", { nullable: true })
  referral_customer_points_amount: string | null;

  @Column("int", { nullable: true })
  referral_customer_limit_count: number | null;

  @Column("varchar", { nullable: true })
  referral_customer_limit_count_type: string | null;

  @Column("tinyint", { nullable: true })
  referral_customer_is_enabeled: number | null;

  @Column("varchar", { nullable: true })
  referral_customer_description: string | null;

  @Column("varchar", { nullable: true })
  referral_customer_icon: string | null;

  @Column("varchar", { nullable: true })
  redirect_url: string | null;

  @Column("tinyint", { nullable: true })
  is_allowed_twitter_share: number | null;

  @Column("tinyint", { nullable: true })
  is_allowed_what_share: number | null;

  @Column("tinyint", { nullable: true })
  is_allowed_email_share: number | null;

  @Column("tinyint", { nullable: true })
  is_allowed_facebook_share: number | null;

  @Column("varchar", { nullable: true })
  referral_user_link: string | null;

  @Column("int", { nullable: true })
  referral_offer_cookie_Day: number | null;

  @Column("tinyint", { nullable: true })
  referral_offer_nco: number | null;

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

  @ManyToOne(() => UserModel, (userModel) => userModel.referralModel)
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user: UserModel;

  @ManyToOne(() => AdminUserModel, (adminUser) => adminUser.referralModel)
  @JoinColumn({ name: "admin_ref", referencedColumnName: "id" })
  adminUser: AdminUserModel;

  @OneToMany(
    () => ReferralProgramActivityModel,
    (referralProgramActivity) => referralProgramActivity.referralModel
  )
  referralProgramActivity: ReferralProgramActivityModel;
}
