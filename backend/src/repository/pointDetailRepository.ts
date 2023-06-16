import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { PointActionDetailsModel } from "../database/models/pointActionDetails";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import UpdatePointEarnDetailRequestDTO from "../dto/point/updatePointEarnDetailRequestDto";

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
    updatePointEarnDetailRequestDTO: UpdatePointEarnDetailRequestDTO
  ): Promise<UpdateResult> {
    const point_action_id = updatePointEarnDetailRequestDTO.point_action_id;
    const data = lodash.omit(updatePointEarnDetailRequestDTO, [
      "point_action_id",
    ]);
    return await this._pointActionDetailModel.update({ point_action_id }, data);
  }
}
