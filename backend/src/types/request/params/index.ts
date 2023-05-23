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
