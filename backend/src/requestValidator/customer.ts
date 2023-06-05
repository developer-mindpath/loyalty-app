import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { GetCustomerParams, Pagination } from "../types/request/params";

export = {
  0: joiValidationRequest<GetCustomerParams, IEmptyObject, Pagination>({
    path: {
      userId: Joi.number().required(),
    },
    query: {
      limit: Joi.number().allow("").allow(null).optional(),
      page: Joi.number().allow("").allow(null).optional(),
    },
  }),
};
