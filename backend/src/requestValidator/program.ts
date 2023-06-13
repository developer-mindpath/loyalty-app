import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { InsertProgramStatusRequest } from "../types/request/program/insertProgramStatusRequest";
import { UpdateProgramStatusRequest } from "../types/request/program/updateProgramStatusRequest";

export = {
  0: joiValidationRequest<IEmptyObject, InsertProgramStatusRequest>({
    body: {
      is_point_program_enabled: Joi.number().optional(),
      is_referal_program_enabled: Joi.number().optional(),
      is_vip_program_enabled: Joi.number().optional(),
      reset_points_to_zero: Joi.number().optional(),
      time_period_to_reset_points_to_zero: Joi.number().optional(),
      status: Joi.string().optional(),
    },
  }),
  1: joiValidationRequest<IEmptyObject, UpdateProgramStatusRequest>({
    body: {
      is_point_program_enabled: Joi.number().optional(),
      is_referal_program_enabled: Joi.number().optional(),
      is_vip_program_enabled: Joi.number().optional(),
      reset_points_to_zero: Joi.number().optional(),
      time_period_to_reset_points_to_zero: Joi.number().optional(),
      status: Joi.string().optional(),
    },
  }),
};
