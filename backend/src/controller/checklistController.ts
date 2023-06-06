import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import {
  ChecklistActionId,
  ChecklistCategoryId,
  ChecklistDetailId,
  ChecklistId,
} from "../types/request/params";
import { GetChecklistCategoryResponse } from "../types/response/checklist/getChecklistCategoryResponse";
import ChecklistService from "../services/checklistService";
import { InsertChecklistCategoryRequest } from "../types/request/checklist/insertChecklistCategoryRequest";
import InsertChecklistCategoryRequestDTO from "../dto/checklist/insertChecklistCategoryRequestDto";
import UpdateChecklistCategoryRequestDTO from "../dto/checklist/updateChecklistCategoryRequestDto";
import { GetChecklistResponse } from "../types/response/checklist/getChecklistResponse";
import { InsertChecklistRequest } from "../types/request/checklist/insertChecklistRequest";
import InsertChecklistRequestDTO from "../dto/checklist/insertChecklistRequestDto";
import { UpdateChecklistRequest } from "../types/request/checklist/updateChecklistRequest";
import UpdateChecklistRequestDTO from "../dto/checklist/updateChecklistRequestDto";
import { UpdateChecklistCategoryRequest } from "../types/request/checklist/updateChecklistCategoryRequest";
import { InsertChecklistDetailRequest } from "../types/request/checklist/insertChecklistDetailRequest";
import InsertChecklistDetailRequestDTO from "../dto/checklist/insertChecklistDetailRequestDto";
import { GetChecklistDetailResponse } from "../types/response/checklist/getChecklistDetailResponse";
import { UpdateChecklistDetailRequest } from "../types/request/checklist/updateChecklistDetailRequest";
import UpdateChecklistDetailRequestDTO from "../dto/checklist/updateChecklistDetailRequestDto";
import { InsertChecklistActionRequest } from "../types/request/checklist/insertChecklistActionRequest";
import InsertChecklistActionRequestDTO from "../dto/checklist/insertChecklistActionRequestDto";
import { GetChecklistActionResponse } from "../types/response/checklist/getChecklistActionResponse";
import { UpdateChecklistActionRequest } from "../types/request/checklist/updateChecklistActionRequest";
import UpdateChecklistActionRequestDTO from "../dto/checklist/updateChecklistActionRequestDto";

export default class ChecklistController {
  private _checklistService: ChecklistService;

  constructor() {
    this._checklistService = new ChecklistService();
  }
  public async insertChecklistCategory(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertChecklistCategoryRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertChecklistCategoryRequestDTO =
        new InsertChecklistCategoryRequestDTO(req.body);
      await this._checklistService.insertChecklistCategory(
        insertChecklistCategoryRequestDTO
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

  public async getChecklistCategory(
    req: CustomRequest<
      IEmptyObject,
      Array<GetChecklistCategoryResponse>,
      IEmptyObject
    >,
    res: Response<APIResponse<Array<GetChecklistCategoryResponse>>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<Array<GetChecklistCategoryResponse>>();
      const checklistResponse =
        await this._checklistService.getChecklistCategory();
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = checklistResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateChecklistCategory(
    req: CustomRequest<
      ChecklistCategoryId,
      IEmptyObject,
      UpdateChecklistCategoryRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateChecklistCategoryRequestDTO =
        new UpdateChecklistCategoryRequestDTO(req.body, req.params.categoryId);
      await this._checklistService.updateChecklistCategory(
        updateChecklistCategoryRequestDTO
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

  public async getChecklist(
    req: CustomRequest<
      ChecklistCategoryId,
      Array<GetChecklistResponse>,
      IEmptyObject
    >,
    res: Response<APIResponse<Array<GetChecklistResponse>>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<Array<GetChecklistResponse>>();
      const checklistResponse = await this._checklistService.getChecklist(
        req.params.categoryId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = checklistResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async insertChecklist(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertChecklistRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertChecklistRequestDTO = new InsertChecklistRequestDTO(req.body);
      await this._checklistService.insertChecklist(insertChecklistRequestDTO);
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

  public async updateChecklist(
    req: CustomRequest<ChecklistId, IEmptyObject, UpdateChecklistRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateChecklistRequestDTO = new UpdateChecklistRequestDTO(
        req.body,
        req.params.checklistId
      );
      await this._checklistService.updateChecklist(updateChecklistRequestDTO);
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

  public async insertChecklistDetail(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertChecklistDetailRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertChecklistDetailRequestDTO =
        new InsertChecklistDetailRequestDTO(req.body);
      await this._checklistService.insertChecklistDetail(
        insertChecklistDetailRequestDTO
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

  public async getChecklistDetail(
    req: CustomRequest<
      ChecklistId,
      Array<GetChecklistDetailResponse>,
      IEmptyObject
    >,
    res: Response<APIResponse<Array<GetChecklistDetailResponse>>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<Array<GetChecklistDetailResponse>>();
      const checklistResponse = await this._checklistService.getChecklistDetail(
        req.params.checklistId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = checklistResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateChecklistDetail(
    req: CustomRequest<
      ChecklistDetailId,
      IEmptyObject,
      UpdateChecklistDetailRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateChecklistDetailRequestDTO =
        new UpdateChecklistDetailRequestDTO(
          req.body,
          req.params.checklistDetailId
        );
      await this._checklistService.updateChecklistDetail(
        updateChecklistDetailRequestDTO
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

  public async insertChecklistAction(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertChecklistActionRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertChecklistActionRequestDTO =
        new InsertChecklistActionRequestDTO(req.body);
      await this._checklistService.insertChecklistAction(
        insertChecklistActionRequestDTO
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

  public async getChecklistAction(
    req: CustomRequest<
      ChecklistDetailId,
      Array<GetChecklistActionResponse>,
      IEmptyObject
    >,
    res: Response<APIResponse<Array<GetChecklistActionResponse>>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<Array<GetChecklistActionResponse>>();
      const checklistResponse = await this._checklistService.getChecklistAction(
        req.params.checklistDetailId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = checklistResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateChecklistAction(
    req: CustomRequest<
      ChecklistActionId,
      IEmptyObject,
      UpdateChecklistActionRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateChecklistActionRequestDTO =
        new UpdateChecklistActionRequestDTO(
          req.body,
          req.params.checklistActionId
        );
      await this._checklistService.updateChecklistAction(
        updateChecklistActionRequestDTO
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
