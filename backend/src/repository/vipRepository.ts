import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { VipModel } from "../database/models/vip";
import InsertVipRequestDTO from "../dto/vip/insertVipRequestDto";
import { GetVipResponse } from "../types/response/vip/getVipResponse";
import UpdateVipRequestDTO from "../dto/vip/updateVipRequestDto";

export default class VipRepository {
  private _vipModel: Repository<VipModel>;
  constructor() {
    this._vipModel = AppDataSource.getRepository(VipModel);
  }

  public async insertVip(
    insertVipRequestDTO: InsertVipRequestDTO
  ): Promise<VipModel> {
    return await this._vipModel.save(insertVipRequestDTO);
  }

  public async getVip(userId: number): Promise<GetVipResponse | null> {
    return await this._vipModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateVip(
    updateVipRequestDTO: UpdateVipRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateVipRequestDTO.user_id;
    const data = lodash.omit(updateVipRequestDTO, ["user_id"]);
    return await this._vipModel.update({ user_id }, data);
  }
}
