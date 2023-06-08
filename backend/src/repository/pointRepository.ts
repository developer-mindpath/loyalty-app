import { Repository } from "typeorm";
import AppDataSource from "../database";
import { PointActionModel } from "../database/models/pointAction";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";

export default class PointRepository {
  private _pointActionModel: Repository<PointActionModel>;
  constructor() {
    this._pointActionModel = AppDataSource.getRepository(PointActionModel);
  }

  public async insertEarningPoint(
    insertPointActionData: Record<string, string | number>
  ): Promise<PointActionModel> {
    return await this._pointActionModel.save(insertPointActionData);
  }

  public async getAllEarningPoints(
    userId: number
  ): Promise<GetPointEarnResponse[]> {
    const queryBuilder = this._pointActionModel
      .createQueryBuilder("pointAction")
      .innerJoinAndSelect(`pointAction.pointActionDetail`, "pointActionDetail")
      .select([
        "pointAction.*",
        "pointActionDetail.points_amounts as points_amounts",
      ]);
    queryBuilder.where(`pointAction.user_id=${userId}`);
    queryBuilder.orderBy("pointAction.created_at", "DESC");
    return await queryBuilder.getRawMany();
  }
}
