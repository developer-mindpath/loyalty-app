import { UpdateResult } from "typeorm";
import UpdateEmailSettingRequestDTO from "../dto/updateEmailSettingRequestDto";
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
}
