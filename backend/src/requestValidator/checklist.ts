import Joi from "joi";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { joiValidationRequest } from "../helper/joi";
import {
  ChecklistActionId,
  ChecklistCategoryId,
  ChecklistDetailId,
  ChecklistId,
} from "../types/request/params";
import { InsertChecklistCategoryRequest } from "../types/request/checklist/insertChecklistCategoryRequest";
import { UpdateChecklistCategoryRequest } from "../types/request/checklist/updateChecklistCategoryRequest";
import { InsertChecklistRequest } from "../types/request/checklist/insertChecklistRequest";
import { UpdateChecklistRequest } from "../types/request/checklist/updateChecklistRequest";
import { InsertChecklistDetailRequest } from "../types/request/checklist/insertChecklistDetailRequest";
import { UpdateChecklistDetailRequest } from "../types/request/checklist/updateChecklistDetailRequest";
import { InsertChecklistActionRequest } from "../types/request/checklist/insertChecklistActionRequest";
import { UpdateChecklistActionRequest } from "../types/request/checklist/updateChecklistActionRequest";

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
  5: joiValidationRequest<
    IEmptyObject,
    InsertChecklistDetailRequest,
    IEmptyObject
  >({
    body: {
      checklist_id: Joi.number().optional(),
      checklist_detail_title: Joi.string().optional(),
      html_body: Joi.string().optional(),
      order_inde: Joi.number().optional(),
      status: Joi.string().optional(),
      created_by: Joi.number().optional(),
      admin_ref: Joi.number().optional(),
    },
  }),
  6: joiValidationRequest<ChecklistId, IEmptyObject, IEmptyObject>({
    path: {
      checklistId: Joi.number().required(),
    },
  }),
  7: joiValidationRequest<
    ChecklistDetailId,
    UpdateChecklistDetailRequest,
    IEmptyObject
  >({
    path: {
      checklistDetailId: Joi.number().required(),
    },
    body: {
      checklist_detail_title: Joi.string().optional(),
      html_body: Joi.string().optional(),
      order_inde: Joi.number().optional(),
      status: Joi.string().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
  8: joiValidationRequest<
    IEmptyObject,
    InsertChecklistActionRequest,
    IEmptyObject
  >({
    body: {
      checklist_detail_id: Joi.number().optional(),
      status: Joi.string().optional(),
      created_by: Joi.number().optional(),
      admin_ref: Joi.number().optional(),
      user_id: Joi.number().optional(),
    },
  }),
  9: joiValidationRequest<ChecklistDetailId, IEmptyObject, IEmptyObject>({
    path: {
      checklistDetailId: Joi.number().required(),
    },
  }),
  10: joiValidationRequest<
    ChecklistActionId,
    UpdateChecklistActionRequest,
    IEmptyObject
  >({
    path: {
      checklistActionId: Joi.number().required(),
    },
    body: {
      status: Joi.string().optional(),
      updated_by: Joi.number().optional(),
    },
  }),
};
