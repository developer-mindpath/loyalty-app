import Joi from "joi";
import { PointInsertRequest } from "../types/request/point/pointInsertRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import {
  PointActionId,
  PointRedeemDetailId,
  PointRedeemId,
  UpdateEarnDetailParams,
} from "../types/request/params";
import { UpdatePointEarnDetailRequest } from "../types/request/point/updatePointEarnDetailRequest";
import { InsertPointRedeemRequest } from "../types/request/point/insertPointRedeemRequest";
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
      app_id: Joi.number().optional(),
      points_amounts: Joi.string().optional(),
      limit_count: Joi.number().optional(),
      limit_count_type: Joi.string().optional(),
      url_to_share: Joi.string().optional(),
      earning_method: Joi.string().optional(),
      status: Joi.string().optional(),
      limit_count_enabled: Joi.number().optional(),
    },
  }),
  2: joiValidationRequest<PointActionId, IEmptyObject>({
    path: {
      pointId: Joi.number().required(),
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
    },
  }),
  9: joiValidationRequest<PointRedeemId, IEmptyObject>({
    path: {
      pointRedeemId: Joi.number().required(),
    },
  }),
  10: joiValidationRequest<PointRedeemDetailId, UpdatePointRedeemDetailRequest>(
    {
      path: {
        pointRedeemDetailId: Joi.number().required(),
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
      },
    }
  ),
  11: joiValidationRequest<PointRedeemDetailId, IEmptyObject>({
    path: {
      pointRedeemDetailId: Joi.number().required(),
    },
  }),
};
