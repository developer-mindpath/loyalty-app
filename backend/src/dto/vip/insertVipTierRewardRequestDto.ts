import { InsertVipTierRewardRequest } from "../../types/request/vip/insertVipTierRewardRequest";

export default class InsertVipTierRewardRequestDTO {
  vip_tier_id: number;
  point_redeemed_id: number;
  reward_key: string;
  reward_key_key_display_text: string;
  reward_icon: string;
  reward_description: string;
  is_reward_enabled: string;
  status: string;
  created_by: number;
  admin_ref: number;

  constructor(
    body: InsertVipTierRewardRequest,
    userId: number,
    adminRef: number
  ) {
    this.vip_tier_id = body.vip_tier_id;
    this.point_redeemed_id = body.point_redeemed_id;
    this.reward_key = body.reward_key;
    this.reward_key_key_display_text = body.reward_key_key_display_text;
    this.reward_icon = body.reward_icon;
    this.reward_description = body.reward_description;
    this.is_reward_enabled = body.is_reward_enabled;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.created_by = userId;
  }
}
