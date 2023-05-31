import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { OnsiteWidgetAdditionalSettingButtonModel } from "../database/models/onsiteWidgetAdditionalSettingButton";
import InsertFloatingWidgetButtonRequestDTO from "../dto/widget/insertFloatingWidgetButtonRequestDto";
import { GetFloatingWidgetButtonResponse } from "../types/response/widget/getFloatingWidgetButtonResponse";
import UpdateFloatingWidgetButtonRequestDTO from "../dto/widget/updateFloatingWidgetButtonRequestDto";

export default class WidgetButtonRepository {
  private _widgetButtonModel: Repository<OnsiteWidgetAdditionalSettingButtonModel>;
  constructor() {
    this._widgetButtonModel = AppDataSource.getRepository(
      OnsiteWidgetAdditionalSettingButtonModel
    );
  }

  public async insertFloatingWidgetButton(
    insertFloatingWidgetButtonRequestDTO: InsertFloatingWidgetButtonRequestDTO
  ): Promise<OnsiteWidgetAdditionalSettingButtonModel> {
    return await this._widgetButtonModel.save(
      insertFloatingWidgetButtonRequestDTO
    );
  }

  public async getFloatingWidgetButton(
    userId: number
  ): Promise<GetFloatingWidgetButtonResponse | null> {
    return await this._widgetButtonModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateFloatingWidgetButton(
    updateFloatingWidgetButtonRequestDTO: UpdateFloatingWidgetButtonRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateFloatingWidgetButtonRequestDTO.user_id;
    const data = lodash.omit(updateFloatingWidgetButtonRequestDTO, ["user_id"]);
    return await this._widgetButtonModel.update({ user_id }, data);
  }
}
