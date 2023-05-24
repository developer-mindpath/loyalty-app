import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { GetLoyaltyProgramActivityParams } from "../types/request/params";

export = {
  0: joiValidationRequest<GetLoyaltyProgramActivityParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
};
