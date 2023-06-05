import { UpdateResult } from "typeorm";
import InsertDedicatedPageBannerRequestDTO from "../dto/dedicatedPage/insertDedicatedPageBannerRequestDto";
import { OnsiteDedicatedPageBannerModel } from "../database/models/onsiteDedicatedPageBanner";
import DedicatedPageBannerRepository from "../repository/dedicatedPageBannerRepository";
import { GetDedicatedPageBannerResponse } from "../types/response/dedicatedPage/getDedicatedPageBannerResponse";
import UpdateDedicatedPageBannerRequestDTO from "../dto/dedicatedPage/updateDedicatedPageBannerRequestDto";

export default class DedicatedPageBannerService {
  private _dedicatedPageBannerRepository: DedicatedPageBannerRepository;
  constructor() {
    this._dedicatedPageBannerRepository = new DedicatedPageBannerRepository();
  }

  public async insertDedicatedPageBanner(
    insertDedicatedPageBannerRequestDTO: InsertDedicatedPageBannerRequestDTO
  ): Promise<OnsiteDedicatedPageBannerModel> {
    return await this._dedicatedPageBannerRepository.insertDedicatedPageBanner(
      insertDedicatedPageBannerRequestDTO
    );
  }

  public async getDedicatedPageBanner(
    userId: number
  ): Promise<GetDedicatedPageBannerResponse | null> {
    return await this._dedicatedPageBannerRepository.getDedicatedPageBanner(
      userId
    );
  }

  public async updateDedicatedPageBanner(
    updateDedicatedPageBannerRequestDTO: UpdateDedicatedPageBannerRequestDTO
  ): Promise<UpdateResult> {
    return await this._dedicatedPageBannerRepository.updateDedicatedPageBanner(
      updateDedicatedPageBannerRequestDTO
    );
  }
}
