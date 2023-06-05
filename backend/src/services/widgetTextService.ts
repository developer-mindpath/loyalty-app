import { UpdateResult } from "typeorm";
import InsertFloatingWidgetTextRequestDTO from "../dto/widget/insertFloatingWidgetTextRequestDto";
import { OnsiteWidgetAdditionalSettingTextModel } from "../database/models/onsiteWidgetAdditionalSettingText";
import { GetFloatingWidgetTextResponse } from "../types/response/widget/getFloatingWidgetTextResponse";
import UpdateFloatingWidgetTextRequestDTO from "../dto/widget/updateFloatingWidgetTextRequestDto";
import WidgetTextRepository from "../repository/widgetTextRepository";

export default class WidgetTextService {
  private _widgetTextRepository: WidgetTextRepository;
  constructor() {
    this._widgetTextRepository = new WidgetTextRepository();
  }

  public async insertFloatingWidgetText(
    insertFloatingWidgetTextRequestDTO: InsertFloatingWidgetTextRequestDTO
  ): Promise<OnsiteWidgetAdditionalSettingTextModel> {
    return await this._widgetTextRepository.insertFloatingWidgetText(
      insertFloatingWidgetTextRequestDTO
    );
  }

  public async getFloatingWidgetText(
    userId: number
  ): Promise<GetFloatingWidgetTextResponse> {
    const widgetResponse =
      await this._widgetTextRepository.getFloatingWidgetText(userId);
    return widgetResponse
      ? widgetResponse
      : ({} as GetFloatingWidgetTextResponse);
  }

  public async updateFloatingWidgetText(
    updateFloatingWidgetTextRequestDTO: UpdateFloatingWidgetTextRequestDTO
  ): Promise<UpdateResult> {
    return await this._widgetTextRepository.updateFloatingWidgetText(
      updateFloatingWidgetTextRequestDTO
    );
  }
}
