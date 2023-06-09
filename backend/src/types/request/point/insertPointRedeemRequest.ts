export type InsertPointRedeemRequest = {
  reward_key: string;
  reward_key_key_display_text: string;
  reward_icon: string;
  reward_description: string;
  is_reward_enabled: number;
  points_type: string;
  fixed_points_amount: string;
  fixed_points_discount: string;
  fixed_points_discount_type: string;
  apply_to_maximum_shipping_amount: string;
  incremented_points_amount: string;
  incremented_points_money_customer_received: string;
  incremented_points_is_set_minimum_points: number;
  incremented_points_is_set_maximum_points: number;
  incremented_points_minimum_points: number;
  incremented_points_maximum_points: number;
  is_minimum_cart_requirement: number;
  minimum_cart_value: number;
  apply_to: string;
  collection_id: number;
  purchase_type: string;
  reward_expiry: number;
  products: string;
  status: string;
};
