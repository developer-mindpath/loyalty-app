import { UpdateResult } from "typeorm";
import { SettingEmailModel } from "../database/models/settingEmail";
import InsertEmailSettingRequestDTO from "../dto/setting/insertEmailSettingRequestDto";
import UpdateEmailSettingRequestDTO from "../dto/setting/updateEmailSettingRequestDto";
import SettingEmailRepository from "../repository/settingEmailRepository";
import { GetEmailSettingResponse } from "../types/response/setting/getEmailSettingResponse";

export default class SettingEmailService {
  private _settingEmailRepository: SettingEmailRepository;
  constructor() {
    this._settingEmailRepository = new SettingEmailRepository();
  }

  public async getEmailSettingByUserId(
    userId: number
  ): Promise<GetEmailSettingResponse | null> {
    return await this._settingEmailRepository.getEmailSettingByUserId(userId);
  }

  public async updateEmailSettingByUserId(
    updateEmailSettingRequestDTO: UpdateEmailSettingRequestDTO
  ): Promise<UpdateResult> {
    return await this._settingEmailRepository.updateEmailSettingByUserId(
      updateEmailSettingRequestDTO
    );
  }

  public async insertEmailSettingByUserId(
    insertEmailSettingRequestDTO: InsertEmailSettingRequestDTO
  ): Promise<SettingEmailModel> {
    return await this._settingEmailRepository.insertEmailSettingByUserId(
      insertEmailSettingRequestDTO
    );
  }
}
