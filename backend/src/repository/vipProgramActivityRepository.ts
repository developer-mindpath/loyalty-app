import { Repository } from "typeorm";
import AppDataSource from "../database";
import { GetEmailNotificationsResponse } from "../types/response/emailNotification/getEmailNotificationsResponse";
import { VipProgramActivityModel } from "src/database/models/vipProgramActivity";

export default class VipProgramActivityRepository {
  private _vipProgramActivityModel: Repository<VipProgramActivityModel>;
  constructor() {
    this._vipProgramActivityModel = AppDataSource.getRepository(
      VipProgramActivityModel
    );
  }

  public async getVipProgramActivity(
    userId: number
  ): Promise<GetEmailNotificationsResponse[]> {
    return await this._vipProgramActivityModel.find({
      where: { user_id: userId },
    });
  }
}
