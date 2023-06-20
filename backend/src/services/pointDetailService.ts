import { UpdateResult } from "typeorm";
import PointDetailRepository from "../repository/pointDetailRepository";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import { PointActionDetailsModel } from "../database/models/pointActionDetails";

export default class PointDetailService {
  private _pointDetailRepository: PointDetailRepository;
  constructor() {
    this._pointDetailRepository = new PointDetailRepository();
  }

  public async getEarningDetailsByPointId(
    pointId: number
  ): Promise<GetPointEarnDetailResponse | null> {
    return await this._pointDetailRepository.getEarningDetailsByPointId(
      pointId
    );
  }

  public async insertEarningDetailsByPointId(
    insertPointActionDetailData: Record<string, string | number>
  ): Promise<PointActionDetailsModel> {
    return await this._pointDetailRepository.insertEarningDetailsByPointId(
      insertPointActionDetailData
    );
  }

  public async updateEarningDetailsByPointId(
    updatePointActionDetailData: Record<string, string | number>,
    point_action_id: number
  ): Promise<UpdateResult> {
    return await this._pointDetailRepository.updateEarningDetailsByPointId(
      updatePointActionDetailData,
      point_action_id
    );
  }
}
