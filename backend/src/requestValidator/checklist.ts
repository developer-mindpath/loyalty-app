import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import { ChecklistCategoryId, ChecklistId } from "../types/request/params";
import { InsertChecklistCategoryRequest } from "../types/request/checklist/insertChecklistCategoryRequest";
import { UpdateChecklistCategoryRequest } from "../types/request/checklist/updateChecklistCategoryRequest";
import { InsertChecklistRequest } from "../types/request/checklist/insertChecklistRequest";
import { UpdateChecklistRequest } from "../types/request/checklist/updateChecklistRequest";

export = {
  0: joiValidationRequest<
    IEmptyObject,
    InsertChecklistCategoryRequest,
    IEmptyObject
  >({
    body: {
      title: Joi.string().optional(),
      status: Joi.string().optional(),
      created_by: Joi.number().optional(),
      admin_ref: Joi.number().optional(),
    },
  }),
  1: joiValidationRequest<
    ChecklistCategoryId,
    UpdateChecklistCategoryRequest,
    IEmptyObject
  >({
    path: {
      categoryId: Joi.number().required(),
    },
    body: {
      title: Joi.string().optional(),
      status: Joi.string().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  2: joiValidationRequest<ChecklistCategoryId, IEmptyObject, IEmptyObject>({
    path: {
      categoryId: Joi.number().required(),
    },
  }),
  3: joiValidationRequest<IEmptyObject, InsertChecklistRequest, IEmptyObject>({
    body: {
      checklist_category_id: Joi.number().optional(),
      checklist_title: Joi.string().optional(),
      checklist_icon: Joi.string().optional(),
      action_duration: Joi.number().optional(),
      status: Joi.string().optional(),
      created_by: Joi.number().optional(),
      admin_ref: Joi.number().optional(),
    },
  }),
  4: joiValidationRequest<ChecklistId, UpdateChecklistRequest, IEmptyObject>({
    path: {
      checklistId: Joi.number().required(),
    },
    body: {
      checklist_title: Joi.string().optional(),
      checklist_icon: Joi.string().optional(),
      action_duration: Joi.number().optional(),
      status: Joi.string().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
};
