import { Repository, UpdateResult } from "typeorm";
import { PointRedeemModel } from "../database/models/pointRedeem";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";
import AppDataSource from "../database";
import { SpentPointsWithDate } from "../types/response/analytics/getAnalyticsResponse";
import GetAnalyticsDTO from "../dto/analytics/getAnalyticsDTO";

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

  public async updateRedeemPoint(
    updatePointRedeemData: Record<string, string | number>,
    pointRedeemId: number
  ): Promise<UpdateResult> {
    return await this._pointRedeemModel.update(
      { id: pointRedeemId },
      updatePointRedeemData
    );
  }

  public async getSpentPoints(
    getAnalyticsDTO: GetAnalyticsDTO
  ): Promise<Record<string, number> | undefined> {
    const queryBuilder = this._pointRedeemModel
      .createQueryBuilder("pointRedeem")
      .innerJoinAndSelect(`pointRedeem.pointRedeemDetail`, "pointRedeemDetail")
      .select(["SUM(pointRedeemDetail.fixed_points_amount) as spent_amount"]);
    queryBuilder.where(`pointRedeem.user_id=${getAnalyticsDTO.user_id}`);
    queryBuilder.andWhere(
      "Date(pointRedeemDetail.created_at) BETWEEN :startDate AND :endDate",
      {
        startDate: getAnalyticsDTO.periodDTO.startDate,
        endDate: getAnalyticsDTO.periodDTO.endDate,
      }
    );
    return await queryBuilder.getRawOne();
  }

  public async getSpentPointsWithDate(
    getAnalyticsDTO: GetAnalyticsDTO
  ): Promise<Array<SpentPointsWithDate>> {
    const queryBuilder = this._pointRedeemModel
      .createQueryBuilder("pointRedeem")
      .innerJoinAndSelect(`pointRedeem.pointRedeemDetail`, "pointRedeemDetail")
      .select([
        "SUM(pointRedeemDetail.fixed_points_amount) as points",
        "Date(pointRedeemDetail.created_at) as date",
      ]);
    queryBuilder.where(`pointRedeem.user_id=${getAnalyticsDTO.user_id}`);
    queryBuilder.andWhere(
      "Date(pointRedeemDetail.created_at) BETWEEN :startDate AND :endDate",
      {
        startDate: getAnalyticsDTO.periodDTO.startDate,
        endDate: getAnalyticsDTO.periodDTO.endDate,
      }
    );
    queryBuilder.groupBy(`Date(pointRedeemDetail.created_at)`);
    return await queryBuilder.getRawMany();
  }
}
