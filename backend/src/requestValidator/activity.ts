import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { Pagination } from "../types/request/params";

export = {
  0: joiValidationRequest<IEmptyObject, IEmptyObject, Pagination>({
    query: {
      limit: Joi.number().allow("").allow(null).optional(),
      page: Joi.number().allow("").allow(null).optional(),
    },
  }),
  1: joiValidationRequest<IEmptyObject, IEmptyObject, Pagination>({
    query: {
      limit: Joi.number().allow("").allow(null).optional(),
      page: Joi.number().allow("").allow(null).optional(),
    },
  }),
  2: joiValidationRequest<IEmptyObject, IEmptyObject, Pagination>({
    query: {
      limit: Joi.number().allow("").allow(null).optional(),
      page: Joi.number().allow("").allow(null).optional(),
    },
  }),
};
