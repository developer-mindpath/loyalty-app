import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import CustomRequest from "../types/request/customRequest";
import { APIResponse, IEmptyObject } from "../helper/errorHandler/apiResponse";
import { ExpressError } from "../helper/errorHandler";
import constants from "../constants";
import {
  UserId,
  VipTierBenefitId,
  VipTierId,
  VipTierRewardId,
} from "../types/request/params";
import { InsertVipRequest } from "../types/request/vip/insertVipRequest";
import InsertVipRequestDTO from "../dto/vip/insertVipRequestDto";
import UpdateVipRequestDTO from "../dto/vip/updateVipRequestDto";
import { GetVipResponse } from "../types/response/vip/getVipResponse";
import { UpdateVipRequest } from "../types/request/vip/updateVipRequest";
import VipService from "../services/vipService";
import { InsertVipTierRequest } from "../types/request/vip/insertVipTierRequest";
import InsertVipTierRequestDTO from "../dto/vip/insertVipTierRequestDto";
import { GetVipTierResponse } from "../types/response/vip/getVipTierResponse";
import { UpdateVipTierRequest } from "../types/request/vip/updateVipTierRequest";
import UpdateVipTierRequestDTO from "../dto/vip/updateVipTierRequestDto";
import { GetVipTierRewardResponse } from "../types/response/vip/getVipTierRewardResponse";
import { InsertVipTierRewardRequest } from "../types/request/vip/insertVipTierRewardRequest";
import InsertVipTierRewardRequestDTO from "../dto/vip/insertVipTierRewardRequestDto";
import { UpdateVipTierRewardRequest } from "../types/request/vip/updateVipTierRewardRequest";
import UpdateVipTierRewardRequestDTO from "../dto/vip/updateVipTierRewardRequestDto";
import { GetVipTierBenefitResponse } from "../types/response/vip/getVipTierBenefitResponse";
import { InsertVipTierBenefitRequest } from "../types/request/vip/insertVipTierBenefitRequest";
import InsertVipTierBenefitRequestDTO from "../dto/vip/insertVipTierBenefitRequestDto";
import { UpdateVipTierBenefitRequest } from "../types/request/vip/updateVipTierBenefitRequest";
import UpdateVipTierBenefitRequestDTO from "../dto/vip/updateVipTierBenefitRequestDto";

export default class VipController {
  private _vipService: VipService;

  constructor() {
    this._vipService = new VipService();
  }
  public async insertVip(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertVipRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertVipRequestDTO = new InsertVipRequestDTO(req.body);
      await this._vipService.insertVip(insertVipRequestDTO);
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

  public async getVip(
    req: CustomRequest<UserId, GetVipResponse, IEmptyObject>,
    res: Response<APIResponse<GetVipResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetVipResponse>();
      const vipResponse = await this._vipService.getVip(req.params.userId);
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = vipResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateVip(
    req: CustomRequest<UserId, IEmptyObject, UpdateVipRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateVipRequestDTO = new UpdateVipRequestDTO(
        req.body,
        req.params.userId
      );
      await this._vipService.updateVip(updateVipRequestDTO);
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

  public async insertVipTier(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertVipTierRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertVipTierRequestDTO = new InsertVipTierRequestDTO(req.body);
      await this._vipService.insertVipTier(insertVipTierRequestDTO);
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

  public async getVipTiers(
    req: CustomRequest<UserId, Array<GetVipTierResponse>, IEmptyObject>,
    res: Response<APIResponse<Array<GetVipTierResponse>>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<Array<GetVipTierResponse>>();
      const vipResponse = await this._vipService.getVipTiers(req.params.userId);
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = vipResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getVipTier(
    req: CustomRequest<VipTierId, GetVipTierResponse, IEmptyObject>,
    res: Response<APIResponse<GetVipTierResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetVipTierResponse>();
      const vipResponse = await this._vipService.getVipTier(
        req.params.vipTierId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = vipResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async updateVipTier(
    req: CustomRequest<VipTierId, IEmptyObject, UpdateVipTierRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateVipTierRequestDTO = new UpdateVipTierRequestDTO(
        req.body,
        req.params.vipTierId
      );
      await this._vipService.updateVipTier(updateVipTierRequestDTO);
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

  public async getVipTierRewards(
    req: CustomRequest<VipTierId, GetVipTierRewardResponse[], IEmptyObject>,
    res: Response<APIResponse<GetVipTierRewardResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetVipTierRewardResponse[]>();
      const vipResponse = await this._vipService.getVipTierRewards(
        req.params.vipTierId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = vipResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getVipTierReward(
    req: CustomRequest<VipTierRewardId, GetVipTierRewardResponse, IEmptyObject>,
    res: Response<APIResponse<GetVipTierRewardResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetVipTierRewardResponse>();
      const vipResponse = await this._vipService.getVipTierReward(
        req.params.vipTierRewardId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = vipResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async insertVipTierReward(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertVipTierRewardRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertVipTierRewardRequestDTO = new InsertVipTierRewardRequestDTO(
        req.body
      );
      await this._vipService.insertVipTierReward(insertVipTierRewardRequestDTO);
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

  public async updateVipTierReward(
    req: CustomRequest<
      VipTierRewardId,
      IEmptyObject,
      UpdateVipTierRewardRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateVipTierRewardRequestDTO = new UpdateVipTierRewardRequestDTO(
        req.body,
        req.params.vipTierRewardId
      );
      await this._vipService.updateVipTierReward(updateVipTierRewardRequestDTO);
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

  public async getVipTierBenefits(
    req: CustomRequest<VipTierId, GetVipTierBenefitResponse[], IEmptyObject>,
    res: Response<APIResponse<GetVipTierBenefitResponse[]>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetVipTierBenefitResponse[]>();
      const vipResponse = await this._vipService.getVipTierBenefits(
        req.params.vipTierId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = vipResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async getVipTierBenefit(
    req: CustomRequest<
      VipTierBenefitId,
      GetVipTierBenefitResponse,
      IEmptyObject
    >,
    res: Response<APIResponse<GetVipTierBenefitResponse>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<GetVipTierBenefitResponse>();
      const vipResponse = await this._vipService.getVipTierBenefit(
        req.params.vipTierBenefitId
      );
      response.status = StatusCodes.OK;
      response.message = constants.API_RESPONSE.SUCCESS;
      response.body = vipResponse;
      res.status(StatusCodes.OK).send(response);
    } catch (error) {
      if (error instanceof Error) {
        next(new ExpressError(StatusCodes.BAD_REQUEST, error.message));
      } else {
        next(error);
      }
    }
  }

  public async insertVipTierBenefit(
    req: CustomRequest<IEmptyObject, IEmptyObject, InsertVipTierBenefitRequest>,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const insertVipTierBenefitRequestDTO = new InsertVipTierBenefitRequestDTO(
        req.body
      );
      await this._vipService.insertVipTierBenefit(
        insertVipTierBenefitRequestDTO
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

  public async updateVipTierBenefit(
    req: CustomRequest<
      VipTierBenefitId,
      IEmptyObject,
      UpdateVipTierBenefitRequest
    >,
    res: Response<APIResponse<IEmptyObject>>,
    next: NextFunction
  ): Promise<void> {
    try {
      const response = new APIResponse<IEmptyObject>();
      const updateVipTierBenefitRequestDTO = new UpdateVipTierBenefitRequestDTO(
        req.body,
        req.params.vipTierBenefitId
      );
      await this._vipService.updateVipTierBenefit(
        updateVipTierBenefitRequestDTO
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
