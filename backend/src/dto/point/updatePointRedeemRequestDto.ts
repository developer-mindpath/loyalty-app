import { UpdatePointRedeemRequest } from "../../types/request/point/updatePointRedeemRequest";

export default class UpdatePointRedeemRequestDTO {
  reward_key: string;
  reward_key_key_display_text: string;
  reward_icon: string;
  reward_description: string;
  is_reward_enabled: number;
  status: string;
  admin_ref: number;
  updated_by: number;
  pointRedeemId: number;

  constructor(
    body: UpdatePointRedeemRequest,
    pointRedeemId: number,
    userId: number,
    adminRef: number
  ) {
    this.reward_key = body.reward_key;
    this.reward_key_key_display_text = body.reward_key_key_display_text;
    this.reward_icon = body.reward_icon;
    this.reward_description = body.reward_description;
    this.is_reward_enabled = body.is_reward_enabled;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.updated_by = userId;
    this.pointRedeemId = pointRedeemId;
  }
}
