import { Repository } from "typeorm";
import PaginationDTO from "../dto/paginationDTO";
import { GetVipProgramActivityResponse } from "../types/response/activity/getVipProgramActivityResponse";
import AppDataSource from "../database";
import { VipProgramActivityModel } from "../database/models/vipProgramActivity";

export default class VipProgramActivityRepository {
  private _vipProgramActivityModel: Repository<VipProgramActivityModel>;
  constructor() {
    this._vipProgramActivityModel = AppDataSource.getRepository(
      VipProgramActivityModel
    );
  }
  customerId: number;
  vipProgramId: number;
  vipTierId: number;
  customerName: string;
  achievedTier: string;
  detail: string;
  achievedAt: Date;
  public async getVipProgramActivity(
    userId: number,
    paginationDTO: PaginationDTO
  ): Promise<GetVipProgramActivityResponse[]> {
    const queryBuilder = this._vipProgramActivityModel
      .createQueryBuilder("vipProgramActivity")
      .leftJoinAndSelect(`vipProgramActivity.customer`, "customer")
      .leftJoinAndSelect(`vipProgramActivity.vipTier`, "vipTier")
      .select([
        "vipProgramActivity.customer_id as customerId",
        "vipProgramActivity.id as vipProgramId",
        "vipProgramActivity.vip_tier_id as vipTierId",
        "customer.customer_name as customerName",
        "vipTier.tier_key_display_text as achievedTier",
        "vipTier.tier_key_description as detail",
        "vipProgramActivity.achieved_date as achievedAt",
      ]);
    queryBuilder.where(`vipProgramActivity.user_id=${userId}`);

    if (paginationDTO.page && paginationDTO.limit) {
      const offset: number = paginationDTO.offset;
      queryBuilder.skip(offset).take(paginationDTO.limit);
    }
    return await queryBuilder.getRawMany();
  }

  public async getVipDetail(
    customerId: number
  ): Promise<Array<VipProgramActivityModel>> {
    return await this._vipProgramActivityModel.find({
      where: {
        customer_id: customerId,
      },
    });
  }
}
