import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { ChecklistCategoryId, ChecklistId } from "../types/request/params";
import { doValidation } from "../helper/joi";
import checklistValidations from "../requestValidator/checklist";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { GetChecklistCategoryResponse } from "../types/response/checklist/getChecklistCategoryResponse";
import { InsertChecklistCategoryRequest } from "../types/request/checklist/insertChecklistCategoryRequest";
import { UpdateChecklistCategoryRequest } from "../types/request/checklist/updateChecklistCategoryRequest";
import ChecklistController from "../controller/checklistController";
import { GetChecklistResponse } from "../types/response/checklist/getChecklistResponse";
import { InsertChecklistRequest } from "../types/request/checklist/insertChecklistRequest";
import { UpdateChecklistRequest } from "../types/request/checklist/updateChecklistRequest";

const checklistController = new ChecklistController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<Array<GetChecklistCategoryResponse>>,
  RequestBody,
  QueryParams
>("/category", (...arg) => checklistController.getChecklistCategory(...arg));

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertChecklistCategoryRequest>,
  QueryParams
>("/category", doValidation(checklistValidations[0]), (...arg) =>
  checklistController.insertChecklistCategory(...arg)
);

router.patch<
  PathParams<ChecklistCategoryId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateChecklistCategoryRequest>,
  QueryParams
>("/category/:categoryId", doValidation(checklistValidations[1]), (...arg) =>
  checklistController.updateChecklistCategory(...arg)
);

router.get<
  PathParams<ChecklistCategoryId>,
  ResponseBody<Array<GetChecklistResponse>>,
  RequestBody,
  QueryParams
>("/:categoryId", doValidation(checklistValidations[2]), (...arg) =>
  checklistController.getChecklist(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertChecklistRequest>,
  QueryParams
>("/", doValidation(checklistValidations[3]), (...arg) =>
  checklistController.insertChecklist(...arg)
);

router.patch<
  PathParams<ChecklistId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateChecklistRequest>,
  QueryParams
>("/:checklistId", doValidation(checklistValidations[4]), (...arg) =>
  checklistController.updateChecklist(...arg)
);

module.exports = { router, basePath: "/api/checklist" };
