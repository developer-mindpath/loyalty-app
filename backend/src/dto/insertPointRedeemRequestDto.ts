import { InsertPointRedeemRequest } from "../types/request/point/insertPointRedeemRequest";

export default class InsertPointRedeemRequestDTO {
  reward_key: string;
  reward_key_key_display_text: string;
  reward_icon: string;
  reward_description: string;
  is_reward_enabled: number;
  status: string;
  user_id: number;
  admin_ref: number;
  created_by: number;

  constructor(body: InsertPointRedeemRequest) {
    this.reward_key = body.reward_key;
    this.reward_key_key_display_text = body.reward_key_key_display_text;
    this.reward_icon = body.reward_icon;
    this.reward_description = body.reward_description;
    this.is_reward_enabled = body.is_reward_enabled;
    this.status = body.status;
    this.user_id = body.user_id;
    this.admin_ref = body.admin_ref;
    this.created_by = body.created_by;
  }
}
