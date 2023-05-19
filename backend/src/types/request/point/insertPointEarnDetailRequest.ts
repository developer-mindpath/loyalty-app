export type InsertPointEarnDetailRequest = {
  point_action_id: number;
  app_id: number;
  points_amounts: string;
  limit_count: number;
  limit_count_type: string;
  url_to_share: string;
  earning_method: string;
  status: string;
  limit_count_enabled: number;
  admin_ref: number;
  created_by: number;
};
