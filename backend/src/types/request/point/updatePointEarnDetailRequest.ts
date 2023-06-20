export type UpdatePointEarnDetailRequest = {
  app_id: number;
  points_amounts: string;
  limit_count: number;
  limit_count_type: string;
  url_to_share: string;
  earning_method: string;
  status: string;
  limit_count_enabled: number;
  action_icon: string;
  is_action_enabled: number;
  action_visible_order: number;
};
