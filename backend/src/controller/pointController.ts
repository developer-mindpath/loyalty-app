import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { PointInsertRequest } from "../types/request/point/pointInsertRequest";
import PointInsertRequestDTO from "../dto/pointInsertRequestDto";
import PointService from "../services/pointService";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import {
  DeleteRedeemPointDetailParams,
  GetEarnDetailParams,
  GetEarnPointsByUsingUserIdParams,
  GetRedeemPointDetailParams,
  GetRedeemPointsParams,
  UpdateEarnDetailParams,
  UpdateRedeemPointDetailParams,
  UpdateRedeemPointsParams,
} from "../types/request/params";
import { UpdatePointEarnDetailRequest } from "../types/request/point/updatePointEarnDetailRequest";
import UpdatePointEarnDetailRequestDTO from "../dto/updatePointEarnDetailRequestDto";
import { InsertPointRedeemRequest } from "../types/request/point/insertPointRedeemRequest";
import InsertPointRedeemRequestDTO from "../dto/insertPointRedeemRequestDto";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";
import { UpdatePointRedeemRequest } from "../types/request/point/updatePointRedeemRequest";
import UpdatePointRedeemRequestDTO from "../dto/updatePointRedeemRequestDto";
import { InsertPointRedeemDetailRequest } from "../types/request/point/insertPointRedeemDetailRequest";
import InsertPointRedeemDetailRequestDTO from "../dto/insertPointRedeemDetailRequestDto";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";
import { UpdatePointRedeemDetailRequest } from "../types/request/point/updatePointRedeemDetailRequest";
import UpdatePointRedeemDetailRequestDTO from "../dto/updatePointRedeemDetailRequestDto";

export default class PointController {
  private _pointService: PointService;

  constructor() {
    this._pointService = new PointService();
  }
  public async insertEarningPoint(
    req: CustomRequest<IEmptyObject, IEmptyObject, PointInsertRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const pointInsertRequestDTO = new PointInsertRequestDTO(req.body);
      await this._pointService.insertEarningPoint(pointInsertRequestDTO);
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

  public async insertRedeemingPoint(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertPointRedeemRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertPointRedeemRequestDTO = new InsertPointRedeemRequestDTO(
        req.body
      );
      await this._pointService.insertRedeemingPoint(
        insertPointRedeemRequestDTO
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

  public async getPointRedeem(
    req: CustomRequest<
      GetRedeemPointsParams,
      GetPointRedeemResponse[],
      IEmptyObject
    >,
    res: Response<APIResponse<GetPointRedeemResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetPointRedeemResponse[]>();
      const pointResponse = await this._pointService.getPointRedeem(
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

  public async updatePointRedeem(
    req: CustomRequest<
      UpdateRedeemPointsParams,
      IEmptyObject,
      UpdatePointRedeemRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updatePointRedeemRequestDTO = new UpdatePointRedeemRequestDTO(
        req.body,
        req.params
      );
      await this._pointService.updatePointRedeem(updatePointRedeemRequestDTO);
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

  public async insertRedeemPointDetail(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertPointRedeemDetailRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertPointRedeemDetailRequestDTO =
        new InsertPointRedeemDetailRequestDTO(req.body);
      await this._pointService.insertRedeemPointDetail(
        insertPointRedeemDetailRequestDTO
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

  public async getPointRedeemDetail(
    req: CustomRequest<
      GetRedeemPointDetailParams,
      GetPointRedeemDetailResponse[],
      IEmptyObject
    >,
    res: Response<APIResponse<GetPointRedeemDetailResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetPointRedeemDetailResponse[]>();
      const pointResponse = await this._pointService.getPointRedeemDetail(
        req.params
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

  public async updatePointRedeemDetail(
    req: CustomRequest<
      UpdateRedeemPointDetailParams,
      IEmptyObject,
      UpdatePointRedeemDetailRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updatePointRedeemDetailRequestDTO =
        new UpdatePointRedeemDetailRequestDTO(req.body, req.params);
      await this._pointService.updatePointRedeemDetail(
        updatePointRedeemDetailRequestDTO
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

  public async deletePointRedeemDetail(
    req: CustomRequest<
      DeleteRedeemPointDetailParams,
      IEmptyObject,
      IEmptyObject
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      await this._pointService.deletePointRedeemDetail(req.params);
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
