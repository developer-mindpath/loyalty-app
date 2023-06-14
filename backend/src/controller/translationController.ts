import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { GetTranslationResponse } from "../types/response/translation/getTranslationResponse";
import { InsertTranslationRequest } from "../types/request/translation/insertTranslationRequest";
import InsertTranslationRequestDTO from "../dto/translation/insertTranslationRequestDto";
import TranslationService from "../services/translationService";
import { UpdateTranslationRequest } from "../types/request/translation/updateTranslationRequest";
import UpdateTranslationRequestDTO from "../dto/translation/updateTranslationRequestDto";

export default class TranslationController {
  private _translationService: TranslationService;

  constructor() {
    this._translationService = new TranslationService();
  }
  public async insertTranslation(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertTranslationRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertTranslationRequestDTO = new InsertTranslationRequestDTO(
        req.body,
        req.userId!,
        req.adminRef!
      );
      await this._translationService.insertTranslation(
        insertTranslationRequestDTO
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

  public async getTranslation(
    req: CustomRequest<IEmptyObject, GetTranslationResponse, IEmptyObject>,
    res: Response<APIResponse<GetTranslationResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetTranslationResponse>();
      const widgetResponse = await this._translationService.getTranslation(
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

  public async updateTranslation(
    req: CustomRequest<IEmptyObject, IEmptyObject, UpdateTranslationRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateTranslationRequestDTO = new UpdateTranslationRequestDTO(
        req.body,
        req.userId!
      );
      await this._translationService.updateTranslation(
        updateTranslationRequestDTO
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
