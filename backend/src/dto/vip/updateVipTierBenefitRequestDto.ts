import { UpdateVipTierBenefitRequest } from "../../types/request/vip/updateVipTierBenefitRequest";

export default class UpdateVipTierBenefitRequestDTO {
  vip_tier_id: number;
  text: string;
  status: string;
  updated_by: number;
  vipTierBenefitId: number;

  constructor(body: UpdateVipTierBenefitRequest, vipTierBenefitId: number) {
    this.vip_tier_id = body.vip_tier_id;
    this.text = body.text;
    this.status = body.status;
    this.updated_by = body.updated_by;
    this.vipTierBenefitId = vipTierBenefitId;
  }
}
