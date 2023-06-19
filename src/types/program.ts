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

export interface IReferralAction {
  id: number;
  created_at: string | null;
  updated_at: string | null;
  action_key: string;
  action_key_display_text: string;
  action_visible_order: number | null;
  action_icon: string;
  action_description: string;
  is_action_enabled: number | null;
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
  pointAction: IReferralAction;
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

export interface IRedeemPointResponse {
  id: number;
  created_at: string | null;
  updated_at: string | null;
  reward_key: string;
  reward_key_key_display_text: string;
  reward_icon: string | null;
  reward_description: string;
  is_reward_enabled: number;
  status: string;
  created_by: number;
  updated_by: number | null;
  admin_ref: number;
  user_id: number;
}

export interface IAddEarnRequest {
  action_key: string;
  action_key_display_text: string;
  action_visible_order: number;
  action_icon: string;
  action_description: string;
  is_action_enabled: number;
  status: string;
  app_id: string;
  points_amounts: string;
}

export interface IAddEarnResponse {
  id: string;
}

export interface IAppListItem {
  id: number;
  app_title: string;
}
