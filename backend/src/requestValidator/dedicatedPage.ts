import Joi from "joi";
import { InsertDedicatedPageBannerRequest } from "../types/request/dedicatedPage/insertDedicatedPageBannerRequest";
import { InsertDedicatedPageExplainerRequest } from "../types/request/dedicatedPage/insertDedicatedPageExplainerRequest";
import { InsertDedicatedPageReferralRequest } from "../types/request/dedicatedPage/insertDedicatedPageReferralRequest";
import { InsertDedicatedPageWayToEarnRequest } from "../types/request/dedicatedPage/insertDedicatedPageWayToEarnRequest";
import { UpdateDedicatedPageBannerRequest } from "../types/request/dedicatedPage/updateDedicatedPageBannerRequest";
import { UpdateDedicatedPageExplainerRequest } from "../types/request/dedicatedPage/updateDedicatedPageExplainerRequest";
import { UpdateDedicatedPageReferralRequest } from "../types/request/dedicatedPage/updateDedicatedPageReferralRequest";
import { UpdateDedicatedPageRequest } from "../types/request/dedicatedPage/updateDedicatedPageRequest";
import { UpdateDedicatedPageWayToEarnRequest } from "../types/request/dedicatedPage/updateDedicatedPageWayToEarnRequest";
import {
  GetDedicatedPageBannerParams,
  GetDedicatedPageExplainerParams,
  GetDedicatedPageParams,
  GetDedicatedPageReferralParams,
  GetDedicatedPageWayToEarnParams,
  UpdateDedicatedPageBannerParams,
  UpdateDedicatedPageExplainerParams,
  UpdateDedicatedPageParams,
  UpdateDedicatedPageReferralParams,
  UpdateDedicatedPageWayToEarnParams,
} from "../types/request/params";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { InsertDedicatedPageRequest } from "../types/request/dedicatedPage/insertDedicatedPageRequest";

export = {
  0: joiValidationRequest<IEmptyObject, InsertDedicatedPageRequest>({
    body: {
      is_dedicated_page_on: Joi.string().optional(),
      general_settings_primary_font: Joi.string().optional(),
      general_settings_secondry_font: Joi.number().optional(),
      general_settings_full_width: Joi.string().optional(),
      general_settings_model_offset: Joi.string().optional(),
      general_settings_custome_css: Joi.string().optional(),
      status: Joi.string().optional(),
      user_id: Joi.number().required(),
      admin_ref: Joi.number().optional(),
      created_by: Joi.number().optional(),
    },
  }),
  1: joiValidationRequest<GetDedicatedPageParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  2: joiValidationRequest<
    UpdateDedicatedPageParams,
    UpdateDedicatedPageRequest
  >({
    path: {
      userId: Joi.number().required(),
    },
    body: {
      is_dedicated_page_on: Joi.string().optional(),
      general_settings_primary_font: Joi.string().optional(),
      general_settings_secondry_font: Joi.number().optional(),
      general_settings_full_width: Joi.string().optional(),
      general_settings_model_offset: Joi.string().optional(),
      general_settings_custome_css: Joi.string().optional(),
      status: Joi.string().optional(),
      admin_ref: Joi.number().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  3: joiValidationRequest<IEmptyObject, InsertDedicatedPageBannerRequest>({
    body: {
      general_banner_image: Joi.string().optional(),
      general_banner_fontsize: Joi.number().optional(),
      general_banner_font_color: Joi.string().optional(),
      general_banner_description_fontsize: Joi.number().optional(),
      general_banner_description_font_color: Joi.string().optional(),
      guest_logout_title_text: Joi.string().optional(),
      guest_logout_description_text: Joi.string().optional(),
      guest_register_button_text: Joi.string().optional(),
      guest_register_button_font_size: Joi.number().optional(),
      guest_register_button_font_color: Joi.string().optional(),
      guest_register_button_background_color: Joi.string().optional(),
      guest_login_button_text: Joi.string().optional(),
      guest_login_button_font_size: Joi.number().optional(),
      guest_login_button_font_color: Joi.string().optional(),
      guest_login_button_background_color: Joi.string().optional(),
      member_loggedIn_title_text: Joi.string().optional(),
      member_loggedIn_description_text: Joi.string().optional(),
      member_earn_button_text: Joi.string().optional(),
      member_earn_button_font_size: Joi.number().optional(),
      member_earn_button_font_color: Joi.string().optional(),
      member_earn_button_background_color: Joi.string().optional(),
      member_redeem_button_text: Joi.string().optional(),
      member_redeem_button_font_size: Joi.number().optional(),
      member_redeem_button_font_color: Joi.string().optional(),
      member_redeem_button_background_color: Joi.string().optional(),
      status: Joi.string().optional(),
      user_id: Joi.number().required(),
      admin_ref: Joi.number().optional(),
      created_by: Joi.number().optional(),
    },
  }),
  4: joiValidationRequest<GetDedicatedPageBannerParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  5: joiValidationRequest<
    UpdateDedicatedPageBannerParams,
    UpdateDedicatedPageBannerRequest
  >({
    path: {
      userId: Joi.number().required(),
    },
    body: {
      general_banner_image: Joi.string().optional(),
      general_banner_fontsize: Joi.number().optional(),
      general_banner_font_color: Joi.string().optional(),
      general_banner_description_fontsize: Joi.number().optional(),
      general_banner_description_font_color: Joi.string().optional(),
      guest_logout_title_text: Joi.string().optional(),
      guest_logout_description_text: Joi.string().optional(),
      guest_register_button_text: Joi.string().optional(),
      guest_register_button_font_size: Joi.number().optional(),
      guest_register_button_font_color: Joi.string().optional(),
      guest_register_button_background_color: Joi.string().optional(),
      guest_login_button_text: Joi.string().optional(),
      guest_login_button_font_size: Joi.number().optional(),
      guest_login_button_font_color: Joi.string().optional(),
      guest_login_button_background_color: Joi.string().optional(),
      member_loggedIn_title_text: Joi.string().optional(),
      member_loggedIn_description_text: Joi.string().optional(),
      member_earn_button_text: Joi.string().optional(),
      member_earn_button_font_size: Joi.number().optional(),
      member_earn_button_font_color: Joi.string().optional(),
      member_earn_button_background_color: Joi.string().optional(),
      member_redeem_button_text: Joi.string().optional(),
      member_redeem_button_font_size: Joi.number().optional(),
      member_redeem_button_font_color: Joi.string().optional(),
      member_redeem_button_background_color: Joi.string().optional(),
      status: Joi.string().optional(),
      admin_ref: Joi.number().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  6: joiValidationRequest<IEmptyObject, InsertDedicatedPageExplainerRequest>({
    body: {
      general_background_color: Joi.string().optional(),
      general_header_title_font_size: Joi.number().optional(),
      general_header_title_font_color: Joi.string().optional(),
      general_header_subtitle_font_size: Joi.number().optional(),
      general_header_subtitle_font_color: Joi.string().optional(),
      guest_header_text: Joi.string().optional(),
      guest_step_number_font_size: Joi.number().optional(),
      guest_step_number_font_color: Joi.string().optional(),
      guest_step_title_font_size: Joi.number().optional(),
      guest_step_title_font_color: Joi.string().optional(),
      guest_step_subtitle_font_size: Joi.number().optional(),
      guest_step_subtitle_font_color: Joi.string().optional(),
      guest_step_1_title_text: Joi.string().optional(),
      guest_step_1_subtitle_text: Joi.string().optional(),
      guest_step_2_title_text: Joi.string().optional(),
      guest_step_2_subtitle_text: Joi.string().optional(),
      guest_step_3_title_text: Joi.string().optional(),
      guest_step_3_subtitle_text: Joi.string().optional(),
      member_header_text: Joi.string().optional(),
      member_subtitle_text: Joi.string().optional(),
      member_activity_action_text: Joi.string().optional(),
      member_points_text: Joi.string().optional(),
      member_data_text: Joi.string().optional(),
      member_your_reward_title_text: Joi.string().optional(),
      member_reward_title_font_size: Joi.number().optional(),
      member_reward_title_font_color: Joi.string().optional(),
      member_no_reward_subtitle_text: Joi.string().optional(),
      member_has_reward_subtitle_text: Joi.string().optional(),
      member_reward_subtitle_font_size: Joi.string().optional(),
      member_reward_subtitle_font_color: Joi.string().optional(),
      status: Joi.string().optional(),
      created_by: Joi.number().optional(),
      user_id: Joi.number().required(),
      admin_ref: Joi.number().optional(),
    },
  }),
  7: joiValidationRequest<GetDedicatedPageExplainerParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  8: joiValidationRequest<
    UpdateDedicatedPageExplainerParams,
    UpdateDedicatedPageExplainerRequest
  >({
    path: {
      userId: Joi.number().required(),
    },
    body: {
      general_background_color: Joi.string().optional(),
      general_header_title_font_size: Joi.number().optional(),
      general_header_title_font_color: Joi.string().optional(),
      general_header_subtitle_font_size: Joi.number().optional(),
      general_header_subtitle_font_color: Joi.string().optional(),
      guest_header_text: Joi.string().optional(),
      guest_step_number_font_size: Joi.number().optional(),
      guest_step_number_font_color: Joi.string().optional(),
      guest_step_title_font_size: Joi.number().optional(),
      guest_step_title_font_color: Joi.string().optional(),
      guest_step_subtitle_font_size: Joi.number().optional(),
      guest_step_subtitle_font_color: Joi.string().optional(),
      guest_step_1_title_text: Joi.string().optional(),
      guest_step_1_subtitle_text: Joi.string().optional(),
      guest_step_2_title_text: Joi.string().optional(),
      guest_step_2_subtitle_text: Joi.string().optional(),
      guest_step_3_title_text: Joi.string().optional(),
      guest_step_3_subtitle_text: Joi.string().optional(),
      member_header_text: Joi.string().optional(),
      member_subtitle_text: Joi.string().optional(),
      member_activity_action_text: Joi.string().optional(),
      member_points_text: Joi.string().optional(),
      member_data_text: Joi.string().optional(),
      member_your_reward_title_text: Joi.string().optional(),
      member_reward_title_font_size: Joi.number().optional(),
      member_reward_title_font_color: Joi.string().optional(),
      member_no_reward_subtitle_text: Joi.string().optional(),
      member_has_reward_subtitle_text: Joi.string().optional(),
      member_reward_subtitle_font_size: Joi.string().optional(),
      member_reward_subtitle_font_color: Joi.string().optional(),
      status: Joi.string().optional(),
      updated_by: Joi.number().optional(),
      admin_ref: Joi.number().optional(),
    },
  }),
  9: joiValidationRequest<IEmptyObject, InsertDedicatedPageReferralRequest>({
    body: {
      general_background_color: Joi.string().optional(),
      general_title_text: Joi.string().optional(),
      general_subtitle_text: Joi.string().optional(),
      general_title_font_size: Joi.number().optional(),
      general_title_font_color: Joi.string().optional(),
      general_subtitle_font_size: Joi.number().optional(),
      general_subtitle_font_color: Joi.string().optional(),
      status: Joi.string().optional(),
      user_id: Joi.number().required(),
      admin_ref: Joi.number().optional(),
      created_by: Joi.number().optional(),
    },
  }),
  10: joiValidationRequest<GetDedicatedPageReferralParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  11: joiValidationRequest<
    UpdateDedicatedPageReferralParams,
    UpdateDedicatedPageReferralRequest
  >({
    path: {
      userId: Joi.number().required(),
    },
    body: {
      general_background_color: Joi.string().optional(),
      general_title_text: Joi.string().optional(),
      general_subtitle_text: Joi.string().optional(),
      general_title_font_size: Joi.number().optional(),
      general_title_font_color: Joi.string().optional(),
      general_subtitle_font_size: Joi.number().optional(),
      general_subtitle_font_color: Joi.string().optional(),
      status: Joi.string().optional(),
      admin_ref: Joi.number().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  12: joiValidationRequest<IEmptyObject, InsertDedicatedPageWayToEarnRequest>({
    body: {
      general_background_color: Joi.string().optional(),
      general_title_text: Joi.string().optional(),
      general_subtitle_text: Joi.string().optional(),
      general_title_font_size: Joi.number().optional(),
      general_title_font_color: Joi.string().optional(),
      general_subtitle_font_size: Joi.number().optional(),
      general_subtitle_font_color: Joi.string().optional(),
      status: Joi.string().optional(),
      user_id: Joi.number().required(),
      admin_ref: Joi.number().optional(),
      created_by: Joi.number().optional(),
    },
  }),
  13: joiValidationRequest<GetDedicatedPageWayToEarnParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  14: joiValidationRequest<
    UpdateDedicatedPageWayToEarnParams,
    UpdateDedicatedPageWayToEarnRequest
  >({
    path: {
      userId: Joi.number().required(),
    },
    body: {
      general_background_color: Joi.string().optional(),
      general_title_text: Joi.string().optional(),
      general_subtitle_text: Joi.string().optional(),
      general_title_font_size: Joi.number().optional(),
      general_title_font_color: Joi.string().optional(),
      general_subtitle_font_size: Joi.number().optional(),
      general_subtitle_font_color: Joi.string().optional(),
      status: Joi.string().optional(),
      admin_ref: Joi.number().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
};
