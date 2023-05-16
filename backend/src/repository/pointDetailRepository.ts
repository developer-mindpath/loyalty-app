import { Repository, UpdateResult } from "typeorm";
import AppDataSource from "../database";
import { PointActionDetailsModel } from "../database/models/pointActionDetails";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import UpdatePointEarnDetailRequestDTO from "../dto/updatePointEarnDetailRequestDto";
import { UpdatePointEarnDetailRequest } from "../types/request/point/updatePointEarnDetailRequest";

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
    const pointEarnDetailObj: UpdatePointEarnDetailRequest = {
      app_id: updatePointEarnDetailRequestDTO.app_id,
      status: updatePointEarnDetailRequestDTO.status,
      admin_ref: updatePointEarnDetailRequestDTO.admin_ref,
      updated_by: updatePointEarnDetailRequestDTO.updated_by,
    };
    if (updatePointEarnDetailRequestDTO.points_amounts) {
      pointEarnDetailObj.points_amounts =
        updatePointEarnDetailRequestDTO.points_amounts;
    }
    if (updatePointEarnDetailRequestDTO.limit_count) {
      pointEarnDetailObj.limit_count =
        updatePointEarnDetailRequestDTO.limit_count;
    }
    if (updatePointEarnDetailRequestDTO.limit_count_type) {
      pointEarnDetailObj.limit_count_type =
        updatePointEarnDetailRequestDTO.limit_count_type;
    }
    if (updatePointEarnDetailRequestDTO.url_to_share) {
      pointEarnDetailObj.url_to_share =
        updatePointEarnDetailRequestDTO.url_to_share;
    }
    if (updatePointEarnDetailRequestDTO.earning_method) {
      pointEarnDetailObj.earning_method =
        updatePointEarnDetailRequestDTO.earning_method;
    }
    if (updatePointEarnDetailRequestDTO.limit_count_enabled) {
      pointEarnDetailObj.limit_count_enabled =
        updatePointEarnDetailRequestDTO.limit_count_enabled;
    }
    return await this._pointActionDetailModel.update(
      { point_action_id: updatePointEarnDetailRequestDTO.point_action_id },
      pointEarnDetailObj
    );
  }
}
