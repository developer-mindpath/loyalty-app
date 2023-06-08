import { InsertVipTierBenefitRequest } from "../../types/request/vip/insertVipTierBenefitRequest";

export default class InsertVipTierBenefitRequestDTO {
  vip_tier_id: number;
  text: string;
  status: string;
  created_by: number;
  admin_ref: number;

  constructor(
    body: InsertVipTierBenefitRequest,
    userId: number,
    adminRef: number
  ) {
    this.vip_tier_id = body.vip_tier_id;
    this.text = body.text;
    this.status = body.status;
    this.admin_ref = adminRef;
    this.created_by = userId;
  }
}
