import express from "express";
import {
  PathParams,
  QueryParams,
  RequestBody,
  ResponseBody,
} from "../types/request/customRequest";
import { doValidation } from "../helper/joi";
import translationValidations from "../requestValidator/translation";
import { IEmptyObject } from "../helper/errorHandler/apiResponse";
import { checkToken } from "../middleware/checkToken";
import { GetTranslationResponse } from "../types/response/translation/getTranslationResponse";
import { InsertTranslationRequest } from "../types/request/translation/insertTranslationRequest";
import TranslationController from "../controller/translationController";
import { UpdateTranslationRequest } from "../types/request/translation/updateTranslationRequest";

const translationController = new TranslationController();
const router = express.Router();

router.get<
  PathParams,
  ResponseBody<GetTranslationResponse>,
  RequestBody,
  QueryParams
>("/setting", checkToken, (...arg) =>
  translationController.getTranslation(...arg)
);

router.post<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<InsertTranslationRequest>,
  QueryParams
>("/setting", checkToken, doValidation(translationValidations[0]), (...arg) =>
  translationController.insertTranslation(...arg)
);

router.patch<
  PathParams,
  ResponseBody<IEmptyObject>,
  RequestBody<UpdateTranslationRequest>,
  QueryParams
>(
  "/setting/:userId",
  checkToken,
  doValidation(translationValidations[1]),
  (...arg) => translationController.updateTranslation(...arg)
);

module.exports = { router, basePath: "/api/translation" };
