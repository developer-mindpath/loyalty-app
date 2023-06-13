import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { PointInsertRequest } from "../types/request/point/pointInsertRequest";
import PointInsertRequestDTO from "../dto/point/pointInsertRequestDto";
import PointService from "../services/pointService";
import { GetPointEarnResponse } from "../types/response/point/getPointEarnResponse";
import { GetPointEarnDetailResponse } from "../types/response/point/getPointEarnDetailResponse";
import {
  PointActionId,
  PointRedeemDetailId,
  PointRedeemId,
} from "../types/request/params";
import { UpdatePointEarnDetailRequest } from "../types/request/point/updatePointEarnDetailRequest";
import UpdatePointEarnDetailRequestDTO from "../dto/point/updatePointEarnDetailRequestDto";
import { InsertPointRedeemRequest } from "../types/request/point/insertPointRedeemRequest";
import InsertPointRedeemRequestDTO from "../dto/point/insertPointRedeemRequestDto";
import { GetPointRedeemResponse } from "../types/response/point/getPointRedeemResponse";
import { GetPointRedeemDetailResponse } from "../types/response/point/getPointRedeemDetailResponse";
import { UpdatePointRedeemDetailRequest } from "../types/request/point/updatePointRedeemDetailRequest";
import UpdatePointRedeemDetailRequestDTO from "../dto/point/updatePointRedeemDetailRequestDto";

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
      const pointInsertRequestDTO = new PointInsertRequestDTO(
        req.body,
        req.userId!,
        req.adminRef!
      );
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
    req: CustomRequest<IEmptyObject, GetPointEarnResponse[], IEmptyObject>,
    res: Response<APIResponse<GetPointEarnResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetPointEarnResponse[]>();
      const pointResponse = await this._pointService.getAllEarningPoints(
        req.userId!
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
    req: CustomRequest<PointActionId, GetPointEarnDetailResponse, IEmptyObject>,
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
      PointActionId,
      IEmptyObject,
      UpdatePointEarnDetailRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updatePointEarnDetailRequestDTO =
        new UpdatePointEarnDetailRequestDTO(
          req.body,
          req.params.pointId,
          req.userId!,
          req.adminRef!
        );
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
        req.body,
        req.userId!,
        req.adminRef!
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
    req: CustomRequest<IEmptyObject, GetPointRedeemResponse[], IEmptyObject>,
    res: Response<APIResponse<GetPointRedeemResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetPointRedeemResponse[]>();
      const pointResponse = await this._pointService.getPointRedeem(
        req.userId!
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

  public async getPointRedeemDetail(
    req: CustomRequest<
      PointRedeemId,
      GetPointRedeemDetailResponse[],
      IEmptyObject
    >,
    res: Response<APIResponse<GetPointRedeemDetailResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetPointRedeemDetailResponse[]>();
      const pointResponse = await this._pointService.getPointRedeemDetail(
        req.params.pointRedeemId
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
      PointRedeemDetailId,
      IEmptyObject,
      UpdatePointRedeemDetailRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updatePointRedeemDetailRequestDTO =
        new UpdatePointRedeemDetailRequestDTO(
          req.body,
          req.params.pointRedeemDetailId,
          req.userId!,
          req.adminRef!
        );
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
    req: CustomRequest<PointRedeemDetailId, IEmptyObject, IEmptyObject>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      await this._pointService.deletePointRedeemDetail(
        req.params.pointRedeemDetailId
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
