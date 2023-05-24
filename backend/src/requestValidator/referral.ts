import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { InsertReferralProgramRequest } from "../types/request/referral/insertReferralProgramRequest";
import {
  DeleteReferralProgramParams,
  GetReferralProgramParams,
  UpdateReferralProgramParams,
} from "../types/request/params";
import { UpdateReferralProgramRequest } from "../types/request/referral/updateReferralProgramRequest";

export = {
  0: joiValidationRequest<IEmptyObject, InsertReferralProgramRequest>({
    body: {
      referral_friend_title: Joi.string().optional(),
      referral_friend_discount: Joi.string().optional(),
      referral_friend_is_minimum_cart_requirement: Joi.number().optional(),
      referral_friend_minimum_cart_value: Joi.number().optional(),
      referral_friend_apply_to: Joi.string().optional(),
      referral_friend_collection_id: Joi.number().optional(),
      referral_friend_purchase_type: Joi.string().optional(),
      referral_friend_expiry: Joi.number().optional(),
      referral_friend_icon: Joi.string().optional(),
      referral_friend_is_enabeled: Joi.number().optional(),
      referral_customer_points_amount: Joi.string().optional(),
      referral_customer_limit_count: Joi.number().optional(),
      referral_customer_limit_count_type: Joi.string().optional(),
      referral_customer_is_enabeled: Joi.number().optional(),
      referral_customer_description: Joi.string().optional(),
      referral_customer_icon: Joi.string().optional(),
      redirect_url: Joi.string().optional(),
      is_allowed_twitter_share: Joi.number().optional(),
      is_allowed_what_share: Joi.number().optional(),
      is_allowed_email_share: Joi.number().optional(),
      is_allowed_facebook_share: Joi.number().optional(),
      referral_user_link: Joi.string().optional(),
      referral_offer_cookie_Day: Joi.number().optional(),
      referral_offer_nco: Joi.number().optional(),
      status: Joi.string().optional(),
      admin_ref: Joi.number().optional(),
      user_id: Joi.number().required(),
      created_by: Joi.number().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  1: joiValidationRequest<GetReferralProgramParams, IEmptyObject>({
    path: {
      referralId: Joi.number().required(),
      userId: Joi.number().required(),
    },
  }),
  2: joiValidationRequest<
    UpdateReferralProgramParams,
    UpdateReferralProgramRequest
  >({
    path: {
      referralId: Joi.number().required(),
    },
    body: {
      referral_friend_title: Joi.string().optional(),
      referral_friend_discount: Joi.string().optional(),
      referral_friend_is_minimum_cart_requirement: Joi.number().optional(),
      referral_friend_minimum_cart_value: Joi.number().optional(),
      referral_friend_apply_to: Joi.string().optional(),
      referral_friend_collection_id: Joi.number().optional(),
      referral_friend_purchase_type: Joi.string().optional(),
      referral_friend_expiry: Joi.number().optional(),
      referral_friend_icon: Joi.string().optional(),
      referral_friend_is_enabeled: Joi.number().optional(),
      referral_customer_points_amount: Joi.string().optional(),
      referral_customer_limit_count: Joi.number().optional(),
      referral_customer_limit_count_type: Joi.string().optional(),
      referral_customer_is_enabeled: Joi.number().optional(),
      referral_customer_description: Joi.string().optional(),
      referral_customer_icon: Joi.string().optional(),
      redirect_url: Joi.string().optional(),
      is_allowed_twitter_share: Joi.number().optional(),
      is_allowed_what_share: Joi.number().optional(),
      is_allowed_email_share: Joi.number().optional(),
      is_allowed_facebook_share: Joi.number().optional(),
      referral_user_link: Joi.string().optional(),
      referral_offer_cookie_Day: Joi.number().optional(),
      referral_offer_nco: Joi.number().optional(),
      status: Joi.string().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  3: joiValidationRequest<DeleteReferralProgramParams, IEmptyObject>({
    path: {
      referralId: Joi.number().required(),
    },
  }),
};
