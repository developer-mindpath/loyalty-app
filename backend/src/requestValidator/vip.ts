import Joi from "joi";
import { InsertVipTierRequest } from "../types/request/vip/insertVipTierRequest";
import { UpdateVipTierRequest } from "../types/request/vip/updateVipTierRequest";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import {
  VipTierBenefitId,
  VipTierId,
  VipTierRewardId,
} from "../types/request/params";
import { InsertVipRequest } from "../types/request/vip/insertVipRequest";
import { UpdateVipRequest } from "../types/request/vip/updateVipRequest";
import { InsertVipTierRewardRequest } from "../types/request/vip/insertVipTierRewardRequest";
import { UpdateVipTierRewardRequest } from "../types/request/vip/updateVipTierRewardRequest";
import { InsertVipTierBenefitRequest } from "../types/request/vip/insertVipTierBenefitRequest";
import { UpdateVipTierBenefitRequest } from "../types/request/vip/updateVipTierBenefitRequest";

export = {
  1: joiValidationRequest<IEmptyObject, InsertVipRequest, IEmptyObject>({
    body: {
      is_enabled: Joi.number().optional(),
      start_date: Joi.string().optional(),
      entry_method: Joi.string().optional(),
      expiry: Joi.number().optional(),
      status: Joi.string().optional(),
    },
  }),
  2: joiValidationRequest<IEmptyObject, UpdateVipRequest, IEmptyObject>({
    body: {
      is_enabled: Joi.number().optional(),
      start_date: Joi.string().optional(),
      entry_method: Joi.string().optional(),
      expiry: Joi.number().optional(),
      status: Joi.string().optional(),
    },
  }),
  4: joiValidationRequest<IEmptyObject, InsertVipTierRequest, IEmptyObject>({
    body: {
      tier_key: Joi.string().optional(),
      tier_key_display_text: Joi.string().optional(),
      tier_key_icon: Joi.string().optional(),
      tier_key_description: Joi.string().optional(),
      goals_to_achieve_tier: Joi.number().optional(),
      status: Joi.string().optional(),
    },
  }),
  5: joiValidationRequest<VipTierId, UpdateVipTierRequest, IEmptyObject>({
    path: {
      vipTierId: Joi.number().required(),
    },
    body: {
      tier_key: Joi.string().optional(),
      tier_key_display_text: Joi.string().optional(),
      tier_key_icon: Joi.string().optional(),
      tier_key_description: Joi.string().optional(),
      goals_to_achieve_tier: Joi.number().optional(),
      status: Joi.string().optional(),
    },
  }),
  6: joiValidationRequest<VipTierId, IEmptyObject, IEmptyObject>({
    path: {
      vipTierId: Joi.number().required(),
    },
  }),
  7: joiValidationRequest<VipTierRewardId, IEmptyObject, IEmptyObject>({
    path: {
      vipTierRewardId: Joi.number().required(),
    },
  }),
  8: joiValidationRequest<
    IEmptyObject,
    InsertVipTierRewardRequest,
    IEmptyObject
  >({
    body: {
      vip_tier_id: Joi.number().optional(),
      point_redeemed_id: Joi.number().optional(),
      reward_key: Joi.string().optional(),
      reward_key_key_display_text: Joi.string().optional(),
      reward_icon: Joi.string().optional(),
      reward_description: Joi.string().optional(),
      is_reward_enabled: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
  9: joiValidationRequest<
    VipTierRewardId,
    UpdateVipTierRewardRequest,
    IEmptyObject
  >({
    path: {
      vipTierRewardId: Joi.number().required(),
    },
    body: {
      vip_tier_id: Joi.number().optional(),
      point_redeemed_id: Joi.number().optional(),
      reward_key: Joi.string().optional(),
      reward_key_key_display_text: Joi.string().optional(),
      reward_icon: Joi.string().optional(),
      reward_description: Joi.string().optional(),
      is_reward_enabled: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
  10: joiValidationRequest<VipTierId, IEmptyObject, IEmptyObject>({
    path: {
      vipTierId: Joi.number().required(),
    },
  }),
  11: joiValidationRequest<VipTierBenefitId, IEmptyObject, IEmptyObject>({
    path: {
      vipTierBenefitId: Joi.number().required(),
    },
  }),
  12: joiValidationRequest<
    IEmptyObject,
    InsertVipTierBenefitRequest,
    IEmptyObject
  >({
    body: {
      vip_tier_id: Joi.number().optional(),
      text: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
  13: joiValidationRequest<
    VipTierBenefitId,
    UpdateVipTierBenefitRequest,
    IEmptyObject
  >({
    path: {
      vipTierBenefitId: Joi.number().required(),
    },
    body: {
      text: Joi.string().optional(),
      status: Joi.string().optional(),
    },
  }),
  14: joiValidationRequest<VipTierId, IEmptyObject, IEmptyObject>({
    path: {
      vipTierId: Joi.number().required(),
    },
  }),
};
