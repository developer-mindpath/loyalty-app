import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { OnsiteWidgetModel } from "../database/models/onsiteWidget";
import { GetFloatingWidgetResponse } from "../types/response/widget/getFloatingWidgetResponse";
import InsertFloatingWidgetRequestDTO from "../dto/widget/insertFloatingWidgetRequestDto";
import UpdateFloatingWidgetRequestDTO from "../dto/widget/updateFloatingWidgetRequestDto";

export default class WidgetRepository {
  private _widgetModel: Repository<OnsiteWidgetModel>;
  constructor() {
    this._widgetModel = AppDataSource.getRepository(OnsiteWidgetModel);
  }

  public async insertFloatingWidgetSetting(
    insertFloatingWidgetRequestDTO: InsertFloatingWidgetRequestDTO
  ): Promise<OnsiteWidgetModel> {
    return await this._widgetModel.save(insertFloatingWidgetRequestDTO);
  }

  public async getFloatingWidgetSetting(
    userId: number
  ): Promise<GetFloatingWidgetResponse | null> {
    return await this._widgetModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateFloatingWidgetSetting(
    updateFloatingWidgetRequestDTO: UpdateFloatingWidgetRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateFloatingWidgetRequestDTO.user_id;
    const data = lodash.omit(updateFloatingWidgetRequestDTO, ["user_id"]);
    return await this._widgetModel.update({ user_id }, data);
  }
}
