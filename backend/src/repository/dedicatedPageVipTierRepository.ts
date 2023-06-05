import lodash from "lodash";
import { Repository, UpdateResult } from "typeorm";
import AppDataSource from "../database";
import { OnsiteDedicatedPageVipTierModel } from "../database/models/onsiteDedicatedPageVipTier";
import InsertDedicatedPageVipTierRequestDTO from "../dto/dedicatedPage/insertDedicatedPageVipTierRequestDto";
import { GetDedicatedPageVipTierResponse } from "../types/response/dedicatedPage/getDedicatedPageVipTierResponse";
import UpdateDedicatedPageVipTierRequestDTO from "../dto/dedicatedPage/updateDedicatedPageVipTierRequestDto";

export default class DedicatedPageVipTierRepository {
  private _dedicatedPageVipTierModel: Repository<OnsiteDedicatedPageVipTierModel>;
  constructor() {
    this._dedicatedPageVipTierModel = AppDataSource.getRepository(
      OnsiteDedicatedPageVipTierModel
    );
  }

  public async insertDedicatedPageVipTier(
    insertDedicatedPageVipTierRequestDTO: InsertDedicatedPageVipTierRequestDTO
  ): Promise<OnsiteDedicatedPageVipTierModel> {
    return await this._dedicatedPageVipTierModel.save(
      insertDedicatedPageVipTierRequestDTO
    );
  }

  public async getDedicatedPageVipTier(
    userId: number
  ): Promise<GetDedicatedPageVipTierResponse | null> {
    return await this._dedicatedPageVipTierModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateDedicatedPageVipTier(
    updateDedicatedPageVipTierRequestDTO: UpdateDedicatedPageVipTierRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateDedicatedPageVipTierRequestDTO.user_id;
    const data = lodash.omit(updateDedicatedPageVipTierRequestDTO, ["user_id"]);
    return await this._dedicatedPageVipTierModel.update({ user_id }, data);
  }
}
