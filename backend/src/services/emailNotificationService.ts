import { DeleteResult, UpdateResult } from "typeorm";
import InsertEmailNotificationRequestDTO from "../dto/insertEmailNotificationRequestDto";
import EmailNotificationRepository from "../repository/emailNotificationRepository";
import { ProgramEmailModel } from "../database/models/programEmail";
import { GetEmailNotificationResponse } from "../types/response/emailNotification/getEmailNotificationResponse";
import { GetEmailNotificationsResponse } from "../types/response/emailNotification/getEmailNotificationsResponse";
import UpdateEmailNotificationRequestDTO from "../dto/updateEmailNotificationRequestDto";

export default class EmailNotificationService {
  private _emailNotificationRepository: EmailNotificationRepository;
  constructor() {
    this._emailNotificationRepository = new EmailNotificationRepository();
  }

  public async insertEmailNotification(
    insertEmailNotificationRequestDTO: InsertEmailNotificationRequestDTO
  ): Promise<ProgramEmailModel> {
    return await this._emailNotificationRepository.insertEmailNotification(
      insertEmailNotificationRequestDTO
    );
  }

  public async getEmailNotification(
    emailProgramId: number
  ): Promise<GetEmailNotificationResponse> {
    const emailResponse =
      await this._emailNotificationRepository.getEmailNotification(
        emailProgramId
      );
    return emailResponse ? emailResponse : ({} as GetEmailNotificationResponse);
  }

  public async getEmailNotifications(
    userId: number
  ): Promise<GetEmailNotificationsResponse[]> {
    return await this._emailNotificationRepository.getEmailNotifications(
      userId
    );
  }

  public async updateEmailNotification(
    updateEmailNotificationRequestDTO: UpdateEmailNotificationRequestDTO
  ): Promise<UpdateResult> {
    return await this._emailNotificationRepository.updateEmailNotification(
      updateEmailNotificationRequestDTO
    );
  }

  public async deleteEmailNotification(
    emailProgramId: number
  ): Promise<DeleteResult> {
    return await this._emailNotificationRepository.deleteEmailNotification(
      emailProgramId
    );
  }
}
