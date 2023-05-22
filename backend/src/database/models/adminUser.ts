import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AdminActivityModel } from "./adminActivity";
import { AdminTypeModel } from "./adminType";
import { AppModel } from "./app";
import { AssignedRoleModel } from "./assignedRole";
import { ChecklistModel } from "./checklist";
import { ChecklistActionModel } from "./checklistAction";
import { ChecklistCategoryModel } from "./checklistCategory";
import { ChecklistDetailModel } from "./checklistDetail";
import { CustomerModel } from "./customer";
import { InvitationsModel } from "./invitations";
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
import { PlanModel } from "./plan";
import { PlanFeatureModel } from "./planFeature";
import { PlanFeatureAssignedModel } from "./planFeatureAssigned";
import { PointActionModel } from "./pointAction";
import { PointActionDetailsModel } from "./pointActionDetails";
import { PointRedeemModel } from "./pointRedeem";
import { PointRedeemDetailModel } from "./pointRedeemDetail";
import { PostModel } from "./post";
import { PostCommentModel } from "./postComment";
import { ReferralModel } from "./referral";
import { ReferralProgramActivityModel } from "./referralProgramActivity";
import { SettingEmailModel } from "./settingEmail";
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

  @OneToMany(
    () => AdminActivityModel,
    (adminActivity) => adminActivity.adminUser
  )
  adminActivity: AdminActivityModel[];

  @ManyToOne(() => AdminTypeModel, (adminType) => adminType.adminUser)
  @JoinColumn({ name: "admin_type_id", referencedColumnName: "id" })
  adminType: AdminTypeModel;

  @OneToMany(() => AssignedRoleModel, (assignedRole) => assignedRole.adminUser)
  assignedRole: AssignedRoleModel[];

  @OneToMany(
    () => ChecklistCategoryModel,
    (checklistCategory) => checklistCategory.adminUser
  )
  checklistCategory: ChecklistCategoryModel[];

  @OneToMany(
    () => ChecklistActionModel,
    (checklistAction) => checklistAction.adminUser
  )
  checklistAction: ChecklistActionModel[];

  @OneToMany(
    () => ChecklistDetailModel,
    (checklistDetail) => checklistDetail.adminUser
  )
  checklistDetail: ChecklistDetailModel[];

  @OneToMany(() => ChecklistModel, (checklist) => checklist.adminUser)
  checklist: ChecklistModel[];

  @OneToMany(() => SettingEmailModel, (settingEmail) => settingEmail.adminUser)
  settingEmail: ChecklistModel[];

  @OneToMany(() => CustomerModel, (customer) => customer.adminUser)
  customer: CustomerModel[];

  @OneToMany(() => InvitationsModel, (invitation) => invitation.adminUser)
  invitation: InvitationsModel[];

  @OneToMany(() => LprPageEmbedModel, (lprPageEmbed) => lprPageEmbed.adminUser)
  lprPageEmbed: LprPageEmbedModel[];

  @OneToMany(
    () => OnsiteDedicatedPageModel,
    (onsiteDedicatedPage) => onsiteDedicatedPage.adminUser
  )
  onsiteDedicatedPage: OnsiteDedicatedPageModel[];

  @OneToMany(
    () => OnsiteDedicatedPageBannerModel,
    (onsiteDedicatedPageBanner) => onsiteDedicatedPageBanner.adminUser
  )
  onsiteDedicatedPageBanner: OnsiteDedicatedPageBannerModel[];

  @OneToMany(
    () => OnsiteDedicatedPageExplainerModel,
    (onsiteDedicatedPageExplainer) => onsiteDedicatedPageExplainer.adminUser
  )
  onsiteDedicatedPageExplainer: OnsiteDedicatedPageExplainerModel[];

  @OneToMany(
    () => OnsiteDedicatedPageReferralModel,
    (onsiteDedicatedPageReferral) => onsiteDedicatedPageReferral.adminUser
  )
  onsiteDedicatedPageReferral: OnsiteDedicatedPageReferralModel[];

  @OneToMany(
    () => OnsiteDedicatedPageSectionConfigModel,
    (onsiteDedicatedPageSectionConfig) =>
      onsiteDedicatedPageSectionConfig.adminUser
  )
  onsiteDedicatedPageSectionConfig: OnsiteDedicatedPageSectionConfigModel[];

  @OneToMany(
    () => OnsiteDedicatedPageVipTierModel,
    (onsiteDedicatedPageVipTier) => onsiteDedicatedPageVipTier.adminUser
  )
  onsiteDedicatedPageVipTier: OnsiteDedicatedPageVipTierModel[];

  @OneToMany(
    () => OnsiteDedicatedPageWaysToEarnModel,
    (onsiteDedicatedPageWaysToEarn) => onsiteDedicatedPageWaysToEarn.adminUser
  )
  onsiteDedicatedPageWaysToEarn: OnsiteDedicatedPageWaysToEarnModel[];

  @OneToMany(
    () => OnsiteDedicatedPageWaysToRedeemModel,
    (onsiteDedicatedPageWaysToRedeem) =>
      onsiteDedicatedPageWaysToRedeem.adminUser
  )
  onsiteDedicatedPageWaysToRedeem: OnsiteDedicatedPageWaysToRedeemModel[];

  @OneToMany(() => OnsitePopupModel, (onsitePopup) => onsitePopup.adminUser)
  onsitePopup: OnsitePopupModel[];

  @OneToMany(() => OnsiteWidgetModel, (onsiteWidget) => onsiteWidget.adminUser)
  onsiteWidget: OnsiteWidgetModel[];

  @OneToMany(
    () => OnsiteWidgetAdditionalSettingButtonModel,
    (onsiteWidgetAdditionalSettingButton) =>
      onsiteWidgetAdditionalSettingButton.adminUser
  )
  onsiteWidgetAdditionalSettingButton: OnsiteWidgetAdditionalSettingButtonModel[];

  @OneToMany(
    () => OnsiteWidgetAdditionalSettingTextModel,
    (onsiteWidgetAdditionalSettingText) =>
      onsiteWidgetAdditionalSettingText.adminUser
  )
  onsiteWidgetAdditionalSettingText: OnsiteWidgetAdditionalSettingTextModel[];

  @OneToMany(
    () => OnsiteWidgetPanelOrderModel,
    (onsiteWidgetPanelOrder) => onsiteWidgetPanelOrder.adminUser
  )
  onsiteWidgetPanelOrder: OnsiteWidgetPanelOrderModel[];

  @OneToMany(() => PlanModel, (plan) => plan.adminUser)
  plan: PlanModel[];

  @OneToMany(() => PlanFeatureModel, (planFeature) => planFeature.adminUser)
  planFeature: PlanModel[];

  @OneToMany(
    () => PlanFeatureAssignedModel,
    (planFeatureAssigned) => planFeatureAssigned.adminUser
  )
  planFeatureAssigned: PlanFeatureAssignedModel[];

  @OneToMany(() => PostModel, (post) => post.adminUser)
  post: PostModel[];

  @OneToMany(() => PostCommentModel, (postComment) => postComment.adminUser)
  postComment: PostCommentModel[];
}
