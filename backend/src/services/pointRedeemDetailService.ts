import { DeleteResult, UpdateResult } from "typeorm";
import { PointRedeemDetailModel } from "../database/models/pointRedeemDetail";
import PointRedeemDetailRepository from "../repository/pointRedeemDetailRepository";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";

export default class PointRedeemDetailService {
  private _pointRedeemDetailRepository: PointRedeemDetailRepository;
  constructor() {
    this._pointRedeemDetailRepository = new PointRedeemDetailRepository();
  }

  public async insertRedeemPointDetail(
    insertPointRedeemDetailData: Record<string, string | number>
  ): Promise<PointRedeemDetailModel> {
    return await this._pointRedeemDetailRepository.insertRedeemPointDetail(
      insertPointRedeemDetailData
    );
  }

  public async getPointRedeemDetail(
    pointRedeemId: number,
    userId: number
  ): Promise<GetPointRedeemDetailResponse | null> {
    return await this._pointRedeemDetailRepository.getPointRedeemDetail(
      pointRedeemId,
      userId
    );
  }

  public async updatePointRedeemDetail(
    updatePointRedeemDetailData: Record<string, string | number>,
    pointRedeemId: number
  ): Promise<UpdateResult> {
    return await this._pointRedeemDetailRepository.updatePointRedeemDetail(
      updatePointRedeemDetailData,
      pointRedeemId
    );
  }

  public async deletePointRedeemDetail(
    pointRedeemDetailId: number
  ): Promise<DeleteResult> {
    return await this._pointRedeemDetailRepository.deletePointRedeemDetail(
      pointRedeemDetailId
    );
  }
}
