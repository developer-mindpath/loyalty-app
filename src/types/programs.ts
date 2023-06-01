export interface IGetRedeemingPointsResponse {
  id: number;
  created_at: string;
  updated_at: string;
  reward_key: string;
  reward_key_key_display_text: string;
  reward_icon: any;
  reward_description: string;
  is_reward_enabled: number;
  status: string;
  created_by: number;
  updated_by: any;
  admin_ref: number;
  user_id: number;
}

export interface IGetPointRedeemingDetailRequest {
  id: string;
  pointRedeemId: string;
}

export interface IGetPointRedeemingDetailResponse {
  id: number;
  created_at: string;
  updated_at: string;
  point_redeem_id: number;
  points_type: string;
  fixed_points_amount: number;
  fixed_points_discount: number;
  fixed_points_discount_type: any;
  apply_to_maximum_shipping_amount: any;
  incremented_points_amount: any;
  incremented_points_money_customer_received: any;
  incremented_points_is_set_minimum_points: any;
  incremented_points_is_set_maximum_points: any;
  incremented_points_minimum_points: any;
  incremented_points_maximum_points: any;
  is_minimum_cart_requirement: any;
  minimum_cart_value: any;
  apply_to: any;
  collection_id: any;
  purchase_type: any;
  reward_expiry: any;
  products: any;
  status: string;
  admin_ref: number;
  created_by: number;
  updated_by: any;
  user_id: number;
}

export interface IAddRedeemingPointRequest {
  reward_key: string;
  reward_key_key_display_text: string;
  reward_description: string;
  is_reward_enabled: number;
  status: string;
  user_id: number;
  admin_ref: number;
  created_by: number;
}

export interface IUpdateRedeemingPointDetailRequest {
  userId: string;
  pointRedeemingId: string;
  data: {
    points_type: string;
    fixed_points_amount: string;
    fixed_points_discount: string;
    incremented_points_money_customer_received: string;
    status: string;
    admin_ref: number;
    updated_by: number;
  };
}

export interface IInsertRedeemingPointRequest {
  point_redeem_id: number;
  points_type: string;
  fixed_points_amount: string;
  fixed_points_discount: string;
  status: string;
  user_id: number;
  admin_ref: number;
  created_by: number;
}

export interface IInsertPointEarningRequest {
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
}

export interface IGetPointEarningResponse {
  id: number;
  created_at: string;
  updated_at: string;
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
  updated_by: number;
}

export interface IInsertPointEarningDetailsRequest {
  point_action_id: string;
  app_id: string;
  points_amounts: string;
  limit_count: number;
  limit_count_type: string;
  url_to_share: string;
  earning_method: string;
  status: string;
  limit_count_enabled: number;
  admin_ref: number;
  user_id: number;
  created_by: number;
}
