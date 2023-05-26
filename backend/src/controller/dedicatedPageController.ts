import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import {
  GetDedicatedPageBannerParams,
  GetDedicatedPageExplainerParams,
  GetDedicatedPageParams,
  GetDedicatedPageReferralParams,
  GetDedicatedPageWayToEarnParams,
  UpdateDedicatedPageBannerParams,
  UpdateDedicatedPageExplainerParams,
  UpdateDedicatedPageParams,
  UpdateDedicatedPageReferralParams,
  UpdateDedicatedPageWayToEarnParams,
} from "../types/request/params";
import { InsertDedicatedPageRequest } from "../types/request/dedicatedPage/insertDedicatedPageRequest";
import InsertDedicatedPageRequestDTO from "../dto/insertDedicatedPageRequestDto";
import DedicatedPageService from "../services/dedicatedPageService";
import { GetDedicatedPageResponse } from "../types/response/dedicatedPage/getDedicatedPageResponse";
import { UpdateDedicatedPageRequest } from "../types/request/dedicatedPage/updateDedicatedPageRequest";
import UpdateDedicatedPageRequestDTO from "../dto/updateDedicatedPageRequestDto";
import { InsertDedicatedPageBannerRequest } from "../types/request/dedicatedPage/insertDedicatedPageBannerRequest";
import InsertDedicatedPageBannerRequestDTO from "../dto/insertDedicatedPageBannerRequestDto";
import { GetDedicatedPageBannerResponse } from "../types/response/dedicatedPage/getDedicatedPageBannerResponse";
import { UpdateDedicatedPageBannerRequest } from "../types/request/dedicatedPage/updateDedicatedPageBannerRequest";
import UpdateDedicatedPageBannerRequestDTO from "../dto/updateDedicatedPageBannerRequestDto";
import { InsertDedicatedPageExplainerRequest } from "../types/request/dedicatedPage/insertDedicatedPageExplainerRequest";
import InsertDedicatedPageExplainerRequestDTO from "../dto/insertDedicatedPageExplainerRequestDto";
import { GetDedicatedPageExplainerResponse } from "../types/response/dedicatedPage/getDedicatedPageExplainerResponse";
import { UpdateDedicatedPageExplainerRequest } from "../types/request/dedicatedPage/updateDedicatedPageExplainerRequest";
import UpdateDedicatedPageExplainerRequestDTO from "../dto/updateDedicatedPageExplainerRequestDto";
import { InsertDedicatedPageReferralRequest } from "../types/request/dedicatedPage/insertDedicatedPageReferralRequest";
import InsertDedicatedPageReferralRequestDTO from "../dto/insertDedicatedPageReferralRequestDto";
import { GetDedicatedPageReferralResponse } from "../types/response/dedicatedPage/getDedicatedPageReferralResponse";
import UpdateDedicatedPageReferralRequestDTO from "../dto/updateDedicatedPageReferralRequestDto";
import { UpdateDedicatedPageReferralRequest } from "../types/request/dedicatedPage/updateDedicatedPageReferralRequest";
import { InsertDedicatedPageWayToEarnRequest } from "../types/request/dedicatedPage/insertDedicatedPageWayToEarnRequest";
import InsertDedicatedPageWayToEarnRequestDTO from "../dto/insertDedicatedPageWayToEarnRequestDto";
import { GetDedicatedPageWayToEarnResponse } from "../types/response/dedicatedPage/getDedicatedPageWayToEarnResponse";
import { UpdateDedicatedPageWayToEarnRequest } from "../types/request/dedicatedPage/updateDedicatedPageWayToEarnRequest";
import UpdateDedicatedPageWayToEarnRequestDTO from "../dto/updateDedicatedPageWayToEarnRequestDto";

export default class DedicatedPageController {
  private _dedicatedPageService: DedicatedPageService;

  constructor() {
    this._dedicatedPageService = new DedicatedPageService();
  }
  public async insertDedicatedPage(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertDedicatedPageRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertDedicatedPageRequestDTO = new InsertDedicatedPageRequestDTO(
        req.body
      );
      await this._dedicatedPageService.insertDedicatedPage(
        insertDedicatedPageRequestDTO
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

  public async getDedicatedPage(
    req: CustomRequest<
      GetDedicatedPageParams,
      GetDedicatedPageResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetDedicatedPageResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetDedicatedPageResponse>();
      const dedicatedPageResponse =
        await this._dedicatedPageService.getDedicatedPage(req.params.userId);
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = dedicatedPageResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateDedicatedPage(
    req: CustomRequest<
      UpdateDedicatedPageParams,
      IEmptyObject,
      UpdateDedicatedPageRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateDedicatedPageRequestDTO = new UpdateDedicatedPageRequestDTO(
        req.body,
        req.params.userId
      );
      await this._dedicatedPageService.updateDedicatedPage(
        updateDedicatedPageRequestDTO
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

  public async insertDedicatedPageBanner(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertDedicatedPageBannerRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertDedicatedPageBannerRequestDTO =
        new InsertDedicatedPageBannerRequestDTO(req.body);
      await this._dedicatedPageService.insertDedicatedPageBanner(
        insertDedicatedPageBannerRequestDTO
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

  public async getDedicatedPageBanner(
    req: CustomRequest<
      GetDedicatedPageBannerParams,
      GetDedicatedPageBannerResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetDedicatedPageBannerResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetDedicatedPageBannerResponse>();
      const dedicatedPageResponse =
        await this._dedicatedPageService.getDedicatedPageBanner(
          req.params.userId
        );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = dedicatedPageResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateDedicatedPageBanner(
    req: CustomRequest<
      UpdateDedicatedPageBannerParams,
      IEmptyObject,
      UpdateDedicatedPageBannerRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateDedicatedPageBannerRequestDTO =
        new UpdateDedicatedPageBannerRequestDTO(req.body, req.params.userId);
      await this._dedicatedPageService.updateDedicatedPageBanner(
        updateDedicatedPageBannerRequestDTO
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

  public async insertDedicatedPageExplainer(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertDedicatedPageExplainerRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertDedicatedPageExplainerRequestDTO =
        new InsertDedicatedPageExplainerRequestDTO(req.body);
      await this._dedicatedPageService.insertDedicatedPageExplainer(
        insertDedicatedPageExplainerRequestDTO
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

  public async getDedicatedPageExplainer(
    req: CustomRequest<
      GetDedicatedPageExplainerParams,
      GetDedicatedPageExplainerResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetDedicatedPageExplainerResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetDedicatedPageExplainerResponse>();
      const dedicatedPageResponse =
        await this._dedicatedPageService.getDedicatedPageExplainer(
          req.params.userId
        );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = dedicatedPageResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateDedicatedPageExplainer(
    req: CustomRequest<
      UpdateDedicatedPageExplainerParams,
      IEmptyObject,
      UpdateDedicatedPageExplainerRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateDedicatedPageExplainerRequestDTO =
        new UpdateDedicatedPageExplainerRequestDTO(req.body, req.params.userId);
      await this._dedicatedPageService.updateDedicatedPageExplainer(
        updateDedicatedPageExplainerRequestDTO
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

  public async insertDedicatedPageReferral(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertDedicatedPageReferralRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertDedicatedPageReferralRequestDTO =
        new InsertDedicatedPageReferralRequestDTO(req.body);
      await this._dedicatedPageService.insertDedicatedPageReferral(
        insertDedicatedPageReferralRequestDTO
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

  public async getDedicatedPageReferral(
    req: CustomRequest<
      GetDedicatedPageReferralParams,
      GetDedicatedPageReferralResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetDedicatedPageReferralResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetDedicatedPageReferralResponse>();
      const dedicatedPageResponse =
        await this._dedicatedPageService.getDedicatedPageReferral(
          req.params.userId
        );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = dedicatedPageResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateDedicatedPageReferral(
    req: CustomRequest<
      UpdateDedicatedPageReferralParams,
      IEmptyObject,
      UpdateDedicatedPageReferralRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateDedicatedPageReferralRequestDTO =
        new UpdateDedicatedPageReferralRequestDTO(req.body, req.params.userId);
      await this._dedicatedPageService.updateDedicatedPageReferral(
        updateDedicatedPageReferralRequestDTO
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

  public async insertDedicatedPageWayToEarn(
    req: CustomRequest<
      IEmptyObject,
      IEmptyObject,
      InsertDedicatedPageWayToEarnRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertDedicatedPageWayToEarnRequestDTO =
        new InsertDedicatedPageWayToEarnRequestDTO(req.body);
      await this._dedicatedPageService.insertDedicatedPageWayToEarn(
        insertDedicatedPageWayToEarnRequestDTO
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

  public async getDedicatedPageWayToEarn(
    req: CustomRequest<
      GetDedicatedPageWayToEarnParams,
      GetDedicatedPageWayToEarnResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetDedicatedPageWayToEarnResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetDedicatedPageWayToEarnResponse>();
      const dedicatedPageResponse =
        await this._dedicatedPageService.getDedicatedPageWayToEarn(
          req.params.userId
        );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = dedicatedPageResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateDedicatedPageWayToEarn(
    req: CustomRequest<
      UpdateDedicatedPageWayToEarnParams,
      IEmptyObject,
      UpdateDedicatedPageWayToEarnRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateDedicatedPageWayToEarnRequestDTO =
        new UpdateDedicatedPageWayToEarnRequestDTO(req.body, req.params.userId);
      await this._dedicatedPageService.updateDedicatedPageWayToEarn(
        updateDedicatedPageWayToEarnRequestDTO
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
