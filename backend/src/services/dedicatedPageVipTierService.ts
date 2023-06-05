import { UpdateResult } from "typeorm";
import InsertDedicatedPageVipTierRequestDTO from "../dto/dedicatedPage/insertDedicatedPageVipTierRequestDto";
import { OnsiteDedicatedPageVipTierModel } from "../database/models/onsiteDedicatedPageVipTier";
import { GetDedicatedPageVipTierResponse } from "../types/response/dedicatedPage/getDedicatedPageVipTierResponse";
import UpdateDedicatedPageVipTierRequestDTO from "../dto/dedicatedPage/updateDedicatedPageVipTierRequestDto";
import DedicatedPageVipTierRepository from "../repository/dedicatedPageVipTierRepository";

export default class DedicatedPageVipTierService {
  private _dedicatedPageVipTierRepository: DedicatedPageVipTierRepository;
  constructor() {
    this._dedicatedPageVipTierRepository = new DedicatedPageVipTierRepository();
  }

  public async insertDedicatedPageVipTier(
    insertDedicatedPageVipTierRequestDTO: InsertDedicatedPageVipTierRequestDTO
  ): Promise<OnsiteDedicatedPageVipTierModel> {
    return await this._dedicatedPageVipTierRepository.insertDedicatedPageVipTier(
      insertDedicatedPageVipTierRequestDTO
    );
  }

  public async getDedicatedPageVipTier(
    userId: number
  ): Promise<GetDedicatedPageVipTierResponse | null> {
    return await this._dedicatedPageVipTierRepository.getDedicatedPageVipTier(
      userId
    );
  }

  public async updateDedicatedPageVipTier(
    updateDedicatedPageVipTierRequestDTO: UpdateDedicatedPageVipTierRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageVipTierRepository.updateDedicatedPageVipTier(
      updateDedicatedPageVipTierRequestDTO
    );
  }
}
