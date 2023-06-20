import { UpdateResult } from "typeorm";
import { GetFloatingWidgetResponse } from "../types/response/widget/getFloatingWidgetResponse";
import WidgetRepository from "../repository/widgetRepository";
import InsertFloatingWidgetRequestDTO from "../dto/widget/insertFloatingWidgetRequestDto";
import { OnsiteWidgetModel } from "../database/models/onsiteWidget";
import UpdateFloatingWidgetRequestDTO from "../dto/widget/updateFloatingWidgetRequestDto";
import InsertFloatingWidgetButtonRequestDTO from "../dto/widget/insertFloatingWidgetButtonRequestDto";
import WidgetButtonService from "./widgetButtonService";
import { OnsiteWidgetAdditionalSettingButtonModel } from "../database/models/onsiteWidgetAdditionalSettingButton";
import { GetFloatingWidgetButtonResponse } from "../types/response/widget/getFloatingWidgetButtonResponse";
import UpdateFloatingWidgetButtonRequestDTO from "../dto/widget/updateFloatingWidgetButtonRequestDto";
import InsertFloatingWidgetTextRequestDTO from "../dto/widget/insertFloatingWidgetTextRequestDto";
import { OnsiteWidgetAdditionalSettingTextModel } from "../database/models/onsiteWidgetAdditionalSettingText";
import { GetFloatingWidgetTextResponse } from "../types/response/widget/getFloatingWidgetTextResponse";
import UpdateFloatingWidgetTextRequestDTO from "../dto/widget/updateFloatingWidgetTextRequestDto";
import WidgetTextService from "./widgetTextService";

export default class WidgetService {
  private _widgetRepository: WidgetRepository;
  private _widgetButtonService: WidgetButtonService;
  private _widgetTextService: WidgetTextService;
  constructor() {
    this._widgetRepository = new WidgetRepository();
    this._widgetButtonService = new WidgetButtonService();
    this._widgetTextService = new WidgetTextService();
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

  public async insertFloatingWidgetText(
    insertFloatingWidgetTextRequestDTO: InsertFloatingWidgetTextRequestDTO
  ): Promise<OnsiteWidgetAdditionalSettingTextModel> {
    return await this._widgetTextService.insertFloatingWidgetText(
      insertFloatingWidgetTextRequestDTO
    );
  }

  public async getFloatingWidgetText(
    userId: number
  ): Promise<GetFloatingWidgetTextResponse> {
    const widgetResponse = await this._widgetTextService.getFloatingWidgetText(
      userId
    );
    return widgetResponse
      ? widgetResponse
      : ({} as GetFloatingWidgetTextResponse);
  }

  public async updateFloatingWidgetText(
    updateFloatingWidgetTextRequestDTO: UpdateFloatingWidgetTextRequestDTO
  ): Promise<UpdateResult> {
    return await this._widgetTextService.updateFloatingWidgetText(
      updateFloatingWidgetTextRequestDTO
    );
  }
}
