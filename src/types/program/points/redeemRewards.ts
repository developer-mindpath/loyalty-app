import type { IWithRedeem } from "@/types/program";
import type { IAudit, ITimestamp } from "@/types/api";

export interface IRewardRedeemAction extends IAudit, ITimestamp {
  id: number;
  reward_key: string;
  reward_key_key_display_text: string;
  reward_icon: string;
  reward_description: string;
  is_reward_enabled: number;
  status: string;
  admin_ref: number;
  user_id: number;
}

export interface IRewardRedeem extends IAudit, ITimestamp {
  id: number;
  point_redeem_id: number;
  points_type: string;
  fixed_points_amount: number;
  fixed_points_discount: number;
  fixed_points_discount_type: string;
  apply_to_maximum_shipping_amount: number;
  incremented_points_amount: number;
  incremented_points_money_customer_received: number;
  incremented_points_is_set_minimum_points: number;
  incremented_points_is_set_maximum_points: number;
  incremented_points_minimum_points: number;
  incremented_points_maximum_points: number;
  is_minimum_cart_requirement: number;
  minimum_cart_value: number;
  apply_to: string;
  collection_id: string;
  purchase_type: string;
  reward_expiry: number;
  products: string;
  status: string;
  user_id: number;
  admin_ref: number;
  pointRedeem: IRewardRedeemAction;
}

export interface IRewardRedeemWithAction
  extends IRewardRedeem,
    IWithRedeem<IRewardRedeemAction> {}

// <=====================Requests=====================>

// Add Earn Points
export interface IAddRewardRequest
  extends Partial<IRewardRedeem>,
    Partial<IRewardRedeemAction> {}

// Update Earn Points
export type IUpdateRewardRequest = Partial<IRewardRedeem>;

// <=====================Responses=====================>

export type IGetRedeemRewardResponse = Pick<
  IRewardRedeem,
  "fixed_points_amount"
> &
  IRewardRedeemAction;

// Add Response
export interface IAddRedeemRewardResponse {
  id: string;
}
