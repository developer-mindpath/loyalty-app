import { Repository, UpdateResult } from "typeorm";
import { EarningPointsWithDate } from "../types/response/analytics/getAnalyticsResponse";
import AppDataSource from "../database";
import { PointActionModel } from "../database/models/pointAction";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";
import GetAnalyticsDTO from "../dto/analytics/getAnalyticsDTO";
import UpdatePointEarnPositionRequestDTO from "../dto/point/updatePointEarnPositionRequestDto";

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

  public async updateEarningPoint(
    updatePointActionData: Record<string, string | number>,
    point_action_id: number
  ): Promise<UpdateResult> {
    return await this._pointActionModel.update(
      { id: point_action_id },
      updatePointActionData
    );
  }

  public async getEarningPoints(
    getAnalyticsDTO: GetAnalyticsDTO
  ): Promise<Record<string, number> | undefined> {
    const queryBuilder = this._pointActionModel
      .createQueryBuilder("pointAction")
      .innerJoinAndSelect(`pointAction.pointActionDetail`, "pointActionDetail")
      .select(["SUM(pointActionDetail.points_amounts) as points_amounts"]);
    queryBuilder.where(`pointAction.user_id=${getAnalyticsDTO.user_id}`);
    queryBuilder.andWhere(
      "Date(pointActionDetail.created_at) BETWEEN :startDate AND :endDate",
      {
        startDate: getAnalyticsDTO.periodDTO.startDate,
        endDate: getAnalyticsDTO.periodDTO.endDate,
      }
    );
    return await queryBuilder.getRawOne();
  }

  public async getEarningPointsWithDate(
    getAnalyticsDTO: GetAnalyticsDTO
  ): Promise<Array<EarningPointsWithDate>> {
    const queryBuilder = this._pointActionModel
      .createQueryBuilder("pointAction")
      .innerJoinAndSelect(`pointAction.pointActionDetail`, "pointActionDetail")
      .select([
        "SUM(pointActionDetail.points_amounts) as points",
        "Date(pointActionDetail.created_at) as date",
      ]);
    queryBuilder.where(`pointAction.user_id=${getAnalyticsDTO.user_id}`);
    queryBuilder.andWhere(
      "Date(pointActionDetail.created_at) BETWEEN :startDate AND :endDate",
      {
        startDate: getAnalyticsDTO.periodDTO.startDate,
        endDate: getAnalyticsDTO.periodDTO.endDate,
      }
    );
    queryBuilder.groupBy(`Date(pointActionDetail.created_at)`);
    return await queryBuilder.getRawMany();
  }

  public async updatePosition(
    updatePointEarnPositionRequestDTO: UpdatePointEarnPositionRequestDTO
  ): Promise<UpdateResult> {
    let dragUpAndDown = "";
    if (
      updatePointEarnPositionRequestDTO.oldPosition >
      updatePointEarnPositionRequestDTO.newPosition
    ) {
      dragUpAndDown = `CASE
      WHEN "action_visible_order" = ${updatePointEarnPositionRequestDTO.oldPosition} THEN ${updatePointEarnPositionRequestDTO.newPosition}
      WHEN "action_visible_order" >= ${updatePointEarnPositionRequestDTO.newPosition} and "action_visible_order" < ${updatePointEarnPositionRequestDTO.oldPosition} THEN "action_visible_order" + 1
      ELSE "action_visible_order"
    END`;
    } else {
      dragUpAndDown = `CASE
      WHEN "action_visible_order" = ${updatePointEarnPositionRequestDTO.oldPosition} THEN ${updatePointEarnPositionRequestDTO.newPosition}
      WHEN "action_visible_order" <= ${updatePointEarnPositionRequestDTO.newPosition} and "action_visible_order" > ${updatePointEarnPositionRequestDTO.oldPosition} THEN "action_visible_order" - 1
      ELSE "action_visible_order"
    END`;
    }
    return this._pointActionModel
      .createQueryBuilder()
      .update()
      .set({
        action_visible_order: () => `${dragUpAndDown}`,
      })
      .where(`user_id=${updatePointEarnPositionRequestDTO.userId}`)
      .execute();
  }
}
