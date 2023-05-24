import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import UpdateOrderSettingRequestDTO from "../dto/updateOrderSettingRequestDto";
import AppDataSource from "../database";
import { SettingOrderModel } from "../database/models/settingOrder";
import { GetOrderSettingResponse } from "../types/response/setting/getOrderSettingResponse";
import InsertOrderSettingRequestDTO from "../dto/insertOrderSettingRequestDto";

export default class SettingOrderRepository {
  private _settingOrderModel: Repository<SettingOrderModel>;
  constructor() {
    this._settingOrderModel = AppDataSource.getRepository(SettingOrderModel);
  }

  public async getOrderSettingByUserId(
    userId: number
  ): Promise<GetOrderSettingResponse | null> {
    return await this._settingOrderModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateOrderSettingByUserId(
    updateOrderSettingRequestDTO: UpdateOrderSettingRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateOrderSettingRequestDTO.user_id;
    const data = lodash.omit(updateOrderSettingRequestDTO, ["user_id"]);
    return await this._settingOrderModel.update({ user_id }, data);
  }

  public async insertOrderSettingByUserId(
    insertOrderSettingRequestDTO: InsertOrderSettingRequestDTO
  ): Promise<SettingOrderModel> {
    return await this._settingOrderModel.save(insertOrderSettingRequestDTO);
  }
}
