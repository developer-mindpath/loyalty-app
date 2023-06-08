import { UpdateVipTierBenefitRequest } from "../../types/request/vip/updateVipTierBenefitRequest";

export default class UpdateVipTierBenefitRequestDTO {
  text: string;
  status: string;
  updated_by: number;
  vipTierBenefitId: number;

  constructor(
    body: UpdateVipTierBenefitRequest,
    vipTierBenefitId: number,
    userId: number
  ) {
    this.text = body.text;
    this.status = body.status;
    this.updated_by = userId;
    this.vipTierBenefitId = vipTierBenefitId;
  }
}
