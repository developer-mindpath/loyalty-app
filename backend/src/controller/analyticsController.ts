import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { GetAnalyticsResponse } from "../types/response/analytics/getAnalyticsResponse";
import AnalyticsService from "../services/analyticsService";
import { PeriodQuery } from "../types/request/params";
import GetAnalyticsDTO from "../dto/analytics/getAnalyticsDTO";

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
      const widgetResponse = await this._analyticsService.getAnalytics(
        getAnalyticsDTO
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
}
