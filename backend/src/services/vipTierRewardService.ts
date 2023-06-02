import { UpdateResult } from "typeorm";
import { GetVipTierRewardResponse } from "../types/response/vip/getVipTierRewardResponse";
import InsertVipTierRewardRequestDTO from "../dto/vip/insertVipTierRewardRequestDto";
import { VipTierRewardsModel } from "../database/models/vipTierRewards";
import VipTierRewardRepository from "../repository/vipTierRewardRepository";
import UpdateVipTierRewardRequestDTO from "../dto/vip/updateVipTierRewardRequestDto";

export default class VipTierRewardService {
  private _vipTierRewardRepository: VipTierRewardRepository;
  constructor() {
    this._vipTierRewardRepository = new VipTierRewardRepository();
  }

  public async insertVipTierReward(
    insertVipTierRewardRequestDTO: InsertVipTierRewardRequestDTO
  ): Promise<VipTierRewardsModel> {
    return await this._vipTierRewardRepository.insertVipTierReward(
      insertVipTierRewardRequestDTO
    );
  }

  public async getVipTierReward(
    vipTierRewardId: number
  ): Promise<GetVipTierRewardResponse> {
    const vipResponse = await this._vipTierRewardRepository.getVipTierReward(
      vipTierRewardId
    );
    return vipResponse ? vipResponse : ({} as GetVipTierRewardResponse);
  }

  public async getVipTierRewards(
    vipTierId: number
  ): Promise<GetVipTierRewardResponse[]> {
    return await this._vipTierRewardRepository.getVipTierRewards(vipTierId);
  }

  public async updateVipTierReward(
    updateVipTierRewardRequestDTO: UpdateVipTierRewardRequestDTO
  ): Promise<UpdateResult> {
    return await this._vipTierRewardRepository.updateVipTierReward(
      updateVipTierRewardRequestDTO
    );
  }
}
