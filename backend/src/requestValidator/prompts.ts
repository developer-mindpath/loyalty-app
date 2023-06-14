import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { InsertPromptsRequest } from "../types/request/prompts/insertPromptsRequest";
import { UpdatePromptsRequest } from "../types/request/prompts/updatePromptsRequest";

export = {
  0: joiValidationRequest<IEmptyObject, InsertPromptsRequest, IEmptyObject>({
    body: {
      popups_title: Joi.string().optional(),
      popups_view: Joi.number().optional(),
      popups_click: Joi.number().optional(),
      popups_button: Joi.number().optional(),
      status: Joi.string().optional(),
    },
  }),
  1: joiValidationRequest<IEmptyObject, UpdatePromptsRequest, IEmptyObject>({
    body: {
      popups_title: Joi.string().optional(),
      popups_view: Joi.number().optional(),
      popups_click: Joi.number().optional(),
      popups_button: Joi.number().optional(),
      status: Joi.string().optional(),
    },
  }),
};
