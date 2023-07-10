import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { GetAnalyticsResponse } from "../types/response/analytics/getAnalyticsResponse";
import AnalyticsService from "../services/analyticsService";
import { AnalyticsReferralsParams, PeriodQuery } from "../types/request/params";
import GetAnalyticsDTO from "../dto/analytics/getAnalyticsDTO";
import { GetReferralsAnalyticsResponse } from "../types/response/analytics/getReferralsAnalyticsResponse";
import GetReferralsAnalyticsDTO from "../dto/analytics/getReferralsAnalyticsDTO";

export default class AnalyticsController {
  private _analyticsService: AnalyticsService;

  constructor() {
    this._analyticsService = new AnalyticsService();
  }

  public async getAnalytics(
    req: CustomRequest<
      IEmptyObject,
      GetAnalyticsResponse,
      IEmptyObject,
      PeriodQuery
    >,
    res: Response<APIResponse<GetAnalyticsResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetAnalyticsResponse>();
      const getAnalyticsDTO = new GetAnalyticsDTO(req.query, req.userId!);
      const analyticsResponse = await this._analyticsService.getAnalytics(
        getAnalyticsDTO
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = analyticsResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getReferralsAnalytics(
    req: CustomRequest<
      IEmptyObject,
      GetReferralsAnalyticsResponse,
      IEmptyObject,
      AnalyticsReferralsParams
    >,
    res: Response<APIResponse<GetReferralsAnalyticsResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetReferralsAnalyticsResponse>();
      const getReferralsAnalyticsDTO = new GetReferralsAnalyticsDTO(req.query);
      const analyticsResponse =
        await this._analyticsService.getReferralsAnalytics(
          getReferralsAnalyticsDTO
        );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = analyticsResponse;
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
