export type PointActionId = {
  pointId: number;
};

export type UserId = {
  userId: number;
};

export type RewardKey = {
  rewardKey: string;
};

export type PointRedeemId = {
  pointRedeemId: number;
};

export type ReferralId = {
  referralId: number;
};

export type EmailProgramId = {
  emailProgramId: number;
};

export type Pagination = {
  page: number;
  limit: number;
};

export type VipTierId = {
  vipTierId: number;
};

export type VipTierRewardId = {
  vipTierRewardId: number;
};

export type VipTierBenefitId = {
  vipTierBenefitId: number;
};

export type ChecklistCategoryId = {
  categoryId: number;
};

export type ChecklistId = {
  checklistId: number;
};

export type ChecklistDetailId = {
  checklistDetailId: number;
};

export type ChecklistActionId = {
  checklistActionId: number;
};

export type PointRedeemDetailId = {
  pointRedeemDetailId: number;
};

export type PostId = {
  postId: number;
};

export type CustomerId = {
  customerId: number;
};

export type AppId = {
  appId: number;
};

export type PlanId = {
  planId: number;
};

export type PlanFeatureId = {
  planFeatureId: number;
};

export type PeriodQuery = {
  startDate: string;
  endDate: string;
};

export type Position = {
  oldPosition: number;
  newPosition: number;
};

export type SalesGeneratedParams = {
  storeName: string;
  utmCampaign: string;
  utmMedium: string;
  utmSource: string;
  trackingTimeFrame: number;
  discountCode: string;
  interactionTimeFrame: number;
  referralSource: string;
};

export type AnalyticsReferrals = {
  shopName: string;
  referralSource: string;
  referralCompletedTag: string;
  referredCustomerTag: string;
};

export type CustomerDetailsParams = {
  storeName: string;
};

export type StoreName = {
  storeName: string;
};
export type AnalyticsReferralsParams = PeriodQuery & AnalyticsReferrals;
