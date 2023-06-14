import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { GetFloatingWidgetResponse } from "../types/response/widget/getFloatingWidgetResponse";
import WidgetService from "../services/widgetService";
import { InsertFloatingWidgetRequest } from "../types/request/widget/insertFloatingWidgetRequest";
import InsertFloatingWidgetRequestDTO from "../dto/widget/insertFloatingWidgetRequestDto";
import { UpdateFloatingWidgetRequest } from "../types/request/widget/updateFloatingWidgetRequest";
import UpdateFloatingWidgetRequestDTO from "../dto/widget/updateFloatingWidgetRequestDto";
import { InsertFloatingWidgetButtonRequest } from "../types/request/widget/insertFloatingWidgetButtonRequest";
import InsertFloatingWidgetButtonRequestDTO from "../dto/widget/insertFloatingWidgetButtonRequestDto";
import { GetFloatingWidgetButtonResponse } from "../types/response/widget/getFloatingWidgetButtonResponse";
import { UpdateFloatingWidgetButtonRequest } from "../types/request/widget/updateFloatingWidgetButtonRequest";
import UpdateFloatingWidgetButtonRequestDTO from "../dto/widget/updateFloatingWidgetButtonRequestDto";
import { InsertFloatingWidgetTextRequest } from "../types/request/widget/insertFloatingWidgetTextRequest";
import InsertFloatingWidgetTextRequestDTO from "../dto/widget/insertFloatingWidgetTextRequestDto";
import { GetFloatingWidgetTextResponse } from "../types/response/widget/getFloatingWidgetTextResponse";
import { UpdateFloatingWidgetTextRequest } from "../types/request/widget/updateFloatingWidgetTextRequest";
import UpdateFloatingWidgetTextRequestDTO from "../dto/widget/updateFloatingWidgetTextRequestDto";

export default class WidgetController {
  private _widgetService: WidgetService;

  constructor() {
    this._widgetService = new WidgetService();
  }
  public async insertFloatingWidgetSetting(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertFloatingWidgetRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertFloatingWidgetRequestDTO = new InsertFloatingWidgetRequestDTO(
        req.body,
        req.userId!,
        req.adminRef!
      );
      await this._widgetService.insertFloatingWidgetSetting(
        insertFloatingWidgetRequestDTO
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

  public async getFloatingWidgetSetting(
    req: CustomRequest<IEmptyObject, GetFloatingWidgetResponse, IEmptyObject>,
    res: Response<APIResponse<GetFloatingWidgetResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetFloatingWidgetResponse>();
      const widgetResponse = await this._widgetService.getFloatingWidgetSetting(
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

  public async updateFloatingWidgetSetting(
    req: CustomRequest<IEmptyObject, IEmptyObject, UpdateFloatingWidgetRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateFloatingWidgetRequestDTO = new UpdateFloatingWidgetRequestDTO(
        req.body,
        req.userId!
      );
      await this._widgetService.updateFloatingWidgetSetting(
        updateFloatingWidgetRequestDTO
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

  public async insertFloatingWidgetButton(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertFloatingWidgetButtonRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertFloatingWidgetButtonRequestDTO =
        new InsertFloatingWidgetButtonRequestDTO(
          req.body,
          req.userId!,
          req.adminRef!
        );
      await this._widgetService.insertFloatingWidgetButton(
        insertFloatingWidgetButtonRequestDTO
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

  public async getFloatingWidgetButton(
    req: CustomRequest<
      IEmptyObject,
      GetFloatingWidgetButtonResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetFloatingWidgetButtonResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetFloatingWidgetButtonResponse>();
      const widgetResponse = await this._widgetService.getFloatingWidgetButton(
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

  public async updateFloatingWidgetButton(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      UpdateFloatingWidgetButtonRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateFloatingWidgetButtonRequestDTO =
        new UpdateFloatingWidgetButtonRequestDTO(req.body, req.userId!);
      await this._widgetService.updateFloatingWidgetButton(
        updateFloatingWidgetButtonRequestDTO
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

  public async insertFloatingWidgetText(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertFloatingWidgetTextRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertFloatingWidgetTextRequestDTO =
        new InsertFloatingWidgetTextRequestDTO(
          req.body,
          req.userId!,
          req.adminRef!
        );
      await this._widgetService.insertFloatingWidgetText(
        insertFloatingWidgetTextRequestDTO
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

  public async getFloatingWidgetText(
    req: CustomRequest<
      IEmptyObject,
      GetFloatingWidgetTextResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetFloatingWidgetTextResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetFloatingWidgetTextResponse>();
      const widgetResponse = await this._widgetService.getFloatingWidgetText(
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

  public async updateFloatingWidgetText(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      UpdateFloatingWidgetTextRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateFloatingWidgetTextRequestDTO =
        new UpdateFloatingWidgetTextRequestDTO(req.body, req.userId!);
      await this._widgetService.updateFloatingWidgetText(
        updateFloatingWidgetTextRequestDTO
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
