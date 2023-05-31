import { UpdateResult } from "typeorm";
import { GetEmailSettingResponse } from "../types/response/setting/getEmailSettingResponse";
import SettingEmailService from "./settingEmailService";
import { GetOrderSettingResponse } from "../types/response/setting/getOrderSettingResponse";
import SettingOrderService from "./settingOrderService";
import UpdateEmailSettingRequestDTO from "../dto/setting/updateEmailSettingRequestDto";
import UpdateOrderSettingRequestDTO from "../dto/setting/updateOrderSettingRequestDto";
import InsertEmailSettingRequestDTO from "../dto/setting/insertEmailSettingRequestDto";
import { SettingEmailModel } from "../database/models/settingEmail";
import InsertOrderSettingRequestDTO from "../dto/setting/insertOrderSettingRequestDto";
import { SettingOrderModel } from "../database/models/settingOrder";

export default class SettingService {
  private _settingEmailService: SettingEmailService;
  private _settingOrderService: SettingOrderService;
  constructor() {
    this._settingEmailService = new SettingEmailService();
    this._settingOrderService = new SettingOrderService();
  }

  public async getEmailSettingByUserId(
    userId: number
  ): Promise<GetEmailSettingResponse> {
    const emailSettingResponse =
      await this._settingEmailService.getEmailSettingByUserId(userId);
    return emailSettingResponse
      ? emailSettingResponse
      : ({} as GetEmailSettingResponse);
  }

  public async getOrderSettingByUserId(
    userId: number
  ): Promise<GetOrderSettingResponse> {
    const orderSettingResponse =
      await this._settingOrderService.getOrderSettingByUserId(userId);
    return orderSettingResponse
      ? orderSettingResponse
      : ({} as GetOrderSettingResponse);
  }

  public async updateEmailSettingByUserId(
    updateEmailSettingRequestDTO: UpdateEmailSettingRequestDTO
  ): Promise<UpdateResult> {
    return await this._settingEmailService.updateEmailSettingByUserId(
      updateEmailSettingRequestDTO
    );
  }

  public async updateOrderSettingByUserId(
    updateOrderSettingRequestDTO: UpdateOrderSettingRequestDTO
  ): Promise<UpdateResult> {
    return await this._settingOrderService.updateOrderSettingByUserId(
      updateOrderSettingRequestDTO
    );
  }

  public async insertEmailSettingByUserId(
    insertEmailSettingRequestDTO: InsertEmailSettingRequestDTO
  ): Promise<SettingEmailModel> {
    return await this._settingEmailService.insertEmailSettingByUserId(
      insertEmailSettingRequestDTO
    );
  }

  public async insertOrderSettingByUserId(
    insertOrderSettingRequestDTO: InsertOrderSettingRequestDTO
  ): Promise<SettingOrderModel> {
    return await this._settingOrderService.insertOrderSettingByUserId(
      insertOrderSettingRequestDTO
    );
  }
}
