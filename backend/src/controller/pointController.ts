import { NextFunction, Response } from "express";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { StatusCodes } from "http-status-codes";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { PointInsertResponse } from "../types/response/point/pointInsertResponse";
import { PointInsertRequest } from "../types/request/point/pointInsertRequest";
import PointInsertRequestDTO from "../dto/pointInsertRequestDto";
import PointService from "../services/pointService";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import {
  GetEarnDetailParams,
  GetEarnPointsByUsingUserIdParams,
  UpdateEarnDetailParams,
} from "../types/request/params";
import { UpdatePointEarnDetailRequest } from "../types/request/point/updatePointEarnDetailRequest";
import UpdatePointEarnDetailRequestDTO from "../dto/updatePointEarnDetailRequestDto";

export default class PointController {
  private _pointService: PointService;

  constructor() {
    this._pointService = new PointService();
  }
  public async insertEarningPoint(
    req: CustomRequest<IEmptyObject, PointInsertResponse, PointInsertRequest>,
    res: Response<APIResponse<PointInsertResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<PointInsertResponse>();
      const pointInsertRequestDTO = new PointInsertRequestDTO(req.body);
      const pointResponse = await this._pointService.insertEarningPoint(
        pointInsertRequestDTO
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = pointResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getAllEarningPoints(
    req: CustomRequest<
      GetEarnPointsByUsingUserIdParams,
      GetPointEarnResponse[],
      IEmptyObject
    >,
    res: Response<APIResponse<GetPointEarnResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetPointEarnResponse[]>();
      const pointResponse = await this._pointService.getAllEarningPoints(
        req.params.userId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = pointResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getEarningDetailsByPointId(
    req: CustomRequest<
      GetEarnDetailParams,
      GetPointEarnDetailResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetPointEarnDetailResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetPointEarnDetailResponse>();
      const pointResponse = await this._pointService.getEarningDetailsByPointId(
        req.params.pointId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = pointResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateEarningDetailsByPointId(
    req: CustomRequest<
      UpdateEarnDetailParams,
      IEmptyObject,
      UpdatePointEarnDetailRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updatePointEarnDetailRequestDTO =
        new UpdatePointEarnDetailRequestDTO(req.body, req.params.pointId);
      await this._pointService.updateEarningDetailsByPointId(
        updatePointEarnDetailRequestDTO
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
