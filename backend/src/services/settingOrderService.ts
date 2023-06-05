import { UpdateResult } from "typeorm";
import { SettingOrderModel } from "../database/models/settingOrder";
import InsertOrderSettingRequestDTO from "../dto/setting/insertOrderSettingRequestDto";
import UpdateOrderSettingRequestDTO from "../dto/setting/updateOrderSettingRequestDto";
import SettingOrderRepository from "../repository/settingOrderRepository";
import { GetOrderSettingResponse } from "../types/response/setting/getOrderSettingResponse";

export default class SettingOrderService {
  private _settingOrderRepository: SettingOrderRepository;
  constructor() {
    this._settingOrderRepository = new SettingOrderRepository();
  }

  public async getOrderSettingByUserId(
    userId: number
  ): Promise<GetOrderSettingResponse | null> {
    return await this._settingOrderRepository.getOrderSettingByUserId(userId);
  }

  public async updateOrderSettingByUserId(
    updateOrderSettingRequestDTO: UpdateOrderSettingRequestDTO
  ): Promise<UpdateResult> {
    return await this._settingOrderRepository.updateOrderSettingByUserId(
      updateOrderSettingRequestDTO
    );
  }

  public async insertOrderSettingByUserId(
    insertOrderSettingRequestDTO: InsertOrderSettingRequestDTO
  ): Promise<SettingOrderModel> {
    return await this._settingOrderRepository.insertOrderSettingByUserId(
      insertOrderSettingRequestDTO
    );
  }
}
