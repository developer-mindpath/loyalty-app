import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { TLoginRequest } from "../types/request/loginRequest";

export = {
  0: joiValidationRequest<IEmptyObject, TLoginRequest>({
    body: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  }),
};
