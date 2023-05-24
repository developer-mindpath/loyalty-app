import { Repository } from "typeorm";
import AppDataSource from "../database";
import { GetEmailNotificationsResponse } from "../types/response/emailNotification/getEmailNotificationsResponse";
import { LoyalityProgramActivityModel } from "src/database/models/loyalityProgramActivity";

export default class LoyaltyProgramActivityRepository {
  private _loyalityProgramActivityModel: Repository<LoyalityProgramActivityModel>;
  constructor() {
    this._loyalityProgramActivityModel = AppDataSource.getRepository(
      LoyalityProgramActivityModel
    );
  }

  public async getLoyaltyProgramActivity(
    userId: number
  ): Promise<GetEmailNotificationsResponse[]> {
    return await this._loyalityProgramActivityModel.find({
      where: { user_id: userId },
    });
  }
}
