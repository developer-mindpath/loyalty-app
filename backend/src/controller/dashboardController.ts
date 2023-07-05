import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { GetDashboardResponse } from "../types/response/dashboard/getDashboardResponse";
import DashboardService from "../services/dashboardService";
import { GetDashboardSalesGeneratedResponse } from "src/types/response/dashboard/getDashboardTotalSalesGeneratedResponse";

export default class DashboardController {
  private _dashboardService: DashboardService;

  constructor() {
    this._dashboardService = new DashboardService();
  }

  public async getDashboard(
    req: CustomRequest<IEmptyObject, GetDashboardResponse, IEmptyObject>,
    res: Response<APIResponse<GetDashboardResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetDashboardResponse>();
      const widgetResponse = await this._dashboardService.getDashboard(
        req.userId!
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

  public async getDashboardSalesGenerated(
    req: CustomRequest<IEmptyObject, GetDashboardSalesGeneratedResponse, IEmptyObject>,
    res: Response<APIResponse<GetDashboardSalesGeneratedResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetDashboardSalesGeneratedResponse>();
      const widgetResponse = await this._dashboardService.getDashboardSalesGenerated(
        req.userId!
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
