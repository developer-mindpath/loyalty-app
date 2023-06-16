import Joi from "joi";
import { InsertAccountEmbedRequest } from "../types/request/accountEmbed/insertAccountEmbedRequest";
import { UpdateAccountEmbedRequest } from "../types/request/accountEmbed/updateAccountEmbedRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { InsertAppRequest } from "src/types/request/app/insertAppRequest";
import { UpdateAppRequest } from "src/types/request/app/updateAppRequest";

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
