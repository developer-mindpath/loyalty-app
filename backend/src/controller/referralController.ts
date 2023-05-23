import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { InsertReferralProgramRequest } from "../types/request/referral/insertReferralProgramRequest";
import InsertReferralProgramRequestDTO from "../dto/insertReferralProgramRequestDto";
import ReferralService from "../services/referralService";
import {
  DeleteReferralProgramParams,
  GetReferralProgramParams,
  UpdateReferralProgramParams,
} from "../types/request/params";
import { GetReferralProgramResponse } from "../types/response/referral/getReferralProgramResponse";
import { UpdateReferralProgramRequest } from "../types/request/referral/updateReferralProgramRequest";
import UpdateReferralProgramRequestDTO from "../dto/updateReferralProgramRequestDto";

export default class ReferralController {
  private _referralService: ReferralService;

  constructor() {
    this._referralService = new ReferralService();
  }
  public async insertReferralProgram(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertReferralProgramRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertReferralProgramRequestDTO =
        new InsertReferralProgramRequestDTO(req.body);
      await this._referralService.insertReferralProgram(
        insertReferralProgramRequestDTO
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

  public async getReferralProgram(
    req: CustomRequest<
      GetReferralProgramParams,
      GetReferralProgramResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetReferralProgramResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetReferralProgramResponse>();
      const referralResponse = await this._referralService.getReferralProgram(
        req.params
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = referralResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateReferralProgram(
    req: CustomRequest<
      UpdateReferralProgramParams,
      IEmptyObject,
      UpdateReferralProgramRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateReferralProgramRequestDTO =
        new UpdateReferralProgramRequestDTO(req.body, req.params.referralId);
      await this._referralService.updateReferralProgram(
        updateReferralProgramRequestDTO
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

  public async deleteReferralProgram(
    req: CustomRequest<DeleteReferralProgramParams, IEmptyObject, IEmptyObject>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      await this._referralService.deleteReferralProgram(req.params.referralId);
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
