import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { InsertPlanRequest } from "../types/request/plan/insertPlanRequest";
import { UpdatePlanRequest } from "../types/request/plan/updatePlanRequest";
import { PlanFeatureId, PlanId } from "../types/request/params";
import { InsertPlanFeatureRequest } from "../types/request/plan/insertPlanFeatureRequest";
import { UpdatePlanFeatureRequest } from "../types/request/plan/updatePlanFeatureRequest";
import { InsertPlanFeatureAssignRequest } from "../types/request/plan/insertPlanFeatureAssignRequest";

export = {
  0: joiValidationRequest<IEmptyObject, InsertPlanRequest, IEmptyObject>({
    body: {
      plan_title: Joi.string().optional(),
      plan_description: Joi.string().optional(),
      monthly_orders: Joi.number().optional(),
      monthly_old_price: Joi.string().optional(),
      montly_current_price: Joi.string().optional(),
      is_recommended: Joi.number().optional(),
      status: Joi.string().optional(),
    },
  }),
  1: joiValidationRequest<PlanId, UpdatePlanRequest, IEmptyObject>({
    path: {
      planId: Joi.number().required(),
    },
    body: {
      plan_title: Joi.string().optional(),
      plan_description: Joi.string().optional(),
      monthly_orders: Joi.number().optional(),
      monthly_old_price: Joi.string().optional(),
      montly_current_price: Joi.string().optional(),
      is_recommended: Joi.number().optional(),
      status: Joi.string().optional(),
    },
  }),
  2: joiValidationRequest<IEmptyObject, InsertPlanFeatureRequest, IEmptyObject>(
    {
      body: {
        feature_title: Joi.string().optional(),
        feature_description: Joi.string().optional(),
        feature_icon: Joi.number().optional(),
        status: Joi.string().optional(),
      },
    }
  ),
  3: joiValidationRequest<
    PlanFeatureId,
    UpdatePlanFeatureRequest,
    IEmptyObject
  >({
    path: {
      planFeatureId: Joi.number().required(),
    },
    body: {
      feature_title: Joi.string().optional(),
      feature_description: Joi.string().optional(),
      feature_icon: Joi.number().optional(),
      status: Joi.string().optional(),
    },
  }),
  4: joiValidationRequest<
    IEmptyObject,
    InsertPlanFeatureAssignRequest,
    IEmptyObject
  >({
    body: {
      plan_id: Joi.number().required(),
      plan_feature_id: Joi.number().required(),
      status: Joi.string().optional(),
    },
  }),
};
