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

export type GetEarnDetailParams = PointActionId;
export type UpdateEarnDetailParams = PointActionId;
export type GetEarnPointsByUsingUserIdParams = UserId;
export type GetEmailSettingParams = UserId;
export type GetOrderSettingParams = UserId;
export type UpdateOrderSettingParams = UserId;
export type UpdateEmailSettingParams = UserId;
export type GetRedeemPointsParams = UserId;
export type UpdateRedeemPointsParams = UserId & PointRedeemId;
export type GetRedeemPointDetailParams = UserId & PointRedeemId;
export type UpdateRedeemPointDetailParams = UserId & PointRedeemId;
export type DeleteRedeemPointDetailParams = UserId & PointRedeemId;
export type GetReferralProgramParams = UserId & ReferralId;
export type UpdateReferralProgramParams = ReferralId;
export type DeleteReferralProgramParams = ReferralId;
export type GetEmailNotificationProgramParams = EmailProgramId;
export type GetEmailNotificationsProgramParams = UserId;
export type UpdateEmailNotificationProgramParams = EmailProgramId;
export type DeleteEmailNotificationProgramParams = EmailProgramId;
export type GetLoyaltyProgramActivityParams = UserId;
export type GetReferralProgramActivityParams = UserId;
export type GetVipProgramActivityParams = UserId;
export type GetDedicatedPageParams = UserId;
export type UpdateDedicatedPageParams = UserId;
export type GetDedicatedPageBannerParams = UserId;
export type UpdateDedicatedPageBannerParams = UserId;
export type GetDedicatedPageExplainerParams = UserId;
export type UpdateDedicatedPageExplainerParams = UserId;
export type GetDedicatedPageReferralParams = UserId;
export type UpdateDedicatedPageReferralParams = UserId;
export type GetDedicatedPageWayToEarnParams = UserId;
export type UpdateDedicatedPageWayToEarnParams = UserId;
