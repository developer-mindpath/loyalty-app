import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { GetAppResponse } from "../types/response/app/getAppResponse";
import AppService from "../services/appService";
import InsertAppRequestDTO from "../dto/app/insertAppRequestDto";
import { InsertAppRequest } from "../types/request/app/insertAppRequest";
import { UpdateAppRequest } from "../types/request/app/updateAppRequest";
import UpdateAppRequestDTO from "../dto/app/updateAppRequestDto";
import { AppId } from "../types/request/params";

export default class AppController {
  private _appService: AppService;

  constructor() {
    this._appService = new AppService();
  }
  public async insertApp(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertAppRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertAppRequestDTO = new InsertAppRequestDTO(
        req.body,
        req.userId!,
        req.adminRef!
      );
      await this._appService.insertApp(insertAppRequestDTO);
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

  public async getApp(
    req: CustomRequest<IEmptyObject, Array<GetAppResponse>, IEmptyObject>,
    res: Response<APIResponse<Array<GetAppResponse>>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<Array<GetAppResponse>>();
      const widgetResponse = await this._appService.getApp(req.userId!);
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

  public async updateApp(
    req: CustomRequest<AppId, IEmptyObject, UpdateAppRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateAppRequestDTO = new UpdateAppRequestDTO(
        req.body,
        req.params.appId,
        req.userId!
      );
      await this._appService.updateApp(updateAppRequestDTO);
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
