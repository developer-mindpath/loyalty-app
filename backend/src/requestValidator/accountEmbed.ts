import Joi from "joi";
import { InsertAccountEmbedRequest } from "../types/request/accountEmbed/insertAccountEmbedRequest";
import { UpdateAccountEmbedRequest } from "../types/request/accountEmbed/updateAccountEmbedRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import {
  GetAccountEmbedParams,
  UpdateAccountEmbedParams,
} from "../types/request/params";

export = {
  0: joiValidationRequest<GetAccountEmbedParams, IEmptyObject, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  1: joiValidationRequest<
    IEmptyObject,
    InsertAccountEmbedRequest,
    IEmptyObject
  >({
    body: {
      is_show_lpr_page: Joi.string().optional(),
      lpr_page_title: Joi.string().optional(),
      available_points: Joi.string().optional(),
      view_my_reward_page: Joi.string().optional(),
      redirect_path: Joi.string().optional(),
      freeform_text: Joi.string().optional(),
      custome_css: Joi.string().optional(),
      widget_selecter: Joi.string().optional(),
      widget_position: Joi.string().optional(),
      widget_page_appear: Joi.string().optional(),
      status: Joi.string().optional(),
      created_by: Joi.number().optional(),
      user_id: Joi.number().optional(),
      admin_ref: Joi.number().optional(),
    },
  }),
  2: joiValidationRequest<
    UpdateAccountEmbedParams,
    UpdateAccountEmbedRequest,
    IEmptyObject
  >({
    path: {
      userId: Joi.number().required(),
    },
    body: {
      is_show_lpr_page: Joi.string().optional(),
      lpr_page_title: Joi.string().optional(),
      available_points: Joi.string().optional(),
      view_my_reward_page: Joi.string().optional(),
      redirect_path: Joi.string().optional(),
      freeform_text: Joi.string().optional(),
      custome_css: Joi.string().optional(),
      widget_selecter: Joi.string().optional(),
      widget_position: Joi.string().optional(),
      widget_page_appear: Joi.string().optional(),
      status: Joi.string().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
};
