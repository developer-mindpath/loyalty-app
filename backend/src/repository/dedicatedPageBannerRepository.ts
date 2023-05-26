import lodash from "lodash";
import { Repository, UpdateResult } from "typeorm";
import AppDataSource from "../database";
import { OnsiteDedicatedPageBannerModel } from "../database/models/onsiteDedicatedPageBanner";
import InsertDedicatedPageBannerRequestDTO from "../dto/insertDedicatedPageBannerRequestDto";
import { GetDedicatedPageBannerResponse } from "../types/response/dedicatedPage/getDedicatedPageBannerResponse";
import UpdateDedicatedPageBannerRequestDTO from "../dto/updateDedicatedPageBannerRequestDto";

export default class DedicatedPageBannerRepository {
  private _dedicatedPageBannerModel: Repository<OnsiteDedicatedPageBannerModel>;
  constructor() {
    this._dedicatedPageBannerModel = AppDataSource.getRepository(
      OnsiteDedicatedPageBannerModel
    );
  }

  public async insertDedicatedPageBanner(
    insertDedicatedPageBannerRequestDTO: InsertDedicatedPageBannerRequestDTO
  ): Promise<OnsiteDedicatedPageBannerModel> {
    return await this._dedicatedPageBannerModel.save(
      insertDedicatedPageBannerRequestDTO
    );
  }

  public async getDedicatedPageBanner(
    userId: number
  ): Promise<GetDedicatedPageBannerResponse | null> {
    return await this._dedicatedPageBannerModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateDedicatedPageBanner(
    updateDedicatedPageBannerRequestDTO: UpdateDedicatedPageBannerRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateDedicatedPageBannerRequestDTO.user_id;
    const data = lodash.omit(updateDedicatedPageBannerRequestDTO, ["user_id"]);
    return await this._dedicatedPageBannerModel.update({ user_id }, data);
  }
}
