export type GetPointRedeemDetailResponse = {
  id: number;
  point_redeem_id: number | null;
  points_type: string | null;
  fixed_points_amount: string | null;
  fixed_points_discount: string | null;
  fixed_points_discount_type: string | null;
  apply_to_maximum_shipping_amount: string | null;
  incremented_points_amount: string | null;
  incremented_points_money_customer_received: string | null;
  incremented_points_is_set_minimum_points: number | null;
  incremented_points_is_set_maximum_points: number | null;
  incremented_points_minimum_points: number | null;
  incremented_points_maximum_points: number | null;
  is_minimum_cart_requirement: number | null;
  minimum_cart_value: number | null;
  apply_to: string | null;
  collection_id: number | null;
  purchase_type: string | null;
  reward_expiry: number | null;
  products: string | null;
  status: string | null;
  user_id: number;
  admin_ref: number;
  created_by: number | null;
  created_at: Date;
  updated_at: Date | null;
};
