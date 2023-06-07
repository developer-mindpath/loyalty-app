import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import { PointRedeemModel } from "../database/models/pointRedeem";
import InsertPointRedeemRequestDTO from "../dto/point/insertPointRedeemRequestDto";
import UpdatePointRedeemRequestDTO from "../dto/point/updatePointRedeemRequestDto";
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
    const id = updatePointRedeemRequestDTO.pointRedeemId;
    const data = lodash.omit(updatePointRedeemRequestDTO, [
      "user_id",
      "pointRedeemId",
    ]);
    return await this._pointRedeemModel.update({ id }, data);
  }
}
