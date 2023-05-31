import { Repository, UpdateResult } from "typeorm";
import lodash from "lodash";
import AppDataSource from "../database";
import { OnsiteWidgetAdditionalSettingTextModel } from "../database/models/onsiteWidgetAdditionalSettingText";
import InsertFloatingWidgetTextRequestDTO from "../dto/widget/insertFloatingWidgetTextRequestDto";
import { GetFloatingWidgetTextResponse } from "../types/response/widget/getFloatingWidgetTextResponse";
import UpdateFloatingWidgetTextRequestDTO from "../dto/widget/updateFloatingWidgetTextRequestDto";

export default class WidgetTextRepository {
  private _widgetTextModel: Repository<OnsiteWidgetAdditionalSettingTextModel>;
  constructor() {
    this._widgetTextModel = AppDataSource.getRepository(
      OnsiteWidgetAdditionalSettingTextModel
    );
  }

  public async insertFloatingWidgetText(
    insertFloatingWidgetTextRequestDTO: InsertFloatingWidgetTextRequestDTO
  ): Promise<OnsiteWidgetAdditionalSettingTextModel> {
    return await this._widgetTextModel.save(insertFloatingWidgetTextRequestDTO);
  }

  public async getFloatingWidgetText(
    userId: number
  ): Promise<GetFloatingWidgetTextResponse | null> {
    return await this._widgetTextModel.findOne({
      where: { user_id: userId },
    });
  }

  public async updateFloatingWidgetText(
    updateFloatingWidgetTextRequestDTO: UpdateFloatingWidgetTextRequestDTO
  ): Promise<UpdateResult> {
    const user_id = updateFloatingWidgetTextRequestDTO.user_id;
    const data = lodash.omit(updateFloatingWidgetTextRequestDTO, ["user_id"]);
    return await this._widgetTextModel.update({ user_id }, data);
  }
}
