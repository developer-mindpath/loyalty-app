import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { InsertAppRequest } from "../types/request/app/insertAppRequest";
import { UpdateAppRequest } from "../types/request/app/updateAppRequest";

export = {
  0: joiValidationRequest<IEmptyObject, InsertAppRequest, IEmptyObject>({
    body: {
      app_title: Joi.string().optional(),
      app_description: Joi.string().optional(),
      app_url: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
  1: joiValidationRequest<IEmptyObject, UpdateAppRequest, IEmptyObject>({
    body: {
      app_title: Joi.string().optional(),
      app_description: Joi.string().optional(),
      app_url: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
};
