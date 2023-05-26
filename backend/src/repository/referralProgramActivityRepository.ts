import { Repository } from "typeorm";
import PaginationDTO from "../dto/paginationDTO";
import { GetReferralProgramActivityResponse } from "../types/response/activity/getReferralProgramActivityResponse";
import AppDataSource from "../database";
import { ReferralProgramActivityModel } from "../database/models/referralProgramActivity";

export default class ReferralProgramActivityRepository {
  private _referralProgramActivityModel: Repository<ReferralProgramActivityModel>;
  constructor() {
    this._referralProgramActivityModel = AppDataSource.getRepository(
      ReferralProgramActivityModel
    );
  }

  public async getReferralProgramActivity(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<GetReferralProgramActivityResponse[]> {
    const queryBuilder = this._referralProgramActivityModel
      .createQueryBuilder("referralProgramActivity")
      .leftJoinAndSelect(`referralProgramActivity.customer`, "customer")
      .leftJoinAndSelect(
        `referralProgramActivity.referralModel`,
        "referralModel"
      )
      .select([
        "referralProgramActivity.customer_id as customerId",
        "referralProgramActivity.id as referralProgramId",
        "referralProgramActivity.referral_id as referralId",
        "referralModel.referral_friend_title as ReferredFriend",
        "referralProgramActivity.claim_status as status",
        "referralModel.referral_customer_points_amount as orderAmount",
        "referralProgramActivity.referred_date as referredAt",
      ]);
    queryBuilder.where(`referralProgramActivity.user_id=${userId}`);

    if (paginationDTO.page && paginationDTO.limit) {
      const offset: number = paginationDTO.offset;
      queryBuilder.skip(offset).take(paginationDTO.limit);
    }
    // queryBuilder.orderBy('loyalityProgramActivity.activity_date', 'ASC');
    return await queryBuilder.getRawMany();
  }
}
