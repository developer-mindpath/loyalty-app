import { UpdateResult } from "typeorm";
import { GetVipTierBenefitResponse } from "../types/response/vip/getVipTierBenefitResponse";
import InsertVipTierBenefitRequestDTO from "../dto/vip/insertVipTierBenefitRequestDto";
import { VipTierAdditionalBenefitsModel } from "../database/models/vipTierAdditionalBenefits";
import VipTierBenefitRepository from "../repository/vipTierBenefitRepository";
import UpdateVipTierBenefitRequestDTO from "../dto/vip/updateVipTierBenefitRequestDto";

export default class VipTierBenefitService {
  private _vipTierBenefitRepository: VipTierBenefitRepository;
  constructor() {
    this._vipTierBenefitRepository = new VipTierBenefitRepository();
  }

  public async insertVipTierBenefit(
    insertVipTierBenefitRequestDTO: InsertVipTierBenefitRequestDTO
  ): Promise<VipTierAdditionalBenefitsModel> {
    return await this._vipTierBenefitRepository.insertVipTierBenefit(
      insertVipTierBenefitRequestDTO
    );
  }

  public async getVipTierBenefit(
    vipTierBenefitId: number
  ): Promise<GetVipTierBenefitResponse> {
    const vipResponse = await this._vipTierBenefitRepository.getVipTierBenefit(
      vipTierBenefitId
    );
    return vipResponse ? vipResponse : ({} as GetVipTierBenefitResponse);
  }

  public async getVipTierBenefits(
    vipTierId: number
  ): Promise<GetVipTierBenefitResponse[]> {
    return await this._vipTierBenefitRepository.getVipTierBenefits(vipTierId);
  }

  public async updateVipTierBenefit(
    updateVipTierBenefitRequestDTO: UpdateVipTierBenefitRequestDTO
  ): Promise<UpdateResult> {
    return await this._vipTierBenefitRepository.updateVipTierBenefit(
      updateVipTierBenefitRequestDTO
    );
  }
}
