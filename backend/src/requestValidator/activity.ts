import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import {
  GetLoyaltyProgramActivityParams,
  GetReferralProgramActivityParams,
  GetVipProgramActivityParams,
  Pagination,
} from "../types/request/params";

export = {
  0: joiValidationRequest<
    GetLoyaltyProgramActivityParams,
    IEmptyObject,
    Pagination
  >({
    path: {
      userId: Joi.number().required(),
    },
    query: {
      limit: Joi.number().allow("").allow(null).optional(),
      page: Joi.number().allow("").allow(null).optional(),
    },
  }),
  1: joiValidationRequest<
    GetReferralProgramActivityParams,
    IEmptyObject,
    Pagination
  >({
    path: {
      userId: Joi.number().required(),
    },
    query: {
      limit: Joi.number().allow("").allow(null).optional(),
      page: Joi.number().allow("").allow(null).optional(),
    },
  }),
  2: joiValidationRequest<
    GetVipProgramActivityParams,
    IEmptyObject,
    Pagination
  >({
    path: {
      userId: Joi.number().required(),
    },
    query: {
      limit: Joi.number().allow("").allow(null).optional(),
      page: Joi.number().allow("").allow(null).optional(),
    },
  }),
};
