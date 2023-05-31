import { UpdateResult } from "typeorm";
import InsertFloatingWidgetButtonRequestDTO from "../dto/widget/insertFloatingWidgetButtonRequestDto";
import WidgetButtonRepository from "../repository/widgetButtonRepository";
import { OnsiteWidgetAdditionalSettingButtonModel } from "../database/models/onsiteWidgetAdditionalSettingButton";
import { GetFloatingWidgetButtonResponse } from "../types/response/widget/getFloatingWidgetButtonResponse";
import UpdateFloatingWidgetButtonRequestDTO from "../dto/widget/updateFloatingWidgetButtonRequestDto";

export default class WidgetButtonService {
  private _widgetButtonRepository: WidgetButtonRepository;
  constructor() {
    this._widgetButtonRepository = new WidgetButtonRepository();
  }

  public async insertFloatingWidgetButton(
    insertFloatingWidgetButtonRequestDTO: InsertFloatingWidgetButtonRequestDTO
  ): Promise<OnsiteWidgetAdditionalSettingButtonModel> {
    return await this._widgetButtonRepository.insertFloatingWidgetButton(
      insertFloatingWidgetButtonRequestDTO
    );
  }

  public async getFloatingWidgetButton(
    userId: number
  ): Promise<GetFloatingWidgetButtonResponse> {
    const widgetResponse =
      await this._widgetButtonRepository.getFloatingWidgetButton(userId);
    return widgetResponse
      ? widgetResponse
      : ({} as GetFloatingWidgetButtonResponse);
  }

  public async updateFloatingWidgetButton(
    updateFloatingWidgetButtonRequestDTO: UpdateFloatingWidgetButtonRequestDTO
  ): Promise<UpdateResult> {
    return await this._widgetButtonRepository.updateFloatingWidgetButton(
      updateFloatingWidgetButtonRequestDTO
    );
  }
}
