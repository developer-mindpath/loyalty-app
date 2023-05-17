import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import { SettingEmailModel } from "../database/models/settingEmail";
import AppDataSource from "../database";
import { GetEmailSettingResponse } from "../types/response/setting/getEmailSettingResponse";
import UpdateEmailSettingRequestDTO from "../dto/updateEmailSettingRequestDto";

export default class SettingEmailRepository {
  private _settingEmailModel: Repository<SettingEmailModel>;
  constructor() {
    this._settingEmailModel = AppDataSource.getRepository(SettingEmailModel);
  }

  public async getEmailSettingByUserId(
    userId: number
  ): Promise<GetEmailSettingResponse | null> {
    return await this._settingEmailModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateEmailSettingByUserId(
    updateEmailSettingRequestDTO: UpdateEmailSettingRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateEmailSettingRequestDTO.user_id;
    lodash.omit(updateEmailSettingRequestDTO, ["user_id"]);
    return await this._settingEmailModel.update(
      { user_id },
      updateEmailSettingRequestDTO
    );
  }
}
