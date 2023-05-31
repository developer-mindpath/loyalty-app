import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import {
  GetAccountEmbedParams,
  UpdateAccountEmbedParams,
} from "../types/request/params";
import { InsertAccountEmbedRequest } from "../types/request/accountEmbed/insertAccountEmbedRequest";
import InsertAccountEmbedRequestDTO from "../dto/accountEmbed/insertAccountEmbedRequestDto";
import { GetAccountEmbedResponse } from "../types/response/accountEmbed/getAccountEmbedResponse";
import UpdateAccountEmbedRequestDTO from "../dto/accountEmbed/updateAccountEmbedRequestDto";
import { UpdateAccountEmbedRequest } from "../types/request/accountEmbed/updateAccountEmbedRequest";
import AccountEmbedService from "../services/accountEmbedService";

export default class AccountEmbedController {
  private _accountEmbedService: AccountEmbedService;

  constructor() {
    this._accountEmbedService = new AccountEmbedService();
  }
  public async insertAccountEmbed(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertAccountEmbedRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertAccountEmbedRequestDTO = new InsertAccountEmbedRequestDTO(
        req.body
      );
      await this._accountEmbedService.insertAccountEmbed(
        insertAccountEmbedRequestDTO
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

  public async getAccountEmbed(
    req: CustomRequest<
      GetAccountEmbedParams,
      GetAccountEmbedResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetAccountEmbedResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetAccountEmbedResponse>();
      const widgetResponse = await this._accountEmbedService.getAccountEmbed(
        req.params.userId
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

  public async updateAccountEmbed(
    req: CustomRequest<
      UpdateAccountEmbedParams,
      IEmptyObject,
      UpdateAccountEmbedRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateAccountEmbedRequestDTO = new UpdateAccountEmbedRequestDTO(
        req.body,
        req.params.userId
      );
      await this._accountEmbedService.updateAccountEmbed(
        updateAccountEmbedRequestDTO
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
