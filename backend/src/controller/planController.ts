import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import { GetPlanResponse } from "../types/response/plan/getPlanResponse";
import PlanService from "../services/planService";
import { InsertPlanRequest } from "../types/request/plan/insertPlanRequest";
import InsertPlanRequestDTO from "../dto/plan/insertPlanRequestDto";
import { PlanFeatureId, PlanId } from "../types/request/params";
import { UpdatePlanRequest } from "../types/request/plan/updatePlanRequest";
import UpdatePlanRequestDTO from "../dto/plan/updatePlanRequestDto";
import { GetPlanFeatureResponse } from "../types/response/plan/getPlanFeatureResponse";
import { InsertPlanFeatureRequest } from "../types/request/plan/insertPlanFeatureRequest";
import InsertPlanFeatureRequestDTO from "../dto/plan/insertPlanFeatureRequestDto";
import { UpdatePlanFeatureRequest } from "../types/request/plan/updatePlanFeatureRequest";
import UpdatePlanFeatureRequestDTO from "../dto/plan/updatePlanFeatureRequestDto";

export default class PlanController {
  private _planService: PlanService;

  constructor() {
    this._planService = new PlanService();
  }
  public async insertPlan(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertPlanRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertPlanRequestDTO = new InsertPlanRequestDTO(
        req.body,
        req.userId!,
        req.adminRef!
      );
      await this._planService.insertPlan(insertPlanRequestDTO);
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

  public async getPlans(
    req: CustomRequest<IEmptyObject, Array<GetPlanResponse>, IEmptyObject>,
    res: Response<APIResponse<Array<GetPlanResponse>>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<Array<GetPlanResponse>>();
      const planResponse = await this._planService.getPlans();
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = planResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updatePlan(
    req: CustomRequest<PlanId, IEmptyObject, UpdatePlanRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updatePlanRequestDTO = new UpdatePlanRequestDTO(
        req.body,
        req.params.planId,
        req.userId!
      );
      await this._planService.updatePlan(updatePlanRequestDTO);
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

  public async getPlanFeatures(
    req: CustomRequest<
      IEmptyObject,
      Array<GetPlanFeatureResponse>,
      IEmptyObject
    >,
    res: Response<APIResponse<Array<GetPlanFeatureResponse>>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<Array<GetPlanFeatureResponse>>();
      const planResponse = await this._planService.getPlanFeatures();
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = planResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async insertPlanFeature(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertPlanFeatureRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertPlanFeatureRequestDTO = new InsertPlanFeatureRequestDTO(
        req.body,
        req.userId!,
        req.adminRef!
      );
      await this._planService.insertPlanFeature(insertPlanFeatureRequestDTO);
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

  public async updatePlanFeature(
    req: CustomRequest<PlanFeatureId, IEmptyObject, UpdatePlanFeatureRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updatePlanFeatureRequestDTO = new UpdatePlanFeatureRequestDTO(
        req.body,
        req.params.planFeatureId,
        req.userId!
      );
      await this._planService.updatePlanFeature(updatePlanFeatureRequestDTO);
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
