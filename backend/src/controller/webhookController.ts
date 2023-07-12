import { NextFunction, Response } from "express";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import InsertCustomerRequestDTO from "../dto/webhook/insertCustomerRequestDto";
import { StatusCodes } from "http-status-codes";
import constants from "../constants";
import { ExpressError } from "../helper/errorHandler";
import WebhookService from "../services/webhookService";
import UpdateCustomerRequestDTO from "../dto/webhook/updateCustomerRequestDto";
export default class WebhookController {
  private _webhookService: WebhookService;

  constructor() {
    this._webhookService = new WebhookService();
  }

  public async createCustomer(
    req: CustomRequest<IEmptyObject, IEmptyObject, IEmptyObject, IEmptyObject>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const reqBody = JSON.parse(req.body.toString());
      const response = new APIResponse<IEmptyObject>();
      const insertCustomerRequestDTO = new InsertCustomerRequestDTO(reqBody);
      await this._webhookService.createCustomer(insertCustomerRequestDTO);
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

  public async updateCustomer(
    req: CustomRequest<IEmptyObject, IEmptyObject, IEmptyObject, IEmptyObject>,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const reqBody = JSON.parse(req.body.toString());
      const response = new APIResponse<IEmptyObject>();
      const updateCustomerRequestDTO = new UpdateCustomerRequestDTO(reqBody);
      await this._webhookService.updateCustomer(updateCustomerRequestDTO);
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
