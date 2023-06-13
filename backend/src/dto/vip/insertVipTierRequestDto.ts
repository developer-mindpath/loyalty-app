import { InsertVipTierRequest } from "../../types/request/vip/insertVipTierRequest";

export default class InsertVipTierRequestDTO {
  tier_key: string;
  tier_key_display_text: string;
  tier_key_icon: string;
  tier_key_description: string;
  goals_to_achieve_tier: number;
  status: string;
  created_by: number;
  user_id: number;
  admin_ref: number;

  constructor(body: InsertVipTierRequest, userId: number, adminRef: number) {
    this.tier_key = body.tier_key;
    this.tier_key_display_text = body.tier_key_display_text;
    this.tier_key_icon = body.tier_key_icon;
    this.tier_key_description = body.tier_key_description;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.user_id = userId;
    this.created_by = userId;
  }
}
