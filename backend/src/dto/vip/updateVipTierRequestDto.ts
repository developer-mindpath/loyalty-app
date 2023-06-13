import { UpdateVipTierRequest } from "../../types/request/vip/updateVipTierRequest";

export default class UpdateVipTierRequestDTO {
  tier_key: string;
  tier_key_display_text: string;
  tier_key_icon: string;
  tier_key_description: string;
  goals_to_achieve_tier: number;
  status: string;
  updated_by: number;
  vipTierId: number;

  constructor(body: UpdateVipTierRequest, vipTierId: number, userId: number) {
    this.tier_key = body.tier_key;
    this.tier_key_display_text = body.tier_key_display_text;
    this.tier_key_icon = body.tier_key_icon;
    this.tier_key_description = body.tier_key_description;
    this.goals_to_achieve_tier = body.goals_to_achieve_tier;
    this.status = body.status;
    this.vipTierId = vipTierId;
    this.updated_by = userId;
  }
}
