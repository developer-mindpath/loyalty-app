import { UpdateResult } from "typeorm";
import { GetFloatingWidgetResponse } from "../types/response/widget/getFloatingWidgetResponse";
import WidgetRepository from "../repository/widgetRepository";
import InsertFloatingWidgetRequestDTO from "../dto/insertFloatingWidgetRequestDto";
import { OnsiteWidgetModel } from "../database/models/onsiteWidget";
import UpdateFloatingWidgetRequestDTO from "../dto/updateFloatingWidgetRequestDto";
import InsertFloatingWidgetButtonRequestDTO from "src/dto/insertFloatingWidgetButtonRequestDto";
import WidgetButtonService from "./widgetButtonService";
import { OnsiteWidgetAdditionalSettingButtonModel } from "../database/models/onsiteWidgetAdditionalSettingButton";
import { GetFloatingWidgetButtonResponse } from "../types/response/widget/getFloatingWidgetButtonResponse";
import UpdateFloatingWidgetButtonRequestDTO from "../dto/updateFloatingWidgetButtonRequestDto";

export default class WidgetService {
  private _widgetRepository: WidgetRepository;
  private _widgetButtonService: WidgetButtonService;
  constructor() {
    this._widgetRepository = new WidgetRepository();
    this._widgetButtonService = new WidgetButtonService();
  }

  public async insertFloatingWidgetSetting(
    insertFloatingWidgetRequestDTO: InsertFloatingWidgetRequestDTO
  ): Promise<OnsiteWidgetModel> {
    return await this._widgetRepository.insertFloatingWidgetSetting(
      insertFloatingWidgetRequestDTO
    );
  }

  public async getFloatingWidgetSetting(
    userId: number
  ): Promise<GetFloatingWidgetResponse> {
    const widgetResponse =
      await this._widgetRepository.getFloatingWidgetSetting(userId);
    return widgetResponse ? widgetResponse : ({} as GetFloatingWidgetResponse);
  }

  public async updateFloatingWidgetSetting(
    updateFloatingWidgetRequestDTO: UpdateFloatingWidgetRequestDTO
  ): Promise<UpdateResult> {
    return await this._widgetRepository.updateFloatingWidgetSetting(
      updateFloatingWidgetRequestDTO
    );
  }

  public async insertFloatingWidgetButton(
    insertFloatingWidgetButtonRequestDTO: InsertFloatingWidgetButtonRequestDTO
  ): Promise<OnsiteWidgetAdditionalSettingButtonModel> {
    return await this._widgetButtonService.insertFloatingWidgetButton(
      insertFloatingWidgetButtonRequestDTO
    );
  }

  public async getFloatingWidgetButton(
    userId: number
  ): Promise<GetFloatingWidgetButtonResponse> {
    const widgetResponse =
      await this._widgetButtonService.getFloatingWidgetButton(userId);
    return widgetResponse
      ? widgetResponse
      : ({} as GetFloatingWidgetButtonResponse);
  }

  public async updateFloatingWidgetButton(
    updateFloatingWidgetButtonRequestDTO: UpdateFloatingWidgetButtonRequestDTO
  ): Promise<UpdateResult> {
    return await this._widgetButtonService.updateFloatingWidgetButton(
      updateFloatingWidgetButtonRequestDTO
    );
  }
}
