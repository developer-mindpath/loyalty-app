import { UpdateResult } from "typeorm";
import InsertVipRequestDTO from "../dto/vip/insertVipRequestDto";
import { VipModel } from "../database/models/vip";
import { GetVipResponse } from "../types/response/vip/getVipResponse";
import UpdateVipRequestDTO from "../dto/vip/updateVipRequestDto";
import VipRepository from "../repository/vipRepository";
import InsertVipTierRequestDTO from "../dto/vip/insertVipTierRequestDto";
import { VipTierModel } from "../database/models/vipTier";
import { GetVipTierResponse } from "../types/response/vip/getVipTierResponse";
import UpdateVipTierRequestDTO from "../dto/vip/updateVipTierRequestDto";
import VipTierService from "./vipTierService";
import { GetVipTierRewardResponse } from "../types/response/vip/getVipTierRewardResponse";
import InsertVipTierRewardRequestDTO from "../dto/vip/insertVipTierRewardRequestDto";
import { VipTierRewardsModel } from "../database/models/vipTierRewards";
import UpdateVipTierRewardRequestDTO from "../dto/vip/updateVipTierRewardRequestDto";
import VipTierRewardService from "./vipTierRewardService";
import { GetVipTierBenefitResponse } from "../types/response/vip/getVipTierBenefitResponse";
import InsertVipTierBenefitRequestDTO from "../dto/vip/insertVipTierBenefitRequestDto";
import { VipTierAdditionalBenefitsModel } from "../database/models/vipTierAdditionalBenefits";
import UpdateVipTierBenefitRequestDTO from "../dto/vip/updateVipTierBenefitRequestDto";
import VipTierBenefitService from "./vipTierBenefitService";

export default class VipService {
  private _vipRepository: VipRepository;
  private _vipTierService: VipTierService;
  private _vipTierRewardService: VipTierRewardService;
  private _vipTierBenefitService: VipTierBenefitService;
  constructor() {
    this._vipRepository = new VipRepository();
    this._vipTierService = new VipTierService();
    this._vipTierRewardService = new VipTierRewardService();
    this._vipTierBenefitService = new VipTierBenefitService();
  }

  public async insertVip(
    insertVipRequestDTO: InsertVipRequestDTO
  ): Promise<VipModel> {
    return await this._vipRepository.insertVip(insertVipRequestDTO);
  }

  public async getVip(userId: number): Promise<GetVipResponse> {
    const vipResponse = await this._vipRepository.getVip(userId);
    return vipResponse ? vipResponse : ({} as GetVipResponse);
  }

  public async updateVip(
    updateVipRequestDTO: UpdateVipRequestDTO
  ): Promise<UpdateResult> {
    return await this._vipRepository.updateVip(updateVipRequestDTO);
  }

  public async insertVipTier(
    insertVipTierRequestDTO: InsertVipTierRequestDTO
  ): Promise<VipTierModel> {
    return await this._vipTierService.insertVipTier(insertVipTierRequestDTO);
  }

  public async getVipTier(userId: number): Promise<GetVipTierResponse> {
    const vipResponse = await this._vipTierService.getVipTier(userId);
    return vipResponse ? vipResponse : ({} as GetVipTierResponse);
  }

  public async updateVipTier(
    updateVipTierRequestDTO: UpdateVipTierRequestDTO
  ): Promise<UpdateResult> {
    return await this._vipTierService.updateVipTier(updateVipTierRequestDTO);
  }

  public async getVipTierRewards(
    vipTierId: number
  ): Promise<GetVipTierRewardResponse[]> {
    return await this._vipTierRewardService.getVipTierRewards(vipTierId);
  }

  public async getVipTierReward(
    vipTierRewardId: number
  ): Promise<GetVipTierRewardResponse> {
    const vipResponse = await this._vipTierRewardService.getVipTierReward(
      vipTierRewardId
    );
    return vipResponse ? vipResponse : ({} as GetVipTierRewardResponse);
  }

  public async insertVipTierReward(
    insertVipTierRewardRequestDTO: InsertVipTierRewardRequestDTO
  ): Promise<VipTierRewardsModel> {
    return await this._vipTierRewardService.insertVipTierReward(
      insertVipTierRewardRequestDTO
    );
  }

  public async updateVipTierReward(
    updateVipTierRewardRequestDTO: UpdateVipTierRewardRequestDTO
  ): Promise<UpdateResult> {
    return await this._vipTierRewardService.updateVipTierReward(
      updateVipTierRewardRequestDTO
    );
  }

  public async getVipTierBenefits(
    vipTierId: number
  ): Promise<GetVipTierBenefitResponse[]> {
    return await this._vipTierBenefitService.getVipTierBenefits(vipTierId);
  }

  public async getVipTierBenefit(
    vipTierBenefitId: number
  ): Promise<GetVipTierBenefitResponse> {
    const vipResponse = await this._vipTierBenefitService.getVipTierBenefit(
      vipTierBenefitId
    );
    return vipResponse ? vipResponse : ({} as GetVipTierBenefitResponse);
  }

  public async insertVipTierBenefit(
    insertVipTierBenefitRequestDTO: InsertVipTierBenefitRequestDTO
  ): Promise<VipTierAdditionalBenefitsModel> {
    return await this._vipTierBenefitService.insertVipTierBenefit(
      insertVipTierBenefitRequestDTO
    );
  }

  public async updateVipTierBenefit(
    updateVipTierBenefitRequestDTO: UpdateVipTierBenefitRequestDTO
  ): Promise<UpdateResult> {
    return await this._vipTierBenefitService.updateVipTierBenefit(
      updateVipTierBenefitRequestDTO
    );
  }
}
