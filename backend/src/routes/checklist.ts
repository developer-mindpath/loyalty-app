import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import {
  ChecklistActionId,
  ChecklistCategoryId,
  ChecklistDetailId,
  ChecklistId,
} from "../types/request/params";
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
import { InsertChecklistDetailRequest } from "../types/request/checklist/insertChecklistDetailRequest";
import { GetChecklistDetailResponse } from "../types/response/checklist/getChecklistDetailResponse";
import { UpdateChecklistDetailRequest } from "../types/request/checklist/updateChecklistDetailRequest";
import { InsertChecklistActionRequest } from "../types/request/checklist/insertChecklistActionRequest";
import { GetChecklistActionResponse } from "../types/response/checklist/getChecklistActionResponse";
import { UpdateChecklistActionRequest } from "../types/request/checklist/updateChecklistActionRequest";
import { checkToken } from "../middleware/checkToken";

const checklistController = new ChecklistController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<Array<GetChecklistCategoryResponse>>,
  RequestBody,
  QueryParams
>("/category", checkToken, (...arg) =>
  checklistController.getChecklistCategory(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertChecklistCategoryRequest>,
  QueryParams
>("/category", checkToken, doValidation(checklistValidations[0]), (...arg) =>
  checklistController.insertChecklistCategory(...arg)
);

router.patch<
  PathParams<ChecklistCategoryId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateChecklistCategoryRequest>,
  QueryParams
>(
  "/category/:categoryId",
  checkToken,
  doValidation(checklistValidations[1]),
  (...arg) => checklistController.updateChecklistCategory(...arg)
);

router.get<
  PathParams<ChecklistCategoryId>,
  ResponseBody<Array<GetChecklistResponse>>,
  RequestBody,
  QueryParams
>("/:categoryId", checkToken, doValidation(checklistValidations[2]), (...arg) =>
  checklistController.getChecklist(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertChecklistRequest>,
  QueryParams
>("/", checkToken, doValidation(checklistValidations[3]), (...arg) =>
  checklistController.insertChecklist(...arg)
);

router.patch<
  PathParams<ChecklistId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateChecklistRequest>,
  QueryParams
>(
  "/:checklistId",
  checkToken,
  doValidation(checklistValidations[4]),
  (...arg) => checklistController.updateChecklist(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertChecklistDetailRequest>,
  QueryParams
>("/detail", checkToken, doValidation(checklistValidations[5]), (...arg) =>
  checklistController.insertChecklistDetail(...arg)
);

router.get<
  PathParams<ChecklistId>,
  ResponseBody<Array<GetChecklistDetailResponse>>,
  RequestBody,
  QueryParams
>(
  "/detail/:checklistId",
  checkToken,
  doValidation(checklistValidations[6]),
  (...arg) => checklistController.getChecklistDetail(...arg)
);

router.patch<
  PathParams<ChecklistDetailId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateChecklistDetailRequest>,
  QueryParams
>(
  "/detail/:checklistDetailId",
  checkToken,
  doValidation(checklistValidations[7]),
  (...arg) => checklistController.updateChecklistDetail(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertChecklistActionRequest>,
  QueryParams
>("/action", checkToken, doValidation(checklistValidations[8]), (...arg) =>
  checklistController.insertChecklistAction(...arg)
);

router.get<
  PathParams<ChecklistDetailId>,
  ResponseBody<Array<GetChecklistActionResponse>>,
  RequestBody,
  QueryParams
>(
  "/action/:checklistDetailId",
  checkToken,
  doValidation(checklistValidations[9]),
  (...arg) => checklistController.getChecklistAction(...arg)
);

router.patch<
  PathParams<ChecklistActionId>,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateChecklistActionRequest>,
  QueryParams
>(
  "/action/:checklistDetailId",
  checkToken,
  doValidation(checklistValidations[10]),
  (...arg) => checklistController.updateChecklistAction(...arg)
);

module.exports = { router, basePath: "/api/checklist" };
