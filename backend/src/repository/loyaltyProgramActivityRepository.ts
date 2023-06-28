import { Repository } from "typeorm";
import { GetLoyaltyProgramActivityResponse } from "../types/response/activity/getLoyaltyProgramActivityResponse";
import AppDataSource from "../database";
import { LoyalityProgramActivityModel } from "../database/models/loyalityProgramActivity";
import PaginationDTO from "../dto/paginationDTO";

export default class LoyaltyProgramActivityRepository {
  private _loyalityProgramActivityModel: Repository<LoyalityProgramActivityModel>;
  constructor() {
    this._loyalityProgramActivityModel = AppDataSource.getRepository(
      LoyalityProgramActivityModel
    );
  }

  public async getLoyaltyProgramActivity(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<GetLoyaltyProgramActivityResponse[]> {
    const queryBuilder = this._loyalityProgramActivityModel
      .createQueryBuilder("loyalityProgramActivity")
      .leftJoinAndSelect(`loyalityProgramActivity.customer`, "customer")
      .select([
        "loyalityProgramActivity.customer_id as customerId",
        "loyalityProgramActivity.id as loyaltyProgramId",
        "customer.customer_name as customerName",
        "loyalityProgramActivity.point_action as pointAction",
        "loyalityProgramActivity.point as points",
        "loyalityProgramActivity.activity_date as occurredAt",
      ]);
    queryBuilder.where(`loyalityProgramActivity.user_id=${userId}`);

    if (paginationDTO.page && paginationDTO.limit) {
      const offset: number = paginationDTO.offset;
      queryBuilder.skip(offset).take(paginationDTO.limit);
    }
    return await queryBuilder.getRawMany();
  }

  public async getCustomerPointDetails(
    customerId: number
  ): Promise<Array<Record<string, string | number>>> {
    const queryBuilder = this._loyalityProgramActivityModel
      .createQueryBuilder("loyalityProgramActivity")
      .innerJoinAndSelect(`loyalityProgramActivity.pointAction`, "pointAction")
      .innerJoinAndSelect(`pointAction.pointActionDetail`, "pointActionDetail")
      .select([
        "pointActionDetail.points_amounts as points",
        "pointAction.action_key_display_text as action",
        "pointAction.created_at as date",
      ]);
    queryBuilder.where(`loyalityProgramActivity.customer_id=${customerId}`);
    queryBuilder.orderBy("pointAction.created_at", "DESC");
    return await queryBuilder.getRawMany();
  }
}
