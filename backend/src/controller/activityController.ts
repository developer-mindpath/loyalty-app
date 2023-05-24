import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { GetLoyaltyProgramActivityParams } from "../types/request/params";
import { GetEmailNotificationsResponse } from "../types/response/emailNotification/getEmailNotificationsResponse";
import ActivityService from "src/services/activityService";
import { GetLoyaltyProgramActivityResponse } from "src/types/response/activity/getLoyaltyProgramActivityResponse";

export default class ActivityController {
  private _activityService: ActivityService;

  constructor() {
    this._activityService = new ActivityService();
  }

  public async getLoyaltyProgramActivity(
    req: CustomRequest<
      GetLoyaltyProgramActivityParams,
      GetLoyaltyProgramActivityResponse[],
      IEmptyObject
    >,
    res: Response<APIResponse<GetLoyaltyProgramActivityResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetLoyaltyProgramActivityResponse[]>();
      const pointResponse =
        await this._activityService.getLoyaltyProgramActivity(
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
}
