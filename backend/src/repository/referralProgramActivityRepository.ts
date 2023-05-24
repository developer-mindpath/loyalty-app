import { Repository } from "typeorm";
import AppDataSource from "../database";
import { GetEmailNotificationsResponse } from "../types/response/emailNotification/getEmailNotificationsResponse";
import { ReferralProgramActivityModel } from "src/database/models/referralProgramActivity";

export default class ReferralProgramActivityRepository {
  private _referralProgramActivityModel: Repository<ReferralProgramActivityModel>;
  constructor() {
    this._referralProgramActivityModel = AppDataSource.getRepository(
      ReferralProgramActivityModel
    );
  }

  public async getReferralProgramActivity(
    userId: number
  ): Promise<GetEmailNotificationsResponse[]> {
    return await this._referralProgramActivityModel.find({
      where: { user_id: userId },
    });
  }
}
