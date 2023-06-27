import { UpdateResult } from "typeorm";
import { SpentPointsWithDate } from "../types/response/analytics/getAnalyticsResponse";
import { PointRedeemModel } from "../database/models/pointRedeem";
import PointRedeemRepository from "../repository/pointRedeemRepository";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";
import GetAnalyticsDTO from "../dto/analytics/getAnalyticsDTO";

export default class PointRedeemService {
  private _pointRedeemRepository: PointRedeemRepository;
  constructor() {
    this._pointRedeemRepository = new PointRedeemRepository();
  }

  public async insertRedeemingPoint(
    insertPointRedeemData: Record<string, string | number>
  ): Promise<PointRedeemModel> {
    return await this._pointRedeemRepository.insertRedeemingPoint(
      insertPointRedeemData
    );
  }

  public async getPointRedeem(
    userId: number
  ): Promise<GetPointRedeemResponse[]> {
    return await this._pointRedeemRepository.getPointRedeem(userId);
  }

  public async updateRedeemPoint(
    updatePointRedeemData: Record<string, string | number>,
    pointRedeemId: number
  ): Promise<UpdateResult> {
    return await this._pointRedeemRepository.updateRedeemPoint(
      updatePointRedeemData,
      pointRedeemId
    );
  }

  public async getSpentPoints(
    getAnalyticsDTO: GetAnalyticsDTO
  ): Promise<Record<string, number> | undefined> {
    return await this._pointRedeemRepository.getSpentPoints(getAnalyticsDTO);
  }

  public async getSpentPointsWithDate(
    getAnalyticsDTO: GetAnalyticsDTO
  ): Promise<Array<SpentPointsWithDate>> {
    return await this._pointRedeemRepository.getSpentPointsWithDate(
      getAnalyticsDTO
    );
  }
}
