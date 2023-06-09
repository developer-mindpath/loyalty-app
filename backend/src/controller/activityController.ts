import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { Pagination } from "../types/request/params";
import ActivityService from "../services/activityService";
import { GetLoyaltyProgramActivityResponse } from "../types/response/activity/getLoyaltyProgramActivityResponse";
import PaginationDTO from "../dto/paginationDTO";
import { GetReferralProgramActivityResponse } from "../types/response/activity/getReferralProgramActivityResponse";
import { GetVipProgramActivityResponse } from "../types/response/activity/getVipProgramActivityResponse";

export default class ActivityController {
  private _activityService: ActivityService;

  constructor() {
    this._activityService = new ActivityService();
  }

  public async getLoyaltyProgramActivity(
    req: CustomRequest<
      IEmptyObject,
      GetLoyaltyProgramActivityResponse[],
      IEmptyObject,
      Pagination
    >,
    res: Response<APIResponse<GetLoyaltyProgramActivityResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetLoyaltyProgramActivityResponse[]>();
      const paginationDTO = new PaginationDTO(req.query);
      const activityResponse =
        await this._activityService.getLoyaltyProgramActivity(
          req.userId!,
          paginationDTO
        );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = activityResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getReferralProgramActivity(
    req: CustomRequest<
      IEmptyObject,
      GetReferralProgramActivityResponse[],
      IEmptyObject,
      Pagination
    >,
    res: Response<APIResponse<GetReferralProgramActivityResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetReferralProgramActivityResponse[]>();
      const paginationDTO = new PaginationDTO(req.query);
      const activityResponse =
        await this._activityService.getReferralProgramActivity(
          req.userId!,
          paginationDTO
        );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = activityResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getVipProgramActivity(
    req: CustomRequest<
      IEmptyObject,
      GetVipProgramActivityResponse[],
      IEmptyObject,
      Pagination
    >,
    res: Response<APIResponse<GetVipProgramActivityResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetVipProgramActivityResponse[]>();
      const paginationDTO = new PaginationDTO(req.query);
      const activityResponse =
        await this._activityService.getVipProgramActivity(
          req.userId!,
          paginationDTO
        );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = activityResponse;
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
