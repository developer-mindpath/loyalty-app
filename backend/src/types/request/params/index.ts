export type PointActionId = {
  pointId: number;
};

export type UserId = {
  userId: number;
};

export type RewardKey = {
  rewardKey: string;
};

export type pointRedeemId = {
  pointRedeemId: number;
};

export type GetEarnDetailParams = PointActionId;
export type UpdateEarnDetailParams = PointActionId;
export type GetEarnPointsByUsingUserIdParams = UserId;
export type GetEmailSettingParams = UserId;
export type GetOrderSettingParams = UserId;
export type UpdateOrderSettingParams = UserId;
export type UpdateEmailSettingParams = UserId;
export type GetRedeemPointsParams = UserId;
export type UpdateRedeemPointsParams = UserId & RewardKey;
export type GetRedeemPointDetailParams = UserId & pointRedeemId;
export type UpdateRedeemPointDetailParams = UserId & pointRedeemId;
export type DeleteRedeemPointDetailParams = UserId & pointRedeemId;
