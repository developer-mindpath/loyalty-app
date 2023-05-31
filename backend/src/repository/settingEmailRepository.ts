import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import { SettingEmailModel } from "../database/models/settingEmail";
import AppDataSource from "../database";
import { GetEmailSettingResponse } from "../types/response/setting/getEmailSettingResponse";
import UpdateEmailSettingRequestDTO from "../dto/setting/updateEmailSettingRequestDto";
import InsertEmailSettingRequestDTO from "../dto/setting/insertEmailSettingRequestDto";

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
    const data = lodash.omit(updateEmailSettingRequestDTO, ["user_id"]);
    return await this._settingEmailModel.update({ user_id }, data);
  }

  public async insertEmailSettingByUserId(
    insertEmailSettingRequestDTO: InsertEmailSettingRequestDTO
  ): Promise<SettingEmailModel> {
    return await this._settingEmailModel.save(insertEmailSettingRequestDTO);
  }
}
