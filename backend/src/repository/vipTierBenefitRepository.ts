import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { VipTierAdditionalBenefitsModel } from "../database/models/vipTierAdditionalBenefits";
import { GetVipTierBenefitResponse } from "../types/response/vip/getVipTierBenefitResponse";
import InsertVipTierBenefitRequestDTO from "../dto/vip/insertVipTierBenefitRequestDto";
import UpdateVipTierBenefitRequestDTO from "../dto/vip/updateVipTierBenefitRequestDto";

export default class VipTierBenefitRepository {
  private _vipTierBenefitModel: Repository<VipTierAdditionalBenefitsModel>;
  constructor() {
    this._vipTierBenefitModel = AppDataSource.getRepository(
      VipTierAdditionalBenefitsModel
    );
  }

  public async insertVipTierBenefit(
    insertVipTierBenefitRequestDTO: InsertVipTierBenefitRequestDTO
  ): Promise<VipTierAdditionalBenefitsModel> {
    return await this._vipTierBenefitModel.save(insertVipTierBenefitRequestDTO);
  }

  public async getVipTierBenefit(
    vipTierBenefitId: number
  ): Promise<GetVipTierBenefitResponse | null> {
    return await this._vipTierBenefitModel.findOne({
      where: { id: vipTierBenefitId },
    });
  }

  public async getVipTierBenefits(
    vipTierId: number
  ): Promise<GetVipTierBenefitResponse[]> {
    return await this._vipTierBenefitModel.find({
      where: { vip_tier_id: vipTierId },
    });
  }

  public async updateVipTierBenefit(
    updateVipTierBenefitRequestDTO: UpdateVipTierBenefitRequestDTO
  ): Promise<UpdateResult> {
    const id = updateVipTierBenefitRequestDTO.vipTierBenefitId;
    const data = lodash.omit(updateVipTierBenefitRequestDTO, [
      "vipTierBenefitId",
    ]);
    return await this._vipTierBenefitModel.update({ id }, data);
  }
}
