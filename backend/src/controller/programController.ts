import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { InsertProgramStatusRequest } from "../types/request/program/insertProgramStatusRequest";
import InsertProgramStatusRequestDTO from "../dto/program/insertProgramStatusRequestDto";
import ProgramService from "../services/programService";
import { GetProgramStatusResponse } from "../types/response/program/getProgramStatusResponse";
import { UpdateProgramStatusRequest } from "../types/request/program/updateProgramStatusRequest";
import UpdateProgramStatusRequestDTO from "../dto/program/updateProgramStatusRequestDto";

export default class ProgramController {
  private _programService: ProgramService;

  constructor() {
    this._programService = new ProgramService();
  }
  public async insertProgramStatus(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertProgramStatusRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertProgramStatusRequestDTO = new InsertProgramStatusRequestDTO(
        req.body,
        req.userId!,
        req.adminRef!
      );
      await this._programService.insertProgramStatus(
        insertProgramStatusRequestDTO
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

  public async getProgramStatus(
    req: CustomRequest<IEmptyObject, GetProgramStatusResponse, IEmptyObject>,
    res: Response<APIResponse<GetProgramStatusResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetProgramStatusResponse>();
      const programResponse = await this._programService.getProgramStatus(
        req.userId!
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = programResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateProgramStatus(
    req: CustomRequest<IEmptyObject, IEmptyObject, UpdateProgramStatusRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateProgramStatusRequestDTO = new UpdateProgramStatusRequestDTO(
        req.body,
        req.userId!
      );
      await this._programService.updateProgramStatus(
        updateProgramStatusRequestDTO
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
