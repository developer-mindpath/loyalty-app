import { UpdateResult } from "typeorm";
import InsertVipTierRequestDTO from "../dto/vip/insertVipTierRequestDto";
import { VipTierModel } from "../database/models/vipTier";
import { GetVipTierResponse } from "../types/response/vip/getVipTierResponse";
import UpdateVipTierRequestDTO from "../dto/vip/updateVipTierRequestDto";
import VipTierRepository from "../repository/vipTierRepository";

export default class VipTierService {
  private _vipTierRepository: VipTierRepository;
  constructor() {
    this._vipTierRepository = new VipTierRepository();
  }

  public async insertVipTier(
    insertVipTierRequestDTO: InsertVipTierRequestDTO
  ): Promise<VipTierModel> {
    return await this._vipTierRepository.insertVipTier(insertVipTierRequestDTO);
  }

  public async getVipTier(userId: number): Promise<GetVipTierResponse> {
    const vipResponse = await this._vipTierRepository.getVipTier(userId);
    return vipResponse ? vipResponse : ({} as GetVipTierResponse);
  }

  public async updateVipTier(
    updateVipTierRequestDTO: UpdateVipTierRequestDTO
  ): Promise<UpdateResult> {
    return await this._vipTierRepository.updateVipTier(updateVipTierRequestDTO);
  }
}
