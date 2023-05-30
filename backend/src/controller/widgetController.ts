import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import {
  GetFloatingWidgetButtonParams,
  GetFloatingWidgetParams,
  UpdateFloatingWidgetButtonParams,
  UpdateFloatingWidgetParams,
} from "../types/request/params";
import { GetFloatingWidgetResponse } from "../types/response/widget/getFloatingWidgetResponse";
import WidgetService from "../services/widgetService";
import { InsertFloatingWidgetRequest } from "../types/request/widget/insertFloatingWidgetRequest";
import InsertFloatingWidgetRequestDTO from "../dto/insertFloatingWidgetRequestDto";
import { UpdateFloatingWidgetRequest } from "../types/request/widget/updateFloatingWidgetRequest";
import UpdateFloatingWidgetRequestDTO from "../dto/updateFloatingWidgetRequestDto";
import { InsertFloatingWidgetButtonRequest } from "../types/request/widget/insertFloatingWidgetButtonRequest";
import InsertFloatingWidgetButtonRequestDTO from "../dto/insertFloatingWidgetButtonRequestDto";
import { GetFloatingWidgetButtonResponse } from "../types/response/widget/getFloatingWidgetButtonResponse";
import { UpdateFloatingWidgetButtonRequest } from "../types/request/widget/updateFloatingWidgetButtonRequest";
import UpdateFloatingWidgetButtonRequestDTO from "../dto/updateFloatingWidgetButtonRequestDto";

export default class WidgetController {
  private _widgetService: WidgetService;

  constructor() {
    this._widgetService = new WidgetService();
  }
  public async insertFloatingWidgetSetting(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertFloatingWidgetRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertFloatingWidgetRequestDTO = new InsertFloatingWidgetRequestDTO(
        req.body
      );
      await this._widgetService.insertFloatingWidgetSetting(
        insertFloatingWidgetRequestDTO
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = {};
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getFloatingWidgetSetting(
    req: CustomRequest<
      GetFloatingWidgetParams,
      GetFloatingWidgetResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetFloatingWidgetResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetFloatingWidgetResponse>();
      const widgetResponse = await this._widgetService.getFloatingWidgetSetting(
        req.params.userId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = widgetResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateFloatingWidgetSetting(
    req: CustomRequest<
      UpdateFloatingWidgetParams,
      IEmptyObject,
      UpdateFloatingWidgetRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateFloatingWidgetRequestDTO = new UpdateFloatingWidgetRequestDTO(
        req.body,
        req.params.userId
      );
      await this._widgetService.updateFloatingWidgetSetting(
        updateFloatingWidgetRequestDTO
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = {};
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async insertFloatingWidgetButton(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertFloatingWidgetButtonRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertFloatingWidgetButtonRequestDTO =
        new InsertFloatingWidgetButtonRequestDTO(req.body);
      await this._widgetService.insertFloatingWidgetButton(
        insertFloatingWidgetButtonRequestDTO
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = {};
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getFloatingWidgetButton(
    req: CustomRequest<
      GetFloatingWidgetButtonParams,
      GetFloatingWidgetButtonResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetFloatingWidgetButtonResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetFloatingWidgetButtonResponse>();
      const widgetResponse = await this._widgetService.getFloatingWidgetButton(
        req.params.userId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = widgetResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateFloatingWidgetButton(
    req: CustomRequest<
      UpdateFloatingWidgetButtonParams,
      IEmptyObject,
      UpdateFloatingWidgetButtonRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateFloatingWidgetButtonRequestDTO =
        new UpdateFloatingWidgetButtonRequestDTO(req.body, req.params.userId);
      await this._widgetService.updateFloatingWidgetButton(
        updateFloatingWidgetButtonRequestDTO
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = {};
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }
}
