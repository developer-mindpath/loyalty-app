import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { VipTierRewardsModel } from "../database/models/vipTierRewards";
import { GetVipTierRewardResponse } from "../types/response/vip/getVipTierRewardResponse";
import InsertVipTierRewardRequestDTO from "../dto/vip/insertVipTierRewardRequestDto";
import UpdateVipTierRewardRequestDTO from "../dto/vip/updateVipTierRewardRequestDto";

export default class VipTierRewardRepository {
  private _vipTierRewardModel: Repository<VipTierRewardsModel>;
  constructor() {
    this._vipTierRewardModel = AppDataSource.getRepository(VipTierRewardsModel);
  }

  public async insertVipTierReward(
    insertVipTierRewardRequestDTO: InsertVipTierRewardRequestDTO
  ): Promise<VipTierRewardsModel> {
    return await this._vipTierRewardModel.save(insertVipTierRewardRequestDTO);
  }

  public async getVipTierReward(
    vipTierRewardId: number
  ): Promise<GetVipTierRewardResponse | null> {
    return await this._vipTierRewardModel.findOne({
      where: { id: vipTierRewardId },
    });
  }

  public async getVipTierRewards(
    vipTierId: number
  ): Promise<GetVipTierRewardResponse[]> {
    return await this._vipTierRewardModel.find({
      where: { vip_tier_id: vipTierId },
    });
  }

  public async updateVipTierReward(
    updateVipTierRewardRequestDTO: UpdateVipTierRewardRequestDTO
  ): Promise<UpdateResult> {
    const id = updateVipTierRewardRequestDTO.vipTierRewardId;
    const data = lodash.omit(updateVipTierRewardRequestDTO, [
      "vipTierRewardId",
    ]);
    return await this._vipTierRewardModel.update({ id }, data);
  }
}
