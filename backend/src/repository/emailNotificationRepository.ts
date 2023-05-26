import { DeleteResult, Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { ProgramEmailModel } from "../database/models/programEmail";
import InsertEmailNotificationRequestDTO from "../dto/insertEmailNotificationRequestDto";
import { GetEmailNotificationResponse } from "../types/response/emailNotification/getEmailNotificationResponse";
import { GetEmailNotificationsResponse } from "../types/response/emailNotification/getEmailNotificationsResponse";
import UpdateEmailNotificationRequestDTO from "../dto/updateEmailNotificationRequestDto";

export default class EmailNotificationRepository {
  private _programEmailModel: Repository<ProgramEmailModel>;
  constructor() {
    this._programEmailModel = AppDataSource.getRepository(ProgramEmailModel);
  }

  public async insertEmailNotification(
    insertEmailNotificationRequestDTO: InsertEmailNotificationRequestDTO
  ): Promise<ProgramEmailModel> {
    return await this._programEmailModel.save(
      insertEmailNotificationRequestDTO
    );
  }

  public async getEmailNotification(
    emailProgramId: number
  ): Promise<GetEmailNotificationResponse | null> {
    return await this._programEmailModel.findOne({
      where: { id: emailProgramId },
    });
  }

  public async getEmailNotifications(
    userId: number
  ): Promise<GetEmailNotificationsResponse[]> {
    return await this._programEmailModel.find({
      where: { user_id: userId },
    });
  }

  public async updateEmailNotification(
    updateEmailNotificationRequestDTO: UpdateEmailNotificationRequestDTO
  ): Promise<UpdateResult> {
    const id = updateEmailNotificationRequestDTO.emailProgramId;
    const data = lodash.omit(updateEmailNotificationRequestDTO, [
      "emailProgramId",
    ]);
    return await this._programEmailModel.update({ id }, data);
  }

  public async deleteEmailNotification(
    emailProgramId: number
  ): Promise<DeleteResult> {
    return await this._programEmailModel.delete({
      id: emailProgramId,
    });
  }
}
