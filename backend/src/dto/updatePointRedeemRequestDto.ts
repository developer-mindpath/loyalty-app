import { UpdateRedeemPointsParams } from "../types/request/params";
import { UpdatePointRedeemRequest } from "../types/request/point/updatePointRedeemRequest";

export default class UpdatePointRedeemRequestDTO {
  reward_key_key_display_text: string;
  reward_icon: string;
  reward_description: string;
  is_reward_enabled: number;
  status: string;
  admin_ref: number;
  updated_by: number;
  user_id: number;
  reward_key: string;

  constructor(
    body: UpdatePointRedeemRequest,
    params: UpdateRedeemPointsParams
  ) {
    this.reward_key_key_display_text = body.reward_key_key_display_text;
    this.reward_icon = body.reward_icon;
    this.reward_description = body.reward_description;
    this.is_reward_enabled = body.is_reward_enabled;
    this.status = body.status;
    this.admin_ref = body.admin_ref;
    this.updated_by = body.updated_by;
    this.user_id = params.userId;
    this.reward_key = params.rewardKey;
  }
}
