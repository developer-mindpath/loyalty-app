import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { PointActionDetailsModel } from "../database/models/pointActionDetails";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import UpdatePointEarnDetailRequestDTO from "../dto/updatePointEarnDetailRequestDto";

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
    });
  }

  public async updateEarningDetailsByPointId(
    updatePointEarnDetailRequestDTO: UpdatePointEarnDetailRequestDTO
  ): Promise<UpdateResult> {
    const point_action_id = updatePointEarnDetailRequestDTO.point_action_id;
    lodash.omit(updatePointEarnDetailRequestDTO, ["point_action_id"]);
    return await this._pointActionDetailModel.update(
      { point_action_id },
      updatePointEarnDetailRequestDTO
    );
  }
}
