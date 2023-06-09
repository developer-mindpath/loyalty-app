export interface IPointResponse {
  points_amounts: string | undefined;
  id: number;
  created_at: string | null;
  updated_at: string | null;
  action_key: string;
  action_key_display_text: string;
  action_visible_order: number;
  action_icon: string;
  action_description: string;
  is_action_enabled: number;
  status: string;
  user_id: number;
  admin_ref: number;
  created_by: number;
  updated_by: number | null;
}

export interface IPointDetailResponse {
  id: number;
  created_at: string | null;
  updated_at: string | null;
  point_action_id: number;
  app_id: number;
  points_amounts: number;
  limit_count: number | null;
  limit_count_type: string | null;
  url_to_share: string | null;
  earning_method: string | null;
  status: string;
  limit_count_enabled: number | null;
  admin_ref: number;
  created_by: number;
  updated_by: number | null;
}

export interface IAddPointDetailRequest {
  app_id: string;
  status: string;
  action_key: string;
  action_icon: string;
  points_amounts: string;
  is_action_enabled: number;
  action_description: string;
  action_visible_order: number;
  action_key_display_text: string;
}
