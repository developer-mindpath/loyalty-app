import Joi from "joi";
import { PointInsertRequest } from "../types/request/point/pointInsertRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import {
  DeleteRedeemPointDetailParams,
  GetEarnDetailParams,
  GetEarnPointsByUsingUserIdParams,
  GetRedeemPointDetailParams,
  GetRedeemPointsParams,
  UpdateEarnDetailParams,
  UpdateRedeemPointDetailParams,
  UpdateRedeemPointsParams,
} from "../types/request/params";
import { InsertPointEarnDetailRequest } from "../types/request/point/insertPointEarnDetailRequest";
import { UpdatePointEarnDetailRequest } from "../types/request/point/updatePointEarnDetailRequest";
import { InsertPointRedeemRequest } from "../types/request/point/insertPointRedeemRequest";
import { UpdatePointRedeemRequest } from "../types/request/point/updatePointRedeemRequest";
import { InsertPointRedeemDetailRequest } from "../types/request/point/insertPointRedeemDetailRequest";
import { UpdatePointRedeemDetailRequest } from "../types/request/point/updatePointRedeemDetailRequest";

export = {
  0: joiValidationRequest<IEmptyObject, PointInsertRequest>({
    body: {
      action_key: Joi.string().optional(),
      action_key_display_text: Joi.string().optional(),
      action_visible_order: Joi.number().optional(),
      action_icon: Joi.string().optional(),
      action_description: Joi.string().optional(),
      is_action_enabled: Joi.number().optional(),
      status: Joi.string().optional(),
      user_id: Joi.number().required(),
      admin_ref: Joi.number().optional(),
      created_by: Joi.number().optional(),
    },
  }),
  1: joiValidationRequest<GetEarnPointsByUsingUserIdParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  2: joiValidationRequest<GetEarnDetailParams, IEmptyObject>({
    path: {
      pointId: Joi.number().required(),
    },
  }),
  3: joiValidationRequest<IEmptyObject, InsertPointEarnDetailRequest>({
    body: {
      point_action_id: Joi.number().optional(),
      app_id: Joi.number().optional(),
      points_amounts: Joi.string().optional(),
      limit_count: Joi.number().optional(),
      limit_count_type: Joi.string().optional(),
      url_to_share: Joi.string().optional(),
      earning_method: Joi.string().optional(),
      status: Joi.string().optional(),
      limit_count_enabled: Joi.number().optional(),
      admin_ref: Joi.number().optional(),
      created_by: Joi.number().optional(),
      user_id: Joi.number().required(),
    },
  }),
  4: joiValidationRequest<UpdateEarnDetailParams, UpdatePointEarnDetailRequest>(
    {
      path: {
        pointId: Joi.number().required(),
      },
      body: {
        app_id: Joi.number().optional(),
        points_amounts: Joi.string().optional(),
        limit_count: Joi.number().optional(),
        limit_count_type: Joi.string().optional(),
        url_to_share: Joi.string().optional(),
        earning_method: Joi.string().optional(),
        status: Joi.string().optional(),
        limit_count_enabled: Joi.number().optional(),
        admin_ref: Joi.number().optional(),
        updated_by: Joi.number().optional(),
      },
    }
  ),
  5: joiValidationRequest<IEmptyObject, InsertPointRedeemRequest>({
    body: {
      reward_key: Joi.string().optional(),
      reward_key_key_display_text: Joi.string().optional(),
      reward_icon: Joi.string().optional(),
      reward_description: Joi.string().optional(),
      is_reward_enabled: Joi.number().optional(),
      status: Joi.string().optional(),
      user_id: Joi.number().required(),
      admin_ref: Joi.number().optional(),
      created_by: Joi.number().optional(),
    },
  }),
  6: joiValidationRequest<GetRedeemPointsParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
    },
  }),
  7: joiValidationRequest<UpdateRedeemPointsParams, UpdatePointRedeemRequest>({
    path: {
      pointRedeemId: Joi.number().required(),
      userId: Joi.number().required(),
    },
    body: {
      reward_key: Joi.string().optional(),
      reward_key_key_display_text: Joi.string().optional(),
      reward_icon: Joi.string().optional(),
      reward_description: Joi.string().optional(),
      is_reward_enabled: Joi.number().optional(),
      status: Joi.string().optional(),
      admin_ref: Joi.number().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  8: joiValidationRequest<IEmptyObject, InsertPointRedeemDetailRequest>({
    body: {
      point_redeem_id: Joi.number().optional(),
      points_type: Joi.string().optional(),
      fixed_points_amount: Joi.string().optional(),
      fixed_points_discount: Joi.string().optional(),
      fixed_points_discount_type: Joi.string().optional(),
      apply_to_maximum_shipping_amount: Joi.string().optional(),
      incremented_points_amount: Joi.string().optional(),
      incremented_points_money_customer_received: Joi.string().optional(),
      incremented_points_is_set_minimum_points: Joi.number().optional(),
      incremented_points_is_set_maximum_points: Joi.number().optional(),
      incremented_points_minimum_points: Joi.number().optional(),
      incremented_points_maximum_points: Joi.number().optional(),
      is_minimum_cart_requirement: Joi.number().optional(),
      minimum_cart_value: Joi.number().optional(),
      apply_to: Joi.string().optional(),
      collection_id: Joi.number().optional(),
      purchase_type: Joi.string().optional(),
      reward_expiry: Joi.number().optional(),
      products: Joi.string().optional(),
      status: Joi.string().optional(),
      user_id: Joi.number().required(),
      admin_ref: Joi.number().optional(),
      created_by: Joi.number().optional(),
    },
  }),
  9: joiValidationRequest<GetRedeemPointDetailParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
      pointRedeemId: Joi.number().required(),
    },
  }),
  10: joiValidationRequest<
    UpdateRedeemPointDetailParams,
    UpdatePointRedeemDetailRequest
  >({
    path: {
      pointRedeemId: Joi.number().required(),
      userId: Joi.number().required(),
    },
    body: {
      points_type: Joi.string().optional(),
      fixed_points_amount: Joi.string().optional(),
      fixed_points_discount: Joi.string().optional(),
      fixed_points_discount_type: Joi.string().optional(),
      apply_to_maximum_shipping_amount: Joi.string().optional(),
      incremented_points_amount: Joi.string().optional(),
      incremented_points_money_customer_received: Joi.string().optional(),
      incremented_points_is_set_minimum_points: Joi.number().optional(),
      incremented_points_is_set_maximum_points: Joi.number().optional(),
      incremented_points_minimum_points: Joi.number().optional(),
      incremented_points_maximum_points: Joi.number().optional(),
      is_minimum_cart_requirement: Joi.number().optional(),
      minimum_cart_value: Joi.number().optional(),
      apply_to: Joi.string().optional(),
      collection_id: Joi.number().optional(),
      purchase_type: Joi.string().optional(),
      reward_expiry: Joi.number().optional(),
      products: Joi.string().optional(),
      status: Joi.string().optional(),
      admin_ref: Joi.number().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  11: joiValidationRequest<DeleteRedeemPointDetailParams, IEmptyObject>({
    path: {
      userId: Joi.number().required(),
      pointRedeemId: Joi.number().required(),
    },
  }),
};
