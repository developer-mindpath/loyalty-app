import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { VipTierModel } from "../database/models/vipTier";
import InsertVipTierRequestDTO from "../dto/vip/insertVipTierRequestDto";
import { GetVipTierResponse } from "../types/response/vip/getVipTierResponse";
import UpdateVipTierRequestDTO from "../dto/vip/updateVipTierRequestDto";

export default class VipTierRepository {
  private _vipTierModel: Repository<VipTierModel>;
  constructor() {
    this._vipTierModel = AppDataSource.getRepository(VipTierModel);
  }

  public async insertVipTier(
    insertVipTierRequestDTO: InsertVipTierRequestDTO
  ): Promise<VipTierModel> {
    return await this._vipTierModel.save(insertVipTierRequestDTO);
  }

  public async getVipTier(userId: number): Promise<GetVipTierResponse | null> {
    return await this._vipTierModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateVipTier(
    updateVipTierRequestDTO: UpdateVipTierRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateVipTierRequestDTO.user_id;
    const data = lodash.omit(updateVipTierRequestDTO, ["user_id"]);
    return await this._vipTierModel.update({ user_id }, data);
  }
}
