import { InsertPointRedeemRequest } from "../../types/request/point/insertPointRedeemRequest";

export default class InsertPointRedeemRequestDTO {
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
  user_id: number;
  admin_ref: number;
  created_by: number;

  constructor(
    body: InsertPointRedeemRequest,
    userId: number,
    adminRef: number
  ) {
    this.reward_key = body.reward_key;
    this.reward_key_key_display_text = body.reward_key_key_display_text;
    this.reward_icon = body.reward_icon;
    this.reward_description = body.reward_description;
    this.is_reward_enabled = body.is_reward_enabled;
    this.points_type = body.points_type;
    this.fixed_points_amount = body.fixed_points_amount;
    this.fixed_points_discount = body.fixed_points_discount;
    this.fixed_points_discount_type = body.fixed_points_discount_type;
    this.apply_to_maximum_shipping_amount =
      body.apply_to_maximum_shipping_amount;
    this.incremented_points_amount = body.incremented_points_amount;
    this.incremented_points_money_customer_received =
      body.incremented_points_money_customer_received;
    this.incremented_points_is_set_minimum_points =
      body.incremented_points_is_set_minimum_points;
    this.incremented_points_is_set_maximum_points =
      body.incremented_points_is_set_maximum_points;
    this.incremented_points_minimum_points =
      body.incremented_points_minimum_points;
    this.incremented_points_maximum_points =
      body.incremented_points_maximum_points;
    this.is_minimum_cart_requirement = body.is_minimum_cart_requirement;
    this.minimum_cart_value = body.minimum_cart_value;
    this.apply_to = body.apply_to;
    this.collection_id = body.collection_id;
    this.purchase_type = body.purchase_type;
    this.reward_expiry = body.reward_expiry;
    this.products = body.products;
    this.status = body.status;
    this.user_id = userId;
    this.admin_ref = adminRef;
    this.created_by = userId;
  }
}
