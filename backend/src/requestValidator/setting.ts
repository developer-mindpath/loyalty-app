import Joi from "joi";
import {
  GetEmailSettingParams,
  GetOrderSettingParams,
  UpdateEmailSettingParams,
  UpdateOrderSettingParams,
} from "../types/request/params";
import { InsertEmailSettingRequest } from "../types/request/setting/insertEmailSettingRequest";
import { InsertOrderSettingRequest } from "../types/request/setting/insertOrderSettingRequest";
import { UpdateEmailSettingRequest } from "../types/request/setting/updateEmailSettingRequest";
import { UpdateOrderSettingRequest } from "../types/request/setting/updateOrderSettingRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";

export = {
  0: joiValidationRequest<GetEmailSettingParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  1: joiValidationRequest<UpdateEmailSettingParams, UpdateEmailSettingRequest>({
    path: {
      userId: Joi.number().required(),
    },
    body: {
      email_from_name: Joi.string().optional(),
      email_from_email: Joi.string().optional(),
      email_reply_email: Joi.string().optional(),
      custom_email_domain: Joi.string().optional(),
      custom_url_path_for_email: Joi.string().optional(),
      design_header_title_color: Joi.string().optional(),
      design_header_subtitle_color: Joi.string().optional(),
      design_btn_bg_color: Joi.string().optional(),
      design_btn_text_color: Joi.string().optional(),
      design_btn_sub_text_color: Joi.string().optional(),
      design_btn_radius: Joi.number().optional(),
      design_footer_text_color: Joi.string().optional(),
      design_footer_link_color: Joi.string().optional(),
      design_image: Joi.string().optional(),
      design_image_type: Joi.string().optional(),
      status: Joi.string().optional(),
      admin_ref: Joi.number().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  2: joiValidationRequest<IEmptyObject, InsertEmailSettingRequest>({
    body: {
      email_from_name: Joi.string().optional(),
      email_from_email: Joi.string().optional(),
      email_reply_email: Joi.string().optional(),
      custom_email_domain: Joi.string().optional(),
      custom_url_path_for_email: Joi.string().optional(),
      design_header_title_color: Joi.string().optional(),
      design_header_subtitle_color: Joi.string().optional(),
      design_btn_bg_color: Joi.string().optional(),
      design_btn_text_color: Joi.string().optional(),
      design_btn_sub_text_color: Joi.string().optional(),
      design_btn_radius: Joi.number().optional(),
      design_footer_text_color: Joi.string().optional(),
      design_footer_link_color: Joi.string().optional(),
      design_image: Joi.string().optional(),
      design_image_type: Joi.string().optional(),
      status: Joi.string().optional(),
      admin_ref: Joi.number().optional(),
      user_id: Joi.number().required(),
      created_by: Joi.number().optional(),
    },
  }),
  3: joiValidationRequest<GetOrderSettingParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  4: joiValidationRequest<UpdateOrderSettingParams, UpdateOrderSettingRequest>({
    path: {
      userId: Joi.number().required(),
    },
    body: {
      store_id: Joi.number().optional(),
      who_can_participate: Joi.string().optional(),
      orders_subtotal: Joi.number().optional(),
      orders_exclude_subtoken_discount: Joi.number().optional(),
      orders_include_tax: Joi.number().optional(),
      orders_include_shipping: Joi.number().optional(),
      points_cancelation_refunde: Joi.number().optional(),
      orders_include_partialy_refunded: Joi.number().optional(),
      orders_include_voided: Joi.number().optional(),
      reward_channel: Joi.string().optional(),
      status: Joi.string().optional(),
      admin_ref: Joi.number().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  5: joiValidationRequest<IEmptyObject, InsertOrderSettingRequest>({
    body: {
      store_id: Joi.number().optional(),
      who_can_participate: Joi.string().optional(),
      orders_subtotal: Joi.number().optional(),
      orders_exclude_subtoken_discount: Joi.number().optional(),
      orders_include_tax: Joi.number().optional(),
      orders_include_shipping: Joi.number().optional(),
      points_cancelation_refunde: Joi.number().optional(),
      orders_include_partialy_refunded: Joi.number().optional(),
      orders_include_voided: Joi.number().optional(),
      reward_channel: Joi.string().optional(),
      status: Joi.string().optional(),
      admin_ref: Joi.number().optional(),
      user_id: Joi.number().required(),
      created_by: Joi.number().optional(),
    },
  }),
};
