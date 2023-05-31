import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { GetPromptsParams, UpdatePromptsParams } from "../types/request/params";
import { InsertPromptsRequest } from "../types/request/prompts/insertPromptsRequest";
import InsertPromptsRequestDTO from "../dto/prompts/insertPromptsRequestDto";
import { GetPromptsResponse } from "../types/response/prompts/getPromptsResponse";
import { UpdatePromptsRequest } from "../types/request/prompts/updatePromptsRequest";
import UpdatePromptsRequestDTO from "../dto/prompts/updatePromptsRequestDto";
import PromptService from "../services/promptService";

export default class PromptController {
  private _promptService: PromptService;

  constructor() {
    this._promptService = new PromptService();
  }
  public async insertPromptsSetting(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertPromptsRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertPromptsRequestDTO = new InsertPromptsRequestDTO(req.body);
      await this._promptService.insertPromptsSetting(insertPromptsRequestDTO);
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

  public async getPromptsSetting(
    req: CustomRequest<GetPromptsParams, GetPromptsResponse, IEmptyObject>,
    res: Response<APIResponse<GetPromptsResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetPromptsResponse>();
      const widgetResponse = await this._promptService.getPromptsSetting(
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

  public async updatePromptsSetting(
    req: CustomRequest<UpdatePromptsParams, IEmptyObject, UpdatePromptsRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updatePromptsRequestDTO = new UpdatePromptsRequestDTO(
        req.body,
        req.params.userId
      );
      await this._promptService.updatePromptsSetting(updatePromptsRequestDTO);
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
