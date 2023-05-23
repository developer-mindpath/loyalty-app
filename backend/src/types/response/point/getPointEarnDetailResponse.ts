export type GetPointEarnDetailResponse = {
  id: number;
  point_action_id: number;
  app_id: number | null;
  points_amounts: string | null;
  limit_count: number | null;
  limit_count_type: string | null;
  url_to_share: string | null;
  earning_method: string | null;
  status: string;
  limit_count_enabled: number | null;
  admin_ref: number;
  created_by: number;
  updated_by: number | null;
  created_at: Date;
};
