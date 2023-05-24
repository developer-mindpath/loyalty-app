import { UpdateResult } from "typeorm";
import UpdatePointEarnDetailRequestDTO from "../dto/updatePointEarnDetailRequestDto";
import PointDetailRepository from "../repository/pointDetailRepository";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import { PointActionDetailsModel } from "../database/models/pointActionDetails";
import InsertPointEarnDetailRequestDTO from "../dto/insertPointEarnDetailRequestDto";

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
    insertPointEarnDetailRequestDTO: InsertPointEarnDetailRequestDTO
  ): Promise<PointActionDetailsModel> {
    return await this._pointDetailRepository.insertEarningDetailsByPointId(
      insertPointEarnDetailRequestDTO
    );
  }

  public async updateEarningDetailsByPointId(
    updatePointEarnDetailRequestDTO: UpdatePointEarnDetailRequestDTO
  ): Promise<UpdateResult> {
    return await this._pointDetailRepository.updateEarningDetailsByPointId(
      updatePointEarnDetailRequestDTO
    );
  }
}
