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
    // queryBuilder.orderBy('loyalityProgramActivity.activity_date', 'ASC');
    return await queryBuilder.getRawMany();
  }
}
