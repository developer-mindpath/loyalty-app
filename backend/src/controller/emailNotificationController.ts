import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import {
  DeleteEmailNotificationProgramParams,
  GetEmailNotificationProgramParams,
  GetEmailNotificationsProgramParams,
  UpdateEmailNotificationProgramParams,
} from "../types/request/params";
import { InsertEmailNotificationRequest } from "../types/request/emailNotification/insertEmailNotificationRequest";
import InsertEmailNotificationRequestDTO from "../dto/insertEmailNotificationRequestDto";
import EmailNotificationService from "../services/emailNotificationService";
import { GetEmailNotificationResponse } from "../types/response/emailNotification/getEmailNotificationResponse";
import { GetEmailNotificationsResponse } from "../types/response/emailNotification/getEmailNotificationsResponse";
import { UpdateEmailNotificationRequest } from "../types/request/emailNotification/updateEmailNotificationRequest";
import UpdateEmailNotificationRequestDTO from "../dto/updateEmailNotificationRequestDto";

export default class EmailNotificationController {
  private _emailNotificationService: EmailNotificationService;

  constructor() {
    this._emailNotificationService = new EmailNotificationService();
  }
  public async insertEmailNotification(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertEmailNotificationRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertEmailNotificationRequestDTO =
        new InsertEmailNotificationRequestDTO(req.body);
      await this._emailNotificationService.insertEmailNotification(
        insertEmailNotificationRequestDTO
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

  public async getEmailNotification(
    req: CustomRequest<
      GetEmailNotificationProgramParams,
      GetEmailNotificationResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetEmailNotificationResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetEmailNotificationResponse>();
      const referralResponse =
        await this._emailNotificationService.getEmailNotification(
          req.params.emailProgramId
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

  public async getEmailNotifications(
    req: CustomRequest<
      GetEmailNotificationsProgramParams,
      GetEmailNotificationsResponse[],
      IEmptyObject
    >,
    res: Response<APIResponse<GetEmailNotificationsResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetEmailNotificationsResponse[]>();
      const pointResponse =
        await this._emailNotificationService.getEmailNotifications(
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

  public async updateEmailNotification(
    req: CustomRequest<
      UpdateEmailNotificationProgramParams,
      IEmptyObject,
      UpdateEmailNotificationRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateEmailNotificationRequestDTO =
        new UpdateEmailNotificationRequestDTO(
          req.body,
          req.params.emailProgramId
        );
      await this._emailNotificationService.updateEmailNotification(
        updateEmailNotificationRequestDTO
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

  public async deleteEmailNotification(
    req: CustomRequest<
      DeleteEmailNotificationProgramParams,
      IEmptyObject,
      IEmptyObject
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      await this._emailNotificationService.deleteEmailNotification(
        req.params.emailProgramId
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
