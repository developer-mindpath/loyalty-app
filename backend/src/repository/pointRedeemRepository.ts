import { Repository } from "typeorm";
import { PointRedeemModel } from "../database/models/pointRedeem";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";
import AppDataSource from "../database";

export default class PointRedeemRepository {
  private _pointRedeemModel: Repository<PointRedeemModel>;
  constructor() {
    this._pointRedeemModel = AppDataSource.getRepository(PointRedeemModel);
  }

  public async insertRedeemingPoint(
    insertPointRedeemData: Record<string, string | number>
  ): Promise<PointRedeemModel> {
    return await this._pointRedeemModel.save(insertPointRedeemData);
  }

  public async getPointRedeem(
    userId: number
  ): Promise<GetPointRedeemResponse[]> {
    const queryBuilder = this._pointRedeemModel
      .createQueryBuilder("pointRedeem")
      .innerJoinAndSelect(`pointRedeem.pointRedeemDetail`, "pointRedeemDetail")
      .select([
        "pointRedeem.*",
        "pointRedeemDetail.fixed_points_amount as fixed_points_amount",
      ]);
    queryBuilder.where(`pointRedeem.user_id=${userId}`);
    queryBuilder.orderBy("pointRedeem.created_at", "DESC");
    return await queryBuilder.getRawMany();
  }
}
