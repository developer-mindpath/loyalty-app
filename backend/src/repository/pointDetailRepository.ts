import { Repository, UpdateResult } from "typeorm";
import AppDataSource from "../database";
import { PointActionDetailsModel } from "../database/models/pointActionDetails";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";

export default class PointDetailRepository {
  private _pointActionDetailModel: Repository<PointActionDetailsModel>;
  constructor() {
    this._pointActionDetailModel = AppDataSource.getRepository(
      PointActionDetailsModel
    );
  }

  public async getEarningDetailsByPointId(
    pointId: number
  ): Promise<GetPointEarnDetailResponse | null> {
    return await this._pointActionDetailModel.findOne({
      where: { point_action_id: pointId },
      relations: ["pointAction"],
    });
  }

  public async insertEarningDetailsByPointId(
    insertPointActionDetailData: Record<string, string | number>
  ): Promise<PointActionDetailsModel> {
    return await this._pointActionDetailModel.save(insertPointActionDetailData);
  }

  public async updateEarningDetailsByPointId(
    updatePointActionDetailData: Record<string, string | number>,
    point_action_id: number
  ): Promise<UpdateResult> {
    return await this._pointActionDetailModel.update(
      { point_action_id },
      updatePointActionDetailData
    );
  }
}
