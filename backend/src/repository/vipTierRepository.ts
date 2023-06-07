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

  public async getVipTiers(userId: number): Promise<Array<GetVipTierResponse>> {
    return await this._vipTierModel.find({
      where: { user_id: userId },
    });
  }

  public async getVipTier(
    vipTierId: number
  ): Promise<GetVipTierResponse | null> {
    return await this._vipTierModel.findOne({
      where: { id: vipTierId },
    });
  }

  public async updateVipTier(
    updateVipTierRequestDTO: UpdateVipTierRequestDTO
  ): Promise<UpdateResult> {
    const id = updateVipTierRequestDTO.vipTierId;
    const data = lodash.omit(updateVipTierRequestDTO, ["vipTierId"]);
    return await this._vipTierModel.update({ id }, data);
  }
}
