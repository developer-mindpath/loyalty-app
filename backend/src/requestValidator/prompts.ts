import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { GetPromptsParams, UpdatePromptsParams } from "../types/request/params";
import { InsertPromptsRequest } from "../types/request/prompts/insertPromptsRequest";
import { UpdatePromptsRequest } from "../types/request/prompts/updatePromptsRequest";

export = {
  0: joiValidationRequest<GetPromptsParams, IEmptyObject, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  1: joiValidationRequest<IEmptyObject, InsertPromptsRequest, IEmptyObject>({
    body: {
      popups_title: Joi.string().optional(),
      popups_view: Joi.number().optional(),
      popups_click: Joi.number().optional(),
      popups_button: Joi.number().optional(),
      status: Joi.string().optional(),
      created_by: Joi.number().optional(),
      user_id: Joi.number().required(),
      admin_ref: Joi.number().optional(),
    },
  }),
  2: joiValidationRequest<
    UpdatePromptsParams,
    UpdatePromptsRequest,
    IEmptyObject
  >({
    path: {
      userId: Joi.number().required(),
    },
    body: {
      popups_title: Joi.string().optional(),
      popups_view: Joi.number().optional(),
      popups_click: Joi.number().optional(),
      popups_button: Joi.number().optional(),
      status: Joi.string().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
};
