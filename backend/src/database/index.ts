import { DataSource } from "typeorm";
import { config } from "dotenv";
import { ModelTemplate } from "./models/modelTemplate";
import { ReferralModel } from "./models/referral";
import { UserModel } from "./models/user";
import { AdminActivityModel } from "./models/adminActivity";
import { AdminActivityTypeModel } from "./models/adminActivityType";
import { PointActionModel } from "./models/pointAction";
import { PointActionDetailsModel } from "./models/pointActionDetails";
import { SettingEmailModel } from "./models/settingEmail";
import { SettingOrderModel } from "./models/settingOrder";
import { PointRedeemModel } from "./models/pointRedeem";
import { PointRedeemDetailModel } from "./models/pointRedeemDetail";
import { AdminUserModel } from "./models/adminUser";
import { AdminSettingModel } from "./models/adminSetting";
import { AdminTypeModel } from "./models/adminType";
import { AppModel } from "./models/app";
import { AssignedRoleModel } from "./models/assignedRole";
import { ChecklistModel } from "./models/checklist";
import { ChecklistActionModel } from "./models/checklistAction";
import { ChecklistCategoryModel } from "./models/checklistCategory";
import { ChecklistDetailModel } from "./models/checklistDetail";
import { CsvTemplatesModel } from "./models/csvTemplates";
import { CustomerModel } from "./models/customer";
import { InvitationsModel } from "./models/invitations";
import { LoyalityProgramActivityModel } from "./models/loyalityProgramActivity";
import { LprPageEmbedModel } from "./models/lprPageEmbed";
import { OnsiteDedicatedPageModel } from "./models/onsiteDedicatedPage";
import { OnsiteDedicatedPageBannerModel } from "./models/onsiteDedicatedPageBanner";
import { OnsiteDedicatedPageExplainerModel } from "./models/onsiteDedicatedPageExplainer";
import { OnsiteDedicatedPageReferralModel } from "./models/onsiteDedicatedPageReferral";
import { OnsiteDedicatedPageSectionConfigModel } from "./models/onsiteDedicatedPageSectionConfig";
import { OnsiteDedicatedPageVipTierModel } from "./models/onsiteDedicatedPageVipTier";
import { OnsiteDedicatedPageWaysToEarnModel } from "./models/onsiteDedicatedPageWaysToEarn";
import { OnsiteDedicatedPageWaysToRedeemModel } from "./models/onsiteDedicatedPageWaysToRedeem";
import { OnsitePopupModel } from "./models/onsitePopups";
import { OnsiteWidgetModel } from "./models/onsiteWidget";
import { OnsiteWidgetAdditionalSettingButtonModel } from "./models/onsiteWidgetAdditionalSettingButton";
import { OnsiteWidgetAdditionalSettingTextModel } from "./models/onsiteWidgetAdditionalSettingText";
import { OnsiteWidgetPanelOrderModel } from "./models/onsiteWidgetPanelOrder";
import { PlanModel } from "./models/plan";
import { PlanFeatureModel } from "./models/planFeature";
import { PlanFeatureAssignedModel } from "./models/planFeatureAssigned";
import { PostModel } from "./models/post";
import { PostCommentModel } from "./models/postComment";
import { PostCommentLikeModel } from "./models/postCommentLike";
import { PostCommentReplyModel } from "./models/postCommentReply";
import { PostNotificationModel } from "./models/postNotification";
import { PostVoteModel } from "./models/postVote";
import { ProgramModel } from "./models/program";
import { ProgramEmailModel } from "./models/programEmail";
import { ReferralProgramActivityModel } from "./models/referralProgramActivity";
import { RoleModel } from "./models/role";
import { UserCurrentPlanModel } from "./models/userCurrentPlan";
import { UserPaymentModel } from "./models/userPayment";
import { VipModel } from "./models/vip";
import { VipProgramActivityModel } from "./models/vipProgramActivity";
import { VipTierModel } from "./models/vipTier";
import { VipTierAdditionalBenefitsModel } from "./models/vipTierAdditionalBenefits";
import { VipTierRewardsModel } from "./models/vipTierRewards";
import { TranslationModel } from "./models/translation";
config();

const MODELS = [
  ModelTemplate,
  AdminActivityModel,
  AdminActivityTypeModel,
  AdminSettingModel,
  AdminTypeModel,
  AdminUserModel,
  AppModel,
  AssignedRoleModel,
  ChecklistModel,
  ChecklistActionModel,
  ChecklistCategoryModel,
  ChecklistDetailModel,
  CsvTemplatesModel,
  CustomerModel,
  InvitationsModel,
  LoyalityProgramActivityModel,
  LprPageEmbedModel,
  OnsiteDedicatedPageModel,
  OnsiteDedicatedPageBannerModel,
  OnsiteDedicatedPageExplainerModel,
  OnsiteDedicatedPageReferralModel,
  OnsiteDedicatedPageSectionConfigModel,
  OnsiteDedicatedPageVipTierModel,
  OnsiteDedicatedPageWaysToEarnModel,
  OnsiteDedicatedPageWaysToRedeemModel,
  OnsitePopupModel,
  OnsiteWidgetModel,
  OnsiteWidgetAdditionalSettingButtonModel,
  OnsiteWidgetAdditionalSettingTextModel,
  OnsiteWidgetPanelOrderModel,
  PlanModel,
  PlanFeatureModel,
  PlanFeatureAssignedModel,
  PointActionModel,
  PointActionDetailsModel,
  PointRedeemModel,
  PointRedeemDetailModel,
  PostModel,
  PostCommentModel,
  PostCommentLikeModel,
  PostCommentReplyModel,
  PostNotificationModel,
  PostVoteModel,
  ProgramModel,
  ProgramEmailModel,
  ReferralModel,
  ReferralProgramActivityModel,
  RoleModel,
  SettingEmailModel,
  SettingOrderModel,
  UserModel,
  UserCurrentPlanModel,
  UserPaymentModel,
  VipModel,
  VipProgramActivityModel,
  VipTierModel,
  VipTierAdditionalBenefitsModel,
  VipTierRewardsModel,
  TranslationModel,
];
const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: MODELS,
  migrations: ["dist/database/migrations/*.js"],
  synchronize: false,
  migrationsRun: false,
  logging: true,
  extra: {
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  },
});

export default AppDataSource;
