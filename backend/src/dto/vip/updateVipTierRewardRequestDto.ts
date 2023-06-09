import { UpdateVipTierRewardRequest } from "../../types/request/vip/updateVipTierRewardRequest";

export default class UpdateVipTierRewardRequestDTO {
  vip_tier_id: number;
  point_redeemed_id: number;
  reward_key: string;
  reward_key_key_display_text: string;
  reward_icon: string;
  reward_description: string;
  is_reward_enabled: string;
  status: string;
  updated_by: number;
  vipTierRewardId: number;

  constructor(
    body: UpdateVipTierRewardRequest,
    vipTierRewardId: number,
    userId: number
  ) {
    this.vip_tier_id = body.vip_tier_id;
    this.point_redeemed_id = body.point_redeemed_id;
    this.reward_key = body.reward_key;
    this.reward_key_key_display_text = body.reward_key_key_display_text;
    this.reward_icon = body.reward_icon;
    this.reward_description = body.reward_description;
    this.is_reward_enabled = body.is_reward_enabled;
    this.status = body.status;
    this.updated_by = userId;
    this.vipTierRewardId = vipTierRewardId;
  }
}
