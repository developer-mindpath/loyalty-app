import { ReferralModel } from "../database/models/referral";
import { Repository } from "typeorm";
import AppDataSource from "../database";

export default class ReferralService {
  private _referralRepository: Repository<ReferralModel>;

  constructor() {
    this._referralRepository = AppDataSource.getRepository(ReferralModel);
  }

  public async getReferral(id: number) {
    return await this._referralRepository.findOne({
      select: [
        "id",
        "enable",
        "points_amount",
        "points_limit",
        "selected_option",
        "review_app",
        "limit_count_enabled",
      ],
      where: { id },
    });
  }

  public async updateReferral(id: number, data: any) {
    await this._referralRepository.update({ id }, { ...data });
  }
}
