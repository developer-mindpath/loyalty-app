import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import {
  GetEmailSettingParams,
  GetOrderSettingParams,
  UpdateEmailSettingParams,
  UpdateOrderSettingParams,
} from "../types/request/params";
import { GetEmailSettingResponse } from "../types/response/setting/getEmailSettingResponse";
import SettingService from "../services/settingService";
import { GetOrderSettingResponse } from "../types/response/setting/getOrderSettingResponse";
import { UpdateEmailSettingRequest } from "../types/request/setting/updateEmailSettingRequest";
import UpdateEmailSettingRequestDTO from "../dto/updateEmailSettingRequestDto";
import { UpdateOrderSettingRequest } from "../types/request/setting/updateOrderSettingRequest";
import UpdateOrderSettingRequestDTO from "../dto/updateOrderSettingRequestDto";

export default class SettingController {
  private _settingService: SettingService;

  constructor() {
    this._settingService = new SettingService();
  }

  public async getEmailSettingByUserId(
    req: CustomRequest<
      GetEmailSettingParams,
      GetEmailSettingResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetEmailSettingResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetEmailSettingResponse>();
      const settingResponse =
        await this._settingService.getEmailSettingByUserId(req.params.userId);
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = settingResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getOrderSettingByUserId(
    req: CustomRequest<
      GetOrderSettingParams,
      GetOrderSettingResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetOrderSettingResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetOrderSettingResponse>();
      const settingResponse =
        await this._settingService.getOrderSettingByUserId(req.params.userId);
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = settingResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateEmailSettingByUserId(
    req: CustomRequest<
      UpdateEmailSettingParams,
      IEmptyObject,
      UpdateEmailSettingRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateEmailSettingRequestDTO = new UpdateEmailSettingRequestDTO(
        req.body,
        req.params.userId
      );
      await this._settingService.updateEmailSettingByUserId(
        updateEmailSettingRequestDTO
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

  public async updateOrderSettingByUserId(
    req: CustomRequest<
      UpdateOrderSettingParams,
      IEmptyObject,
      UpdateOrderSettingRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateOrderSettingRequestDTO = new UpdateOrderSettingRequestDTO(
        req.body,
        req.params.userId
      );
      await this._settingService.updateOrderSettingByUserId(
        updateOrderSettingRequestDTO
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
