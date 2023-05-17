export type PointActionId = {
  pointId: number;
};

export type UserId = {
  userId: number;
};

export type GetEarnDetailParams = PointActionId;
export type UpdateEarnDetailParams = PointActionId;
export type GetEarnPointsByUsingUserIdParams = UserId;
export type GetEmailSettingParams = UserId;
export type GetOrderSettingParams = UserId;
export type UpdateOrderSettingParams = UserId;
export type UpdateEmailSettingParams = UserId;
