import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from "typeorm";
import { AdminUserModel } from "./adminUser";
import { AppModel } from "./app";
import { ChecklistActionModel } from "./checklistAction";
import { CustomerModel } from "./customer";
import { LoyalityProgramActivityModel } from "./loyalityProgramActivity";
import { LprPageEmbedModel } from "./lprPageEmbed";
import { ModelTemplate } from "./modelTemplate";
import { OnsiteDedicatedPageModel } from "./onsiteDedicatedPage";
import { OnsiteDedicatedPageBannerModel } from "./onsiteDedicatedPageBanner";
import { OnsiteDedicatedPageExplainerModel } from "./onsiteDedicatedPageExplainer";
import { OnsiteDedicatedPageReferralModel } from "./onsiteDedicatedPageReferral";
import { OnsiteDedicatedPageSectionConfigModel } from "./onsiteDedicatedPageSectionConfig";
import { OnsiteDedicatedPageVipTierModel } from "./onsiteDedicatedPageVipTier";
import { OnsiteDedicatedPageWaysToEarnModel } from "./onsiteDedicatedPageWaysToEarn";
import { OnsiteDedicatedPageWaysToRedeemModel } from "./onsiteDedicatedPageWaysToRedeem";
import { OnsitePopupModel } from "./onsitePopups";
import { OnsiteWidgetModel } from "./onsiteWidget";
import { OnsiteWidgetAdditionalSettingButtonModel } from "./onsiteWidgetAdditionalSettingButton";
import { OnsiteWidgetAdditionalSettingTextModel } from "./onsiteWidgetAdditionalSettingText";
import { OnsiteWidgetPanelOrderModel } from "./onsiteWidgetPanelOrder";
import { PlanFeatureAssignedModel } from "./planFeatureAssigned";
import { PointActionModel } from "./pointAction";
import { PointRedeemModel } from "./pointRedeem";
import { PointRedeemDetailModel } from "./pointRedeemDetail";
import { PostModel } from "./post";
import { PostCommentLikeModel } from "./postCommentLike";
import { PostCommentReplyModel } from "./postCommentReply";
import { PostVoteModel } from "./postVote";
import { ProgramModel } from "./program";
import { ProgramEmailModel } from "./programEmail";
import { ReferralModel } from "./referral";
import { ReferralProgramActivityModel } from "./referralProgramActivity";
import { SettingEmailModel } from "./settingEmail";
import { SettingOrderModel } from "./settingOrder";
import { TranslationModel } from "./translation";
import { UserCurrentPlanModel } from "./userCurrentPlan";
import { UserPaymentModel } from "./userPayment";
import { VipModel } from "./vip";
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

  @OneToMany(
    () => ChecklistActionModel,
    (checklistAction) => checklistAction.user
  )
  checklistAction: ChecklistActionModel[];

  @OneToMany(() => SettingEmailModel, (settingEmail) => settingEmail.user)
  settingEmail: SettingEmailModel[];

  @OneToMany(() => CustomerModel, (customer) => customer.user)
  customer: CustomerModel[];

  @OneToMany(() => LprPageEmbedModel, (lprPageEmbed) => lprPageEmbed.user)
  lprPageEmbed: LprPageEmbedModel[];

  @OneToMany(
    () => OnsiteDedicatedPageModel,
    (onsiteDedicatedPage) => onsiteDedicatedPage.user
  )
  onsiteDedicatedPage: OnsiteDedicatedPageModel[];

  @OneToMany(
    () => OnsiteDedicatedPageBannerModel,
    (onsiteDedicatedPageBanner) => onsiteDedicatedPageBanner.user
  )
  onsiteDedicatedPageBanner: OnsiteDedicatedPageBannerModel[];

  @OneToMany(
    () => OnsiteDedicatedPageExplainerModel,
    (onsiteDedicatedPageExplainer) => onsiteDedicatedPageExplainer.user
  )
  onsiteDedicatedPageExplainer: OnsiteDedicatedPageExplainerModel[];

  @OneToMany(
    () => OnsiteDedicatedPageReferralModel,
    (onsiteDedicatedPageReferral) => onsiteDedicatedPageReferral.user
  )
  onsiteDedicatedPageReferral: OnsiteDedicatedPageReferralModel[];

  @OneToMany(
    () => OnsiteDedicatedPageSectionConfigModel,
    (onsiteDedicatedPageSectionConfig) => onsiteDedicatedPageSectionConfig.user
  )
  onsiteDedicatedPageSectionConfig: OnsiteDedicatedPageSectionConfigModel[];

  @OneToMany(
    () => OnsiteDedicatedPageVipTierModel,
    (onsiteDedicatedPageVipTier) => onsiteDedicatedPageVipTier.user
  )
  onsiteDedicatedPageVipTier: OnsiteDedicatedPageVipTierModel[];

  @OneToMany(
    () => OnsiteDedicatedPageWaysToEarnModel,
    (onsiteDedicatedPageWaysToEarn) => onsiteDedicatedPageWaysToEarn.user
  )
  onsiteDedicatedPageWaysToEarn: OnsiteDedicatedPageWaysToEarnModel[];

  @OneToMany(
    () => OnsiteDedicatedPageWaysToRedeemModel,
    (onsiteDedicatedPageWaysToRedeem) => onsiteDedicatedPageWaysToRedeem.user
  )
  onsiteDedicatedPageWaysToRedeem: OnsiteDedicatedPageWaysToRedeemModel[];

  @OneToMany(() => OnsitePopupModel, (onsitePopup) => onsitePopup.user)
  onsitePopup: OnsitePopupModel[];

  @OneToMany(() => OnsiteWidgetModel, (onsiteWidget) => onsiteWidget.user)
  onsiteWidget: OnsiteWidgetModel[];

  @OneToMany(
    () => OnsiteWidgetAdditionalSettingButtonModel,
    (onsiteWidgetAdditionalSettingButton) =>
      onsiteWidgetAdditionalSettingButton.user
  )
  onsiteWidgetAdditionalSettingButton: OnsiteWidgetAdditionalSettingButtonModel[];

  @OneToMany(
    () => OnsiteWidgetAdditionalSettingTextModel,
    (onsiteWidgetAdditionalSettingText) =>
      onsiteWidgetAdditionalSettingText.user
  )
  onsiteWidgetAdditionalSettingText: OnsiteWidgetAdditionalSettingTextModel[];

  @OneToMany(
    () => OnsiteWidgetPanelOrderModel,
    (onsiteWidgetPanelOrder) => onsiteWidgetPanelOrder.user
  )
  onsiteWidgetPanelOrder: OnsiteWidgetPanelOrderModel[];

  @OneToMany(
    () => PlanFeatureAssignedModel,
    (planFeatureAssigned) => planFeatureAssigned.user
  )
  planFeatureAssigned: PlanFeatureAssignedModel[];

  @OneToMany(() => PostModel, (post) => post.user)
  post: PostModel[];

  @OneToMany(
    () => PostCommentLikeModel,
    (postCommentLike) => postCommentLike.user
  )
  postCommentLike: PostCommentLikeModel[];

  @OneToMany(
    () => PostCommentReplyModel,
    (postCommentReply) => postCommentReply.user
  )
  postCommentReply: PostCommentReplyModel[];

  @OneToMany(() => PostVoteModel, (postVote) => postVote.user)
  postVote: PostVoteModel[];

  @OneToMany(() => ProgramModel, (program) => program.user)
  program: ProgramModel[];

  @OneToMany(() => ProgramEmailModel, (programEmail) => programEmail.user)
  programEmail: ProgramEmailModel[];

  @OneToMany(() => SettingOrderModel, (settingOrder) => settingOrder.user)
  settingOrder: SettingOrderModel[];

  @OneToMany(
    () => UserCurrentPlanModel,
    (userCurrentPlan) => userCurrentPlan.user
  )
  userCurrentPlan: UserCurrentPlanModel[];

  @OneToMany(() => UserPaymentModel, (userPayment) => userPayment.user)
  userPayment: UserPaymentModel[];

  @OneToMany(() => VipModel, (vip) => vip.user)
  vip: VipModel[];

  @OneToOne(() => TranslationModel, (translation) => translation.user)
  translation: TranslationModel;
}
