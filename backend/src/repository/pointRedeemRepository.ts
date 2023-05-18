import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import { PointRedeemModel } from "../database/models/pointRedeem";
import InsertPointRedeemRequestDTO from "../dto/insertPointRedeemRequestDto";
import UpdatePointRedeemRequestDTO from "../dto/updatePointRedeemRequestDto";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";
import AppDataSource from "../database";

export default class PointRedeemRepository {
  private _pointRedeemModel: Repository<PointRedeemModel>;
  constructor() {
    this._pointRedeemModel = AppDataSource.getRepository(PointRedeemModel);
  }

  public async insertRedeemingPoint(
    insertPointRedeemRequestDTO: InsertPointRedeemRequestDTO
  ): Promise<PointRedeemModel> {
    return await this._pointRedeemModel.save(insertPointRedeemRequestDTO);
  }

  public async getPointRedeem(
    userId: number
  ): Promise<GetPointRedeemResponse[]> {
    return await this._pointRedeemModel.find({ where: { user_id: userId } });
  }

  public async updatePointRedeem(
    updatePointRedeemRequestDTO: UpdatePointRedeemRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updatePointRedeemRequestDTO.user_id;
    const reward_key = updatePointRedeemRequestDTO.reward_key;
    lodash.omit(updatePointRedeemRequestDTO, ["user_id", "reward_key"]);
    return await this._pointRedeemModel.update(
      { user_id, reward_key },
      updatePointRedeemRequestDTO
    );
  }
}
